'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TimelineAnimationProps {
  as?: any;
  timelineRef?: React.RefObject<HTMLDivElement | null>;
  animationNum?: number;
  className?: string;
  children?: React.ReactNode;
  src?: string;
  alt?: string;
  [key: string]: any;
}

export const TimelineAnimation: React.FC<TimelineAnimationProps> = ({
  as = 'div',
  timelineRef,
  animationNum = 1,
  className = '',
  children,
  src,
  alt,
  ...props
}) => {
  const Component = typeof as === 'string' ? as : 'div';
  const MotionComponent = motion.create(Component as any);

  const delay = (animationNum - 1) * 0.12;

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      src={src}
      alt={alt}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default TimelineAnimation;
