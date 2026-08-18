'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  ZoomIn,
  Users,
  Shield,
  Layers,
  Filter,
} from 'lucide-react';
import { WorkspaceTypeData } from '@/types';
import { LeadForm } from '@/components/forms/LeadForm';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';
import { ImageLightboxModal, LightboxImage } from '@/components/ui/ImageLightboxModal';

interface WorkspacesListClientProps {
  workspaces: WorkspaceTypeData[];
}

export function WorkspacesListClient({ workspaces }: WorkspacesListClientProps) {
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const marqueeItems = [
    'PRIVATE ACOUSTIC CABINS',
    'DEDICATED ERGONOMIC DESKS',
    'FLEXI HOT DESKING',
    'PRESENTATION BOARDROOMS',
    '1GBPS DEDICATED FIBER',
    '100% DG POWER BACKUP',
    'SECTOR 45 & 32 GURGAON HUBS',
  ];

  const galleryImages: LightboxImage[] = workspaces.map((ws) => ({
    src: ws.heroImage,
    title: ws.name,
    desc: `Starting from ${ws.startingPrice}/${ws.priceUnit} in Sector 45 Gurgaon`,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const filteredWorkspaces = workspaces.filter((ws) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'CABIN') return ws.slug.includes('private') || ws.slug.includes('cabin');
    if (selectedFilter === 'DESK') return ws.slug.includes('workstation') || ws.slug.includes('coworking');
    if (selectedFilter === 'MEETING') return ws.slug.includes('meeting') || ws.slug.includes('boardroom');
    return true;
  });

  const comparisonRows = [
    {
      feature: 'Capacity / Team Size',
      privateOffice: '1 to 50+ Seats',
      workstation: '1 to 20 Desks',
      coworking: '1 to 10 Seats',
      meetingRoom: '4 to 16 Seats',
    },
    {
      feature: 'Fiber Internet Speed',
      privateOffice: '1Gbps LAN + Wi-Fi',
      workstation: '1Gbps Wi-Fi + LAN',
      coworking: '1Gbps High-Speed Wi-Fi',
      meetingRoom: '1Gbps + 4K Screen Casting',
    },
    {
      feature: 'Access Control',
      privateOffice: '24/7 RFID Biometric',
      workstation: '24/7 Smart Biometric',
      coworking: 'Flexible Business Hours',
      meetingRoom: 'On-Demand Slot Booking',
    },
    {
      feature: 'Meeting Room Credits',
      privateOffice: 'Unlimited / Free Credits',
      workstation: 'Discounted Member Rates',
      coworking: 'Hourly Add-on',
      meetingRoom: 'Direct Hourly / Day Pass',
    },
    {
      feature: 'Branding on Cabin',
      privateOffice: 'Included (Custom Logo)',
      workstation: 'Directory Listing',
      coworking: 'Not Applicable',
      meetingRoom: 'Presentation Screen',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      <ImageLightboxModal
        images={galleryImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      {/* Hero Header */}
      <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-5 sm:space-y-6">
          <FadeUp delay={0.05}>
            <span className="nestor-pill bg-black/5 font-mono text-[10px] sm:text-[11px] text-gray-800">
              [ 2026 COMMERCIAL WORKSPACE CATALOG ]
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-[#111111] font-sans leading-tight">
              Workspaces Built for Focus & Velocity
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
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
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          {/* Category Filter Pills */}
          <FadeUp delay={0.05} className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-4">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'ALL', label: 'All Workspaces' },
                { id: 'CABIN', label: 'Private Cabins' },
                { id: 'DESK', label: 'Workstations & Coworking' },
                { id: 'MEETING', label: 'Meeting Rooms' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedFilter === tab.id
                      ? 'bg-[#111111] text-white shadow-sm'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-black/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <Link
              href="/book-a-visit"
              className="text-xs font-bold text-[#C91D24] hover:underline inline-flex items-center gap-1"
            >
              <span>Schedule Walkthrough →</span>
            </Link>
          </FadeUp>

          {filteredWorkspaces.map((ws, index) => {
            const isEven = index % 2 === 0;
            const itemNumber = (index + 1).toString().padStart(2, '0');

            return (
              <FadeUp
                key={ws.id}
                delay={0.08}
                className="nestor-card p-6 sm:p-10 shadow-xl overflow-hidden bg-white"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image Column with Lightbox Trigger */}
                  <div
                    onClick={() => openLightbox(index)}
                    className={`lg:col-span-7 relative h-[320px] sm:h-[440px] rounded-3xl overflow-hidden group shadow-md cursor-pointer border border-black/10 ${
                      !isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <img
                      src={ws.heroImage}
                      alt={ws.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 bg-black/80 text-white font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur-md">
                      From {ws.startingPrice} /{ws.priceUnit}
                    </div>
                    <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white text-xs flex items-center justify-between">
                      <span className="font-sans font-bold">{ws.name}</span>
                      <span className="text-[11px] text-gray-300">Tap to Zoom</span>
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
                        [ {itemNumber} • {ws.name.toUpperCase()} ]
                      </span>
                      <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-sans">
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

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Link
                        href={`/book-a-visit?space=${encodeURIComponent(ws.name)}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-md transition-all hover:scale-105 active:scale-95"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Site Tour</span>
                      </Link>

                      <Link
                        href={`/workspaces/${ws.slug}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#111111] hover:bg-black text-white font-bold text-xs transition-all hover:scale-105 active:scale-95"
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

      {/* Feature Comparison Matrix */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.08]">
        <div className="max-w-6xl mx-auto space-y-12">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ COMPARISON MATRIX ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 font-sans">
              Compare Workspace Formats
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="overflow-x-auto rounded-3xl border border-black/10 shadow-xl bg-white">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#111111] text-white font-sans text-xs">
                    <th className="p-4 sm:p-5 font-bold">Feature</th>
                    <th className="p-4 sm:p-5 font-bold text-[#C5A880]">Private Office</th>
                    <th className="p-4 sm:p-5 font-bold">Workstations</th>
                    <th className="p-4 sm:p-5 font-bold">Coworking</th>
                    <th className="p-4 sm:p-5 font-bold">Meeting Rooms</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-gray-900">{row.feature}</td>
                      <td className="p-4 sm:p-5 font-semibold text-[#C91D24]">{row.privateOffice}</td>
                      <td className="p-4 sm:p-5 text-gray-700">{row.workstation}</td>
                      <td className="p-4 sm:p-5 text-gray-700">{row.coworking}</td>
                      <td className="p-4 sm:p-5 text-gray-700">{row.meetingRoom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Inquiry Lead Form */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F0EFE9]">
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
