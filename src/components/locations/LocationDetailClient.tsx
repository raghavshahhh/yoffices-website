'use client';

import React, { useState } from 'react';
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
  ZoomIn,
} from 'lucide-react';
import { LocationData } from '@/types';
import { LeadForm } from '@/components/forms/LeadForm';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';
import { ImageLightboxModal, LightboxImage } from '@/components/ui/ImageLightboxModal';

interface LocationDetailClientProps {
  location: LocationData;
}

export function LocationDetailClient({ location }: LocationDetailClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const marqueeItems = [
    `${location.name.toUpperCase()} HUB`,
    '1GBPS HIGH-SPEED FIBER',
    '100% DG POWER BACKUP',
    'PRIVATE CABINS & WORKSTATIONS',
    'MEETING ROOMS & BOARDROOMS',
    '24/7 BIOMETRIC SMART ACCESS',
    'NEAR METRO CORRIDOR GURGAON',
  ];

  const galleryImages: LightboxImage[] = location.photos.map((photo, idx) => ({
    src: photo,
    title: `${location.name} - View ${idx + 1}`,
    desc: `Actual center photograph at ${location.workspaceAddress}`,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Lightbox Modal */}
      <ImageLightboxModal
        images={galleryImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      {/* Hero Header */}
      <section className="relative pt-8 pb-14 sm:pt-14 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-5">
          <FadeUp delay={0.05}>
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[10px] sm:text-[11px]">
              [ {location.city.toUpperCase()} • {location.status.toUpperCase()} ]
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.035em] text-[#111111] font-sans leading-tight">
              {location.name}
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {location.area}
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href={`/book-a-visit?location=${encodeURIComponent(location.name)}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Guided Visit</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <a
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-black/10 text-gray-900 font-bold text-xs shadow-xs transition-all hover:bg-gray-50"
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
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Address Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeUp delay={0.05} className="nestor-card p-6 sm:p-8 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-[#C91D24] font-mono font-bold text-xs uppercase">
                <MapPin className="w-4 h-4" /> [ OPERATIONAL WORKSPACE ]
              </div>
              <p className="text-base font-bold text-gray-900 font-sans tracking-tight">{location.workspaceAddress}</p>
              <p className="text-xs text-gray-500">Primary entrance for member access, tours, and day-to-day operations.</p>
            </FadeUp>

            <FadeUp delay={0.1} className="nestor-card p-6 sm:p-8 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-gray-700 font-mono font-bold text-xs uppercase">
                <Building2 className="w-4 h-4" /> [ CORPORATE & COMPLIANCE ]
              </div>
              <p className="text-base font-bold text-gray-900 font-sans tracking-tight">
                {location.corporateAddress || location.workspaceAddress}
              </p>
              <p className="text-xs text-gray-500">Designated for legal contracts, ROC filings, and corporate governance.</p>
            </FadeUp>
          </div>

          {/* Photo Gallery Grid with Lightbox Triggers */}
          <div className="space-y-6">
            <FadeUp>
              <span className="nestor-pill bg-black/5 font-mono text-[10px] text-gray-800">
                [ 01 / 02 • CENTER GALLERY ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-sans tracking-tight mt-2">
                Center Photography & Interior
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {location.photos.map((photo: string, index: number) => (
                <FadeUp
                  key={index}
                  delay={index * 0.08}
                  onClick={() => openLightbox(index)}
                  className="relative h-64 rounded-3xl overflow-hidden shadow-md group border border-black/5 cursor-pointer"
                >
                  <img
                    src={photo}
                    alt={`${location.name} interior ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 rounded-full bg-black/70 text-white backdrop-blur-md">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
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
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 font-sans tracking-tight">
                  Available Amenities
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {location.amenities.map((amenity: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-black/5 text-xs text-gray-800 font-medium shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="line-clamp-1">{amenity}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Google Map Embed */}
            <FadeUp delay={0.15} className="lg:col-span-6 space-y-4">
              <div className="relative h-[320px] rounded-3xl overflow-hidden shadow-xl border border-black/10 bg-gray-200">
                <iframe
                  src={location.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${location.name} Map`}
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F0EFE9]">
        <div className="max-w-3xl mx-auto space-y-6">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[10px]">
              [ VISIT & TOUR ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-sans tracking-tight">
              Schedule Tour at {location.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Meet our center manager for a customized tour and seat allocation quote.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <LeadForm
              defaultLocation={location.name}
              title={`Book Visit at ${location.name}`}
              subtitle="We will confirm your time slot and host a personalized center walkthrough."
              source={`Location Page: ${location.name}`}
            />
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
