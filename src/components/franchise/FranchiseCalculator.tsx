'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Building2,
  Layers,
  Sparkles,
  Info,
} from 'lucide-react';
import { FranchiseModelData } from '@/types';
import { formatINR } from '@/lib/utils';

interface FranchiseCalculatorProps {
  models: FranchiseModelData[];
  initialModelSlug?: string;
  showApplyButton?: boolean;
}

export function FranchiseCalculator({
  models,
  initialModelSlug = 'desk-workstation',
  showApplyButton = true,
}: FranchiseCalculatorProps) {
  const [selectedSlug, setSelectedSlug] = useState(initialModelSlug);
  const [units, setUnits] = useState(1);

  const selectedModel =
    models.find((m) => m.slug === selectedSlug) || models[0] || {
      name: 'Desk / Workstation',
      slug: 'desk-workstation',
      principal: 500000,
      monthlyRental: 5000,
      annualRental: 60000,
      threeYearRental: 180000,
      statedTotal: 680000,
      validityYears: 3,
      securityChequesCount: 3,
    };

  const totalPrincipal = selectedModel.principal * units;
  const totalMonthly = selectedModel.monthlyRental * units;
  const totalAnnual = selectedModel.annualRental * units;
  const totalThreeYearRental = selectedModel.threeYearRental * units;
  const totalStatedRealization = selectedModel.statedTotal * units;

  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
      {/* Header Banner */}
      <div className="bg-[#0C0E12] text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C91D24]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white mb-2">
              <Calculator className="w-3.5 h-3.5" /> Official Rental Calculator
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white font-sans">
              3-Year Commercial Franchise Yield Estimation
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Select an asset tier to inspect principal allocation and monthly rental disbursements.
            </p>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-xs text-gray-400 block">Validity Tenure</span>
            <span className="text-lg font-bold text-[#C5A880]">3 Years (36 Months)</span>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* Model Selector Tabs */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
            Step 1: Choose Commercial Asset Model
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {models.map((model) => {
              const isSelected = model.slug === selectedSlug;
              return (
                <button
                  key={model.slug}
                  type="button"
                  onClick={() => setSelectedSlug(model.slug)}
                  className={`p-4 rounded-xl border text-left transition-all relative ${
                    isSelected
                      ? 'border-[#C91D24] bg-red-50/50 shadow-md ring-2 ring-[#C91D24]/20'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {model.isFeatured && (
                    <span className="absolute -top-2.5 right-3 bg-[#0C0E12] text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full">
                      High Demand
                    </span>
                  )}
                  <div className="font-bold text-gray-900 text-sm">{model.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5 font-medium">
                    Principal: <strong className="text-gray-800">{formatINR(model.principal)}</strong>
                  </div>
                  <div className="text-xs text-[#C91D24] font-bold mt-2 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>{formatINR(model.monthlyRental)} / month</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Units Multiplier */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Step 2: Number of Asset Units
            </label>
            <span className="text-xs font-semibold text-gray-700">
              {units} {units === 1 ? 'Unit' : 'Units'} Selected
            </span>
          </div>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 5, 10].map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setUnits(count)}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                  units === count
                    ? 'bg-[#0C0E12] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {count} {count === 1 ? 'Unit' : 'Units'}
              </button>
            ))}
          </div>
        </div>

        {/* Calculation Result Dashboard */}
        <div className="bg-[#FAF9F6] rounded-2xl p-6 border border-gray-200 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Principal */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block">
                Total Principal
              </span>
              <span className="text-xl sm:text-2xl font-black text-gray-900 mt-1 block">
                {formatINR(totalPrincipal)}
              </span>
              <span className="text-[11px] text-gray-400 mt-1 block">Initial capital allocation</span>
            </div>

            {/* Monthly Rental */}
            <div className="bg-white p-4 rounded-xl border border-red-200 bg-red-50/30 shadow-sm">
              <span className="text-xs text-[#C91D24] font-semibold uppercase tracking-wider block">
                Monthly Rental
              </span>
              <span className="text-xl sm:text-2xl font-black text-[#C91D24] mt-1 block">
                {formatINR(totalMonthly)}
              </span>
              <span className="text-[11px] text-gray-500 mt-1 block">Paid every 30 days</span>
            </div>

            {/* Annual Rental */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block">
                Annual Rental (12 Mo)
              </span>
              <span className="text-xl sm:text-2xl font-black text-gray-900 mt-1 block">
                {formatINR(totalAnnual)}
              </span>
              <span className="text-[11px] text-gray-400 mt-1 block">Cumulative per year</span>
            </div>

            {/* 3-Year Rental */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block">
                3-Year Total Rental
              </span>
              <span className="text-xl sm:text-2xl font-black text-[#C5A880] mt-1 block">
                {formatINR(totalThreeYearRental)}
              </span>
              <span className="text-[11px] text-gray-400 mt-1 block">36 months total payout</span>
            </div>
          </div>

          {/* Highlight Stated Realization Box */}
          <div className="bg-[#0C0E12] text-white p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C91D24]" />
                <span className="text-sm font-bold uppercase tracking-wider text-gray-200">
                  Stated Total Realization (Principal + 3-Yr Rental)
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Backed by 3 annual post-dated security cheques and formal franchise agreement.
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">
                {formatINR(totalStatedRealization)}
              </div>
              <span className="text-[11px] text-[#C5A880] font-medium block">
                Across 3-year term
              </span>
            </div>
          </div>

          {/* Security Features Check List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>3 Post-Dated Security Cheques</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Yearly Cheque Return Process</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Turnkey Managed Real Estate</span>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        {showApplyButton && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Info className="w-4 h-4 text-gray-400 shrink-0" />
              <span>
                Figures reflect client-supplied franchise material and are governed by the executed contract.
              </span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                href={`/franchise/apply?model=${encodeURIComponent(selectedModel.name)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>Apply for {selectedModel.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
