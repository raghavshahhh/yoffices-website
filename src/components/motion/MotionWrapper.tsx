'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface FadeUpProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  distance = 30,
  className = '',
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Nestor / Framer smooth spring curve
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
  duration = 0.6,
  className = '',
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
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
  duration = 0.7,
  className = '',
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
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
  staggerDelay = 0.1,
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
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        visible: {
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
  distance = 25,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  distance?: number;
  className?: string;
} & HTMLMotionProps<'div'>) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
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

export function ImageReveal({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[4/3]',
  zoomOnHover = true,
}: {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  zoomOnHover?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-2xl bg-[#EBE9E1] ${aspectRatio} ${className} group`}
    >
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
          zoomOnHover ? 'group-hover:scale-105' : ''
        }`}
      />
    </motion.div>
  );
}
