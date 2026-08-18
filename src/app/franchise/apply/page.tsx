import { Suspense } from 'react';
import { FranchiseApplyForm } from '@/components/forms/FranchiseApplyForm';
import { ShieldCheck, TrendingUp, Sparkles, Building2, Layers, CheckCircle2, Lock } from 'lucide-react';
import { Marquee } from '@/components/ui/Marquee';
import { FadeUp } from '@/components/motion/MotionWrapper';

export const metadata = {
  title: 'Apply for Yoffices Commercial Franchise | Business Opportunity',
  description:
    'Submit your franchise application for Yoffices Desk (₹5L), Dormitory (₹11L), or Cabin (₹25L) commercial real estate asset models in Gurgaon.',
};

export default function FranchiseApplyPage() {
  const marqueeItems = [
    'CORPORATE FRANCHISE INTAKE',
    '3-YEAR ASSET TENURE',
    'POST-DATED ANNUAL SECURITY CHEQUES',
    'DESK (₹5L) • DORMITORY (₹11L) • CABIN (₹25L)',
    'CONFIDENTIAL DRAFT AGREEMENT DISPATCH',
    'SAME-DAY EXPANSION DESK CALLBACK',
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero */}
      <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[10px] sm:text-[11px]">
              [ CORPORATE PARTNER INTAKE ]
            </span>
            <span className="nestor-pill bg-emerald-50 text-emerald-700 border-emerald-200 font-mono text-[10px] sm:text-[11px] flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              CONFIDENTIAL INTAKE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-[#111111] font-sans leading-tight">
            Franchise Partner Application
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Please fill out your capital allocation preference and contact details. Our expansion director will contact you to share the confidential draft agreement and security cheque structure.
          </p>

          {/* Quick Assurance Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-3xl mx-auto text-left">
            <div className="p-3.5 rounded-2xl bg-white border border-black/10 text-xs text-gray-700 shadow-xs flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium">3 Annual Security Cheques</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-black/10 text-xs text-gray-700 shadow-xs flex items-center gap-2.5">
              <Lock className="w-4 h-4 text-gray-900 shrink-0" />
              <span className="font-medium">100% Confidential NDA</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-black/10 text-xs text-gray-700 shadow-xs flex items-center gap-2.5">
              <TrendingUp className="w-4 h-4 text-[#C91D24] shrink-0" />
              <span className="font-medium">Monthly Rental Payouts</span>
            </div>
          </div>
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

      {/* Main Form Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Suspense fallback={<div className="text-center py-12 text-gray-500 font-mono text-xs">Loading Application Form...</div>}>
            <FranchiseApplyForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
