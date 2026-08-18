'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Calculator,
  Shield,
  Coins,
  ChevronDown,
  ZoomIn,
  Building2,
  FileCheck,
} from 'lucide-react';
import { FranchiseModelData, FranchiseTermData } from '@/types';
import { FranchiseCalculator } from '@/components/franchise/FranchiseCalculator';
import { formatINR } from '@/lib/utils';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';
import { ImageLightboxModal, LightboxImage } from '@/components/ui/ImageLightboxModal';

interface FranchisePageClientProps {
  models: FranchiseModelData[];
  terms: FranchiseTermData[];
}

export function FranchisePageClient({ models, terms }: FranchisePageClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const franchisePhotos: LightboxImage[] = [
    {
      src: '/images/center/executive-cabin-acoustic.jpg',
      title: 'Commercial Executive Cabin Asset',
      desc: 'Physical revenue-generating private suite in Sector 45 Gurgaon backing the ₹11L / ₹25L franchise tier.',
    },
    {
      src: '/images/center/director-private-cabin.jpg',
      title: 'Director Cabin Fit-Out',
      desc: 'Turnkey fully-furnished executive office cabin with sound-dampened acoustic wall paneling.',
    },
    {
      src: '/images/center/manager-executive-suite.jpg',
      title: 'Multi-Seat Manager Suite Asset',
      desc: 'Modern LED tri-spoke lighting and ergonomic high-back mesh seating for high enterprise occupancy.',
    },
  ];

  const marqueeItems = [
    '₹5,000/MO FRANCHISE DISBURSEMENT',
    '3-YEAR ASSET TENURE (36 MONTHS)',
    '3 ANNUAL POST-DATED SECURITY CHEQUES',
    'ZERO OPERATIONAL OPEX OVERHEAD',
    'CONTRACTUAL BUYBACK & CHEQUE RETURN',
    'TURNKEY GURGAON REAL ESTATE',
    'SECTOR 45 & 32 COMMERCIAL ASSETS',
  ];

  const securityPillars = [
    {
      title: '3 Annual Security Cheques',
      desc: 'Partner receives 3 annual post-dated principal security cheques at the time of agreement signing as financial security.',
      badge: 'BANK BACKED',
    },
    {
      title: 'Fixed Monthly Rental Payouts',
      desc: 'Disbursed directly into your designated bank account every month without waiting for occupancy or operational cycles.',
      badge: 'MONTHLY CASH FLOW',
    },
    {
      title: 'Zero Opex & Maintenance',
      desc: 'Yoffices hospitality and facility management bears 100% of electricity, DG fuel, cleaning, and marketing overheads.',
      badge: 'PASSIVE OWNERSHIP',
    },
    {
      title: 'Contractual Maturity Buyback',
      desc: 'Upon 36-month tenure completion, return the annual cheque and receive complete principal liquidation as agreed.',
      badge: '3-YEAR MATURITY',
    },
  ];

  const faqs = [
    {
      q: 'How does the 3 Post-Dated Security Cheques process work?',
      a: 'When you execute the franchise agreement, Yoffices issues 3 post-dated bank cheques (one for each 12-month tenure block) securing your principal investment. At the end of each year upon successful rental payouts, the expired cheque is exchanged for the subsequent year’s instrument.',
    },
    {
      q: 'Are monthly rental disbursements guaranteed regardless of occupancy?',
      a: 'Yes. Yoffices operates on a master franchise operator lease. Your fixed monthly payout is contractually guaranteed by Yoffices commercial management and is not contingent on day-to-day seat occupancy.',
    },
    {
      q: 'Can I visit and inspect the physical commercial asset in Gurgaon?',
      a: 'Absolutely. We encourage all prospective franchise partners to schedule a VIP walkthrough of our operational centers in Sector 45 and Sector 32 to inspect fit-outs, occupancy, and reception desks.',
    },
    {
      q: 'What is the minimum capital allocation required to start?',
      a: 'Our Tier 1 Micro Franchise starts at ₹5,00,000 with a ₹5,000/month payout. Higher tiers include the ₹11,00,000 Cabin Model (₹11,000/mo) and ₹25,00,000 Director Suite Model (₹25,000/mo).',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      <ImageLightboxModal
        images={franchisePhotos}
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
                [ ASSET-BACKED COMMERCIAL REAL ESTATE ]
              </span>
              <span className="nestor-pill bg-emerald-50 text-emerald-700 border-emerald-200 font-mono text-[10px] sm:text-[11px] flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                3 ANNUAL SECURITY CHEQUES
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-[#111111] font-sans leading-tight">
              Own a Yoffices Commercial Franchise
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Participate in high-demand Gurgaon commercial assets with structured 3-year monthly rental disbursements, contractual post-dated security cheques, and zero operational hassles.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/franchise/apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Apply for Franchise Allocation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/franchise/how-it-works"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-gray-50 text-gray-900 font-bold text-xs border border-black/10 transition-all shadow-sm"
            >
              <span>Security Cheques & Process</span>
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

      {/* Security Pillars */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 01 / 04 • LEGAL & FINANCIAL SECURITY ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111111] font-sans">
              4 Levels of Investor Protection
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityPillars.map((p, idx) => (
              <FadeUp
                key={idx}
                delay={idx * 0.06}
                className="nestor-card p-6 sm:p-7 space-y-3 bg-white shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="nestor-pill font-mono text-[9px] uppercase font-bold bg-black/5">
                    {p.badge}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 font-sans leading-snug">{p.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Models Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 02 / 04 • STRUCTURED ASSET TIERS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 font-sans">
              Three Fixed Capital Tiers
            </h2>
            <p className="text-sm text-gray-600">
              Fixed monthly rental disbursements over a 3-year term backed by annual post-dated security cheques.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((model, idx) => {
              const itemNumber = (idx + 1).toString().padStart(2, '0');
              return (
                <FadeUp
                  key={model.id}
                  delay={idx * 0.08}
                  className={`nestor-card p-7 sm:p-8 flex flex-col justify-between shadow-xl bg-white ${
                    model.isFeatured ? 'border-2 border-[#C91D24] relative' : ''
                  }`}
                >
                  {model.isFeatured && (
                    <span className="absolute -top-3 right-6 bg-[#C91D24] text-white font-mono text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full shadow">
                      HIGHEST DEMAND TIER
                    </span>
                  )}

                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-gray-400 block font-bold">
                        TIER {itemNumber}
                      </span>
                      <h3 className="text-2xl font-black text-gray-900 font-sans">{model.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{model.subtitle}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-black/5 space-y-2 text-xs">
                      <div className="flex items-center justify-between text-gray-600">
                        <span>Principal Allocation:</span>
                        <strong className="text-gray-900 text-sm font-sans">{formatINR(model.principal)}</strong>
                      </div>
                      <div className="flex items-center justify-between text-[#C91D24] font-bold pt-1.5 border-t border-black/5">
                        <span>Monthly Rental:</span>
                        <span className="text-base font-sans">{formatINR(model.monthlyRental)} / mo</span>
                      </div>
                      <div className="flex items-center justify-between text-gray-600 pt-1.5 border-t border-black/5">
                        <span>Annual Rental:</span>
                        <strong className="text-gray-900 font-sans">{formatINR(model.annualRental)} / yr</strong>
                      </div>
                      <div className="flex items-center justify-between text-gray-600 pt-1.5 border-t border-black/5">
                        <span>3-Year Rental Payout:</span>
                        <strong className="text-gray-900 font-sans">{formatINR(model.threeYearRental)}</strong>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#111111] text-white text-xs flex items-center justify-between">
                      <span className="text-gray-400">Stated Total (3-Yr):</span>
                      <strong className="text-[#C5A880] text-sm font-sans">{formatINR(model.statedTotal)}</strong>
                    </div>

                    <ul className="space-y-2 text-xs text-gray-600 pt-2 border-t border-gray-100">
                      {(model.highlights || []).slice(0, 4).map((f: string, i: number) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="line-clamp-1">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <Link
                      href={`/franchise/apply?model=${encodeURIComponent(model.name)}`}
                      className={`w-full py-3.5 rounded-xl font-bold text-xs text-center block transition-all shadow-md ${
                        model.isFeatured
                          ? 'bg-[#C91D24] hover:bg-[#A3151B] text-white'
                          : 'bg-[#111111] hover:bg-black text-white'
                      }`}
                    >
                      Apply for {model.name}
                    </Link>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Yield Calculator */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 03 / 04 • SIMULATOR ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-sans tracking-tight">
              Interactive Return Calculator
            </h2>
            <p className="text-sm text-gray-600">
              Choose your capital allocation tier and units to simulate cash flows.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <FranchiseCalculator models={models} showApplyButton={true} />
          </FadeUp>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.08]">
        <div className="max-w-4xl mx-auto space-y-10">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-700">
              [ FAQ ACCORDION ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-sans tracking-tight">
              Franchise Investor FAQs
            </h2>
          </FadeUp>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <FadeUp key={idx} delay={idx * 0.05}>
                  <div className="rounded-2xl bg-[#FAF9F6] border border-black/10 overflow-hidden shadow-xs">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-100/60"
                    >
                      <span className="font-bold text-sm sm:text-base text-gray-900">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#C91D24]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-gray-600 border-t border-gray-200/60 pt-3 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
