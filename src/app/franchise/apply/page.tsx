import { Suspense } from 'react';
import { FranchiseApplyForm } from '@/components/forms/FranchiseApplyForm';
import { ShieldCheck, TrendingUp, Sparkles, Building2, Layers } from 'lucide-react';
import { Marquee } from '@/components/ui/Marquee';

export const metadata = {
  title: 'Apply for Yoffices Commercial Franchise | Business Opportunity',
  description:
    'Submit your franchise application for Yoffices Desk (₹5L), Dormitory (₹11L), or Cabin (₹25L) commercial real estate asset models.',
};

export default function FranchiseApplyPage() {
  const marqueeItems = [
    'CORPORATE FRANCHISE INTAKE',
    '3-YEAR ASSET TENURE',
    'POST-DATED ANNUAL SECURITY CHEQUES',
    'DESK (₹5L) • DORMITORY (₹11L) • CABIN (₹25L)',
    'CONFIDENTIAL DRAFT AGREEMENT DISPATCH',
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
            [ CORPORATE PARTNER INTAKE ]
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#111111] font-sans">
            Franchise Partner Application
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Please fill out your capital allocation preference and contact details. Our expansion desk will contact you to share the draft agreement.
          </p>
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
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Suspense fallback={<div className="text-center py-12 text-gray-500 font-mono text-xs">Loading Application Form...</div>}>
            <FranchiseApplyForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
