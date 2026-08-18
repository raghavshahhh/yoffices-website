'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface FadeUpProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  enableBlur?: boolean;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
  distance = 18,
  className = '',
  enableBlur = true,
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: distance,
        filter: enableBlur ? 'blur(8px)' : 'none',
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier curve
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.45,
  className = '',
  enableBlur = true,
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: enableBlur ? 'blur(6px)' : 'none',
      }}
      whileInView={{
        opacity: 1,
        filter: 'blur(0px)',
      }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  enableBlur = true,
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
        filter: enableBlur ? 'blur(8px)' : 'none',
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
      }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
} & HTMLMotionProps<'div'>) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-20px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & HTMLMotionProps<'div'>) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15, filter: 'blur(6px)' },
        show: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
