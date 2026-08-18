'use client';

import React from 'react';
import Link from 'next/link';
import {
  Building2,
  Target,
  ShieldCheck,
  Compass,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';

export function AboutPageClient() {
  const marqueeItems = [
    'LUXURY COMMERCIAL REAL ESTATE',
    'HIGH-PERFORMANCE WORKSPACES',
    'MANAGED ASSET FRANCHISE MODELS',
    'GURUGRAM SECTOR 45 & 32',
    'INTEGRATED WORK + STAY CO-LIVING',
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <FadeUp delay={0.1}>
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ CORPORATE PHILOSOPHY & VISION ]
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#111111] font-sans">
              Built for the Way Modern Companies Grow
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Yoffices bridges luxury commercial real estate, high-performance flexible workspaces, and asset-backed business partnerships in Gurgaon.
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

      {/* Philosophy & Vision Bento */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeUp delay={0.1} className="lg:col-span-6 space-y-6">
              <span className="nestor-pill bg-black/5 font-mono text-[10px] text-gray-800">
                [ 01 / 02 • OUR CORE VISION ]
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-sans leading-tight">
                Eliminating Commercial Real Estate Friction
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Traditional commercial office leasing has remained virtually unchanged for decades: 5-year lock-ins, onerous security deposits, expensive interior fit-outs, and disconnected hospitality services.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Yoffices replaces this legacy model with flexible turnkey private suites, high-speed redundant enterprise infrastructure, and integrated co-living living hubs (Work + Stay) in Sector 45 and Sector 32 Gurgaon.
              </p>
            </FadeUp>

            <FadeUp delay={0.2} className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border border-black/5 h-[380px]">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Yoffices Center"
                className="w-full h-full object-cover"
              />
            </FadeUp>
          </div>

          {/* 3 Pillars Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <FadeUp delay={0.1} className="nestor-card p-8 space-y-3 shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-[#C91D24] text-white flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-sans">Speed of Deployment</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Move a 20-person enterprise team into a fully branded, biometric private office cabin within 24 hours of agreement signing.
              </p>
            </FadeUp>

            <FadeUp delay={0.2} className="nestor-card p-8 space-y-3 shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-[#111111] text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-sans">Asset Backed Security</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Every franchise model and workspace plan is anchored in physical prime real estate assets with clear contractual governance.
              </p>
            </FadeUp>

            <FadeUp delay={0.3} className="nestor-card p-8 space-y-3 shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-[#C5A880] text-[#111111] flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-sans">Holistic Hospitality</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                From gourmet coffee and sanitized dormitory bunks to front-desk greeting and mail handling, our hospitality team manages every detail.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-black font-sans text-gray-900 tracking-tight">
              Experience the Yoffices Community
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Schedule a physical walk-through at Sector 45 Gurugram or connect with our corporate team.
            </p>
          </FadeUp>
          <FadeUp delay={0.3} className="pt-2">
            <Link
              href="/book-a-visit"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule VIP Visit</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
