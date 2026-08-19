'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, ArrowUpRight, User, Calendar, Tag, Sparkles } from 'lucide-react';
import { BlogPostData } from '@/types';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';

interface BlogListClientProps {
  posts: BlogPostData[];
}

export function BlogListClient({ posts }: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))];

  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  const featuredPost = posts[0];
  const remainingPosts = selectedCategory === 'All' ? posts.slice(1) : filteredPosts;

  const marqueeItems = [
    'WORKSPACE INTELLIGENCE & RESEARCH',
    'GURGAON COMMERCIAL REAL ESTATE 2026',
    'HARYANA GST & ROC COMPLIANCE GUIDES',
    'FRANCHISE CASH FLOW & 12% YIELD ANALYSIS',
    'ZERO-COMMUTE WORK + STAY COLIVING',
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-5 sm:space-y-6">
          <FadeUp delay={0.05}>
            <div className="inline-flex items-center gap-2">
              <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[10px] sm:text-[11px]">
                [ MARKET INSIGHTS & EDITORIAL ]
              </span>
              <span className="nestor-pill bg-black/5 text-gray-800 font-mono text-[10px] sm:text-[11px]">
                GURUGRAM COMMERCIAL INTELLIGENCE
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-[#111111] font-sans leading-tight">
              Yoffices Research & Insights
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Strategic perspectives on flexible workspace economics, Haryana GST statutory registration, zero-commute living, and commercial real estate asset yields.
            </p>
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

      {/* Main Content Area */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
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

          {/* Featured Article Card (Shown when 'All' is selected) */}
          {selectedCategory === 'All' && featuredPost && (
            <FadeUp delay={0.1}>
              <div className="rounded-3xl bg-white border border-black/10 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0 group">
                <div className="lg:col-span-7 relative h-72 lg:h-full min-h-[300px] overflow-hidden bg-gray-900">
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 text-white font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur-md">
                    FEATURED REPORT • {featuredPost.category}
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs font-mono text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#C91D24]" />
                        {featuredPost.readTime}
                      </span>
                      <span>•</span>
                      <span>
                        {new Date(featuredPost.publishedAt).toLocaleDateString('en-IN', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-extrabold font-sans text-gray-900 group-hover:text-[#C91D24] transition-colors leading-snug">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-500 font-bold">
                      By {featuredPost.author}
                    </span>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-md transition-all group-hover:scale-105"
                    >
                      <span>Read Full Report</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeUp>
          )}

          {/* Grid of Remaining/Filtered Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {remainingPosts.map((post, idx) => (
              <FadeUp
                key={post.id}
                delay={idx * 0.08}
                className="bg-white rounded-3xl border border-black/10 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 w-full bg-gray-200 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-black/80 text-white font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur-md">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] font-mono text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#C91D24]" />
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>

                    <h2 className="text-base sm:text-lg font-bold text-gray-900 font-sans group-hover:text-[#C91D24] transition-colors line-clamp-2 leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#C91D24] pt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <span className="text-[11px] font-mono text-gray-400">
                    {post.author.split(',')[0]}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
