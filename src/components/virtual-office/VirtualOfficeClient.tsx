'use client';

import React from 'react';
import Link from 'next/link';
import {
  FileCheck2,
  CheckCircle2,
  Building2,
  Sparkles,
  ShieldCheck,
  Mail,
  FileText,
  ArrowRight,
  Shield,
} from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';

export function VirtualOfficeClient() {
  const marqueeItems = [
    'HARYANA GST REGISTRATION',
    'MCA ROC INCORPORATION',
    'NOTARIZED 12-MO RENT AGREEMENT',
    'PROPERTY OWNER NOC',
    'MUNICIPAL ELECTRICITY BILL',
    'PHYSICAL SIGNAGE & INSPECTION AUDIT DESK',
  ];

  const tiers = [
    {
      name: 'Business Address & Mailing',
      price: '₹1,299',
      unit: 'month (Billed Annually)',
      desc: 'Prime Gurgaon commercial address for website, business cards, client invoices, and mail reception.',
      features: [
        'Prime Institutional Area, Sector 32 / Sector 45 Address',
        'Courier, Parcel & Government Mail Handling Reception',
        'Instant SMS/Email Mail Arrival Notification',
        'Discounted Hourly Meeting Room & Day Pass Access',
      ],
      popular: false,
      cta: 'Choose Business Address',
    },
    {
      name: 'GST Registration Plan',
      price: '₹1,799',
      unit: 'month (Billed Annually)',
      desc: 'Complete statutory documentation package required for Haryana GSTIN issuance and tax compliance.',
      features: [
        'Notarized Commercial Rent Agreement (12-Month Tenure)',
        'Owner No-Objection Certificate (NOC)',
        'Latest Paid Municipal Electricity / Property Tax Bill',
        'Dedicated Physical Company Signage Board at Center',
        'Courier Handling & Government Official Audit Desk Support',
        '100% Tax Document Verification Guarantee',
      ],
      popular: true,
      cta: 'Get GST Office Plan',
    },
    {
      name: 'ROC / Company Incorporation Plan',
      price: '₹2,499',
      unit: 'month (Billed Annually)',
      desc: 'Everything required for Ministry of Corporate Affairs (MCA) incorporation and commercial bank account opening.',
      features: [
        'Full ROC Compliant Lease Documentation & NOC',
        'Commercial Bank Account Verification Assistance',
        'Physical Signage & Inspection Assistance Support',
        'Mail Handling & Digital Scanning Forwarding',
        '4 Complimentary Meeting Room Hours per Year',
      ],
      popular: false,
      cta: 'Get ROC & GST Bundle',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <FadeUp delay={0.1}>
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ 100% TAX & STATUTORY COMPLIANT ]
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#111111] font-sans">
              Virtual Office in Gurgaon for GST & ROC
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Establish a prestigious commercial presence in Sector 32 or Sector 45 Gurugram with verified Rent Agreements, NOC, Electricity Bills, and on-site mail handling.
            </p>
          </FadeUp>

          <FadeUp delay={0.4} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Membership Plans (From ₹1,299/mo)</span>
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

      {/* Documentation Grid */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 01 / 02 • REGULATORY CHECKLIST ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111] font-sans">
              Documentation Package Provided
            </h2>
            <p className="text-sm text-gray-600">
              Every document required by GST officers, MCA registrars, and scheduled banks.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <FadeUp delay={0.1} className="nestor-card p-6 sm:p-8 space-y-3 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-[#C91D24] text-white flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-sans">Rent Agreement</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Notarized 12-month commercial lease agreement specifying your company as authorized commercial occupant.
              </p>
            </FadeUp>

            <FadeUp delay={0.2} className="nestor-card p-6 sm:p-8 space-y-3 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-[#111111] text-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-sans">Owner NOC</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Official No-Objection Certificate issued by the commercial property owner for business registration.
              </p>
            </FadeUp>

            <FadeUp delay={0.3} className="nestor-card p-6 sm:p-8 space-y-3 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-[#C5A880] text-white flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-sans">Electricity Bill</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Latest paid commercial electricity bill and municipal tax receipt matching the exact survey/plot number.
              </p>
            </FadeUp>

            <FadeUp delay={0.4} className="nestor-card p-6 sm:p-8 space-y-3 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-sans">Signage & Mail</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Physical display board at center entrance for tax officer verification and dedicated mail handling desk.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 02 / 02 • TRANSPARENT PRICING ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 font-sans tracking-tight">
              Virtual Office Membership Plans
            </h2>
            <p className="text-sm text-gray-600">
              Transparent, flat annual pricing with zero hidden documentation fees.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((t, idx) => (
              <FadeUp
                key={idx}
                delay={idx * 0.1}
                className={`nestor-card p-8 flex flex-col justify-between shadow-xl ${
                  t.popular ? 'border-2 border-[#C91D24] relative' : ''
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-3 right-6 bg-[#C91D24] text-white font-mono text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full shadow">
                    MOST RECOMMENDED
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 font-sans">{t.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{t.desc}</p>
                    <div className="text-3xl font-black text-[#C91D24] font-sans mt-4">
                      {t.price} <span className="text-xs font-normal text-gray-500 font-sans">/{t.unit}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-gray-600 pt-4 border-t border-gray-100">
                    {t.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    href={`/contact?service=Virtual+Office&plan=${encodeURIComponent(t.name)}`}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs text-center block transition-all shadow-md ${
                      t.popular
                        ? 'bg-[#C91D24] hover:bg-[#A3151B] text-white'
                        : 'bg-[#111111] hover:bg-black text-white'
                    }`}
                  >
                    {t.cta}
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3} className="p-5 rounded-2xl bg-[#F0EFE9] border border-black/5 text-xs text-gray-600 flex items-start gap-3">
            <Shield className="w-4 h-4 text-[#C91D24] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Regulatory Notice:</strong> Yoffices provides genuine physical commercial addresses and statutory lessor documentation in accordance with Indian real estate and leasing laws. Final registration approval is granted by the relevant statutory tax authority (GST/MCA) subject to client identity and document verification.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Inquiry Lead Form */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F0EFE9]">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ SAME-DAY DRAFTS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight">
              Get Your Virtual Office Started
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Our legal desk will assist you with same-day draft documentation for Sector 32 or Sector 45.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <LeadForm
              defaultService="Virtual Office"
              title="Apply for GST / ROC Address"
              subtitle="Submit details for same-day agreement issuance."
              source="Virtual Office Index"
            />
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
