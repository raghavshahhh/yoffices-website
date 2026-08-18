'use client';

import React from 'react';
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
} from 'lucide-react';
import { FranchiseModelData, FranchiseTermData } from '@/types';
import { FranchiseCalculator } from '@/components/franchise/FranchiseCalculator';
import { formatINR } from '@/lib/utils';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';

interface FranchisePageClientProps {
  models: FranchiseModelData[];
  terms: FranchiseTermData[];
}

export function FranchisePageClient({ models, terms }: FranchisePageClientProps) {
  const marqueeItems = [
    '₹5,000/MO FRANCHISE DISBURSEMENT',
    '3-YEAR ASSET TENURE (36 MONTHS)',
    '3 ANNUAL POST-DATED SECURITY CHEQUES',
    'ZERO OPERATIONAL OPEX OVERHEAD',
    'CONTRACTUAL BUYBACK & CHEQUE RETURN',
    'TURNKEY GURGAON REAL ESTATE',
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <FadeUp delay={0.1}>
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ ASSET-BACKED COMMERCIAL REAL ESTATE ]
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#111111] font-sans">
              Own a Yoffices Commercial Franchise
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Participate in high-demand Gurgaon commercial assets with structured 3-year monthly rental disbursements, contractual post-dated security cheques, and zero operational hassles.
            </p>
          </FadeUp>

          <FadeUp delay={0.4} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/franchise/apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Apply for Franchise</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/franchise/how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/80 hover:bg-white text-gray-900 font-bold text-xs border border-black/10 transition-all"
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

      {/* 3 Models Grid */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 01 / 03 • ASSET MODELS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111] font-sans">
              Three Structured Asset Tiers
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
                  delay={idx * 0.1}
                  className={`nestor-card p-8 flex flex-col justify-between shadow-xl ${
                    model.isFeatured ? 'border-2 border-[#C91D24] relative' : ''
                  }`}
                >
                  {model.isFeatured && (
                    <span className="absolute -top-3 right-6 bg-[#C91D24] text-white font-mono text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full shadow">
                      HIGHEST DEMAND
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

                    <div className="p-4 rounded-2xl bg-[#F0EFE9] border border-black/5 space-y-2 text-xs">
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
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.08]">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 02 / 03 • SIMULATOR ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 font-sans tracking-tight">
              Interactive Return Calculator
            </h2>
            <p className="text-sm text-gray-600">
              Choose your capital allocation tier and units to simulate cash flows.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <FranchiseCalculator models={models} showApplyButton={true} />
          </FadeUp>
        </div>
      </section>

      {/* 6-Stage Timeline */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 03 / 03 • EXECUTION ROADMAP ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 font-sans tracking-tight">
              How the Franchise Model Operates
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {terms.map((term, idx) => (
              <FadeUp
                key={term.id}
                delay={idx * 0.1}
                className="nestor-card p-6 sm:p-8 space-y-3 shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C91D24] text-white font-black text-sm flex items-center justify-center">
                  0{term.stepNumber}
                </div>
                <h3 className="text-base font-bold text-gray-900 font-sans">{term.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{term.description}</p>
              </FadeUp>
            ))}
          </div>

          {/* Statutory Disclosure */}
          <FadeUp delay={0.3} className="p-6 rounded-2xl bg-white border border-black/10 text-xs text-gray-600 flex items-start gap-3 shadow-sm">
            <Shield className="w-5 h-5 text-[#C91D24] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Statutory Disclosure:</strong> Terms shown are based on information supplied by Yoffices and are subject to the final executed agreement and current approved terms. Yoffices does not offer market-linked or speculative financial instruments; commercial franchise arrangements represent managed real estate asset participation.
            </p>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
