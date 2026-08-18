'use client';

import React from 'react';
import Link from 'next/link';
import {
  Building2,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Wifi,
  Coffee,
  Shield,
  Users,
  MapPin,
  MessageCircle,
  PhoneCall,
  Clock,
  Zap,
} from 'lucide-react';
import { WorkspaceTypeData, LocationData } from '@/types';
import { LeadForm } from '@/components/forms/LeadForm';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';
import { getWhatsAppUrl } from '@/lib/utils';

interface WorkspaceDetailClientProps {
  workspace: WorkspaceTypeData;
  locations?: LocationData[];
}

export function WorkspaceDetailClient({
  workspace,
  locations = [],
}: WorkspaceDetailClientProps) {
  const marqueeItems = [
    '1GBPS REDUNDANT TATA & AIRTEL FIBER',
    '100% DIESEL GENERATOR POWER BACKUP',
    'HERMAN MILLER STYLE ERGONOMIC CHAIRS',
    'ACOUSTIC SOUNDPROOF DOUBLE-GLAZED GLASS',
    'RFID BIOMETRIC ACCESS CONTROL',
    'UNLIMITED GOURMET PANTRY BEVERAGES',
    'SECTOR 45 & 32 GURGAON HUBS',
  ];

  const whatsappUrl = getWhatsAppUrl(
    '+919876543210',
    `Hi Yoffices, I would like to inquire about ${workspace.name} availability in Gurgaon.`
  );

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <FadeUp delay={0.1}>
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ TURNKEY WORKSPACE SOLUTION ]
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#111111] font-sans">
              {workspace.name} in Gurugram
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {workspace.fullDesc}
            </p>
          </FadeUp>

          <FadeUp delay={0.4} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="px-5 py-3 rounded-2xl bg-white border border-black/10 text-xs font-bold text-gray-900 shadow-sm">
              From <strong className="text-[#C91D24] text-base font-sans font-black">{workspace.startingPrice}</strong> /{workspace.priceUnit}
            </div>

            <Link
              href={`/book-a-visit?space=${encodeURIComponent(workspace.name)}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Guided Tour</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Desk</span>
            </a>
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

      {/* Main Visual & Specifications Bento */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image Gallery Column */}
            <FadeUp delay={0.1} className="lg:col-span-7 relative h-[380px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl group border border-black/5">
              <img
                src={workspace.gallery?.[0] || workspace.heroImage}
                alt={workspace.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-black/80 text-white font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur-md">
                SECTOR 45 & 32 GURGAON
              </div>
            </FadeUp>

            {/* Specifications Column */}
            <FadeUp delay={0.2} className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="nestor-pill bg-black/5 font-mono text-[10px] text-gray-800">
                  [ 01 / 03 • SPECS & INCLUSIONS ]
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-sans">
                  Included Enterprise Features
                </h2>
              </div>

              {workspace.idealFor && (
                <div className="p-4 bg-white rounded-2xl border border-black/10 text-xs text-gray-700 shadow-sm">
                  <strong className="text-gray-900 font-bold block mb-0.5">Recommended Team Profile:</strong>
                  {workspace.idealFor}
                </div>
              )}

              <div className="space-y-3 pt-2">
                <span className="text-[10px] font-mono uppercase text-gray-400 block font-bold">
                  AMENITIES BREAKDOWN
                </span>
                <div className="grid grid-cols-1 gap-2.5">
                  {workspace.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-gray-800 bg-white p-3 rounded-xl border border-black/5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Available Center Locations */}
      {locations.length > 0 && (
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.08]">
          <div className="max-w-7xl mx-auto space-y-16">
            <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
              <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
                [ 02 / 03 • GURGAON CENTERS ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 font-sans tracking-tight">
                Available at These Locations
              </h2>
              <p className="text-sm text-gray-600">
                Schedule a physical tour or walkthrough to inspect available layouts.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {locations.slice(0, 2).map((loc, idx) => (
                <FadeUp
                  key={loc.id}
                  delay={idx * 0.1}
                  className="nestor-card p-6 sm:p-8 space-y-4 shadow-lg flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-red-50 text-[#C91D24]">
                        {loc.status}
                      </span>
                      <span className="text-xs font-semibold text-gray-500 font-mono">
                        Sector {loc.slug.includes('45') ? '45' : '32'}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 font-sans">{loc.name}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{loc.workspaceAddress}</p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <Link
                      href={`/book-a-visit?location=${encodeURIComponent(loc.name)}&space=${encodeURIComponent(workspace.name)}`}
                      className="w-full py-3 px-4 rounded-xl bg-[#111111] hover:bg-black text-white text-xs font-bold text-center block transition-all"
                    >
                      Book Tour at {loc.name}
                    </Link>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inquiry Lead Form */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F0EFE9]">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ 03 / 03 • RESERVE YOUR SPACE ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight">
              Request {workspace.name} Pricing
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Get immediate availability status and customized floor layout plans for your team.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <LeadForm
              defaultService={workspace.name}
              title={`Reserve ${workspace.name}`}
              subtitle="Submit details for same-day quotation and seat reservation."
              source={`Workspace Detail (${workspace.name})`}
            />
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
