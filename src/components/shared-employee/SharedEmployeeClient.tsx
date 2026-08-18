'use client';

import React from 'react';
import Link from 'next/link';
import {
  Users,
  CheckCircle2,
  XCircle,
  TrendingDown,
  Headphones,
  FileSpreadsheet,
  Monitor,
  ArrowRight,
} from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';

export function SharedEmployeeClient() {
  const marqueeItems = [
    'CUT PAYROLL OVERHEAD BY 65%',
    'ZERO PF / ESI STATUTORY LIABILITIES',
    'ON-SITE GURGAON FRONT-DESK CONCIERGE',
    'CERTIFIED IT & NETWORK SPECIALISTS',
    'BACKUP REDUNDANCY ON LEAVE DAYS',
    'FRACTIONAL OPERATIONAL BILLING',
  ];

  const roles = [
    {
      title: 'Reception & Visitor Concierge',
      desc: 'Professional front-desk executive greeting your visitors, answering dedicated company phone lines, and receiving deliveries.',
      icon: Headphones,
      savings: 'Save ₹25,000 / mo',
    },
    {
      title: 'On-Site IT & Network Support',
      desc: 'Hardware troubleshooting, printer setup, VPN/firewall configuration, and local network diagnostics on demand.',
      icon: Monitor,
      savings: 'Save ₹35,000 / mo',
    },
    {
      title: 'Admin & Operations Coordinator',
      desc: 'Filing, courier dispatches, stationery ordering, meeting room scheduling, and office supplies procurement.',
      icon: Users,
      savings: 'Save ₹20,000 / mo',
    },
    {
      title: 'Bookkeeping & Billing Assistant',
      desc: 'Basic accounts entry, vendor invoice reconciliation, GST billing prep, and expense tracking assistance.',
      icon: FileSpreadsheet,
      savings: 'Save ₹30,000 / mo',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <FadeUp delay={0.1}>
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ OPERATIONAL COST EFFICIENCY ]
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#111111] font-sans">
              Cut Payroll Overhead with Shared Staff
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Why bear full-time salaries, PF/ESI liabilities, and recruitment headaches for administrative roles? Access certified, on-site professionals at Yoffices Gurgaon.
            </p>
          </FadeUp>

          <FadeUp delay={0.4} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="#comparison"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Compare Cost Savings</span>
              <ArrowRight className="w-4 h-4" />
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

      {/* Comparison Section */}
      <section id="comparison" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 01 / 02 • COST & LIABILITY MATRIX ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111] font-sans">
              Traditional Hiring vs Shared Model
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Traditional Full Time */}
            <FadeUp delay={0.1} className="nestor-card p-8 bg-white border border-red-200/80 space-y-6 shadow-lg">
              <div className="flex items-center gap-2.5">
                <XCircle className="w-6 h-6 text-[#C91D24]" />
                <h3 className="text-xl font-bold text-gray-900 font-sans">Traditional Full-Time Hire</h3>
              </div>

              <ul className="space-y-3 text-xs text-gray-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C91D24] font-bold">✕</span>
                  <span>Full fixed salary (₹30k - ₹50k/mo) regardless of daily usage</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C91D24] font-bold">✕</span>
                  <span>PF, ESI, Gratuity & statutory compliance overhead</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C91D24] font-bold">✕</span>
                  <span>Recruitment consultant fees and 30-day notice periods</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C91D24] font-bold">✕</span>
                  <span>Productivity loss during leaves, sick days, and sudden attrition</span>
                </li>
              </ul>
            </FadeUp>

            {/* Yoffices Shared Model */}
            <FadeUp delay={0.2} className="nestor-dark-card p-8 bg-[#111111] text-white border border-black/10 space-y-6 shadow-2xl">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-6 h-6 text-[#C5A880]" />
                <h3 className="text-xl font-bold text-white font-sans">Yoffices Shared Employee</h3>
              </div>

              <ul className="space-y-3 text-xs text-gray-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Fractional billing based only on your actual usage</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Zero PF / ESI liabilities — 100% managed by Yoffices</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Fully verified, certified, and pre-onboarded staff</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Guaranteed backup redundancy — zero downtime when staff is on leave</span>
                </li>
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Available Roles Grid */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 02 / 02 • AVAILABLE ROLES ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 font-sans tracking-tight">
              On-Demand Shared Resource Roles
            </h2>
            <p className="text-sm text-gray-600">
              Select one or combine multiple services to streamline your operations.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((r, idx) => (
              <FadeUp
                key={idx}
                delay={idx * 0.1}
                className="nestor-card p-6 sm:p-8 space-y-4 flex flex-col justify-between shadow-md"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#C91D24] flex items-center justify-center font-bold">
                    <r.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 font-sans">{r.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{r.desc}</p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl text-center">
                  {r.savings}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Lead Form */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F0EFE9]">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ INQUIRE NOW ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight">
              Request Shared Resource Pricing
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Let us know what operational support your team requires at Sector 45 or Sector 32.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <LeadForm
              defaultService="Shared Employee"
              title="Hire Shared Personnel"
              subtitle="Submit details and get dedicated pricing quotes within 30 minutes."
              source="Shared Employee Index"
            />
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
