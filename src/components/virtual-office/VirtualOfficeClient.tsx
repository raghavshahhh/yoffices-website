'use client';

import React, { useState } from 'react';
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
  Clock,
  Landmark,
  Scale,
  MapPin,
  ChevronDown,
  HelpCircle,
  Award,
} from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';
import { ImageLightboxModal, LightboxImage } from '@/components/ui/ImageLightboxModal';

export function VirtualOfficeClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const virtualOfficePhotos: LightboxImage[] = [
    {
      src: '/images/center/entrance-biometric.jpg',
      title: 'Sector 45 Biometric Commercial Entrance',
      desc: 'Physical commercial property entrance with dedicated company nameplate display and tax officer audit desk.',
    },
    {
      src: '/images/center/director-private-cabin.jpg',
      title: 'Director Cabin & Verification Hub',
      desc: 'Physical meeting cabin available for bank V-KYC and statutory authority inspections in Gurgaon.',
    },
    {
      src: '/images/center/meeting-cabin.jpg',
      title: 'Boardroom & Client Meeting Space',
      desc: '4K presentation display equipped conference rooms for virtual office members.',
    },
  ];

  const marqueeItems = [
    'HARYANA GST REGISTRATION',
    'MCA ROC INCORPORATION',
    'NOTARIZED 12-MO RENT AGREEMENT',
    'PROPERTY OWNER NOC',
    'MUNICIPAL ELECTRICITY BILL',
    'PHYSICAL SIGNAGE & INSPECTION AUDIT DESK',
    'BANK ACCOUNT V-KYC ASSISTANCE',
  ];

  const steps = [
    {
      number: '01',
      title: 'Drafting & Notarization (24 Hours)',
      desc: 'Upon KYC submission, we prepare your 12-month commercial lease agreement with precise municipal survey & plot demarcations.',
      badge: 'DAY 1',
    },
    {
      number: '02',
      title: 'Owner NOC & Utility Bills',
      desc: 'We provide the authenticated Owner No-Objection Certificate along with the latest paid commercial electricity & property tax receipts.',
      badge: 'DAY 1-2',
    },
    {
      number: '03',
      title: 'Physical Signage & Audit Setup',
      desc: 'Your company brand nameplate is mounted at our official entrance board for GST inspector site visits and bank verification officers.',
      badge: 'DAY 2-3',
    },
    {
      number: '04',
      title: 'GSTIN & ROC Issuance',
      desc: 'Your CA or tax consultant uploads the complete package to the GST / MCA portal. We host on-site officers whenever physical audits occur.',
      badge: 'COMPLETION',
    },
  ];

  const comparisonRows = [
    {
      feature: 'Annual Cost',
      virtual: 'From ₹15,588 / year',
      traditional: '₹3,60,000 - ₹6,00,000 / year',
    },
    {
      feature: 'Security Deposit',
      virtual: 'Zero Deposit',
      traditional: '3 to 6 Months Rent (₹1.5L - ₹3L Locked)',
    },
    {
      feature: 'Electricity, Maintenance & DG Power',
      virtual: 'Included in Plan (₹0 Extra)',
      traditional: '₹10,000 - ₹25,000 / month extra',
    },
    {
      feature: 'Physical Signage Board',
      virtual: 'Included at Center Entrance',
      traditional: 'Paid building signage permits',
    },
    {
      feature: 'Mail & Courier Reception',
      virtual: 'Dedicated On-Site Desk & SMS alerts',
      traditional: 'Requires full-time receptionist',
    },
    {
      feature: 'Meeting Room Access',
      virtual: 'Discounted Member Rates / Credits',
      traditional: 'Requires renting extra square footage',
    },
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
        'Building Directory Listing Support',
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
        'Dedicated Compliance Relationship Manager',
      ],
      popular: false,
      cta: 'Get ROC & GST Bundle',
    },
  ];

  const faqs = [
    {
      q: 'Will the GST department approve a Virtual Office address in Gurgaon?',
      a: 'Yes. The GST department requires a genuine commercial lease agreement, an authentic Owner NOC, and the latest commercial electricity bill matching the property. Yoffices provides this complete 100% compliant statutory dossier, including physical signage at the center entrance for inspector audits.',
    },
    {
      q: 'How fast can I receive the draft rent agreement and NOC?',
      a: 'Once your KYC documents (Director PAN, Aadhaar, and proposed company name) are submitted, our legal desk dispatches digital draft agreements within 2-4 business hours, followed by notarized execution within 24 hours.',
    },
    {
      q: 'Can bank verification officers visit the office for account opening?',
      a: 'Absolutely. Our front-desk executives will greet the verification officer, guide them to your dedicated signage display, and provide access to verification cabins for seamless corporate bank account activation.',
    },
    {
      q: 'Can I use meeting rooms when clients visit Gurgaon?',
      a: 'Yes! All Virtual Office members receive exclusive discounted rates and complimentary credits for executive meeting rooms and boardrooms in Sector 45 and Sector 32.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      <ImageLightboxModal
        images={virtualOfficePhotos}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      {/* Hero Header */}
      <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <FadeUp delay={0.05}>
            <div className="inline-flex items-center gap-2">
              <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[10px] sm:text-[11px]">
                [ 100% TAX & STATUTORY COMPLIANT ]
              </span>
              <span className="nestor-pill bg-emerald-50 text-emerald-700 border-emerald-200 font-mono text-[10px] sm:text-[11px] flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                SAME-DAY DRAFTS
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-[#111111] font-sans leading-tight">
              Virtual Office in Gurgaon for GST & ROC
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Establish a prestigious commercial presence in Sector 32 Institutional Area or Sector 45 Gurugram with notarized Rent Agreements, Owner NOC, Electricity Bills, physical signage, and on-site audit support.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Membership Plans (From ₹1,299/mo)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => {
                setLightboxIndex(0);
                setLightboxOpen(true);
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-gray-50 text-gray-900 font-bold text-xs border border-black/10 transition-all shadow-sm cursor-pointer"
            >
              <span>View Center Signage Gallery</span>
            </button>
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
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 01 / 04 • REGULATORY CHECKLIST ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111111] font-sans">
              Complete Documentation Package
            </h2>
            <p className="text-sm text-gray-600">
              Every statutory file required by GST officers, MCA registrars, and scheduled commercial banks.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeUp delay={0.05} className="nestor-card p-6 sm:p-7 space-y-3 shadow-sm hover:shadow-xl transition-all bg-white">
              <div className="w-10 h-10 rounded-xl bg-[#C91D24] text-white flex items-center justify-center shadow-xs">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-sans">Rent Agreement</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Notarized 12-month commercial lease agreement specifying your entity as authorized commercial occupant.
              </p>
            </FadeUp>

            <FadeUp delay={0.1} className="nestor-card p-6 sm:p-7 space-y-3 shadow-sm hover:shadow-xl transition-all bg-white">
              <div className="w-10 h-10 rounded-xl bg-[#111111] text-white flex items-center justify-center shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-sans">Owner NOC</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Official signed No-Objection Certificate issued by the commercial asset owner for GST/ROC registration.
              </p>
            </FadeUp>

            <FadeUp delay={0.15} className="nestor-card p-6 sm:p-7 space-y-3 shadow-sm hover:shadow-xl transition-all bg-white">
              <div className="w-10 h-10 rounded-xl bg-[#C5A880] text-white flex items-center justify-center shadow-xs">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-sans">Electricity Bill</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Latest paid commercial electricity bill and municipal property tax receipt matching the exact survey/plot number.
              </p>
            </FadeUp>

            <FadeUp delay={0.2} className="nestor-card p-6 sm:p-7 space-y-3 shadow-sm hover:shadow-xl transition-all bg-white">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-sans">Signage & Audit Desk</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Physical display board at center entrance for tax officer verification and dedicated mail handling desk.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 4-Stage Approval Process Roadmap */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 02 / 04 • SEAMLESS ROADMAP ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 font-sans">
              4-Stage Approval Roadmap
            </h2>
            <p className="text-sm text-gray-600">
              From draft generation to final GSTIN / MCA certificate issuance in 4 simple milestones.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <FadeUp
                key={idx}
                delay={idx * 0.08}
                className="p-6 sm:p-7 rounded-3xl bg-[#FAF9F6] border border-black/10 space-y-4 relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black font-mono text-[#C91D24]">
                      {step.number}
                    </span>
                    <span className="nestor-pill font-mono text-[9px] uppercase font-bold bg-black/5">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 font-sans leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto space-y-12">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 03 / 04 • COST COMPARISON ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111111] font-sans">
              Virtual Office vs Physical Lease
            </h2>
            <p className="text-sm text-gray-600">
              Save over 90% in initial capital outlay while getting identical statutory legality.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="overflow-hidden rounded-3xl bg-white border border-black/10 shadow-xl">
              <div className="grid grid-cols-12 bg-[#111111] text-white p-4 sm:p-5 text-xs sm:text-sm font-bold font-sans">
                <div className="col-span-5">Feature / Overhead</div>
                <div className="col-span-4 text-[#C5A880]">Yoffices Virtual Plan</div>
                <div className="col-span-3 text-gray-400">Traditional Lease</div>
              </div>

              <div className="divide-y divide-gray-100 text-xs sm:text-sm">
                {comparisonRows.map((row, i) => (
                  <div key={i} className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-gray-50 transition-colors">
                    <div className="col-span-5 font-bold text-gray-900">{row.feature}</div>
                    <div className="col-span-4 font-semibold text-emerald-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{row.virtual}</span>
                    </div>
                    <div className="col-span-3 text-gray-500 font-medium">{row.traditional}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 04 / 04 • TRANSPARENT PRICING ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-sans tracking-tight">
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
                className={`nestor-card p-7 sm:p-8 flex flex-col justify-between shadow-xl bg-white ${
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
                    <h3 className="text-xl font-extrabold text-gray-900 font-sans">{t.name}</h3>
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

      {/* FAQ Accordion */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-4xl mx-auto space-y-10">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-700">
              [ FREQUENTLY ASKED QUESTIONS ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-sans tracking-tight">
              Got Questions on Virtual Offices?
            </h2>
          </FadeUp>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <FadeUp key={idx} delay={idx * 0.05}>
                  <div className="rounded-2xl bg-white border border-black/10 overflow-hidden shadow-xs">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50"
                    >
                      <span className="font-bold text-sm sm:text-base text-gray-900">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#C91D24]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-gray-600 border-t border-gray-100 pt-3 leading-relaxed">
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
