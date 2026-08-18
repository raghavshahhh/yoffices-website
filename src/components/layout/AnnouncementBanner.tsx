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
    <div className="bg-[#0C0E12] text-white text-xs sm:text-sm py-2.5 px-4 relative border-b border-[#222634] z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 mx-auto text-center font-medium">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#C91D24] text-white uppercase tracking-wider">
            <Sparkles className="w-3 h-3 animate-pulse" /> New Center
          </span>
          <span className="text-gray-200 line-clamp-1">{text}</span>
          {link && (
            <Link
              href={link}
              className="inline-flex items-center gap-1 font-semibold text-[#C5A880] hover:text-white underline underline-offset-2 transition-colors ml-1"
            >
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-white p-1 rounded-md transition-colors"
          aria-label="Close announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
