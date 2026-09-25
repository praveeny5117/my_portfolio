import { useState, useEffect, useRef } from 'react';
import { useReducedMotion } from './useMousePosition';

interface UseCountUpOptions {
  duration?: number; // duration in ms
  startOnView?: boolean;
}

export function useCountUp(valueStr: string, inView: boolean = true, options: UseCountUpOptions = {}) {
  const { duration = 1400 } = options;
  const prefersReduced = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(valueStr);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (prefersReduced) return;
    if (!inView || hasAnimatedRef.current) return;

    // Parse the value string for numbers
    // Matches patterns like "5+ Years", "50%", "2x", "99.98%", "20+", "14,850", "₹42.8L"
    const match = valueStr.match(/^([^0-9.]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);

    if (!match) {
      // Non-numeric metric (e.g. "Multi-Tenant", "Decoupled") - initial state is already valueStr
      hasAnimatedRef.current = true;
      return;
    }

    hasAnimatedRef.current = true;

    const prefix = match[1] || '';
    const targetNum = parseFloat(match[2]);
    const suffix = match[3] || '';
    const hasDecimals = match[2].includes('.');
    const decimalPlaces = hasDecimals ? match[2].split('.')[1].length : 0;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out expo / cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = targetNum * easedProgress;

      const formattedNum = hasDecimals
        ? currentNum.toFixed(decimalPlaces)
        : Math.round(currentNum).toString();

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(valueStr);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [inView, valueStr, duration, prefersReduced]);

  return prefersReduced ? valueStr : displayValue;
}
