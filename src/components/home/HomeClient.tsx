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

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* ========================================================= */}
      {/* 1. HERO SECTION (Nestor + Socio-Space Framer Aesthetic)   */}
      {/* ========================================================= */}
      <section className="relative pt-10 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08] overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Top Tag & Monospace Pill */}
          <FadeUp delay={0.1} className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="nestor-pill bg-black/5 border-black/10 text-gray-900 font-mono text-[11px]">
                <span className="w-2 h-2 rounded-full bg-[#C91D24] animate-ping" />
                [ GURUGRAM • SECTOR 45 & 32 ]
              </span>
              <span className="hidden sm:inline-flex nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
                2026 MANAGED SPACES
              </span>
            </div>

            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              GURGAON METRO CORRIDOR
            </div>
          </FadeUp>

          {/* Main Headline & Hero Action */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <FadeUp delay={0.2} className="lg:col-span-8 space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#111111] leading-[1.05] font-sans">
                Spaces crafted with intention.
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl font-normal leading-relaxed">
                Light-filled private cabins, ergonomic workstations, and asset-backed commercial franchise opportunities engineered for ambitious companies.
              </p>
            </FadeUp>

            <FadeUp delay={0.3} className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-end">
              <Link
                href="/book-a-visit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-sm shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a Walkthrough</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              <Link
                href="/franchise"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#111111] hover:bg-black text-white font-bold text-sm shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Coins className="w-4 h-4 text-[#C5A880]" />
                <span>Franchise (₹5,000/mo Yield)</span>
              </Link>
            </FadeUp>
          </div>

          {/* Large Hero Visual Grid (Nestor Style) */}
          <FadeUp delay={0.4} className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-4">
            <div className="md:col-span-8 relative h-[380px] sm:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-black/5 group">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
                alt="Yoffices Executive Cabins Gurgaon"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div className="space-y-1">
                  <span className="nestor-pill-dark font-mono text-[10px]">
                    FLAGSHIP CENTER • SECTOR 45
                  </span>
                  <div className="text-xl sm:text-2xl font-bold font-sans">
                    Acoustic Private Cabins & Boardrooms
                  </div>
                  <p className="text-xs text-gray-300 hidden sm:block">
                    Turnkey enterprise seating with dedicated 1Gbps redundant fiber lines and 100% DG power backup.
                  </p>
                </div>
                <Link
                  href="/workspaces/private-office"
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center backdrop-blur-md transition-all shrink-0"
                >
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-5">
              <div className="relative h-[235px] rounded-3xl overflow-hidden shadow-lg border border-black/5 group">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
                  alt="Workstations Sector 45"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm font-bold">Dedicated Workstations</div>
                  <div className="text-xs text-[#C5A880] font-mono">From ₹5,500 / seat</div>
                </div>
              </div>

              <div className="relative h-[245px] rounded-3xl bg-[#111111] text-white p-6 flex flex-col justify-between border border-black/10 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="nestor-pill-dark font-mono text-[10px]">
                    FRANCHISE CASH FLOW
                  </span>
                  <Coins className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div>
                  <div className="text-3xl font-black font-sans text-white">
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
          speed={24}
          className="border-none py-3"
          itemClassName="text-white/90 hover:text-white transition-colors text-xs sm:text-sm font-mono tracking-widest"
          separator={<span className="text-[#C91D24] text-xs font-bold">✦</span>}
        />
      </div>

      {/* ========================================================= */}
      {/* 3. WORKSPACES SHOWCASE (Tabbed Dynamic Slider)            */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.06]">
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
                Our rooms adapt to your rhythm. Pick a space that fits not just your work, but your energy.
              </p>
            </FadeUp>

            <FadeUp delay={0.1} className="flex items-center gap-2">
              <Link
                href="/workspaces"
                className="text-xs font-bold text-[#C91D24] hover:underline inline-flex items-center gap-1"
              >
                <span>View All 5 Types</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeUp>
          </div>

          {/* Interactive Workspace Category Pills */}
          <FadeUp delay={0.2} className="flex flex-wrap items-center gap-2 border-b border-black/[0.06] pb-4">
            {workspaces.map((ws) => {
              const isActive = ws.slug === activeSpaceTab;
              return (
                <button
                  key={ws.slug}
                  onClick={() => setActiveSpaceTab(ws.slug)}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#111111] text-white shadow-md'
                      : 'bg-white/80 text-gray-700 hover:bg-white hover:text-black border border-black/5'
                  }`}
                >
                  {ws.name}
                </button>
              );
            })}
          </FadeUp>

          {/* Active Workspace Showcase Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedWorkspace?.slug || 'ws'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-black/[0.07] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Image Column */}
              <div className="lg:col-span-7 relative h-[320px] sm:h-[440px] rounded-2xl overflow-hidden group">
                <img
                  src={selectedWorkspace.heroImage}
                  alt={selectedWorkspace.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-black/80 text-white font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur-md">
                  Starting from {selectedWorkspace.startingPrice} /{selectedWorkspace.priceUnit}
                </div>
              </div>

              {/* Text & Features Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase text-[#C91D24]">
                    SECTOR 45 & 32 GURUGRAM
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 font-sans">
                    {selectedWorkspace.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {selectedWorkspace.fullDesc}
                  </p>
                </div>

                {selectedWorkspace.idealFor && (
                  <div className="p-3.5 bg-[#F0EFE9] rounded-xl text-xs text-gray-700 font-medium">
                    <strong className="text-gray-900">Recommended For:</strong>{' '}
                    {selectedWorkspace.idealFor}
                  </div>
                )}

                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <span className="text-[11px] font-mono uppercase text-gray-400 block">
                    INCLUDED SPECIFICATIONS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                    {selectedWorkspace.features.slice(0, 4).map((feat: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    href={`/book-a-visit?space=${encodeURIComponent(selectedWorkspace.name)}`}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-md transition-all text-center"
                  >
                    Book Guided Tour
                  </Link>
                  <Link
                    href={`/workspaces/${selectedWorkspace.slug}`}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#F0EFE9] hover:bg-gray-200 text-gray-900 font-bold text-xs transition-all text-center"
                  >
                    View Space Details
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. BUSINESS SOLUTIONS (Virtual Office, Employee, Co-Living)*/}
      {/* ========================================================= */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeUp className="space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-700">
              [ 02 / 05 • INTEGRATED ENTERPRISE PLATFORM ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight">
              More than just office desks.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
              Complete business ecosystem spanning Haryana GST compliance, dedicated shared resources, and luxury Work + Stay co-living suites.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Virtual Office Card */}
            <FadeUp delay={0.1} className="nestor-card p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#C91D24] flex items-center justify-center font-bold">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-sans">
                  Virtual Office for GST & ROC
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Prime commercial registration address at Sector 32 & 45 Gurugram with notarized Rent Agreement, Owner NOC, paid electricity bill, and physical tax inspection desks.
                </p>
                <div className="space-y-1.5 pt-2 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Haryana GSTIN Filing Ready</span>
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
            <FadeUp delay={0.2} className="nestor-card p-6 sm:p-8 flex flex-col justify-between space-y-6">
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
            <FadeUp delay={0.3} className="nestor-card p-6 sm:p-8 flex flex-col justify-between space-y-6">
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
      {/* 5. COMMERCIAL FRANCHISE PLATFORM & LIVE CALCULATOR        */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.06]">
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
          <FadeUp delay={0.2}>
            <FranchiseCalculator models={franchiseModels} showApplyButton={true} />
          </FadeUp>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. GURUGRAM CENTERS & LOCATIONS SPOTLIGHT                 */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.06]">
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
                delay={idx * 0.15}
                className="nestor-card overflow-hidden flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="relative h-64 w-full bg-gray-900 overflow-hidden group">
                    <img
                      src={loc.photos[0]}
                      alt={loc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-black/80 text-white font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur-md">
                      {loc.status}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase font-bold text-[#C91D24]">
                        {loc.area}
                      </span>
                      <h3 className="text-2xl font-black text-gray-900 font-sans">{loc.name}</h3>
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
      {/* 7. MEDIA & VIDEO HUB                                      */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <FadeUp className="space-y-2">
              <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-700">
                [ 05 / 05 • OFFICIAL VIDEO ECOSYSTEM ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight">
                Yoffices Media & Video Tours
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl">
                Watch physical cabin walkthroughs, rental income breakdowns, and resident interviews.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <Link
                href="/media"
                className="text-xs font-bold text-[#C91D24] hover:underline inline-flex items-center gap-1"
              >
                <span>Browse All Videos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaVideos.slice(0, 3).map((vid, idx) => (
              <FadeUp
                key={vid.id}
                delay={idx * 0.1}
                className="nestor-card overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full bg-black overflow-hidden">
                    <img
                      src={vid.thumbnail || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'}
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#C91D24] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 bg-black/80 text-white font-mono text-[9px] uppercase px-2 py-0.5 rounded">
                      {vid.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="font-bold text-sm text-gray-900 font-sans group-hover:text-[#C91D24] transition-colors line-clamp-2">
                      {vid.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {vid.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/media/${vid.slug}`}
                    className="text-xs font-bold text-[#C91D24] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Watch Full Video</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. SOCIAL PROOF & TESTIMONIALS                            */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeUp className="space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-700">
              [ MEMBER REVIEWS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight">
              Trusted by Gurgaon Enterprises
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl">
              Hear from founders, directors, and commercial asset partners operating out of Yoffices.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test, idx) => (
              <FadeUp
                key={test.id}
                delay={idx * 0.1}
                className="nestor-card p-6 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                    &ldquo;{test.content}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <div className="font-bold text-xs text-gray-900">{test.name}</div>
                    <div className="text-[11px] text-gray-500">
                      {test.role}, {test.company}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. FAQS ACCORDION                                         */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.06]">
        <div className="max-w-4xl mx-auto space-y-10">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-700">
              [ ANSWERS & TRANSPARENCY ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-600">
              Clear answers regarding memberships, billing, compliance, and franchise terms.
            </p>
          </FadeUp>

          <div className="space-y-3">
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <FadeUp key={faq.id} className="nestor-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-gray-900 font-sans">
                      {faq.question}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-600 shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3"
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
      {/* 10. HIGH-CONVERSION CONTACT & LEAD FORM                   */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ GET IN TOUCH ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight">
              Ready to Upgrade Your Workspace?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
              Schedule a guided physical tour of Sector 45 or request a customized corporate proposal for your team.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <LeadForm
              defaultService="Private Office"
              title="Speak with a Workspace Advisor"
              subtitle="Fill in your details and our team will get in touch within 30 minutes."
              source="Homepage Bottom"
            />
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
