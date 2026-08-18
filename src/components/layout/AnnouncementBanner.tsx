'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sparkles, X, ArrowRight } from 'lucide-react';

interface AnnouncementBannerProps {
  enabled: boolean;
  text: string;
  link: string;
}

export function AnnouncementBanner({ enabled, text, link }: AnnouncementBannerProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!enabled || !isOpen || !text) return null;

  return (
    <div className="bg-[#0C0E12] text-white text-[11px] sm:text-xs py-2 px-3 sm:px-4 relative border-b border-white/[0.08] z-50 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-1.5 sm:gap-2 mx-auto text-center font-medium min-w-0">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#C91D24] text-white uppercase tracking-wider shrink-0">
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 animate-pulse" />
            <span>NEW</span>
          </span>
          <span className="text-gray-200 truncate">{text}</span>
          {link && (
            <Link
              href={link}
              className="inline-flex items-center gap-0.5 font-bold text-[#C5A880] hover:text-white underline underline-offset-2 transition-colors shrink-0 ml-0.5"
            >
              <span>Explore</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-white p-1 rounded-md transition-colors shrink-0 cursor-pointer"
          aria-label="Close announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
