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
  Coins,
  FileCheck2,
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
    'ANNUAL CHEQUE RETURN PROMPT',
    'YEAR 3 MATURITY SETTLEMENT',
  ];

  const chequeSteps = [
    {
      year: '01',
      title: 'Year 1 Complete',
      desc: 'Return first annual post-dated security cheque to Yoffices upon successful 12-month disbursements.',
    },
    {
      year: '02',
      title: 'Year 2 Complete',
      desc: 'Return second annual post-dated security cheque to Yoffices upon successful 24-month disbursements.',
    },
    {
      year: '03',
      title: 'Year 3 Complete',
      desc: 'Return third annual post-dated security cheque alongside final maturity principal settlement.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <FadeUp delay={0.1}>
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ LETTER OF INTENT (LOI) • COMMERCIAL GOVERNANCE ]
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#111111] font-sans">
              Franchise Terms & Conditions
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Official commercial roadmap governing initial payment, security cheques issuance, annual cheque return process, and 3-year maturity settlement.
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

      {/* 3 Core Contractual Terms from PDF Page 3 */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 01 / 03 • CORE LOI COVENANTS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 font-sans tracking-tight">
              Terms and Conditions
            </h2>
            <p className="text-sm text-gray-600">
              Contractual obligations executed between Buyer (First Party) and Yoffices (Second Party).
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 01 Initial Payment */}
            <FadeUp delay={0.1} className="nestor-card p-8 space-y-4 shadow-xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#C91D24] text-white font-black text-sm flex items-center justify-center font-mono">
                  01
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-sans">Initial Payment Requirement</h3>
                <div className="text-[10px] font-mono font-bold text-[#C5A880] uppercase">
                  DATE OF SIGNING
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-2">
                  On the Date of Signing of the agreement of franchise the Buyer i.e. The First Party has to pay the principle amount to Yoffices i.e. The Second Party.
                </p>
              </div>
            </FadeUp>

            {/* 02 Security Cheques */}
            <FadeUp delay={0.2} className="nestor-card p-8 space-y-4 shadow-xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#111111] text-white font-black text-sm flex items-center justify-center font-mono">
                  02
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-sans">Security Cheques Protocol</h3>
                <div className="text-[10px] font-mono font-bold text-[#C5A880] uppercase">
                  3 POST-DATED CHEQUES
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-2">
                  Against this investment by the first party, he/she is entitled to get 3 Post-Dated Cheques, one each of respective total rental to be received in a single year. These 3 cheques shall not be encashed and shall be used as a method of security given by Yoffices.
                </p>
              </div>
            </FadeUp>

            {/* 03 Validity Period */}
            <FadeUp delay={0.3} className="nestor-card p-8 space-y-4 shadow-xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#C5A880] text-[#111111] font-black text-sm flex items-center justify-center font-mono">
                  03
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-sans">Franchise Validity Period</h3>
                <div className="text-[10px] font-mono font-bold text-[#C91D24] uppercase">
                  3 YEARS DURATION
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-2">
                  This franchise is only valid for a time period of three years from the date of signing after which the first party shall receive his/her respective principle amount paid at the time of maturity along with the respective rental of every year.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Annual Cheque Return Process from PDF Page 4 */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 02 / 03 • YEARLY OBLIGATION ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 font-sans tracking-tight">
              Annual Cheque Return Process
            </h2>
            <p className="text-sm text-gray-600">
              At the end of every year from the date of signing the first party shall return back the cheque for the respective year back to Yoffices.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chequeSteps.map((step, idx) => (
              <FadeUp
                key={idx}
                delay={idx * 0.1}
                className="p-8 rounded-3xl bg-[#F0EFE9] border border-black/5 space-y-4 shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#C91D24] text-white font-mono font-black text-sm flex items-center justify-center">
                  {step.year}
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-sans">{step.title}</h3>
                <div className="text-xs font-mono font-bold text-[#C91D24] uppercase">
                  RETURN {idx === 0 ? 'FIRST' : idx === 1 ? 'SECOND' : 'THIRD'} CHEQUE
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Maturity and Final Settlement from PDF Page 5 */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ 03 / 03 • MATURITY TIMELINE ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 font-sans tracking-tight">
              Maturity and Final Settlement
            </h2>
          </FadeUp>

          <FadeUp delay={0.2} className="bg-[#111111] text-white p-8 sm:p-12 rounded-3xl border border-black/10 space-y-6 shadow-2xl">
            <div className="space-y-3">
              <span className="nestor-pill bg-white/10 text-[#C5A880] font-mono text-[10px]">
                [ 36-MONTH MATURITY TIMELINE ]
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-sans text-white">
                Maturity Settlement Protocol
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                At the time of Maturity (which is exactly 3 years after the date of signing of this agreement) the first party shall receive his/her respective principle amount paid at the time of signing along with the respective rental of every year.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 space-y-1">
              <strong className="text-[#C5A880] block font-sans text-sm">Important Calculation Rule:</strong>
              <p className="leading-relaxed">
                The maturity date is calculated as exactly 3 years from the date of signing the franchise agreement. At this time, the first party receives both the principle amount and all accumulated rental payments.
              </p>
            </div>
          </FadeUp>

          {/* Statutory Disclaimer */}
          <FadeUp delay={0.3} className="p-5 rounded-2xl bg-white border border-black/10 text-xs text-gray-600 flex items-start gap-3 shadow-sm">
            <Shield className="w-5 h-5 text-[#C91D24] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Contractual Disclosure:</strong> Terms shown are based on information supplied by Yoffices Letter of Intent (LOI) and are subject to the final executed agreement and current approved terms.
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
