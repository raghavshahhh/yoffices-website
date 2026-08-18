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
import { FadeUp, ScaleIn } from '@/components/motion/MotionWrapper';

export function FounderVideoShowcase() {
  const [isPlayingMain, setIsPlayingMain] = useState(false);
  const [activeShortId, setActiveShortId] = useState<string | null>(null);

  const mainVideoId = 'qFL2VSeY3WA';

  const shorts = [
    {
      id: 'E-yZwQ1oJnU',
      title: 'Inside Yoffices Sector 45: Luxury Cabins Tour',
      tag: 'OFFICE TOUR',
      views: '1080p HD',
      desc: 'Ergonomic workstations, 1Gbps fiber internet, and acoustic executive cabins.',
    },
    {
      id: '-JZ1BtVfRow',
      title: 'How 3 Post-Dated Security Cheques Protect Partners',
      tag: 'FRANCHISE SECURITY',
      views: 'LOI TERMS',
      desc: 'Monthly rental payouts, annual cheque return process, and 3-year maturity.',
    },
    {
      id: 'FJ6OUPWy51w',
      title: 'Work + Stay: Next-Gen Co-Living & Coworking Hub',
      tag: 'WORK + STAY',
      views: 'SECTOR 45',
      desc: 'Climate-controlled dormitory suites integrated with 24/7 dedicated workspaces.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F0EFE9] text-[#111111] border-b border-black/[0.06] relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <FadeUp className="space-y-2">
            <span className="nestor-pill bg-black/5 text-gray-800 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider">
              [ FOUNDER VISION & MEDIA MASTERCLASS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-[#111111] tracking-tight">
              Watch How Yoffices Redefines Workspaces
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
              Official walkthroughs, franchise cash flow breakdowns, and co-living tour directly from the founders.
            </p>
          </FadeUp>

          <FadeUp delay={0.1} className="flex items-center gap-3">
            <a
              href="https://youtu.be/qFL2VSeY3WA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <Video className="w-4 h-4" />
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </FadeUp>
        </div>

        {/* 1. Main Featured Founder Video (Compact White Border Frame) */}
        <FadeUp delay={0.15}>
          <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-black/10 shadow-xl overflow-hidden p-2.5 sm:p-4">
            <div className="aspect-video max-h-[460px] w-full relative rounded-2xl overflow-hidden bg-black shadow-inner">
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
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Sleek Pulse Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-20 h-20 rounded-full bg-[#C91D24]/40 animate-ping" />
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C91D24] hover:bg-[#A3151B] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Video Info Overlay */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
                    <div className="space-y-1.5">
                      <span className="nestor-pill-dark font-mono text-[9px] uppercase font-bold bg-white/20">
                        OFFICIAL FOUNDER VIDEO
                      </span>
                      <h3 className="text-lg sm:text-2xl font-extrabold font-sans leading-tight max-w-xl">
                        Commercial Real Estate Passive Income & Franchise Blueprint
                      </h3>
                      <p className="text-xs text-gray-300 hidden sm:block max-w-md line-clamp-1">
                        Full breakdown of franchise models, monthly payouts, and 3 security cheques.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsPlayingMain(true)}
                      className="px-4 py-2 rounded-xl bg-white text-black font-bold text-xs hover:bg-gray-100 transition-colors shrink-0 shadow-md"
                    >
                      Click to Play Video
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeUp>

        {/* 2. YouTube Shorts Grid in Compact White Cards */}
        <div className="space-y-6 max-w-5xl mx-auto">
          <FadeUp delay={0.2} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="nestor-pill bg-black/5 text-gray-800 font-mono text-[10px]">
                <Flame className="w-3.5 h-3.5 text-[#C91D24] inline mr-1" />
                YOUTUBE SHORTS & HIGHLIGHTS
              </span>
            </div>
            <span className="text-[11px] text-gray-500 font-mono">Tap any reel to play</span>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shorts.map((short, idx) => {
              const isPlayingThisShort = activeShortId === short.id;

              return (
                <FadeUp
                  key={short.id}
                  delay={0.25 + idx * 0.08}
                  className="rounded-3xl bg-white border border-black/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative aspect-[9/16] max-h-[420px] w-full bg-black overflow-hidden">
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
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                        {/* Play Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-[#C91D24] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-5 h-5 fill-white ml-0.5" />
                          </div>
                        </div>

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className="bg-[#C91D24] text-white font-mono text-[9px] uppercase font-bold px-2 py-0.5 rounded-full">
                            {short.tag}
                          </span>
                          <span className="bg-black/70 text-white font-mono text-[9px] px-2 py-0.5 rounded backdrop-blur-md">
                            {short.views}
                          </span>
                        </div>

                        {/* Bottom Text */}
                        <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                          <h4 className="font-bold text-xs sm:text-sm leading-snug line-clamp-2">
                            {short.title}
                          </h4>
                          <p className="text-[10px] text-gray-300 line-clamp-1">
                            {short.desc}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-3.5 bg-[#FAF9F6] flex items-center justify-between border-t border-gray-100">
                    <a
                      href={`https://youtube.com/shorts/${short.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#C91D24] hover:underline inline-flex items-center gap-1"
                    >
                      <span>YouTube Reel</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    {!isPlayingThisShort && (
                      <button
                        onClick={() => setActiveShortId(short.id)}
                        className="text-xs font-bold text-gray-800 bg-white hover:bg-gray-100 border border-black/10 px-3 py-1 rounded-lg transition-colors shadow-2xs"
                      >
                        Play
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
