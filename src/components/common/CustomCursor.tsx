import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition, useReducedMotion } from '../../hooks/useMousePosition';

export const CustomCursor: React.FC = () => {
  const { x, y } = useMousePosition();
  const prefersReduced = useReducedMotion();
  const [isPointer, setIsPointer] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch-only devices to disable custom cursor
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleElementHover = () => {
      const target = document.elementFromPoint(x, y);
      if (!target) return;

      const clickable = !!target.closest('button, a, input, textarea, select, [role="button"], .interactive-element');
      const card = !!target.closest('.project-card, .terminal-window, .case-study-trigger');

      setIsPointer(clickable);
      setIsCardHovered(card);
    };

    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousemove', handleElementHover);

    return () => {
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousemove', handleElementHover);
    };
  }, [x, y]);

  if (isTouchDevice || prefersReduced || !isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Small precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-accent dark:bg-[#00F0FF] shadow-glow-accent"
        animate={{
          x: x - 5,
          y: y - 5,
          scale: isPointer ? 0.5 : 1,
          opacity: 1
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 600, mass: 0.1 }}
      />

      {/* Trailing outer ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border ${
          isPointer
            ? 'border-accent dark:border-[#00F0FF] bg-accent/10 dark:bg-[#00F0FF]/10'
            : 'border-white/30 dark:border-white/20'
        }`}
        animate={{
          x: isCardHovered ? x - 28 : isPointer ? x - 20 : x - 15,
          y: isCardHovered ? y - 28 : isPointer ? y - 20 : y - 15,
          width: isCardHovered ? 56 : isPointer ? 40 : 30,
          height: isCardHovered ? 56 : isPointer ? 40 : 30,
          opacity: isPointer || isCardHovered ? 0.9 : 0.4
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 280, mass: 0.2 }}
      />
    </div>
  );
};
