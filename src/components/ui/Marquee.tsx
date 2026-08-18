'use client';

import React from 'react';

interface MarqueeProps {
  items: string[];
  speed?: number; // duration in seconds (higher = slower, more luxurious)
  direction?: 'left' | 'right';
  className?: string;
  itemClassName?: string;
  separator?: React.ReactNode;
}

export function Marquee({
  items,
  speed = 65, // slow, elegant, readable luxury speed
  direction = 'left',
  className = '',
  itemClassName = '',
  separator = <span className="text-[#C91D24] text-xs font-bold">✦</span>,
}: MarqueeProps) {
  const content = (
    <div className="flex items-center gap-10 shrink-0">
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <span
            className={`whitespace-nowrap font-mono font-semibold tracking-widest uppercase text-xs sm:text-sm ${itemClassName}`}
          >
            {item}
          </span>
          <span className="shrink-0 opacity-80">{separator}</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div
      className={`relative w-full overflow-hidden flex select-none py-3.5 border-y border-black/[0.08] ${className}`}
    >
      <div
        className={`flex shrink-0 items-center gap-10 ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {content}
        {content}
      </div>
      <div
        aria-hidden="true"
        className={`flex shrink-0 items-center gap-10 ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {content}
        {content}
      </div>
    </div>
  );
}
