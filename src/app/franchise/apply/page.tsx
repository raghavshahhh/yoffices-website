import { Suspense } from 'react';
import { FranchiseApplyForm } from '@/components/forms/FranchiseApplyForm';
import { ShieldCheck, TrendingUp, Sparkles, Building2, Layers } from 'lucide-react';

export const metadata = {
  title: 'Apply for Yoffices Commercial Franchise | Business Opportunity',
  description:
    'Submit your franchise application for Yoffices Desk (₹5L), Dormitory (₹11L), or Cabin (₹25L) commercial real estate asset models.',
};

export default function FranchiseApplyPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C91D24]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <TrendingUp className="w-3.5 h-3.5" /> Corporate Partner Intake
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Franchise Partner Application
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Please fill out your capital allocation preference and contact details. Our expansion desk will contact you to share the draft agreement.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="text-center py-12 text-gray-500">Loading Application Form...</div>}>
            <FranchiseApplyForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
