'use client';

import React, { useState } from 'react';
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
  ShieldCheck,
  Calculator,
  Lock,
  Clock,
  Sparkles,
  ChevronDown,
} from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';
import { formatINR } from '@/lib/utils';

export function SharedEmployeeClient() {
  const [selectedRolesCount, setSelectedRolesCount] = useState(2);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const marqueeItems = [
    'CUT PAYROLL OVERHEAD BY 65%',
    'ZERO PF / ESI STATUTORY LIABILITIES',
    'ON-SITE GURGAON FRONT-DESK CONCIERGE',
    'CERTIFIED IT & NETWORK SPECIALISTS',
    'BACKUP REDUNDANCY ON LEAVE DAYS',
    'FRACTIONAL OPERATIONAL BILLING',
    '100% NDA & DATA PRIVACY PROTECTED',
  ];

  const roles = [
    {
      title: 'Reception & Visitor Concierge',
      desc: 'Professional front-desk executive greeting your visitors, answering dedicated company phone lines, receiving courier deliveries, and managing daily log books.',
      icon: Headphones,
      traditionalCost: 28000,
      sharedCost: 7000,
      savings: 'Save ₹21,000 / mo',
      responsibilities: [
        'Dedicated visitor welcoming & badge issuance',
        'Company phone call answering & call patch',
        'Daily courier, package & parcel management',
        'VIP meeting room hospitality & beverage service',
      ],
    },
    {
      title: 'On-Site IT & Network Support',
      desc: 'Hardware troubleshooting, printer setup, VPN/firewall configuration, dual-ISP network diagnostics, and workstation onboarding on demand.',
      icon: Monitor,
      traditionalCost: 40000,
      sharedCost: 7000,
      savings: 'Save ₹33,000 / mo',
      responsibilities: [
        'Ethernet LAN port patching & Wi-Fi diagnostics',
        'Network printer & biometric scanner configuration',
        'Laptop OS troubleshooting & software setup',
        'Immediate hardware replacement coordination',
      ],
    },
    {
      title: 'Admin & Operations Coordinator',
      desc: 'Filing, courier dispatches, stationery ordering, meeting room scheduling, cafeteria supplies procurement, and vendor coordination.',
      icon: Users,
      traditionalCost: 25000,
      sharedCost: 7000,
      savings: 'Save ₹18,000 / mo',
      responsibilities: [
        'Daily vendor coordination & petty expense tracking',
        'Stationery, printing & office supplies dispatch',
        'Conference room calendaring & scheduling',
        'Government tax & utility documentation filing',
      ],
    },
    {
      title: 'Bookkeeping & Billing Assistant',
      desc: 'Basic accounts entry, vendor invoice reconciliation, GST billing prep, TDS challan records, and expense tracking assistance.',
      icon: FileSpreadsheet,
      traditionalCost: 35000,
      sharedCost: 7000,
      savings: 'Save ₹28,000 / mo',
      responsibilities: [
        'Vendor tax invoice checking & recordkeeping',
        'Monthly expense categorization & receipts sorting',
        'Drafting customer invoices & receipts',
        'Coordination with your external Chartered Accountant',
      ],
    },
  ];

  const traditionalTotal = roles
    .slice(0, selectedRolesCount)
    .reduce((acc, r) => acc + r.traditionalCost, 0);
  const sharedTotal = roles
    .slice(0, selectedRolesCount)
    .reduce((acc, r) => acc + r.sharedCost, 0);
  const netMonthlySavings = traditionalTotal - sharedTotal;
  const netAnnualSavings = netMonthlySavings * 12;

  const faqs = [
    {
      q: 'How does the Shared Employee model work in practice?',
      a: 'Yoffices employs, trains, and manages dedicated full-time professionals on-site at Sector 45 and Sector 32. Instead of bearing 100% of a full-time salary and employee benefits yourself, your team accesses their expertise fractionally during business hours.',
    },
    {
      q: 'Is our company data and client information secure?',
      a: 'Yes. Every Yoffices shared personnel operates under comprehensive Non-Disclosure Agreements (NDA) and strict confidentiality clauses. IT personnel work under enterprise privileged access controls.',
    },
    {
      q: 'What happens if a shared employee goes on leave or falls sick?',
      a: 'This is the biggest advantage of the shared model: Yoffices provides instant cross-trained backup redundancy. Your operations never pause due to personal leave or unexpected attrition.',
    },
    {
      q: 'Can we combine multiple roles into a customized monthly plan?',
      a: 'Yes, you can bundle Reception, IT Support, Admin, and Bookkeeping services into a unified monthly subscription with zero long-term lock-in.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <FadeUp delay={0.05}>
            <div className="inline-flex items-center gap-2">
              <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[10px] sm:text-[11px]">
                [ 65% PAYROLL COST REDUCTION ]
              </span>
              <span className="nestor-pill bg-emerald-50 text-emerald-700 border-emerald-200 font-mono text-[10px] sm:text-[11px] flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                ZERO STATUTORY LIABILITIES
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-[#111111] font-sans leading-tight">
              Cut Payroll Overhead with Shared Staff
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Why bear full-time salaries, PF/ESI liabilities, and recruitment headaches for administrative roles? Access certified, on-site professionals at Yoffices Gurgaon.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Calculate Your Monthly Savings</span>
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

      {/* Interactive Cost Savings Calculator */}
      <section id="calculator" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto space-y-12">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 01 / 03 • INTERACTIVE SAVINGS CALCULATOR ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111111] font-sans">
              Calculate Your Operational ROI
            </h2>
            <p className="text-sm text-gray-600">
              Select how many operational personnel roles your company requires to calculate your annual savings.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="nestor-card p-6 sm:p-10 bg-white border border-black/10 shadow-2xl space-y-8">
              {/* Role Count Switcher */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-gray-900">
                  <span>Number of Shared Roles:</span>
                  <span className="font-mono text-[#C91D24] text-base">{selectedRolesCount} Staff Roles Selected</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((count) => (
                    <button
                      key={count}
                      onClick={() => setSelectedRolesCount(count)}
                      className={`py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                        selectedRolesCount === count
                          ? 'bg-[#111111] text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {count} {count === 1 ? 'Role' : 'Roles'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cost Comparison Metric Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                <div className="p-5 rounded-2xl bg-red-50/70 border border-red-200/60 space-y-1 text-center sm:text-left">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#C91D24]">
                    TRADITIONAL FULL-TIME
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 font-sans">
                    {formatINR(traditionalTotal)} <span className="text-xs font-normal text-gray-500">/mo</span>
                  </div>
                  <p className="text-[11px] text-gray-600">
                    Includes salary + PF/ESI + hiring consultant charges
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 space-y-1 text-center sm:text-left">
                  <span className="text-[10px] font-mono uppercase font-bold text-emerald-700">
                    YOFFICES SHARED PLAN
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-800 font-sans">
                    {formatINR(sharedTotal)} <span className="text-xs font-normal text-gray-500">/mo</span>
                  </div>
                  <p className="text-[11px] text-gray-600">
                    All-inclusive fractional operational fee
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#111111] text-white space-y-1 text-center sm:text-left shadow-lg">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#C5A880]">
                    YOUR NET ANNUAL SAVINGS
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-white font-sans">
                    {formatINR(netAnnualSavings)}
                  </div>
                  <p className="text-[11px] text-gray-400">
                    Save {formatINR(netMonthlySavings)} every month
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Available Roles & Deliverables */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 02 / 03 • STAFF ROLES & DELIVERABLES ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 font-sans">
              4 On-Demand Shared Personnel Roles
            </h2>
            <p className="text-sm text-gray-600">
              Pre-vetted, certified, and supervised on-site by Yoffices hospitality management.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((r, idx) => (
              <FadeUp
                key={idx}
                delay={idx * 0.08}
                className="nestor-card p-6 sm:p-7 space-y-5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#C91D24] flex items-center justify-center font-bold shadow-xs">
                    <r.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-gray-900 font-sans">{r.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{r.desc}</p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <span className="text-[10px] font-mono font-bold text-gray-400 uppercase block">
                      KEY DELIVERABLES
                    </span>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      {r.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl text-center">
                  {r.savings}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Reliability Pillars */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 03 / 03 • SECURITY & RELIABILITY ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111111] font-sans">
              Enterprise Governance & Security
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeUp delay={0.05} className="nestor-card p-6 sm:p-8 space-y-3 bg-white shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#111111] text-white flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-sans">100% NDA Protection</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                All personnel sign comprehensive Non-Disclosure and Confidentiality agreements protecting your customer and proprietary business data.
              </p>
            </FadeUp>

            <FadeUp delay={0.1} className="nestor-card p-6 sm:p-8 space-y-3 bg-white shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#C91D24] text-white flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-sans">Zero-Downtime Backup</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                If your assigned specialist is on sick leave or holiday, cross-trained replacement staff seamlessly takes over without any interruption.
              </p>
            </FadeUp>

            <FadeUp delay={0.15} className="nestor-card p-6 sm:p-8 space-y-3 bg-white shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#C5A880] text-gray-900 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-sans">Zero PF/ESI Liabilities</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                All payroll, health insurance, gratuity, statutory bonuses, and labor law compliances are 100% managed by Yoffices India.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.08]">
        <div className="max-w-4xl mx-auto space-y-10">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-700">
              [ FAQ ACCORDION ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-sans tracking-tight">
              Shared Staffing FAQs
            </h2>
          </FadeUp>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <FadeUp key={idx} delay={idx * 0.05}>
                  <div className="rounded-2xl bg-[#FAF9F6] border border-black/10 overflow-hidden shadow-xs">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-100/60"
                    >
                      <span className="font-bold text-sm sm:text-base text-gray-900">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#C91D24]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-gray-600 border-t border-gray-200/60 pt-3 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Lead Form */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F0EFE9]">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ INQUIRE NOW ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight">
              Request Shared Resource Proposal
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
