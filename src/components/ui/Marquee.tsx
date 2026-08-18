'use client';

import React from 'react';

interface MarqueeProps {
  items: string[];
  speed?: number; // duration in seconds
  direction?: 'left' | 'right';
  className?: string;
  itemClassName?: string;
  separator?: React.ReactNode;
}

export function Marquee({
  items,
  speed = 25,
  direction = 'left',
  className = '',
  itemClassName = '',
  separator = <span className="text-[#C91D24] text-sm">✦</span>,
}: MarqueeProps) {
  const content = (
    <div className="flex items-center gap-8 shrink-0">
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <span className={`whitespace-nowrap font-mono font-bold tracking-wider uppercase text-xs sm:text-sm ${itemClassName}`}>
            {item}
          </span>
          <span className="shrink-0">{separator}</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div
      className={`relative w-full overflow-hidden flex select-none py-3 border-y border-black/[0.08] ${className}`}
    >
      <div
        className={`flex shrink-0 items-center gap-8 ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {content}
        {content}
        {content}
        {content}
      </div>
      <div
        aria-hidden="true"
        className={`flex shrink-0 items-center gap-8 ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}
