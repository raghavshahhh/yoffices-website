'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'dark' | 'light'; // 'dark' = dark text for light background (header); 'light' = white text for dark background (footer)
  showSubtitle?: boolean;
  subtitleText?: string;
  className?: string;
  imgClassName?: string;
  height?: number;
  width?: number;
  asLink?: boolean;
  href?: string;
}

export function Logo({
  variant = 'dark',
  showSubtitle = true,
  subtitleText = 'SECTOR 45 & 32',
  className = '',
  imgClassName = '',
  height = 36,
  width = 144,
  asLink = true,
  href = '/',
}: LogoProps) {
  const logoSrc = variant === 'light' ? '/images/logo-white.png' : '/images/logo-dark.png';

  const content = (
    <div className={cn('inline-flex flex-col items-start select-none group', className)}>
      <div className="flex items-center">
        <img
          src={logoSrc}
          alt="YOFFICES"
          width={width}
          height={height}
          className={cn('h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]', imgClassName)}
          loading="eager"
        />
      </div>
      {showSubtitle && (
        <span
          className={cn(
            'text-[9px] font-mono uppercase tracking-[0.2em] font-bold pl-0.5 mt-0.5',
            variant === 'light' ? 'text-gray-400' : 'text-gray-500'
          )}
        >
          {subtitleText}
        </span>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link href={href} className="inline-flex items-center">
        {content}
      </Link>
    );
  }

  return content;
}
