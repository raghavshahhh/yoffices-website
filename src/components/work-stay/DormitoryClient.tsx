'use client';

import React from 'react';
import Link from 'next/link';
import {
  Compass,
  CheckCircle2,
  Calendar,
  Bed,
  Wifi,
  Coffee,
  ArrowRight,
  ShieldCheck,
  Utensils,
} from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';

export function DormitoryClient() {
  const marqueeItems = [
    'AIR-CONDITIONED DORMITORY LIVING PODS',
    'SECTOR 45 GURGAON LOCATION',
    '24/7 COWORKING & PHONE BOOTHS',
    '1GBPS DUAL-BAND WI-FI',
    'DAILY HOUSEKEEPING & FRESH LINEN',
    'IN-HOUSE MEAL SUBSCRIPTIONS',
  ];

  const facilities = [
    {
      title: 'Climate-Controlled AC Pods',
      desc: 'Individual bunk pods with privacy curtains, charging ports, and reading lamps.',
      icon: Bed,
    },
    {
      title: 'Secure Lockable Closets',
      desc: 'Personal key/digital code lockers to keep laptops and luggage secure.',
      icon: ShieldCheck,
    },
    {
      title: '24/7 Coworking Access',
      desc: 'Walk downstairs straight into ergonomic workstations with 1Gbps fiber internet.',
      icon: Wifi,
    },
    {
      title: 'Cafeteria & Meal Plans',
      desc: 'Healthy home-style breakfast, lunch, and dinner plans prepared on-site.',
      icon: Utensils,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <FadeUp delay={0.1}>
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ SECTOR 45 GURUGRAM FACILITY ]
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#111111] font-sans">
              Co-Living Dormitory Suites
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comfortable, clean, and fully-managed dormitory living coupled with full coworking membership in Sector 45 Gurugram. No brokerage, no heavy deposits, zero commute.
            </p>
          </FadeUp>

          <FadeUp delay={0.4} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="px-5 py-3 rounded-2xl bg-white border border-black/10 text-xs font-bold text-gray-900 shadow-sm">
              From <strong className="text-[#C91D24] text-base font-sans font-black">₹9,999</strong> /month (Stay + Work)
            </div>

            <Link
              href="/book-a-visit?space=Dormitory"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Dormitory Tour</span>
              <ArrowRight className="w-4 h-4 ml-1" />
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

      {/* Facilities Grid */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 01 / 02 • SUITE AMENITIES ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111] font-sans">
              Dormitory Amenities & Inclusions
            </h2>
            <p className="text-sm text-gray-600">
              Everything you need for productive work and restful living in central Gurgaon.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, idx) => (
              <FadeUp
                key={idx}
                delay={idx * 0.1}
                className="nestor-card p-6 sm:p-8 space-y-3 shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#C91D24] flex items-center justify-center font-bold">
                  <fac.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-sans">{fac.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{fac.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Lead Form */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ 02 / 02 • RESERVATION ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 font-sans tracking-tight">
              Reserve Your Dormitory Bedding
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Tell us your check-in date and duration to check immediate bed availability.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <LeadForm
              defaultService="Dormitory Co-Living"
              title="Book Your Dormitory Spot"
              subtitle="Submit your requirements to check immediate availability."
              source="Dormitory Page"
            />
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
