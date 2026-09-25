import React, { useEffect, useRef, useMemo } from 'react';
import { useReducedMotion } from '../../hooks/useMousePosition';
import { useTheme } from '../../hooks/useTheme';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  isSquare: boolean;
  alpha: number;
  hasGlow: boolean;
}

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const prefersReduced = useReducedMotion();
  const { isDark } = useTheme();

  // Subtle ambient glowing orbs with deep electric blue tone
  const ambientNodes = useMemo(() => [
    { top: '10%', left: '20%', size: '520px', color: 'rgba(0, 163, 255, 0.055)', delay: '0s' },
    { top: '45%', right: '15%', size: '560px', color: 'rgba(37, 99, 235, 0.045)', delay: '2s' },
    { top: '75%', left: '25%', size: '500px', color: 'rgba(14, 165, 233, 0.04)', delay: '4s' },
  ], []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = window.innerWidth;
    let height = window.innerHeight;

    const setupCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    setupCanvas();

    const handleResize = () => {
      setupCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particle count: optimal 60fps balance
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 45 : 85;
    const maxDistance = isMobile ? 95 : 135;
    const mouseRadius = 150;

    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.5),
          vy: (Math.random() - 0.5) * (isMobile ? 0.35 : 0.5),
          size: Math.random() * 2.2 + 1.2,
          isSquare: Math.random() > 0.6, // authentic geometric constellation squares
          alpha: Math.random() * 0.45 + 0.55,
          hasGlow: Math.random() > 0.75, // prominent glowing beacon nodes
        });
      }
    };

    initParticles();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Electric blue constellation theme
      const nodeColor = isDark ? '#00A3FF' : '#0284C7';
      const lineColorRgb = isDark ? '0, 163, 255' : '2, 132, 199';

      // 1. Update positions and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReduced) {
          p.x += p.vx;
          p.y += p.vy;

          // Bounce off viewport boundaries smoothly
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          // Mouse gentle repel & interaction line
          if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
            const dx = mouseRef.current.x - p.x;
            const dy = mouseRef.current.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouseRadius) {
              const force = (mouseRadius - dist) / mouseRadius;
              p.x -= (dx / dist) * force * 0.8;
              p.y -= (dy / dist) * force * 0.8;

              // Glowing line towards cursor
              const mouseAlpha = (1 - dist / mouseRadius) * (isDark ? 0.45 : 0.3);
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
              ctx.strokeStyle = `rgba(${lineColorRgb}, ${mouseAlpha})`;
              ctx.lineWidth = 1.0;
              ctx.stroke();
            }
          }
        }

        // Draw particle node
        ctx.fillStyle = nodeColor;
        ctx.globalAlpha = p.alpha;

        if (p.hasGlow) {
          ctx.shadowBlur = isDark ? 8 : 4;
          ctx.shadowColor = `rgba(${lineColorRgb}, 0.8)`;
        } else {
          ctx.shadowBlur = 0;
        }

        if (p.isSquare) {
          ctx.fillRect(p.x - p.size, p.y - p.size, p.size * 2, p.size * 2);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        // 2. Connect nearby particles with constellation links
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * (isDark ? 0.32 : 0.18);
            ctx.shadowBlur = 0;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${lineColorRgb}, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      if (!prefersReduced) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isDark, prefersReduced]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Base Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-25 [mask-image:radial-gradient(ellipse_at_center,white_35%,transparent_85%)]" />

      {/* Interactive Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Atmospheric Ambient Glow Orbs */}
      {ambientNodes.map((node, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-[140px] pointer-events-none animate-pulse-subtle"
          style={{
            top: node.top,
            left: node.left,
            right: node.right,
            width: node.size,
            height: node.size,
            background: node.color,
            animationDelay: node.delay,
          }}
        />
      ))}
    </div>
  );
};
