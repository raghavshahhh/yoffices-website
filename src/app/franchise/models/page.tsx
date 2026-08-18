import Link from 'next/link';
import { db } from '@/lib/db';
import {
  TrendingUp,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Shield,
  Coins,
} from 'lucide-react';
import { formatINR } from '@/lib/utils';

export const metadata = {
  title: 'Franchise Investment Models (Desk, Dormitory, Cabin) | Yoffices',
  description:
    'Detailed breakdown of the 3 official Yoffices franchise models: Desk (₹5L), Dormitory (₹11L), and Cabin (₹25L) with 3-year rental schedules.',
};

export default function FranchiseModelsPage() {
  const models = db.getFranchiseModels();

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <Coins className="w-3.5 h-3.5" /> 3 Official Investment Tiers
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Compare Yoffices Franchise Models
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Examine the principal allocation, monthly rental disbursement schedules, and stated 3-year totals across Desk, Dormitory, and Cabin tiers.
          </p>
        </div>
      </section>

      {/* Models Detailed Matrix */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {models.map((model) => (
            <div
              key={model.id}
              className="bg-[#FAF9F6] rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
            >
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#C91D24] text-white font-bold flex items-center justify-center text-xs">
                    0{model.order}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-sans">
                    {model.name}
                  </h2>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{model.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {(model.highlights || []).map((f: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payout Card */}
              <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-md space-y-4">
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                  3-Year Financial Schedule
                </div>
                <div className="space-y-2 text-xs border-b border-gray-100 pb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Principal:</span>
                    <strong className="text-gray-900">{formatINR(model.principal)}</strong>
                  </div>
                  <div className="flex justify-between text-[#C91D24] font-bold">
                    <span>Monthly Rental:</span>
                    <span>{formatINR(model.monthlyRental)} / mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Annual Rental:</span>
                    <strong className="text-gray-900">{formatINR(model.annualRental)} / yr</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">3-Yr Total Rental:</span>
                    <strong className="text-gray-900">{formatINR(model.threeYearRental)}</strong>
                  </div>
                </div>

                <div className="pt-1 flex justify-between items-center text-sm font-black text-gray-900">
                  <span>Stated Total:</span>
                  <span className="text-[#C91D24] text-base">{formatINR(model.statedTotal)}</span>
                </div>

                <Link
                  href={`/franchise/apply?model=${encodeURIComponent(model.name)}`}
                  className="w-full py-3 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white text-xs font-bold text-center block shadow-md transition-colors"
                >
                  Apply for {model.name}
                </Link>
              </div>
            </div>
          ))}

          {/* Statutory Disclaimer */}
          <div className="p-5 rounded-2xl bg-gray-100 border border-gray-200 text-xs text-gray-600 flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#C91D24] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Important Contractual Disclaimer:</strong> Terms shown are based on information supplied by Yoffices and are subject to the final executed agreement and current approved terms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
