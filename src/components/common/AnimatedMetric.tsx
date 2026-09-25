import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';

interface AnimatedMetricProps {
  value: string;
  className?: string;
  duration?: number;
}

export const AnimatedMetric: React.FC<AnimatedMetricProps> = ({
  value,
  className = '',
  duration = 1400,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const animatedValue = useCountUp(value, isInView, { duration });

  return (
    <span ref={ref} className={className}>
      {animatedValue}
    </span>
  );
};
