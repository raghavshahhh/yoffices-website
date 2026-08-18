'use client';

import React from 'react';
import Link from 'next/link';
import {
  Home,
  CheckCircle2,
  Calendar,
  Bed,
  Wifi,
  Utensils,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';

export function WorkStayClient() {
  const marqueeItems = [
    'CLIMATE-CONTROLLED AC DORMITORY SUITES',
    'HIGH-SPEED 1GBPS FIBER WORKSPACES',
    'ZERO COMMUTE STRESS IN GURGAON',
    'IN-HOUSE CAFETERIA & NUTRITIOUS MEALS',
    '24/7 BIOMETRIC SECURITY & HOUSEKEEPING',
    'SECTOR 45 GURGAON LOCATION',
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <FadeUp delay={0.1}>
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ INTEGRATED CO-LIVING & COWORKING ]
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#111111] font-sans">
              Work + Stay. Live, Create & Rest Under One Roof.
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Eliminate traffic fatigue and exorbitant residential rents. Yoffices Work + Stay integrates high-standard dormitory accommodation with plug-and-play coworking infrastructure in Sector 45 Gurugram.
            </p>
          </FadeUp>

          <FadeUp delay={0.4} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/work-stay/dormitory"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Dormitory Options</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/book-a-visit?space=Work+Stay"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/80 hover:bg-white text-gray-900 font-bold text-xs border border-black/10 transition-all"
            >
              <Calendar className="w-4 h-4 text-[#C91D24]" />
              <span>Schedule Experience Visit</span>
            </Link>
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

      {/* 3 Pillars Breakdown */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 01 / 02 • THE COMPLETE ECOSYSTEM ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111] font-sans">
              Three Pillars of Seamless Living
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FadeUp delay={0.1} className="nestor-card p-8 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-[#C91D24] text-white flex items-center justify-center font-bold">
                <Bed className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 font-sans">01. Rest & Recharge</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Furnished, climate-controlled dormitory suites with private lockers, clean linen, daily sanitization, and hot water washrooms.
              </p>
            </FadeUp>

            <FadeUp delay={0.2} className="nestor-card p-8 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-[#111111] text-white flex items-center justify-center font-bold">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 font-sans">02. Deep Focus Work</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Step downstairs into high-speed fiber coworking zones, acoustic phone booths, and collaborative lounges 24/7 without stepping into traffic.
              </p>
            </FadeUp>

            <FadeUp delay={0.3} className="nestor-card p-8 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-[#C5A880] text-[#111111] flex items-center justify-center font-bold">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 font-sans">03. Dining & Community</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Gourmet cafeteria access, nutritious meal options, terrace lounges, and organic networking with fellow creators and founders.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Inquiry Lead Form */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ 02 / 02 • STAY PACKAGES ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 font-sans tracking-tight">
              Inquire About Work + Stay Living
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Get package details for weekly, monthly, and quarterly co-living memberships in Sector 45 Gurgaon.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <LeadForm
              defaultService="Work + Stay Hub"
              title="Book Your Co-Living Stay"
              subtitle="Submit your requirements to check immediate availability."
              source="Work + Stay Index"
            />
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
