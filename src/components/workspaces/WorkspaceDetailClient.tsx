'use client';

import React, { useState } from 'react';
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
  ZoomIn,
} from 'lucide-react';
import { WorkspaceTypeData, LocationData } from '@/types';
import { LeadForm } from '@/components/forms/LeadForm';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';
import { getWhatsAppUrl } from '@/lib/utils';
import { ImageLightboxModal, LightboxImage } from '@/components/ui/ImageLightboxModal';

interface WorkspaceDetailClientProps {
  workspace: WorkspaceTypeData;
  locations?: LocationData[];
}

export function WorkspaceDetailClient({
  workspace,
  locations = [],
}: WorkspaceDetailClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const marqueeItems = [
    '1GBPS REDUNDANT TATA & AIRTEL FIBER',
    '100% DIESEL GENERATOR POWER BACKUP',
    'HERMAN MILLER STYLE ERGONOMIC CHAIRS',
    'ACOUSTIC SOUNDPROOF DOUBLE-GLAZED GLASS',
    'RFID BIOMETRIC ACCESS CONTROL',
    'UNLIMITED GOURMET PANTRY BEVERAGES',
    'SECTOR 45 & 32 GURGAON HUBS',
  ];

  const galleryImages: LightboxImage[] = (workspace.gallery && workspace.gallery.length > 0
    ? workspace.gallery
    : [workspace.heroImage]
  ).map((imgUrl, idx) => ({
    src: imgUrl,
    title: `${workspace.name} (View ${idx + 1})`,
    desc: `Actual center interior photo at Yoffices Sector 45 Gurgaon`,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const whatsappUrl = getWhatsAppUrl(
    '+919999355847',
    `Hi Yoffices, I would like to inquire about ${workspace.name} availability in Gurgaon.`
  );

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
              [ TURNKEY WORKSPACE SOLUTION ]
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.035em] text-[#111111] font-sans leading-tight">
              {workspace.name} in Gurugram
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {workspace.fullDesc}
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="px-5 py-3 rounded-2xl bg-white border border-black/10 text-xs font-bold text-gray-900 shadow-xs">
              From <strong className="text-[#C91D24] text-base font-sans font-black">{workspace.startingPrice}</strong> /{workspace.priceUnit}
            </div>

            <Link
              href={`/book-a-visit?space=${encodeURIComponent(workspace.name)}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Guided Tour</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-all"
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

      {/* Visual Showcase & Specs Bento */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Gallery / Visual Column with Lightbox Trigger */}
            <FadeUp
              delay={0.1}
              onClick={() => openLightbox(0)}
              className="lg:col-span-7 relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-black/10 group cursor-pointer"
            >
              <img
                src={workspace.heroImage}
                alt={workspace.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-black/80 text-white font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur-md">
                SECTOR 45 & 32 GURGAON
              </div>
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3 rounded-2xl text-white text-xs flex items-center justify-between">
                <span>Click image to view high-resolution gallery</span>
                <ZoomIn className="w-4 h-4 text-[#C5A880]" />
              </div>
            </FadeUp>

            {/* Specifications Column */}
            <FadeUp delay={0.15} className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="nestor-pill bg-black/5 font-mono text-[10px] text-gray-800">
                  [ 01 / 03 • SPECS & INCLUSIONS ]
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-sans tracking-tight">
                  Included Enterprise Features
                </h2>
              </div>

              {workspace.idealFor && (
                <div className="p-4 bg-white rounded-2xl border border-black/10 text-xs text-gray-700 shadow-xs">
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
                    <div key={i} className="flex items-center gap-2.5 text-xs text-gray-800 bg-white p-3 rounded-xl border border-black/5 shadow-xs">
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
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F0EFE9] border-b border-black/[0.08]">
          <div className="max-w-7xl mx-auto space-y-12">
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
                  className="nestor-card overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl"
                >
                  <div className="relative h-48 bg-gray-200">
                    <img
                      src={loc.photos[0]}
                      alt={loc.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 text-white font-mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full">
                      {loc.city}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 font-sans tracking-tight">{loc.name}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2">{loc.workspaceAddress}</p>
                    <div className="pt-2">
                      <Link
                        href={`/locations/${loc.slug}`}
                        className="text-xs font-bold text-[#C91D24] hover:underline inline-flex items-center gap-1"
                      >
                        <span>View Location Hub</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inquiry Form */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F0EFE9]">
        <div className="max-w-3xl mx-auto space-y-6">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[10px] text-gray-800">
              [ 03 / 03 • RESERVE YOUR SEATS ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-sans tracking-tight">
              Request Pricing & Availability
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Submit your team requirements for instant quotation and slot reservation.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <LeadForm
              defaultService={workspace.name}
              title={`Inquire for ${workspace.name}`}
              subtitle="Our workspace specialists will prepare layout options within 2 hours."
              source={`Workspace Detail: ${workspace.name}`}
            />
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
