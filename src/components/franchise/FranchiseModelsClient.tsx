'use client';

import React from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Shield,
  Coins,
} from 'lucide-react';
import { FranchiseModelData } from '@/types';
import { formatINR } from '@/lib/utils';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';

interface FranchiseModelsClientProps {
  models: FranchiseModelData[];
}

export function FranchiseModelsClient({ models }: FranchiseModelsClientProps) {
  const marqueeItems = [
    '3-YEAR STRUCTURED FRANCHISE TENURE',
    '3 ANNUAL POST-DATED SECURITY CHEQUES',
    'DESK MODEL (₹5L • ₹5,000/MO)',
    'DORMITORY MODEL (₹11L • ₹11,000/MO)',
    'CABIN MODEL (₹25L • ₹25,000/MO)',
    'ZERO OPERATIONAL HEADACHES',
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <FadeUp delay={0.1}>
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ 3 OFFICIAL INVESTMENT TIERS ]
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#111111] font-sans">
              Compare Franchise Models
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Examine the principal allocation, monthly rental disbursement schedules, and stated 3-year totals across Desk, Dormitory, and Cabin tiers.
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

      {/* Models Detailed Matrix */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {models.map((model, idx) => {
            const itemNumber = (idx + 1).toString().padStart(2, '0');
            return (
              <FadeUp
                key={model.id}
                delay={idx * 0.1}
                className="nestor-card p-8 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
              >
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-xs">
                      [ TIER {itemNumber} ]
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-sans">
                      {model.name}
                    </h2>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{model.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {(model.highlights || []).map((f: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700 bg-[#F0EFE9] p-2.5 rounded-xl border border-black/5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Financial Payout Card */}
                <div className="bg-white p-6 rounded-2xl border-2 border-black/10 shadow-md space-y-4">
                  <div className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-wider">
                    3-YEAR FINANCIAL SCHEDULE
                  </div>
                  <div className="space-y-2 text-xs border-b border-gray-100 pb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Principal:</span>
                      <strong className="text-gray-900 font-sans">{formatINR(model.principal)}</strong>
                    </div>
                    <div className="flex justify-between text-[#C91D24] font-bold">
                      <span>Monthly Rental:</span>
                      <span className="font-sans">{formatINR(model.monthlyRental)} / mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Annual Rental:</span>
                      <strong className="text-gray-900 font-sans">{formatINR(model.annualRental)} / yr</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">3-Yr Total Rental:</span>
                      <strong className="text-gray-900 font-sans">{formatINR(model.threeYearRental)}</strong>
                    </div>
                  </div>

                  <div className="pt-1 flex justify-between items-center text-sm font-black text-gray-900">
                    <span>Stated Total:</span>
                    <span className="text-[#C5A880] text-base font-sans font-black">{formatINR(model.statedTotal)}</span>
                  </div>

                  <Link
                    href={`/franchise/apply?model=${encodeURIComponent(model.name)}`}
                    className="w-full py-3.5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white text-xs font-bold text-center block shadow-md transition-all"
                  >
                    Apply for {model.name}
                  </Link>
                </div>
              </FadeUp>
            );
          })}

          {/* Statutory Disclaimer */}
          <FadeUp delay={0.3} className="p-5 rounded-2xl bg-white border border-black/10 text-xs text-gray-600 flex items-start gap-3 shadow-sm">
            <Shield className="w-5 h-5 text-[#C91D24] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Important Contractual Disclaimer:</strong> Terms shown are based on information supplied by Yoffices and are subject to the final executed agreement and current approved terms.
            </p>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
