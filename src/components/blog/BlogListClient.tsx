'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, ArrowUpRight } from 'lucide-react';
import { BlogPostData } from '@/types';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';

interface BlogListClientProps {
  posts: BlogPostData[];
}

export function BlogListClient({ posts }: BlogListClientProps) {
  const marqueeItems = [
    'WORKSPACE INTELLIGENCE & INSIGHTS',
    'GURGAON REAL ESTATE DYNAMICS 2026',
    'HARYANA GST & ROC COMPLIANCE',
    'COMMERCIAL FRANCHISE YIELD ANALYSIS',
    'COWORKING CULTURE & HYBRID WORK',
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <FadeUp delay={0.1}>
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ MARKET INSIGHTS & RESEARCH ]
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#111111] font-sans">
              Yoffices Editorial & Insights
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Strategic perspectives on flexible workspace economics, Haryana GST registration compliance, and commercial real estate assets.
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

      {/* Articles Grid */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <FadeUp
                key={post.id}
                delay={idx * 0.1}
                className="bg-white rounded-3xl border border-black/5 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
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

                  <div className="p-6 sm:p-8 space-y-3">
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

                    <h2 className="text-lg font-bold text-gray-900 font-sans group-hover:text-[#C91D24] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#C91D24]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <span className="text-[11px] font-mono text-gray-400">
                    {post.author.split(' ')[0]}
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
