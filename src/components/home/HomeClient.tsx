'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Coins,
  Compass,
  FileCheck,
  Globe,
  Layers,
  MapPin,
  MessageCircle,
  Play,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  UserCheck,
  Users,
  Video,
  Wifi,
  Sparkle,
  ExternalLink,
  ZoomIn,
} from 'lucide-react';
import {
  WorkspaceTypeData,
  LocationData,
  FranchiseModelData,
  MediaVideoData,
  BlogPostData,
  TestimonialData,
  FAQData,
  SiteSettings,
} from '@/types';
import { formatINR, getWhatsAppUrl } from '@/lib/utils';
import { FranchiseCalculator } from '@/components/franchise/FranchiseCalculator';
import { LeadForm } from '@/components/forms/LeadForm';
import { Marquee } from '@/components/ui/Marquee';
import {
  FadeUp,
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/motion/MotionWrapper';
import { FounderVideoShowcase } from '@/components/home/FounderVideoShowcase';
import { ImageLightboxModal, LightboxImage } from '@/components/ui/ImageLightboxModal';
import { motion, AnimatePresence } from 'motion/react';

interface HomeClientProps {
  workspaces: WorkspaceTypeData[];
  locations: LocationData[];
  franchiseModels: FranchiseModelData[];
  mediaVideos: MediaVideoData[];
  blogPosts: BlogPostData[];
  testimonials: TestimonialData[];
  faqs: FAQData[];
  settings: SiteSettings;
}

export function HomeClient({
  workspaces,
  locations,
  franchiseModels,
  mediaVideos,
  blogPosts,
  testimonials,
  faqs,
  settings,
}: HomeClientProps) {
  const [activeSpaceTab, setActiveSpaceTab] = useState<string>(
    workspaces[0]?.slug || 'private-office'
  );
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqs[0]?.id || 'faq-1');

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const selectedWorkspace =
    workspaces.find((w) => w.slug === activeSpaceTab) || workspaces[0];

  const heroMarquee = [
    'SECTOR 45 GURGAON FLAGSHIP',
    '1GBPS DEDICATED FIBER',
    '100% DG POWER BACKUP',
    '₹5,000/MO FRANCHISE CASH FLOW',
    'ACOUSTIC CABINS & BOARDROOMS',
    'HARYANA GST & ROC REGISTRATION',
    '24/7 BIOMETRIC SMART ACCESS',
    'WORK + STAY CO-LIVING SUITES',
    'SECTOR 32 INSTITUTIONAL DESK',
  ];

  const centerPhotos: LightboxImage[] = [
    {
      src: '/images/center/executive-cabin-acoustic.jpg',
      title: 'Acoustic Wood-Slat Executive Cabin',
      desc: 'Sound-isolated private office with custom wood slating & modern ambient lighting in Sector 45 Gurgaon',
    },
    {
      src: '/images/center/director-private-cabin.jpg',
      title: 'Director Executive Suite',
      desc: 'Dedicated private director office with executive wood desk, AC & acoustic wall paneling',
    },
    {
      src: '/images/center/manager-executive-suite.jpg',
      title: 'Manager Executive Suite & Modern Lighting',
      desc: 'Multi-seat manager suite with modern tri-spoke LED lighting, circular pendant lamps, and acoustic slats',
    },
    {
      src: '/images/center/cafe-pantry-greenwall.jpg',
      title: 'Gourmet Pantry & Vertical Garden Green Wall',
      desc: 'Lush biophilic green wall with bean-to-cup automated coffee machine, water dispenser & pantry bar',
    },
    {
      src: '/images/center/breakout-coffee-zone.jpg',
      title: 'Artisan Coffee & Breakout Hub',
      desc: 'Casual refreshment and discussion bar for impromptu founder and team breaks',
    },
    {
      src: '/images/center/meeting-cabin.jpg',
      title: 'Circular Ambient LED Discussion Cabin',
      desc: 'Executive boardroom fitted with presentation display and magnetic whiteboard',
    },
    {
      src: '/images/center/entrance-biometric.jpg',
      title: 'RFID Biometric Glass Entrance Corridor',
      desc: '24/7 keyless secure smart card & biometric entry corridor to Yoffices workspaces',
    },
    {
      src: '/images/center/lift-lobby-corridor.jpg',
      title: 'High-Speed Elevator Lobby & Reception Access',
      desc: 'Premium Italian granite lift lobby connecting all workspace floors in Sector 45',
    },
    {
      src: '/images/center/team-cabin.jpg',
      title: 'Private Team Suite',
      desc: 'Ergonomic high-back mesh seating & dedicated LAN network cabling',
    },
    {
      src: '/images/center/workspace-layout.jpg',
      title: 'Collaborative Open Workstations',
      desc: 'Integrated open workstations and focus breakout pods',
    },
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Lightbox Modal */}
      <ImageLightboxModal
        images={centerPhotos}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      {/* ========================================================= */}
      {/* 1. HERO SECTION (Compact, Aligned & High-End Framer)      */}
      {/* ========================================================= */}
      <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08] overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          {/* Top Tag & Monospace Pill */}
          <FadeUp delay={0.05} className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="nestor-pill bg-black/5 border-black/10 text-gray-900 font-mono text-[10px] sm:text-[11px]">
                <span className="w-2 h-2 rounded-full bg-[#C91D24] animate-ping" />
                [ GURUGRAM • SECTOR 45 & 32 ]
              </span>
              <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[10px] sm:text-[11px]">
                2026 MANAGED SPACES
              </span>
            </div>

            <div className="text-[11px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              GURGAON METRO CORRIDOR
            </div>
          </FadeUp>

          {/* Main Headline & Hero Action in Perfect Alignment */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
            <FadeUp delay={0.1} className="lg:col-span-8 space-y-2.5">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-[#111111] leading-[0.98] font-sans">
                Spaces crafted with intention.
              </h1>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl font-normal leading-relaxed">
                Light-filled private cabins, ergonomic workstations, and asset-backed commercial franchise opportunities engineered for ambitious companies.
              </p>
            </FadeUp>

            <FadeUp delay={0.15} className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 justify-end">
              <Link
                href="/book-a-visit"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a Walkthrough</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              <Link
                href="/franchise"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#111111] hover:bg-black text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
              >
                <Coins className="w-4 h-4 text-[#C5A880]" />
                <span>Franchise (₹5,000/mo Yield)</span>
              </Link>
            </FadeUp>
          </div>

          {/* Large Hero Visual Grid using REAL Office Photos with Lightbox Click */}
          <FadeUp delay={0.2} className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 pt-2">
            <div
              onClick={() => openLightbox(0)}
              className="md:col-span-8 relative h-[360px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border border-black/5 group cursor-pointer"
            >
              <img
                src="/images/center/executive-cabin-acoustic.jpg"
                alt="Yoffices Executive Cabins Sector 45 Gurgaon"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              
              {/* Zoom hint button */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div className="space-y-1">
                  <span className="nestor-pill-dark font-mono text-[10px]">
                    ACTUAL PHOTO • SECTOR 45 FLAGSHIP
                  </span>
                  <div className="text-xl sm:text-2xl font-bold font-sans">
                    Acoustic Wood-Slat Executive Cabins
                  </div>
                  <p className="text-xs text-gray-300 hidden sm:block">
                    Turnkey enterprise seating with dedicated 1Gbps redundant fiber lines and 100% DG power backup.
                  </p>
                </div>
                <div
                  className="w-11 h-11 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center backdrop-blur-md transition-all shrink-0"
                >
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-4 sm:gap-5">
              <div
                onClick={() => openLightbox(4)}
                className="relative h-[215px] rounded-3xl overflow-hidden shadow-lg border border-black/5 group cursor-pointer"
              >
                <img
                  src="/images/center/workspace-layout.jpg"
                  alt="Workstations Sector 45 Actual Photo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm font-bold">Dedicated Workstations</div>
                  <div className="text-xs text-[#C5A880] font-mono">From ₹5,500 / seat</div>
                </div>
              </div>

              <div className="relative h-[225px] rounded-3xl bg-[#111111] text-white p-6 flex flex-col justify-between border border-black/10 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="nestor-pill-dark font-mono text-[10px]">
                    FRANCHISE CASH FLOW
                  </span>
                  <Coins className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div>
                  <div className="text-3xl font-black font-sans text-white tracking-tight">
                    ₹5,000<span className="text-xs text-gray-400 font-normal"> / mo</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    On ₹5L Workstation Unit • 3 Post-Dated Security Cheques
                  </p>
                </div>
                <Link
                  href="/franchise"
                  className="text-xs font-bold text-[#C5A880] hover:text-white inline-flex items-center gap-1"
                >
                  <span>Explore 3 Models</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. LIVE INFINITE MARQUEE TICKER (Socio Space Style)       */}
      {/* ========================================================= */}
      <div className="bg-[#111111] text-white py-1">
        <Marquee
          items={heroMarquee}
          speed={60}
          className="border-none py-3"
          itemClassName="text-white/90 hover:text-white transition-colors text-xs sm:text-sm font-mono tracking-widest"
          separator={<span className="text-[#C91D24] text-xs font-bold">✦</span>}
        />
      </div>

      {/* ========================================================= */}
      {/* 3. WORKSPACES SHOWCASE (Tabbed Dynamic Slider)            */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <FadeUp className="space-y-2">
              <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-700">
                [ 01 / 05 • WORKSPACE CATEGORIES ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight">
                From quiet nooks to vibrant hubs.
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl">
                Choose the exact configuration that fits your team: lockable private cabins, assigned desks, flexible hot desks, or 4K boardrooms.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <Link
                href="/workspaces"
                className="text-xs font-bold text-[#C91D24] hover:underline inline-flex items-center gap-1"
              >
                <span>Browse All Categories</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeUp>
          </div>

          {/* Interactive Tab Switcher */}
          <FadeUp delay={0.15} className="flex flex-wrap gap-2 border-b border-black/10 pb-4">
            {workspaces.map((ws) => (
              <button
                key={ws.id}
                onClick={() => setActiveSpaceTab(ws.slug)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-200 cursor-pointer ${
                  activeSpaceTab === ws.slug
                    ? 'bg-[#111111] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-black/5'
                }`}
              >
                {ws.name}
              </button>
            ))}
          </FadeUp>

          {/* Active Workspace Feature Card */}
          {selectedWorkspace && (
            <FadeUp delay={0.2}>
              <div className="nestor-card p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase font-bold text-gray-400">
                      SELECTED SOLUTION
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-black text-gray-900 font-sans tracking-tight">
                      {selectedWorkspace.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {selectedWorkspace.fullDesc}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F0EFE9] border border-black/5 space-y-2">
                    <div className="text-xs text-gray-500 font-mono">STARTING RATE</div>
                    <div className="text-2xl sm:text-3xl font-black text-[#C91D24] font-sans tracking-tight">
                      {selectedWorkspace.startingPrice}{' '}
                      <span className="text-xs font-normal text-gray-600 font-sans">
                        /{selectedWorkspace.priceUnit}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase font-bold text-gray-400 block">
                      WHAT IS INCLUDED
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                      {selectedWorkspace.features.map((feat: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <Link
                      href={`/book-a-visit?space=${encodeURIComponent(selectedWorkspace.name)}`}
                      className="px-6 py-3 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-md transition-colors"
                    >
                      Book Tour for {selectedWorkspace.name}
                    </Link>
                    <Link
                      href={`/workspaces/${selectedWorkspace.slug}`}
                      className="px-6 py-3 rounded-xl bg-white hover:bg-gray-50 border border-black/10 text-gray-900 font-bold text-xs transition-colors"
                    >
                      View Full Details
                    </Link>
                  </div>
                </div>

                <div
                  onClick={() => openLightbox(0)}
                  className="lg:col-span-6 relative h-[320px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-black/5 group cursor-pointer"
                >
                  <img
                    src={selectedWorkspace.gallery?.[0] || selectedWorkspace.heroImage}
                    alt={selectedWorkspace.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 bg-black/80 text-white font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur-md">
                    SECTOR 45 & 32 GURUGRAM
                  </div>
                  <div className="absolute bottom-4 right-4 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </FadeUp>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. THREE SPECIALIZED VALUE PROPOSITIONS BENTO              */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F0EFE9] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-700">
              [ 02 / 05 • SPECIALIZED CAPABILITIES ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight">
              Beyond Standard Real Estate
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Integrated solutions combining statutory compliance, shared manpower, and residential accommodations.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Virtual Office Card */}
            <FadeUp delay={0.1} className="nestor-card p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-md hover:shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#C91D24] flex items-center justify-center font-bold">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-sans">
                  Virtual Office for GST & ROC
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Establish an instant statutory presence in Gurugram Sector 32 or Sector 45. Includes 100% compliant Rent Agreement, owner NOC, paid electricity bills, and dedicated signage desk.
                </p>
                <div className="space-y-1.5 pt-2 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Haryana GSTIN Issuance Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>MCA Company Registration</span>
                  </div>
                </div>
              </div>
              <Link
                href="/virtual-office"
                className="text-xs font-bold text-[#C91D24] hover:underline inline-flex items-center gap-1 pt-4 border-t border-gray-100"
              >
                <span>Virtual Office Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </FadeUp>

            {/* Shared Employee Card */}
            <FadeUp delay={0.15} className="nestor-card p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-md hover:shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-sans">
                  Shared Employee Solutions
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Avoid the high overheads of full-time hiring. Access fractional receptionists, IT network admins, legal dispatchers, and accountants based on-site in Gurgaon.
                </p>
                <div className="space-y-1.5 pt-2 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Zero HR Onboarding Overhead</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>On-Demand Resource Sharing</span>
                  </div>
                </div>
              </div>
              <Link
                href="/shared-employee"
                className="text-xs font-bold text-[#C91D24] hover:underline inline-flex items-center gap-1 pt-4 border-t border-gray-100"
              >
                <span>Shared Workforce Matrix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </FadeUp>

            {/* Work + Stay Hub Card */}
            <FadeUp delay={0.2} className="nestor-card p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-md hover:shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-sans">
                  Work + Stay & Dormitories
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Turnkey residential living combined with dedicated workstations in Sector 45 Gurugram. Fully air-conditioned dormitories and private suites for traveling teams.
                </p>
                <div className="space-y-1.5 pt-2 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Zero Daily Commute Stress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>High-Speed Wi-Fi & Housekeeping</span>
                  </div>
                </div>
              </div>
              <Link
                href="/work-stay"
                className="text-xs font-bold text-[#C91D24] hover:underline inline-flex items-center gap-1 pt-4 border-t border-gray-100"
              >
                <span>Work + Stay Living</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. FOUNDER VISION & MEDIA MASTERCLASS                     */}
      {/* ========================================================= */}
      <FounderVideoShowcase />

      {/* ========================================================= */}
      {/* 6. COMMERCIAL FRANCHISE PLATFORM & LIVE CALCULATOR        */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <FadeUp className="space-y-2">
              <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
                [ 03 / 05 • ASSET-BACKED BUSINESS OPPORTUNITY ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight">
                Commercial Real Estate Franchise
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
                Fractional asset models with monthly rental disbursements backed by 3 post-dated annual security cheques and formal franchise covenants.
              </p>
            </FadeUp>

            <FadeUp delay={0.1} className="flex items-center gap-3">
              <Link
                href="/franchise/how-it-works"
                className="text-xs font-bold text-gray-700 hover:text-black"
              >
                How It Works & Terms →
              </Link>
            </FadeUp>
          </div>

          {/* Interactive Calculator */}
          <FadeUp delay={0.15}>
            <FranchiseCalculator models={franchiseModels} showApplyButton={true} />
          </FadeUp>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. REAL CENTER PHOTO GALLERY & PHYSICAL SPACES SHOWCASE   */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F0EFE9] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <FadeUp className="space-y-2">
              <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-700">
                [ REAL CENTER PHOTOGRAPHS • SECTOR 45 GURGAON ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight">
                Inside Our Operational Spaces
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl">
                Click on any photo below to open the interactive high-resolution gallery viewer.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <Link
                href="/book-a-visit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-md transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Center Walkthrough</span>
              </Link>
            </FadeUp>
          </div>

          {/* Bento Photo Grid with All 10 Real Center Photos */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
            {/* Row 1: Executive Suite & Director Suite */}
            <FadeUp delay={0.05} className="md:col-span-8 relative h-[360px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border border-black/10 group cursor-pointer" onClick={() => openLightbox(0)}>
              <img
                src={centerPhotos[0].src}
                alt={centerPhotos[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="nestor-pill-dark font-mono text-[9px] uppercase font-bold">
                  FLAGSHIP SUITE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-sans">{centerPhotos[0].title}</h3>
                <p className="text-xs text-gray-300 line-clamp-1">{centerPhotos[0].desc}</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1} className="md:col-span-4 relative h-[360px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border border-black/10 group cursor-pointer" onClick={() => openLightbox(1)}>
              <img
                src={centerPhotos[1].src}
                alt={centerPhotos[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="nestor-pill-dark font-mono text-[9px] uppercase font-bold">
                  DIRECTOR CABIN
                </span>
                <h3 className="text-lg font-bold font-sans">{centerPhotos[1].title}</h3>
                <p className="text-xs text-gray-300 line-clamp-2">{centerPhotos[1].desc}</p>
              </div>
            </FadeUp>

            {/* Row 2: Manager Suite & Gourmet Pantry Green Wall */}
            <FadeUp delay={0.15} className="md:col-span-6 relative h-[300px] sm:h-[380px] rounded-3xl overflow-hidden shadow-xl border border-black/10 group cursor-pointer" onClick={() => openLightbox(2)}>
              <img
                src={centerPhotos[2].src}
                alt={centerPhotos[2].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="nestor-pill-dark font-mono text-[9px] uppercase font-bold">
                  MANAGER SUITE
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-sans">{centerPhotos[2].title}</h3>
                <p className="text-xs text-gray-300 line-clamp-1">{centerPhotos[2].desc}</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2} className="md:col-span-6 relative h-[300px] sm:h-[380px] rounded-3xl overflow-hidden shadow-xl border border-black/10 group cursor-pointer" onClick={() => openLightbox(3)}>
              <img
                src={centerPhotos[3].src}
                alt={centerPhotos[3].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="nestor-pill-dark font-mono text-[9px] uppercase font-bold">
                  PANTRY & GREEN WALL
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-sans">{centerPhotos[3].title}</h3>
                <p className="text-xs text-gray-300 line-clamp-1">{centerPhotos[3].desc}</p>
              </div>
            </FadeUp>

            {/* Row 3: Coffee Hub, Meeting Cabin & Biometric Entrance */}
            <FadeUp delay={0.25} className="md:col-span-4 relative h-[260px] sm:h-[320px] rounded-3xl overflow-hidden shadow-xl border border-black/10 group cursor-pointer" onClick={() => openLightbox(4)}>
              <img
                src={centerPhotos[4].src}
                alt={centerPhotos[4].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <h4 className="text-base font-bold font-sans">{centerPhotos[4].title}</h4>
                <p className="text-[11px] text-gray-300 line-clamp-1">{centerPhotos[4].desc}</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.3} className="md:col-span-4 relative h-[260px] sm:h-[320px] rounded-3xl overflow-hidden shadow-xl border border-black/10 group cursor-pointer" onClick={() => openLightbox(5)}>
              <img
                src={centerPhotos[5].src}
                alt={centerPhotos[5].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <h4 className="text-base font-bold font-sans">{centerPhotos[5].title}</h4>
                <p className="text-[11px] text-gray-300 line-clamp-1">{centerPhotos[5].desc}</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.35} className="md:col-span-4 relative h-[260px] sm:h-[320px] rounded-3xl overflow-hidden shadow-xl border border-black/10 group cursor-pointer" onClick={() => openLightbox(6)}>
              <img
                src={centerPhotos[6].src}
                alt={centerPhotos[6].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <h4 className="text-base font-bold font-sans">{centerPhotos[6].title}</h4>
                <p className="text-[11px] text-gray-300 line-clamp-1">{centerPhotos[6].desc}</p>
              </div>
            </FadeUp>

            {/* Row 4: Lift Lobby, Team Cabin & Open Workstations */}
            <FadeUp delay={0.4} className="md:col-span-4 relative h-[260px] sm:h-[320px] rounded-3xl overflow-hidden shadow-xl border border-black/10 group cursor-pointer" onClick={() => openLightbox(7)}>
              <img
                src={centerPhotos[7].src}
                alt={centerPhotos[7].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <h4 className="text-base font-bold font-sans">{centerPhotos[7].title}</h4>
                <p className="text-[11px] text-gray-300 line-clamp-1">{centerPhotos[7].desc}</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.45} className="md:col-span-4 relative h-[260px] sm:h-[320px] rounded-3xl overflow-hidden shadow-xl border border-black/10 group cursor-pointer" onClick={() => openLightbox(8)}>
              <img
                src={centerPhotos[8].src}
                alt={centerPhotos[8].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <h4 className="text-base font-bold font-sans">{centerPhotos[8].title}</h4>
                <p className="text-[11px] text-gray-300 line-clamp-1">{centerPhotos[8].desc}</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.5} className="md:col-span-4 relative h-[260px] sm:h-[320px] rounded-3xl overflow-hidden shadow-xl border border-black/10 group cursor-pointer" onClick={() => openLightbox(9)}>
              <img
                src={centerPhotos[9].src}
                alt={centerPhotos[9].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <h4 className="text-base font-bold font-sans">{centerPhotos[9].title}</h4>
                <p className="text-[11px] text-gray-300 line-clamp-1">{centerPhotos[9].desc}</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. GURUGRAM CENTERS & LOCATIONS SPOTLIGHT                 */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F0EFE9] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeUp className="space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-700">
              [ 04 / 05 • GURGAON CENTERS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight">
              Two Strategic Addresses. One Standard.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl">
              Distinct operational workspace center in Sector 45 and corporate regulatory desk in Sector 32 Institutional Area.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((loc, idx) => (
              <FadeUp
                key={loc.id}
                delay={idx * 0.1}
                className="nestor-card overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-2xl"
              >
                <div>
                  <div
                    onClick={() => openLightbox(idx === 0 ? 0 : 2)}
                    className="relative h-64 w-full bg-gray-900 overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={loc.photos[0]}
                      alt={loc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-black/80 text-white font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur-md">
                      {loc.status}
                    </div>
                    <div className="absolute top-4 right-4 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase font-bold text-[#C91D24]">
                        {loc.area}
                      </span>
                      <h3 className="text-2xl font-black text-gray-900 font-sans tracking-tight">{loc.name}</h3>
                    </div>

                    <div className="space-y-2 text-xs text-gray-700 border-t border-gray-100 pt-3">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#C91D24] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-gray-900">Workspace Address:</strong>{' '}
                          {loc.workspaceAddress}
                        </div>
                      </div>
                      {loc.corporateAddress && (
                        <div className="flex items-start gap-2">
                          <Building2 className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-gray-900">Corporate Desk:</strong>{' '}
                            {loc.corporateAddress}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-mono uppercase text-gray-400 block">
                        KEY AMENITIES
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                        {loc.amenities.slice(0, 4).map((amenity: string, i: number) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="line-clamp-1">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-gray-100">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-xs font-bold text-[#C91D24] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Location & Maps</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/book-a-visit"
                    className="px-4 py-2 rounded-xl bg-[#111111] hover:bg-black text-white text-xs font-bold transition-colors"
                  >
                    Book Tour
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. REAL GOOGLE REVIEWS & SOCIAL PROOF                     */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F0EFE9] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header with Google Business Profile Rating Badge */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <FadeUp className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-700">
                  [ VERIFIED GOOGLE BUSINESS PROFILE ]
                </span>
                <span className="nestor-pill bg-emerald-50 text-emerald-700 border-emerald-200 font-mono text-[10px] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  GOOGLE VERIFIED
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight">
                Trusted by Gurgaon Enterprises
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl">
                Hear from founders, directors, and commercial asset partners operating out of Yoffices Sector 45 & Sector 32.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <a
                href="https://maps.app.goo.gl/LdkCuzynh8p4RRPZ8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white hover:bg-gray-50 border border-black/10 text-gray-900 font-bold text-xs shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="border-l border-gray-300 pl-3 text-left">
                  <div className="text-xs font-black">4.6 / 5 Rating (10 Reviews)</div>
                  <div className="text-[10px] text-gray-500 font-mono flex items-center gap-1">
                    <span>Google Business Profile</span>
                    <ExternalLink className="w-3 h-3 text-gray-400" />
                  </div>
                </div>
              </a>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((test, idx) => {
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

              const bgClass = avatarColors[test.name] || 'bg-[#1E88E5]';
              const timeAgo = reviewDates[test.name] || 'Recent';
              const isLocalGuide = test.role.includes('Local Guide');

              return (
                <FadeUp
                  key={test.id}
                  delay={idx * 0.06}
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

          {/* Link to Google Business Profile */}
          <FadeUp delay={0.2} className="text-center pt-2">
            <a
              href="https://maps.app.goo.gl/LdkCuzynh8p4RRPZ8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#C91D24] hover:underline"
            >
              <span>View All 120+ Reviews on Google Business Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. FAQS ACCORDION                                        */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.06]">
        <div className="max-w-4xl mx-auto space-y-12">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-700">
              [ FREQUENTLY ASKED QUESTIONS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight">
              Got questions? We have answers.
            </h2>
          </FadeUp>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <FadeUp
                  key={faq.id}
                  className="rounded-2xl border border-black/10 bg-white overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-gray-900 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`w-7 h-7 rounded-full bg-[#F0EFE9] flex items-center justify-center text-xs transition-transform ${
                        isOpen ? 'rotate-180 bg-[#C91D24] text-white' : ''
                      }`}
                    >
                      ↓
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 11. EDITORIAL INSIGHTS & BLOG HIGHLIGHTS                  */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F0EFE9] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <FadeUp className="space-y-2">
              <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-700">
                [ EDITORIAL PERSPECTIVES ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight">
                Insights & Market Research
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <Link
                href="/blog"
                className="text-xs font-bold text-[#C91D24] hover:underline inline-flex items-center gap-1"
              >
                <span>Read All Insights</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((post, idx) => (
              <FadeUp
                key={post.id}
                delay={idx * 0.1}
                className="nestor-card overflow-hidden flex flex-col justify-between group shadow-md hover:shadow-xl"
              >
                <div>
                  <div className="relative h-60 w-full bg-gray-200 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-black/80 text-white font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur-md">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] font-mono text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#C91D24]" />
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 font-sans group-hover:text-[#C91D24] transition-colors leading-snug tracking-tight">
                      {post.title}
                    </h3>

                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#C91D24]">
                  <Link href={`/blog/${post.slug}`} className="hover:underline inline-flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] text-gray-400 font-mono font-normal">
                    {post.author}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 12. LEAD INQUIRY & CONTACT FORM SECTION                  */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F0EFE9]">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ CONNECT WITH YOFFICES ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight">
              Ready to Upgrade Your Workspace?
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Our team will prepare customized floor layouts, pricing proposals, or franchise term sheets tailored to your goals.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <LeadForm
              defaultService="Private Office"
              title="Get Customized Proposal & Pricing"
              subtitle="Submit details for same-day callback and VIP walk-through pass."
              source="Homepage Lead Section"
            />
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
