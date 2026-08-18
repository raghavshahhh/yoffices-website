'use client';

import React from 'react';
import Link from 'next/link';
import {
  FileText,
  CreditCard,
  Calendar,
  RotateCw,
  CheckCircle2,
  ShieldCheck,
  Shield,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { FranchiseTermData } from '@/types';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';

interface FranchiseHowItWorksClientProps {
  terms: FranchiseTermData[];
}

export function FranchiseHowItWorksClient({ terms }: FranchiseHowItWorksClientProps) {
  const marqueeItems = [
    '3-YEAR AGREEMENT VALIDITY',
    '3 ANNUAL POST-DATED SECURITY CHEQUES',
    'CONTRACTUAL MONTHLY DISBURSEMENTS',
    'ZERO OPERATING EXPENSES (OPEX)',
    'ANNUAL CHEQUE RECONCILIATION',
    'YEAR 3 MATURITY SETTLEMENT',
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <FadeUp delay={0.1}>
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ COMMERCIAL PROCESS & GOVERNANCE ]
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#111111] font-sans">
              Franchise Terms & Protocol
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A transparent 6-stage lifecycle governing the execution, security cheques issuance, annual reconciliation, and final settlement over a 3-year validity period.
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

      {/* 6 Stage Timeline Bento */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {terms.map((term, idx) => (
              <FadeUp
                key={term.id}
                delay={idx * 0.1}
                className="nestor-card p-8 shadow-lg flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#C91D24] text-white font-black text-base flex items-center justify-center font-mono">
                    0{term.stepNumber}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 font-sans">{term.title}</h2>
                  {term.subtitle && (
                    <div className="text-[10px] font-mono font-bold text-[#C5A880] uppercase tracking-wider">
                      {term.subtitle}
                    </div>
                  )}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-2">
                    {term.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Key Contractual Terms Box */}
          <FadeUp delay={0.2} className="bg-[#111111] text-white p-8 sm:p-12 rounded-3xl border border-black/10 space-y-8 shadow-2xl">
            <div>
              <span className="nestor-pill bg-white/10 text-[#C5A880] font-mono text-[10px]">
                [ 4 CONTRACTUAL PILLARS ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-sans text-white mt-2">
                Summary of Commercial Governance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-gray-300">
              <div className="space-y-2 bg-white/5 p-5 rounded-2xl border border-white/10">
                <strong className="text-[#C5A880] text-sm block font-sans">1. Agreement Validity</strong>
                <p className="leading-relaxed">The standard commercial franchise agreement is executed for a fixed validity tenure of exactly three (3) years (36 months).</p>
              </div>
              <div className="space-y-2 bg-white/5 p-5 rounded-2xl border border-white/10">
                <strong className="text-[#C5A880] text-sm block font-sans">2. Security Cheque Protocol</strong>
                <p className="leading-relaxed">Yoffices issues three (3) post-dated annual cheques to the partner corresponding to the annual rental commitments as contractual security.</p>
              </div>
              <div className="space-y-2 bg-white/5 p-5 rounded-2xl border border-white/10">
                <strong className="text-[#C5A880] text-sm block font-sans">3. Annual Reconciliation</strong>
                <p className="leading-relaxed">At the close of each completed 12-month operational cycle, the security cheque for that respective year is reconciled upon successful monthly disbursements.</p>
              </div>
              <div className="space-y-2 bg-white/5 p-5 rounded-2xl border border-white/10">
                <strong className="text-[#C5A880] text-sm block font-sans">4. Year 3 Maturity Settlement</strong>
                <p className="leading-relaxed">Full principal and contractual maturity settlement is executed upon the completion of the 36-month period as stipulated in the formal contract.</p>
              </div>
            </div>
          </FadeUp>

          {/* Statutory Disclaimer */}
          <FadeUp delay={0.3} className="p-5 rounded-2xl bg-white border border-black/10 text-xs text-gray-600 flex items-start gap-3 shadow-sm">
            <Shield className="w-5 h-5 text-[#C91D24] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Statutory Disclosure:</strong> Terms shown are based on information supplied by Yoffices and are subject to the final executed agreement and current approved terms.
            </p>
          </FadeUp>

          <FadeUp delay={0.4} className="text-center pt-4">
            <Link
              href="/franchise/apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Submit Franchise Application</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
