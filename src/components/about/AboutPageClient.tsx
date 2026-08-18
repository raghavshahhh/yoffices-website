'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  Target,
  ShieldCheck,
  Compass,
  Calendar,
  ArrowRight,
  Sparkles,
  Zap,
  Wifi,
  Coffee,
  CheckCircle2,
  Play,
  ZoomIn,
} from 'lucide-react';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';
import { ImageLightboxModal, LightboxImage } from '@/components/ui/ImageLightboxModal';

export function AboutPageClient() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const mainVideoId = 'qFL2VSeY3WA';

  const aboutPhotos: LightboxImage[] = [
    {
      src: '/images/center/director-private-cabin.jpg',
      title: 'Private Director Executive Cabin',
      desc: 'Turnkey private executive office in Sector 45 Gurgaon with acoustic wood-slat paneling.',
    },
    {
      src: '/images/center/cafe-pantry-greenwall.jpg',
      title: 'Biophilic Gourmet Pantry & Vertical Garden',
      desc: 'Lush green wall and automatic bean-to-cup coffee machine in Sector 45.',
    },
    {
      src: '/images/center/manager-executive-suite.jpg',
      title: 'Manager Executive Suite & Modern Lighting',
      desc: 'Custom tri-spoke LED lighting, circular pendant lamps, and acoustic paneling.',
    },
  ];

  const marqueeItems = [
    'LUXURY COMMERCIAL REAL ESTATE',
    'HIGH-PERFORMANCE WORKSPACES',
    'MANAGED ASSET FRANCHISE MODELS',
    'GURUGRAM SECTOR 45 & 32',
    'INTEGRATED WORK + STAY CO-LIVING',
    '100% DG DIESEL GENERATOR POWER BACKUP',
  ];

  const benchmarks = [
    {
      title: '1Gbps Dual-ISP Redundant Fiber',
      desc: 'Dedicated enterprise internet pipelines with seamless automated failover between Tata and Airtel leased lines.',
      icon: Wifi,
    },
    {
      title: '100% DG Power Backup',
      desc: 'Uninterrupted commercial generator backup ensuring zero downtime during municipal grid fluctuations.',
      icon: Zap,
    },
    {
      title: 'Acoustic Sound Insulation',
      desc: 'Soundproof double-glazed glass walls, custom wood-slat acoustic baffles, and private phone booths for confidential calls.',
      icon: ShieldCheck,
    },
    {
      title: 'Gourmet Beverage Hospitality',
      desc: 'Continuous bean-to-cup fresh roast coffee, artisanal tea infusions, and sanitized RO drinking water stations.',
      icon: Coffee,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      <ImageLightboxModal
        images={aboutPhotos}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      {/* Hero Header */}
      <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <FadeUp delay={0.05}>
            <div className="inline-flex items-center gap-2">
              <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[10px] sm:text-[11px]">
                [ CORPORATE PHILOSOPHY & VISION ]
              </span>
              <span className="nestor-pill bg-black/5 text-gray-800 font-mono text-[10px] sm:text-[11px]">
                ESTABLISHED IN GURGAON
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-[#111111] font-sans leading-tight">
              Built for the Way Modern Companies Grow
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Yoffices bridges luxury commercial real estate, high-performance flexible workspaces, and asset-backed business partnerships across Sector 45 and Sector 32 Gurgaon.
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

      {/* Philosophy & Vision Bento */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeUp delay={0.05} className="lg:col-span-6 space-y-6">
              <span className="nestor-pill bg-black/5 font-mono text-[10px] text-gray-800">
                [ 01 / 03 • OUR CORE VISION ]
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-sans leading-tight">
                Eliminating Commercial Real Estate Friction
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Traditional commercial office leasing has remained virtually unchanged for decades: 5-year lock-ins, onerous security deposits, expensive interior fit-outs, and disconnected hospitality services.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Yoffices replaces this legacy model with flexible turnkey private suites, high-speed redundant enterprise infrastructure, and integrated co-living living hubs (Work + Stay) in Sector 45 and Sector 32 Gurgaon.
              </p>
            </FadeUp>

            <FadeUp delay={0.1} className="lg:col-span-6 grid grid-cols-2 gap-4 h-[380px]">
              <div
                onClick={() => {
                  setLightboxIndex(0);
                  setLightboxOpen(true);
                }}
                className="relative rounded-3xl overflow-hidden shadow-xl border border-black/5 h-full cursor-pointer group"
              >
                <img
                  src={aboutPhotos[0].src}
                  alt={aboutPhotos[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold font-sans">
                  Director Suite
                </div>
              </div>

              <div
                onClick={() => {
                  setLightboxIndex(1);
                  setLightboxOpen(true);
                }}
                className="relative rounded-3xl overflow-hidden shadow-xl border border-black/5 h-full cursor-pointer group"
              >
                <img
                  src={aboutPhotos[1].src}
                  alt={aboutPhotos[1].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold font-sans">
                  Gourmet Pantry
                </div>
              </div>
            </FadeUp>
          </div>

          {/* 3 Pillars Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeUp delay={0.1} className="nestor-card p-7 sm:p-8 space-y-3 shadow-md bg-white">
              <div className="w-12 h-12 rounded-2xl bg-[#C91D24] text-white flex items-center justify-center font-bold shadow-xs">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-sans">Speed of Deployment</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Move a 20-person enterprise team into a fully branded, biometric private office cabin within 24 hours of agreement signing.
              </p>
            </FadeUp>

            <FadeUp delay={0.15} className="nestor-card p-7 sm:p-8 space-y-3 shadow-md bg-white">
              <div className="w-12 h-12 rounded-2xl bg-[#111111] text-white flex items-center justify-center font-bold shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-sans">Asset Backed Security</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Every franchise model and workspace plan is anchored in physical prime real estate assets with clear contractual governance.
              </p>
            </FadeUp>

            <FadeUp delay={0.2} className="nestor-card p-7 sm:p-8 space-y-3 shadow-md bg-white">
              <div className="w-12 h-12 rounded-2xl bg-[#C5A880] text-[#111111] flex items-center justify-center font-bold shadow-xs">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-sans">Holistic Hospitality</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                From gourmet coffee and sanitized dormitory bunks to front-desk greeting and mail handling, our hospitality team manages every detail.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Founder Masterclass Video & Leadership Spotlight */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto space-y-12">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 02 / 03 • FOUNDER & LEADERSHIP DESK ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 font-sans">
              Leadership & Founder's Story
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Founded in 2015 in Gurugram by Gaurav Singh, Yoffices has grown into a leading flexible workspace & commercial franchise ecosystem.
            </p>
          </FadeUp>

          {/* Founder Profile Card */}
          <FadeUp delay={0.1} className="nestor-card p-6 sm:p-8 bg-[#FAF9F6] border border-black/10 shadow-lg space-y-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#111111] text-white flex flex-col items-center justify-center font-bold shrink-0 shadow-xl border border-black/10">
                <span className="text-2xl font-black text-[#C91D24]">GS</span>
                <span className="text-[9px] font-mono text-gray-400 mt-1 uppercase tracking-widest">FOUNDER</span>
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 font-sans">
                    Gaurav Singh
                  </h3>
                  <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[10px]">
                    FOUNDER & CEO
                  </span>
                  <span className="nestor-pill bg-black/5 text-gray-700 font-mono text-[10px]">
                    EST. 2015 • GURUGRAM
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
                  "At Yoffices, we believe that where you work defines how you grow. We founded Yoffices in 2015 to bridge the gap between world-class enterprise infrastructure and flexible agility — eliminating heavy CapEx for companies while engineering predictable, high-yield commercial real estate returns for franchise partners."
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2 text-xs">
                  <a
                    href="https://www.instagram.com/y0ffices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-gray-700 hover:text-[#C91D24] transition-colors"
                  >
                    <span>Instagram: @y0ffices</span>
                    <ArrowRight className="w-3 h-3 -rotate-45" />
                  </a>
                  <span className="text-gray-300">•</span>
                  <a
                    href="https://www.youtube.com/@Yoffices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-gray-700 hover:text-[#C91D24] transition-colors"
                  >
                    <span>YouTube: @Yoffices (12K+ Subs)</span>
                    <ArrowRight className="w-3 h-3 -rotate-45" />
                  </a>
                  <span className="text-gray-300">•</span>
                  <a
                    href="https://www.facebook.com/61574970523748/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-gray-700 hover:text-[#C91D24] transition-colors"
                  >
                    <span>Facebook Community</span>
                    <ArrowRight className="w-3 h-3 -rotate-45" />
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Masterclass Video */}
          <FadeUp delay={0.15}>
            <div className="rounded-3xl bg-[#FAF9F6] border border-black/10 shadow-xl overflow-hidden p-3 sm:p-4">
              <div className="aspect-video max-h-[460px] w-full relative rounded-2xl overflow-hidden bg-black shadow-inner">
                {isPlayingVideo ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${mainVideoId}?autoplay=1&rel=0&modestbranding=1`}
                    title="Yoffices Founder Story Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0 absolute inset-0"
                  />
                ) : (
                  <div
                    onClick={() => setIsPlayingVideo(true)}
                    className="w-full h-full cursor-pointer relative group overflow-hidden"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${mainVideoId}/maxresdefault.jpg`}
                      alt="Yoffices Founder Story"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C91D24] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-base sm:text-xl font-bold font-sans">
                        Founder Masterclass: Gaurav Singh on Transforming Workspaces & Living
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Infrastructure Standards Benchmarks */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 03 / 03 • INFRASTRUCTURE BENCHMARKS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111111] font-sans">
              Enterprise Grade Facilities
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benchmarks.map((b, idx) => (
              <FadeUp
                key={idx}
                delay={idx * 0.08}
                className="nestor-card p-6 sm:p-7 space-y-3 bg-white shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-11 h-11 rounded-2xl bg-red-50 text-[#C91D24] flex items-center justify-center font-bold shadow-xs">
                  <b.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 font-sans">{b.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{b.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-gray-900 tracking-tight">
              Experience the Yoffices Community
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Schedule a physical walk-through at Sector 45 Gurugram or connect with our corporate desk in Sector 32.
            </p>
          </FadeUp>
          <FadeUp delay={0.2} className="pt-2">
            <Link
              href="/book-a-visit"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule VIP Visit</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
