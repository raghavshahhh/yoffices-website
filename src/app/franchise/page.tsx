import Link from 'next/link';
import { db } from '@/lib/db';
import {
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Calculator,
  Shield,
  Layers,
  FileText,
  Building2,
  HelpCircle,
} from 'lucide-react';
import { FranchiseCalculator } from '@/components/franchise/FranchiseCalculator';
import { formatINR } from '@/lib/utils';
import { INITIAL_SITE_SETTINGS } from '@/lib/constants';

export const metadata = {
  title: 'Commercial Workspace Franchise Opportunity | Yoffices',
  description:
    'Explore asset-backed commercial real estate franchise opportunities with Yoffices. 3-year term models starting from ₹5 Lakhs with structured monthly rental disbursements.',
};

export default function FranchisePage() {
  const models = db.getFranchiseModels();
  const terms = db.getFranchiseTerms();

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C91D24]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <TrendingUp className="w-3.5 h-3.5" /> High-Yield Commercial Asset Framework
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Own a Yoffices Business Opportunity
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Participate in modern commercial real estate assets with structured 3-year monthly rental disbursements, contractual post-dated security cheques, and zero operational hassles.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/franchise/apply"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-xl transition-all"
            >
              <span>Apply for Franchise</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/franchise/how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all"
            >
              <span>How It Works & Terms</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3 Models Overview Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C91D24] block mb-2">
              Official Asset Tiers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 font-sans">
              Three Structured Franchise Models
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Based on material supplied by Yoffices, with fixed monthly rental disbursements over a 3-year term.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((model) => (
              <div
                key={model.id}
                className={`p-8 rounded-2xl flex flex-col justify-between transition-all ${
                  model.isFeatured
                    ? 'bg-white border-2 border-[#C91D24] shadow-2xl relative'
                    : 'bg-[#FAF9F6] border border-gray-200 shadow-md'
                }`}
              >
                {model.isFeatured && (
                  <span className="absolute -top-3 right-6 bg-[#C91D24] text-white text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full">
                    Featured Asset
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-black text-gray-900 font-sans">{model.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{model.subtitle}</p>

                  <div className="mt-6 p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>Principal Amount:</span>
                      <strong className="text-gray-900 text-sm">{formatINR(model.principal)}</strong>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#C91D24] font-bold pt-1 border-t border-gray-200">
                      <span>Monthly Rental:</span>
                      <span className="text-base">{formatINR(model.monthlyRental)} / mo</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600 pt-1 border-t border-gray-200">
                      <span>Annual Rental:</span>
                      <strong className="text-gray-900">{formatINR(model.annualRental)} / yr</strong>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600 pt-1 border-t border-gray-200">
                      <span>3-Year Rental Payout:</span>
                      <strong className="text-gray-900">{formatINR(model.threeYearRental)}</strong>
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-lg bg-[#0C0E12] text-white text-xs flex items-center justify-between">
                    <span className="text-gray-300">Stated Total:</span>
                    <strong className="text-[#C5A880] text-sm">{formatINR(model.statedTotal)}</strong>
                  </div>

                  <ul className="mt-6 space-y-2 text-xs text-gray-600 pt-3 border-t border-gray-100">
                    {(model.highlights || []).slice(4).map((f: string, i: number) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    href={`/franchise/apply?model=${encodeURIComponent(model.name)}`}
                    className={`w-full py-3 rounded-xl font-bold text-xs text-center block transition-all shadow-md ${
                      model.isFeatured
                        ? 'bg-[#C91D24] hover:bg-[#A3151B] text-white'
                        : 'bg-[#0C0E12] hover:bg-black text-white'
                    }`}
                  >
                    Apply for this Model
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calculator Component */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FranchiseCalculator models={models} showApplyButton={true} />
        </div>
      </section>

      {/* 6-Stage Timeline */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C91D24] block mb-2">
              Structured Timeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-sans">
              How the Franchise Process Operates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {terms.map((term) => (
              <div key={term.id} className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#C91D24] text-white font-black text-sm flex items-center justify-center">
                  0{term.stepNumber}
                </div>
                <h3 className="text-base font-bold text-gray-900 font-sans">{term.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{term.description}</p>
              </div>
            ))}
          </div>

          {/* Statutory Disclaimer Box */}
          <div className="mt-12 p-5 rounded-2xl bg-gray-100 border border-gray-200 text-xs text-gray-600 flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#C91D24] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Statutory Disclosure:</strong> Terms shown are based on information supplied by Yoffices and are subject to the final executed agreement and current approved terms. Yoffices does not offer market-linked or speculative financial instruments; commercial franchise arrangements represent managed real estate asset participation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
