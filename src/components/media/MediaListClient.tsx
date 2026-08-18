'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Play, Video, ArrowUpRight, Filter } from 'lucide-react';
import { MediaVideoData } from '@/types';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';

interface MediaListClientProps {
  videos: MediaVideoData[];
}

export function MediaListClient({ videos }: MediaListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(videos.map((v) => v.category)))];

  const filteredVideos =
    selectedCategory === 'All'
      ? videos
      : videos.filter((v) => v.category === selectedCategory);

  const marqueeItems = [
    'YOUTUBE VIDEO TOURS',
    'GURGAON SECTOR 45 VIRTUAL WALKTHROUGH',
    'COMMERCIAL FRANCHISE BREAKDOWN',
    'GST & ROC VIRTUAL OFFICE GUIDES',
    'FOUNDER INTERVIEWS & PODCASTS',
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <FadeUp delay={0.1}>
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ OFFICIAL VIDEO ECOSYSTEM ]
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#111111] font-sans">
              Yoffices Media & Video Showcase
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore center walkthroughs, commercial franchise masterclasses, virtual office guides, and resident interviews.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Live Marquee Strip */}
      <div className="bg-[#111111] text-white">
        <Marquee
          items={marqueeItems}
          speed={60}
          className="border-none py-3"
          itemClassName="text-white/90 font-mono text-xs tracking-widest uppercase"
        />
      </div>

      {/* Videos Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Category Filter Chips */}
          <FadeUp delay={0.1} className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#111111] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-black/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </FadeUp>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((vid, idx) => (
              <FadeUp
                key={vid.id}
                delay={idx * 0.08}
                className="group rounded-3xl bg-white border border-black/5 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full bg-gray-900 overflow-hidden">
                    <img
                      src={
                        vid.thumbnail ||
                        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
                      }
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#C91D24] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-black/80 text-white font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur-md">
                      {vid.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h2 className="text-base font-bold text-gray-900 font-sans group-hover:text-[#C91D24] transition-colors line-clamp-2">
                      {vid.title}
                    </h2>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {vid.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/media/${vid.slug}`}
                    className="flex items-center justify-between text-xs font-bold text-[#C91D24] pt-4 border-t border-gray-100"
                  >
                    <span>Watch Full Video Tour</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
