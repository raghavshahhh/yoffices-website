'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Star,
  CheckCircle2,
  ExternalLink,
  PenLine,
  Filter,
  ArrowRight,
  MapPin,
  Building2,
  Calendar,
} from 'lucide-react';
import { TestimonialData } from '@/types';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';
import { WriteReviewModal } from '@/components/testimonials/WriteReviewModal';

interface TestimonialsPageClientProps {
  initialTestimonials: TestimonialData[];
}

export function TestimonialsPageClient({ initialTestimonials }: TestimonialsPageClientProps) {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>(initialTestimonials);
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

  const googleMapsUrl = 'https://maps.app.goo.gl/LdkCuzynh8p4RRPZ8';

  const avatarColors: Record<string, string> = {
    'FUTURE MONEY': 'bg-[#5E35B1]',
    'Kavita Singh': 'bg-[#D81B60]',
    'Om Prakash Malik': 'bg-[#E65100]',
    'ARV PRODUCTION': 'bg-[#C62828]',
    'Harshit Raghav': 'bg-[#2E7D32]',
    'Deepak Taneja': 'bg-[#1565C0]',
    'Suhani Pandya': 'bg-[#00897B]',
    'Vikram Rohila': 'bg-[#3949AB]',
    'Komal Kumari': 'bg-[#8E24AA]',
    'Rekha Rana': 'bg-[#AD1457]',
  };

  const reviewDates: Record<string, string> = {
    'FUTURE MONEY': '5 months ago',
    'Kavita Singh': 'a week ago',
    'Om Prakash Malik': 'a month ago',
    'ARV PRODUCTION': 'a week ago',
    'Harshit Raghav': 'a week ago',
    'Deepak Taneja': '4 months ago',
    'Suhani Pandya': 'a week ago',
    'Vikram Rohila': 'a week ago',
    'Komal Kumari': '5 months ago',
    'Rekha Rana': '6 months ago',
  };

  const categories = [
    { id: 'ALL', label: 'All Reviews (10+)' },
    { id: '5_STAR', label: '5-Star Rated' },
    { id: 'CABIN', label: 'Private Cabins' },
    { id: 'DESK', label: 'Workstations' },
    { id: 'COWORKING', label: 'Co-Living & Coworking' },
  ];

  const filteredTestimonials = testimonials.filter((test) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === '5_STAR') return test.rating === 5;
    if (selectedFilter === 'CABIN')
      return (
        test.workspaceType.toLowerCase().includes('cabin') ||
        test.workspaceType.toLowerCase().includes('office')
      );
    if (selectedFilter === 'DESK')
      return (
        test.workspaceType.toLowerCase().includes('desk') ||
        test.workspaceType.toLowerCase().includes('workstation')
      );
    if (selectedFilter === 'COWORKING')
      return (
        test.workspaceType.toLowerCase().includes('coworking') ||
        test.workspaceType.toLowerCase().includes('living') ||
        test.workspaceType.toLowerCase().includes('stay')
      );
    return true;
  });

  const refreshReviews = async () => {
    try {
      const res = await fetch('/api/testimonials');
      const data = await res.json();
      if (data.success) {
        setTestimonials(data.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      <WriteReviewModal
        isOpen={isWriteModalOpen}
        onClose={() => setIsWriteModalOpen(false)}
        onSuccess={() => {
          refreshReviews();
        }}
      />

      {/* Hero Header */}
      <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-5 sm:space-y-6">
          <FadeUp delay={0.05}>
            <div className="inline-flex items-center gap-2">
              <span className="nestor-pill bg-black/5 border-black/10 text-gray-900 font-mono text-[10px] sm:text-[11px]">
                [ VERIFIED GOOGLE BUSINESS REVIEWS ]
              </span>
              <span className="nestor-pill bg-emerald-50 text-emerald-700 border-emerald-200 font-mono text-[10px] sm:text-[11px] flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                100% REAL FEEDBACK
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-[#111111] font-sans leading-tight">
              Community & Member Reviews
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Read authentic feedback from founders, remote professionals, and commercial franchise partners working out of Yoffices Sector 45 & Sector 32 Gurgaon.
            </p>
          </FadeUp>

          {/* Rating Summary Card */}
          <FadeUp delay={0.2} className="max-w-2xl mx-auto pt-2">
            <div className="nestor-card p-5 sm:p-6 bg-white border border-black/10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-left">
                <div className="text-4xl font-black text-gray-900 font-sans tracking-tight">
                  4.6
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 font-mono">
                    Based on 10+ Google Business Profile Reviews
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-center sm:justify-end">
                <button
                  type="button"
                  onClick={() => setIsWriteModalOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-md inline-flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95"
                >
                  <PenLine className="w-3.5 h-3.5" />
                  <span>Write a Review</span>
                </button>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-gray-100 border border-black/10 text-gray-800 font-bold text-xs inline-flex items-center gap-1.5 shadow-2xs transition-all"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-gray-500" />
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Marquee Strip */}
      <div className="bg-[#111111] text-white py-0.5">
        <Marquee
          items={[
            '4.6 GOOGLE STAR RATING',
            '100% VERIFIED MEMBER REVIEWS',
            'SECTOR 45 GURGAON FLAGSHIP',
            '24/7 MANAGED SPACES',
            'HOSPITALITY & HIGH-SPEED FIBER',
          ]}
          speed={60}
          className="border-none py-3"
          itemClassName="text-white/90 font-mono text-xs tracking-widest uppercase"
        />
      </div>

      {/* Reviews Showcase Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Category Filter Switcher */}
          <FadeUp delay={0.1} className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedFilter === cat.id
                      ? 'bg-[#111111] text-white shadow-sm'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-black/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsWriteModalOpen(true)}
              className="text-xs font-bold text-[#C91D24] hover:underline inline-flex items-center gap-1"
            >
              <PenLine className="w-3.5 h-3.5" />
              <span>Leave Your Review →</span>
            </button>
          </FadeUp>

          {/* Grid of Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((test, idx) => {
              const bgClass = avatarColors[test.name] || 'bg-[#1E88E5]';
              const timeAgo = reviewDates[test.name] || 'Verified Member';
              const isLocalGuide = test.role.includes('Local Guide');

              return (
                <FadeUp
                  key={test.id}
                  delay={idx * 0.05}
                  className="nestor-card p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(test.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      {/* Official Google Review Pill */}
                      <div className="flex items-center gap-1.5 bg-[#4285F4]/10 text-[#4285F4] px-2.5 py-1 rounded-full text-[10px] font-bold">
                        <svg className="w-3 h-3" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          />
                        </svg>
                        <span>Google Review</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                      &ldquo;{test.content}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-3.5 border-t border-gray-100">
                    {/* Authentic Google Initial Circular Avatar */}
                    <div className="relative shrink-0">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white shadow-2xs ${bgClass}`}
                      >
                        {test.name.charAt(0).toUpperCase()}
                      </div>
                      {isLocalGuide && (
                        <div
                          title="Google Local Guide"
                          className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#EA4335] text-white flex items-center justify-center text-[9px] font-black border border-white shadow-xs"
                        >
                          ★
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-xs text-gray-900 flex items-center gap-1.5 truncate">
                        <span>{test.name}</span>
                        {isLocalGuide && (
                          <span className="text-[9px] bg-orange-100 text-orange-700 font-mono px-1 rounded font-bold">
                            Local Guide
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-gray-500 flex items-center gap-1.5 truncate">
                        <span>{test.role}</span>
                        <span>•</span>
                        <span className="text-gray-400">{timeAgo}</span>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <FadeUp className="space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[10px]">
              [ TOUR & WALKTHROUGH ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-sans tracking-tight">
              Experience the Workspace in Person
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
              Schedule a personalized tour of our private cabins, executive boardrooms, and co-living facilities in Sector 45 Gurgaon.
            </p>
          </FadeUp>

          <FadeUp delay={0.1} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/book-a-visit"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Guided Walkthrough</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <button
              onClick={() => setIsWriteModalOpen(true)}
              className="px-6 py-3.5 rounded-2xl bg-white border border-black/10 text-gray-900 font-bold text-xs shadow-xs hover:bg-gray-50 transition-all cursor-pointer"
            >
              Write a Review
            </button>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
