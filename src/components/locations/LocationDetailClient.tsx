'use client';

import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Building2,
  CheckCircle2,
  Calendar,
  ExternalLink,
  ArrowRight,
  Phone,
  Mail,
  Navigation,
} from 'lucide-react';
import { LocationData } from '@/types';
import { LeadForm } from '@/components/forms/LeadForm';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';

interface LocationDetailClientProps {
  location: LocationData;
}

export function LocationDetailClient({ location }: LocationDetailClientProps) {
  const marqueeItems = [
    `${location.name.toUpperCase()} HUB`,
    '1GBPS HIGH-SPEED FIBER',
    '100% DG POWER BACKUP',
    'PRIVATE CABINS & WORKSTATIONS',
    'MEETING ROOMS & BOARDROOMS',
    '24/7 BIOMETRIC SMART ACCESS',
    'NEAR METRO CORRIDOR GURGAON',
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <FadeUp delay={0.1}>
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ {location.city.toUpperCase()} • {location.status.toUpperCase()} ]
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#111111] font-sans">
              {location.name}
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {location.area}
            </p>
          </FadeUp>

          <FadeUp delay={0.4} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href={`/book-a-visit?location=${encodeURIComponent(location.name)}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Guided Visit</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <a
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white border border-black/10 text-gray-900 font-bold text-xs shadow-sm transition-all"
            >
              <Navigation className="w-4 h-4 text-[#C91D24]" />
              <span>Open in Google Maps</span>
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

      {/* Address & Photos Showcase */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Address Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeUp delay={0.1} className="nestor-card p-6 sm:p-8 space-y-2 shadow-md">
              <div className="flex items-center gap-2 text-[#C91D24] font-mono font-bold text-xs uppercase">
                <MapPin className="w-4 h-4" /> [ OPERATIONAL WORKSPACE ]
              </div>
              <p className="text-base font-bold text-gray-900 font-sans">{location.workspaceAddress}</p>
              <p className="text-xs text-gray-500">Primary entrance for member access, tours, and day-to-day operations.</p>
            </FadeUp>

            <FadeUp delay={0.2} className="nestor-card p-6 sm:p-8 space-y-2 shadow-md">
              <div className="flex items-center gap-2 text-gray-700 font-mono font-bold text-xs uppercase">
                <Building2 className="w-4 h-4" /> [ CORPORATE & COMPLIANCE ]
              </div>
              <p className="text-base font-bold text-gray-900 font-sans">
                {location.corporateAddress || location.workspaceAddress}
              </p>
              <p className="text-xs text-gray-500">Designated for legal contracts, ROC filings, and corporate governance.</p>
            </FadeUp>
          </div>

          {/* Photo Gallery Grid */}
          <div className="space-y-6">
            <FadeUp>
              <span className="nestor-pill bg-black/5 font-mono text-[10px] text-gray-800">
                [ 01 / 02 • CENTER GALLERY ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-sans mt-2">
                Center Photography & Interior
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {location.photos.map((photo: string, index: number) => (
                <FadeUp
                  key={index}
                  delay={index * 0.1}
                  className="relative h-64 rounded-3xl overflow-hidden shadow-lg group border border-black/5"
                >
                  <img
                    src={photo}
                    alt={`${location.name} interior ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Amenities & Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-6">
            {/* Amenities List */}
            <FadeUp delay={0.1} className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="nestor-pill bg-black/5 font-mono text-[10px] text-gray-800">
                  [ 02 / 02 • INFRASTRUCTURE ]
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 font-sans">
                  Available Amenities
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {location.amenities.map((amenity: string, idx: number) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-black/5 flex items-center gap-2.5 text-xs font-semibold text-gray-800 shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C91D24] shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Google Map Embed */}
            <FadeUp delay={0.2} className="lg:col-span-6 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 font-sans">
                Location & Directions
              </h3>

              <div className="h-80 w-full rounded-3xl overflow-hidden border border-black/10 shadow-xl">
                <iframe
                  src={location.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${location.name} Map`}
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Inquiry Lead Form */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ TOUR RESERVATION ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 font-sans tracking-tight">
              Schedule a Visit at {location.name}
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Our center manager will prepare a personalized walkthrough for your team.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <LeadForm
              defaultService="Private Office"
              defaultLocation={location.name}
              title={`Tour ${location.name}`}
              subtitle="Submit your preferred time slot for same-day confirmation."
              source={`Location Detail (${location.name})`}
            />
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
