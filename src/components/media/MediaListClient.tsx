'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Play,
  Video,
  ArrowUpRight,
  Filter,
  ExternalLink,
  Users,
  Eye,
  Calendar,
  Sparkles,
  CheckCircle2,
  X,
  Share2,
} from 'lucide-react';

function YouTubeIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
import { MediaVideoData } from '@/types';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';
import { motion, AnimatePresence } from 'motion/react';

interface MediaListClientProps {
  videos: MediaVideoData[];
}

export function MediaListClient({ videos }: MediaListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCinemaVideo, setActiveCinemaVideo] = useState<MediaVideoData | null>(null);

  const categories = ['All', ...Array.from(new Set(videos.map((v) => v.category)))];

  const filteredVideos =
    selectedCategory === 'All'
      ? videos
      : videos.filter((v) => v.category === selectedCategory);

  const marqueeItems = [
    'OFFICIAL @YOFFICES YOUTUBE CHANNEL',
    '12,000+ SUBSCRIBERS',
    '335+ COMMERCIAL VIDEOS',
    '874,500+ TOTAL VIEWS',
    'GURGAON SECTOR 45 VIRTUAL TOURS',
    'FRANCHISE MASTERCLASSES & CASH FLOWS',
    'WORK + STAY CO-LIVING SUITES',
    'HARYANA GST VIRTUAL OFFICE GUIDES',
  ];

  const channelStats = [
    { label: 'Subscribers', value: '12K+', icon: Users, desc: 'Founders & Real Estate Investors' },
    { label: 'Channel Uploads', value: '335+', icon: Video, desc: 'Tours, Masterclasses & Guides' },
    { label: 'Lifetime Views', value: '874K+', icon: Eye, desc: 'Across YouTube Ecosystem' },
    { label: 'Member Rating', value: '4.6 ★', icon: Sparkles, desc: 'Google Verified Reviews' },
  ];

  const networkChannels = [
    {
      name: 'Yoffices Official',
      handle: '@Yoffices',
      url: 'https://www.youtube.com/@Yoffices',
      desc: 'Flagship managed workspaces, co-living & franchise models.',
    },
    {
      name: 'Wifi Operators',
      handle: '@WifiOperators',
      url: 'https://youtube.com/c/WifiOperators',
      desc: 'Telecom, enterprise ISP & redundant internet infrastructure.',
    },
    {
      name: 'Barter Bazaar',
      handle: 'Barter Bazaar Channel',
      url: 'https://www.youtube.com/channel/UCM-i7RWUwzRK-M4kSYrROag',
      desc: 'B2B barter network, community commerce & startup growth.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Inline Cinema Player Modal */}
      <AnimatePresence>
        {activeCinemaVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCinemaVideo(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-[#111111] text-white rounded-3xl border border-white/15 overflow-hidden shadow-2xl z-10"
            >
              {/* Header */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2.5 min-w-0 pr-4">
                  <div className="w-8 h-8 rounded-full bg-[#C91D24] text-white flex items-center justify-center shrink-0">
                    <YouTubeIcon className="w-4 h-4 fill-white" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold font-sans truncate">
                    {activeCinemaVideo.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveCinemaVideo(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Close cinema player"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Player Iframe */}
              <div
                className={`relative bg-black ${
                  activeCinemaVideo.youtubeUrl.includes('/shorts/') ||
                  activeCinemaVideo.youtubeId.startsWith('E-') ||
                  activeCinemaVideo.youtubeId.startsWith('-J') ||
                  activeCinemaVideo.youtubeId.startsWith('FJ')
                    ? 'aspect-[9/16] max-w-[360px] mx-auto py-2'
                    : 'aspect-video w-full'
                }`}
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeCinemaVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={activeCinemaVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0 absolute inset-0"
                />
              </div>

              {/* Footer Actions */}
              <div className="p-4 sm:p-6 bg-[#16181F] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <p className="text-gray-400 line-clamp-2 sm:line-clamp-1 max-w-xl text-center sm:text-left">
                  {activeCinemaVideo.description}
                </p>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={activeCinemaVideo.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    href={`/media/${activeCinemaVideo.slug}`}
                    className="px-4 py-2 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Full Breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero Header */}
      <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-5 sm:space-y-6">
          <FadeUp delay={0.05}>
            <div className="inline-flex items-center gap-2">
              <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[10px] sm:text-[11px]">
                [ OFFICIAL YOUTUBE ECOSYSTEM ]
              </span>
              <span className="nestor-pill bg-red-50 text-[#C91D24] border-red-200 font-mono text-[10px] sm:text-[11px] flex items-center gap-1">
                <YouTubeIcon className="w-3.5 h-3.5" />
                12K SUBSCRIBERS • 335+ VIDEOS
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-[#111111] font-sans leading-tight">
              Yoffices Media & Video Hub
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore official center walkthroughs, commercial franchise masterclasses, virtual office guides, and resident interviews from our Gurgaon hubs.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="https://www.youtube.com/@Yoffices?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <YouTubeIcon className="w-4 h-4 fill-white" />
              <span>Subscribe on YouTube (@Yoffices)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <Link
              href="/book-a-visit"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-gray-50 text-gray-900 font-bold text-xs border border-black/10 transition-all shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#C91D24]" />
              <span>Book In-Person Tour</span>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Live Marquee Strip */}
      <div className="bg-[#111111] text-white">
        <Marquee
          items={marqueeItems}
          speed={55}
          className="border-none py-3"
          itemClassName="text-white/90 font-mono text-xs tracking-widest uppercase"
        />
      </div>

      {/* YouTube Channel Stats Bento */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {channelStats.map((stat, idx) => (
              <FadeUp
                key={idx}
                delay={idx * 0.06}
                className="nestor-card p-5 sm:p-6 space-y-2 bg-white shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-gray-400">
                    {stat.label}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-red-50 text-[#C91D24] flex items-center justify-center">
                    <stat.icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-gray-900 font-sans">
                  {stat.value}
                </div>
                <p className="text-[11px] text-gray-500 line-clamp-1">{stat.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Official Channel Profile Showcase Banner */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto">
          <FadeUp delay={0.1} className="rounded-3xl bg-[#111111] text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#C91D24] text-white text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <YouTubeIcon className="w-3.5 h-3.5 fill-white" />
                    VERIFIED YOUTUBE CREATOR
                  </span>
                  <span className="text-xs text-gray-400 font-mono">Joined May 13, 2020</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black font-sans tracking-tight text-white">
                  Welcome to the Official YouTube Channel of Yoffices
                </h2>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Based in the heart of the corporate hub, Gurgaon (Delhi NCR), Yoffices is more than just a provider of desks; we are the architects of a nationwide ecosystem designed for creators, entrepreneurs, and global enterprises alike. With a rapidly expanding footprint of premium coworking spaces all over India, we bridge the gap between professional infrastructure and a vibrant community.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
                <a
                  href="https://www.youtube.com/@Yoffices?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs text-center inline-flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <YouTubeIcon className="w-4 h-4 fill-white" />
                  <span>Subscribe to @Yoffices</span>
                </a>

                <a
                  href="https://www.youtube.com/@Yoffices/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs text-center inline-flex items-center justify-center gap-2 transition-all border border-white/10"
                >
                  <span>Browse 335+ Videos</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Network Channels */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <span className="text-[10px] font-mono uppercase font-bold text-[#C5A880] tracking-widest block">
                AFFILIATED NETWORK CHANNELS & COMMUNITIES
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {networkChannels.map((net, i) => (
                  <a
                    key={i}
                    href={net.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-between group"
                  >
                    <div className="space-y-0.5">
                      <div className="font-bold text-xs text-white group-hover:text-[#C5A880] transition-colors flex items-center gap-1.5">
                        <YouTubeIcon className="w-3.5 h-3.5 text-[#C91D24] fill-current" />
                        <span>{net.name}</span>
                      </div>
                      <p className="text-[10px] text-gray-400">{net.handle}</p>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Video Catalogue & Filter Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Category Filter Chips */}
          <FadeUp delay={0.05} className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#111111] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-black/5 shadow-xs'
                }`}
              >
                {cat}
              </button>
            ))}
          </FadeUp>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredVideos.map((vid, idx) => (
              <FadeUp
                key={vid.id}
                delay={idx * 0.06}
                className="group rounded-3xl bg-white border border-black/10 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    onClick={() => setActiveCinemaVideo(vid)}
                    className="relative h-56 w-full bg-gray-900 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={
                        vid.thumbnail ||
                        `https://img.youtube.com/vi/${vid.youtubeId}/maxresdefault.jpg`
                      }
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#C91D24] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute top-3.5 left-3.5 bg-black/80 text-white font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur-md">
                      {vid.category}
                    </div>

                    <div className="absolute bottom-3 right-3 bg-black/80 text-white font-mono text-[9px] uppercase px-2.5 py-0.5 rounded-full backdrop-blur-md">
                      Click to Play
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h2
                      onClick={() => setActiveCinemaVideo(vid)}
                      className="text-base font-bold text-gray-900 font-sans group-hover:text-[#C91D24] transition-colors line-clamp-2 cursor-pointer"
                    >
                      {vid.title}
                    </h2>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {vid.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between gap-3 pt-3 border-t border-gray-100">
                  <button
                    onClick={() => setActiveCinemaVideo(vid)}
                    className="text-xs font-bold text-[#C91D24] hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-[#C91D24]" />
                    <span>Watch Inline</span>
                  </button>

                  <Link
                    href={`/media/${vid.slug}`}
                    className="text-xs font-bold text-gray-600 hover:text-black inline-flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <FadeUp delay={0.1}>
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ IN-PERSON VIP WALKTHROUGH ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-gray-900 tracking-tight mt-2">
              Ready to Experience Yoffices in Person?
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Schedule a personalized walk-through of our Sector 45 or Sector 32 Gurgaon centers today.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="pt-2">
            <Link
              href="/book-a-visit"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Site Visit</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
