'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Calendar, Sparkles } from 'lucide-react';
import { WorkspaceTypeData } from '@/types';
import { LeadForm } from '@/components/forms/LeadForm';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';

interface WorkspacesListClientProps {
  workspaces: WorkspaceTypeData[];
}

export function WorkspacesListClient({ workspaces }: WorkspacesListClientProps) {
  const marqueeItems = [
    'PRIVATE ACOUSTIC CABINS',
    'DEDICATED ERGONOMIC DESKS',
    'FLEXI HOT DESKING',
    'PRESENTATION BOARDROOMS',
    '1GBPS DEDICATED FIBER',
    '100% DG POWER BACKUP',
    'SECTOR 45 GURGAON FLAGSHIP',
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <FadeUp delay={0.1}>
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 2026 COMMERCIAL WORKSPACE CATALOG ]
            </span>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#111111] font-sans">
              Workspaces Built for Focus & Velocity
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From single agile workstations to bespoke 50-seat corporate private cabins, experience turnkey enterprise infrastructure in Gurgaon with zero capital expenditure.
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

      {/* Workspaces List Grid */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
          {workspaces.map((ws, index) => {
            const isEven = index % 2 === 0;
            const itemNumber = (index + 1).toString().padStart(2, '0');

            return (
              <FadeUp
                key={ws.id}
                delay={0.1}
                className="nestor-card p-6 sm:p-10 shadow-xl overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-7 relative h-[320px] sm:h-[440px] rounded-2xl overflow-hidden group shadow-md ${
                      !isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <img
                      src={ws.heroImage}
                      alt={ws.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-black/80 text-white font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur-md">
                      From {ws.startingPrice} /{ws.priceUnit}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-5 space-y-6 ${
                      !isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="space-y-2">
                      <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[10px]">
                        [ {itemNumber} / 05 • {ws.name.toUpperCase()} ]
                      </span>
                      <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-gray-900 font-sans">
                        {ws.name}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {ws.fullDesc}
                    </p>

                    {ws.idealFor && (
                      <div className="p-4 bg-[#F0EFE9] rounded-2xl border border-black/5 text-xs text-gray-700">
                        <strong className="text-gray-900 font-bold">Ideal For:</strong>{' '}
                        {ws.idealFor}
                      </div>
                    )}

                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      <span className="text-[10px] font-mono uppercase text-gray-400 block font-bold">
                        INCLUDED AMENITIES
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                        {ws.features.slice(0, 4).map((feat: string, i: number) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-4">
                      <Link
                        href={`/book-a-visit?space=${encodeURIComponent(ws.name)}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Site Tour</span>
                      </Link>

                      <Link
                        href={`/workspaces/${ws.slug}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111111] hover:bg-black text-white font-bold text-xs transition-all"
                      >
                        <span>Full Specs & Pricing</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* Inquiry Lead Form */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ TAILORED FLOORPLANS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 font-sans tracking-tight">
              Request Custom Cabin Layout
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Tell us your team size and moving timeline to get customized pricing and layouts.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <LeadForm
              defaultService="Private Office"
              title="Speak with a Workspace Specialist"
              subtitle="Get exact quotes for Sector 45 or Sector 32 Gurgaon within 30 minutes."
              source="Workspaces Index"
            />
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
