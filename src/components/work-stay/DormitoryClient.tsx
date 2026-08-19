'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Compass,
  CheckCircle2,
  Calendar,
  Bed,
  Wifi,
  Coffee,
  ArrowRight,
  ShieldCheck,
  Utensils,
  Lock,
  Sparkles,
  Zap,
  ShowerHead,
  ChevronDown,
  Clock,
} from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';
import { ImageLightboxModal, LightboxImage } from '@/components/ui/ImageLightboxModal';

export function DormitoryClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const dormitoryPhotos: LightboxImage[] = [
    {
      src: '/images/center/cafe-pantry-greenwall.jpg',
      title: 'In-House Gourmet Pantry & Dining',
      desc: 'Automatic bean-to-cup coffee machine, RO water, and biophilic vertical garden dining area in Sector 45.',
    },
    {
      src: '/images/center/workspace-layout.jpg',
      title: 'Integrated 24/7 Coworking Space',
      desc: 'Ergonomic workstations just one flight of stairs down from your dormitory suite.',
    },
  ];

  const marqueeItems = [
    'AIR-CONDITIONED DORMITORY LIVING PODS',
    'SECTOR 45 GURGAON LOCATION',
    '24/7 COWORKING & PHONE BOOTHS',
    '1GBPS DUAL-BAND WI-FI',
    'DAILY HOUSEKEEPING & FRESH LINEN',
    'IN-HOUSE MEAL SUBSCRIPTIONS',
    'HOT WATER SHOWERS & RO DRINKING WATER',
  ];

  const specs = [
    {
      title: 'Privacy Bunk System',
      desc: 'Full-length blackout privacy curtains around every individual bunk pod with acoustic sound dampening.',
      icon: Bed,
    },
    {
      title: 'Personal Power & Reading Light',
      desc: 'Each bed is equipped with independent warm LED reading lamps and dual universal USB/Type-C charging sockets.',
      icon: Zap,
    },
    {
      title: 'Keyed / Biometric Lockers',
      desc: 'Individual high-capacity secure steel wardrobe lockers to store 16" laptops, suitcases, and personal valuables.',
      icon: Lock,
    },
    {
      title: 'Daily Sanitization Routine',
      desc: 'Professional housekeeping team sanitizes rooms twice daily with weekly fresh bedsheet and pillowcase changes.',
      icon: Sparkles,
    },
    {
      title: 'Hot Water Geysers & Showers',
      desc: 'Clean, sanitized washroom blocks with 24/7 hot water geysers and high-pressure shower stalls.',
      icon: ShowerHead,
    },
    {
      title: '24/7 Coworking Integration',
      desc: 'Walk straight downstairs into high-speed fiber workstations, focus phone booths, and collaborative lounges.',
      icon: Wifi,
    },
  ];

  const packages = [
    {
      name: 'Daily Trial Stay',
      price: '₹599',
      unit: 'day',
      desc: 'Perfect for business travelers, interviewees, or testing out the Yoffices community experience.',
      features: [
        'Dedicated AC bunk pod with fresh linen',
        '24/7 access to coworking space & Wi-Fi',
        'Hot water shower & luggage locker',
        'Unlimited coffee & tea in pantry',
      ],
      popular: false,
    },
    {
      name: 'Monthly Resident Pass',
      price: '₹5,000',
      unit: 'month',
      desc: 'Our flagship co-living pass: complete month-to-month living and working in Sector 45 Gurugram.',
      features: [
        'Guaranteed dedicated AC bed pod with privacy curtain',
        'Personal lockable steel wardrobe closet',
        '24/7 unrestricted 1Gbps high-speed coworking access',
        'Daily room housekeeping & clean bed linens',
        'Hot water showers & sanitized washrooms',
        'Unlimited bean-to-cup gourmet coffee & tea in pantry',
        'Move-In: 2 Months Security • 1 Month Advance • 11 Months Lease',
      ],
      popular: true,
    },
    {
      name: 'Quarterly Resident Pass',
      price: '₹14,000',
      unit: '3 months (₹4,666/mo)',
      desc: 'Deep focus pass for startup founders, software builders, and creators staying 90 days.',
      features: [
        'All Monthly Resident inclusions with locked discount',
        'Priority bed selection & fixed locker allocation',
        'Complimentary boardroom & meeting room credits',
        'Move-In: 2 Months Security • 1 Month Advance • 11 Months Lease',
      ],
      popular: false,
    },
  ];

  const faqs = [
    {
      q: 'What is the check-in and check-out process for dormitory suites?',
      a: 'Check-in is seamless. Present a valid government ID (Aadhaar or Passport) at our Sector 45 front desk, complete a 2-minute digital verification, and receive your biometric card and locker key immediately.',
    },
    {
      q: 'Are the dormitories air-conditioned 24/7?',
      a: 'Yes. All dormitory suites are climate-controlled 24/7 with 100% DG diesel generator power backup, guaranteeing continuous cooling and lighting even during power cuts.',
    },
    {
      q: 'Is there a minimum lock-in period?',
      a: 'No! We offer daily passes, weekly passes, and flexible monthly memberships with zero long-term lease lock-ins.',
    },
    {
      q: 'How does the on-site food and meal system work?',
      a: 'Our in-house cafeteria provides home-style breakfast, lunch, and dinner. Members can subscribe to full monthly meal passes or pay-per-meal as needed.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      <ImageLightboxModal
        images={dormitoryPhotos}
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
                [ SECTOR 45 GURUGRAM FACILITY ]
              </span>
              <span className="nestor-pill bg-emerald-50 text-emerald-700 border-emerald-200 font-mono text-[10px] sm:text-[11px] flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                FROM ₹9,999/MONTH
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-[#111111] font-sans leading-tight">
              Co-Living Dormitory Suites
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comfortable, clean, and fully-managed dormitory living coupled with full 24/7 coworking membership in Sector 45 Gurugram. No brokerage, no heavy deposits, zero commute.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="#packages"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Packages (From ₹9,999/mo)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/book-a-visit?space=Dormitory"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-gray-50 text-gray-900 font-bold text-xs border border-black/10 transition-all shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#C91D24]" />
              <span>Book Guided Tour</span>
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

      {/* Specifications Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 01 / 03 • SUITE SPECIFICATIONS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111111] font-sans">
              Designed for Rest, Hygiene & Privacy
            </h2>
            <p className="text-sm text-gray-600">
              Every detail engineered to give you a refreshing night&apos;s sleep and high-focus work environment.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec, idx) => (
              <FadeUp
                key={idx}
                delay={idx * 0.06}
                className="nestor-card p-6 sm:p-7 space-y-3 bg-white shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-11 h-11 rounded-2xl bg-red-50 text-[#C91D24] flex items-center justify-center font-bold shadow-xs">
                  <spec.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 font-sans">{spec.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{spec.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Packages & Pricing Tiers */}
      <section id="packages" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 02 / 03 • TRANSPARENT PRICING ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 font-sans">
              Dormitory Membership Tiers
            </h2>
            <p className="text-sm text-gray-600">
              Inclusive pricing with power backup, high-speed Wi-Fi, and coworking membership included.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <FadeUp
                key={idx}
                delay={idx * 0.08}
                className={`nestor-card p-7 sm:p-8 flex flex-col justify-between shadow-xl bg-white ${
                  pkg.popular ? 'border-2 border-[#C91D24] relative' : ''
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 right-6 bg-[#C91D24] text-white font-mono text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full shadow">
                    RECOMMENDED PLAN
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-extrabold text-gray-900 font-sans">{pkg.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{pkg.desc}</p>
                    <div className="text-3xl font-black text-[#C91D24] font-sans mt-4">
                      {pkg.price} <span className="text-xs font-normal text-gray-500 font-sans">/{pkg.unit}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-gray-600 pt-4 border-t border-gray-100">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    href={`/contact?service=Dormitory&plan=${encodeURIComponent(pkg.name)}`}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs text-center block transition-all shadow-md ${
                      pkg.popular
                        ? 'bg-[#C91D24] hover:bg-[#A3151B] text-white'
                        : 'bg-[#111111] hover:bg-black text-white'
                    }`}
                  >
                    Reserve Bed Now
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-4xl mx-auto space-y-10">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-700">
              [ FAQ ACCORDION ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-sans tracking-tight">
              Dormitory Living FAQs
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
              [ 03 / 03 • RESERVATION ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 font-sans tracking-tight">
              Reserve Your Dormitory Bedding
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Tell us your check-in date and duration to check immediate bed availability in Sector 45.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <LeadForm
              defaultService="Dormitory Living"
              title="Reserve Dormitory Stay"
              subtitle="Submit details for same-day confirmation & check-in coordination."
              source="Dormitory Index"
            />
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
