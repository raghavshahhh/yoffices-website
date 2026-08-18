'use client';

import React from 'react';
import { cn } from '@/lib/utils';

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
  speed = 50,
  direction = 'left',
  className = '',
  itemClassName = '',
  separator = <span className="text-[#C91D24] text-xs font-bold">✦</span>,
}: MarqueeProps) {
  // Build a single track of items with exact trailing gap/separator
  const renderTrackItems = (keyPrefix: string) => (
    <div className="flex shrink-0 items-center">
      {items.map((item, idx) => (
        <div key={`${keyPrefix}-${idx}`} className="flex shrink-0 items-center">
          <span
            className={cn(
              'whitespace-nowrap font-mono font-semibold tracking-widest uppercase text-xs sm:text-sm px-6',
              itemClassName
            )}
          >
            {item}
          </span>
          <span className="shrink-0 opacity-80 select-none">{separator}</span>
        </div>
      ))}
    </div>
  );

  const animClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden flex whitespace-nowrap select-none py-3.5 border-y border-black/[0.08]',
        className
      )}
    >
      <div
        className={cn('flex shrink-0 items-center', animClass)}
        style={{ animationDuration: `${speed}s` }}
      >
        {renderTrackItems('track1-a')}
        {renderTrackItems('track1-b')}
      </div>

      <div
        aria-hidden="true"
        className={cn('flex shrink-0 items-center', animClass)}
        style={{ animationDuration: `${speed}s` }}
      >
        {renderTrackItems('track2-a')}
        {renderTrackItems('track2-b')}
      </div>
    </div>
  );
}
