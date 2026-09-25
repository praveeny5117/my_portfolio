import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useMousePosition';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const prefersReduced = useReducedMotion();

  if (prefersReduced) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#00F0FF] via-cyan-400 to-blue-500 origin-left z-50 pointer-events-none shadow-[0_0_8px_rgba(0,240,255,0.6)]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
};
