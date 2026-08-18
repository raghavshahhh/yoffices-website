'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Play,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Video,
  CheckCircle2,
  Maximize2,
  ExternalLink,
  Flame,
} from 'lucide-react';
import { FadeUp } from '@/components/motion/MotionWrapper';

export function FounderVideoShowcase() {
  const [isPlayingMain, setIsPlayingMain] = useState(false);
  const [activeShortId, setActiveShortId] = useState<string | null>(null);

  const mainVideoId = 'qFL2VSeY3WA';

  const shorts = [
    {
      id: 'E-yZwQ1oJnU',
      title: 'Inside Yoffices Sector 45 Gurgaon: Luxury Cabins Tour',
      tag: 'OFFICE TOUR',
      views: '1080p HD',
      desc: 'Ergonomic workstations, 1Gbps fiber internet, and acoustic executive cabins.',
    },
    {
      id: '-JZ1BtVfRow',
      title: 'How 3 Post-Dated Security Cheques Protect Franchise Partners',
      tag: 'FRANCHISE SECURITY',
      views: 'LOI TERMS',
      desc: 'Monthly rental payouts, annual cheque return process, and 3-year maturity.',
    },
    {
      id: 'FJ6OUPWy51w',
      title: 'Work + Stay: Next-Gen Co-Living & Coworking Ecosystem',
      tag: 'WORK + STAY',
      views: 'SECTOR 45',
      desc: 'Climate-controlled dormitory suites integrated with 24/7 dedicated workspaces.',
    },
  ];

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#111111] text-white border-b border-black/[0.08] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C91D24]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <FadeUp className="space-y-3">
            <span className="nestor-pill bg-white/10 text-[#C5A880] font-mono text-[10px] uppercase tracking-widest">
              [ FOUNDER VISION & MEDIA MASTERCLASS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-sans text-white tracking-tight">
              Watch How Yoffices Redefines Workspaces
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
              Official walkthroughs, franchise cash flow breakdowns, and co-living tour directly from the founders.
            </p>
          </FadeUp>

          <FadeUp delay={0.1} className="flex items-center gap-3">
            <a
              href="https://youtu.be/qFL2VSeY3WA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-lg transition-all"
            >
              <Video className="w-4 h-4" />
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </FadeUp>
        </div>

        {/* 1. Main Featured Founder Video (Cinema Player) */}
        <FadeUp delay={0.2} className="relative rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl">
          <div className="aspect-video w-full relative">
            {isPlayingMain ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${mainVideoId}?autoplay=1&rel=0&modestbranding=1`}
                title="Yoffices Founder Masterclass Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0 absolute inset-0"
              />
            ) : (
              <div
                onClick={() => setIsPlayingMain(true)}
                className="w-full h-full cursor-pointer relative group overflow-hidden"
              >
                <img
                  src={`https://img.youtube.com/vi/${mainVideoId}/maxresdefault.jpg`}
                  alt="Yoffices Founder Masterclass"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Big Pulse Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-24 h-24 rounded-full bg-[#C91D24]/40 animate-ping" />
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#C91D24] hover:bg-[#A3151B] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1.5" />
                    </div>
                  </div>
                </div>

                {/* Bottom Video Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="space-y-2">
                    <span className="nestor-pill bg-[#C91D24] text-white font-mono text-[10px] font-extrabold uppercase">
                      OFFICIAL FOUNDER VIDEO
                    </span>
                    <h3 className="text-xl sm:text-3xl font-black font-sans text-white max-w-2xl">
                      Commercial Real Estate Passive Income & Franchise Blueprint
                    </h3>
                    <p className="text-xs text-gray-300 hidden sm:block max-w-xl">
                      Full presentation covering the 3 investment models, 3 annual post-dated security cheques, and turnkey Sector 45 & 32 operations.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsPlayingMain(true)}
                    className="px-5 py-2.5 rounded-xl bg-white text-black font-bold text-xs hover:bg-gray-200 transition-colors shrink-0"
                  >
                    Click to Play Video
                  </button>
                </div>
              </div>
            )}
          </div>
        </FadeUp>

        {/* 2. YouTube Shorts / Reels Grid */}
        <div className="space-y-6">
          <FadeUp delay={0.1} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="nestor-pill bg-white/10 text-white font-mono text-[10px]">
                <Flame className="w-3.5 h-3.5 text-[#C91D24] inline mr-1" />
                YOUTUBE SHORTS & HIGHLIGHTS
              </span>
            </div>
            <span className="text-xs text-gray-400 font-mono">Tap any reel to play</span>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shorts.map((short, idx) => {
              const isPlayingThisShort = activeShortId === short.id;

              return (
                <FadeUp
                  key={short.id}
                  delay={idx * 0.1}
                  className="rounded-3xl bg-[#1A1D24] border border-white/10 overflow-hidden shadow-xl flex flex-col justify-between group"
                >
                  <div className="relative aspect-[9/16] max-h-[480px] w-full bg-black overflow-hidden">
                    {isPlayingThisShort ? (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${short.id}?autoplay=1&rel=0&modestbranding=1`}
                        title={short.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0 absolute inset-0"
                      />
                    ) : (
                      <div
                        onClick={() => setActiveShortId(short.id)}
                        className="w-full h-full cursor-pointer relative"
                      >
                        <img
                          src={`https://img.youtube.com/vi/${short.id}/maxresdefault.jpg`}
                          alt={short.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                        {/* Play Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-[#C91D24] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-6 h-6 fill-white ml-0.5" />
                          </div>
                        </div>

                        {/* Top Badges */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                          <span className="bg-[#C91D24] text-white font-mono text-[9px] uppercase font-extrabold px-2.5 py-1 rounded-full">
                            {short.tag}
                          </span>
                          <span className="bg-black/70 text-white font-mono text-[9px] px-2 py-0.5 rounded backdrop-blur-md">
                            {short.views}
                          </span>
                        </div>

                        {/* Bottom Text */}
                        <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                          <h4 className="font-bold text-sm leading-snug line-clamp-2">
                            {short.title}
                          </h4>
                          <p className="text-[11px] text-gray-300 line-clamp-2">
                            {short.desc}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-4 bg-[#14161C] flex items-center justify-between border-t border-white/5">
                    <a
                      href={`https://youtube.com/shorts/${short.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#C5A880] hover:text-white inline-flex items-center gap-1"
                    >
                      <span>Open on YouTube</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    {!isPlayingThisShort && (
                      <button
                        onClick={() => setActiveShortId(short.id)}
                        className="text-xs font-bold text-white bg-white/10 hover:bg-[#C91D24] px-3 py-1 rounded-lg transition-colors"
                      >
                        Play Inline
                      </button>
                    )}
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
