import React, { useMemo } from 'react';
import { useMousePosition, useReducedMotion } from '../../hooks/useMousePosition';

export const InteractiveBackground: React.FC = () => {
  const { x, y } = useMousePosition();
  const prefersReduced = useReducedMotion();

  // Memoize stationary ambient glowing nodes
  const ambientNodes = useMemo(() => [
    { top: '15%', left: '10%', size: '360px', color: 'rgba(0, 240, 255, 0.04)', delay: '0s' },
    { top: '45%', right: '8%', size: '420px', color: 'rgba(59, 130, 246, 0.035)', delay: '2s' },
    { top: '75%', left: '15%', size: '480px', color: 'rgba(139, 92, 246, 0.03)', delay: '4s' },
    { top: '90%', right: '20%', size: '380px', color: 'rgba(0, 240, 255, 0.035)', delay: '1s' }
  ], []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      {/* Base Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-80 dark:opacity-60 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_85%)]" />

      {/* Subtle Noise Texture overlay for analog tactile depth */}
      <div 
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Mouse-Following Soft Glow */}
      {!prefersReduced && (
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full blur-[120px] transition-transform duration-75 ease-out opacity-40 dark:opacity-30 mix-blend-screen pointer-events-none"
          style={{
            transform: `translate3d(${x}px, ${y}px, 0)`,
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, rgba(59, 130, 246, 0.04) 50%, transparent 80%)'
          }}
        />
      )}

      {/* Ambient background light orbs */}
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
            animationDelay: node.delay
          }}
        />
      ))}
    </div>
  );
};
