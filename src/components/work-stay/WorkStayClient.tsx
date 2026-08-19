'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Home,
  CheckCircle2,
  Calendar,
  Bed,
  Wifi,
  Utensils,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Clock,
  Coffee,
  Sparkles,
  ChevronDown,
  Navigation,
  ZoomIn,
} from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';
import { ImageLightboxModal, LightboxImage } from '@/components/ui/ImageLightboxModal';

export function WorkStayClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const workStayPhotos: LightboxImage[] = [
    {
      src: '/images/center/cafe-pantry-greenwall.jpg',
      title: 'In-House Gourmet Pantry & Green Wall',
      desc: 'Automatic bean-to-cup coffee machine, RO water, and biophilic vertical garden dining area in Sector 45.',
    },
    {
      src: '/images/center/breakout-coffee-zone.jpg',
      title: 'Artisan Coffee Breakout Hub',
      desc: 'Relaxation and networking lounge for co-living residents and founders.',
    },
    {
      src: '/images/center/workspace-layout.jpg',
      title: 'Integrated 24/7 Coworking Floor',
      desc: 'Ergonomic workstations just one flight of stairs down from your dormitory suite.',
    },
    {
      src: '/images/center/executive-cabin-acoustic.jpg',
      title: 'Acoustic Executive Cabin for Private Work',
      desc: 'Private focus pods and executive cabins available for confidential client calls.',
    },
  ];

  const marqueeItems = [
    'CLIMATE-CONTROLLED AC DORMITORY SUITES',
    'HIGH-SPEED 1GBPS FIBER WORKSPACES',
    'ZERO COMMUTE STRESS IN GURGAON',
    'IN-HOUSE CAFETERIA & NUTRITIOUS MEALS',
    '24/7 BIOMETRIC SECURITY & HOUSEKEEPING',
    'SECTOR 45 GURGAON FLAGSHIP LOCATION',
    'HOT WATER GEYSER & SANITIZED LINENS',
  ];

  const shiftPlans = [
    {
      name: 'Full Dormitory Stay & Coworking',
      hours: '24 Hours / 7 Days Round-the-Clock',
      price: '₹5,000',
      unit: 'month',
      desc: 'All-inclusive co-living residency combining dedicated AC dormitory bunk pod, personal locker, and 24/7 high-speed workspace.',
      features: [
        'Dedicated AC dormitory bunk with privacy curtain',
        'Personal secure locker & universal charging dock',
        '24/7 unrestricted access to workspace & lounges',
        'Daily housekeeping & fresh bed linens',
        'Hot water showers & sanitized washrooms',
        'Unlimited bean-to-cup gourmet coffee & tea in pantry',
        'Move-In: 2 Months Security • 1 Month Advance • 11 Months Lease',
      ],
      popular: true,
    },
    {
      name: 'Day Shift Workspace + Nap Pod',
      hours: '8:00 AM — 8:00 PM',
      price: '₹4,500',
      unit: 'month',
      desc: 'Ideal for daytime startup founders, remote engineers, and freelancers needing daytime desk and rest pod access.',
      features: [
        'Dedicated ergonomic workstation on coworking floor',
        'Access to day-use climate-controlled rest suite',
        '1Gbps high-speed redundant Wi-Fi & LAN',
        'Unlimited bean-to-cup gourmet coffee & tea',
        'Cafeteria meal access at member rates',
        'Move-In: 2 Months Security • 1 Month Advance • 11 Months Lease',
      ],
      popular: false,
    },
    {
      name: 'Night Shift / US-Shift Stay',
      hours: '8:00 PM — 8:00 AM',
      price: '₹5,000',
      unit: 'month',
      desc: 'Tailored for US/UK shift tech teams, support specialists, and night owls with quiet daytime sleep hours.',
      features: [
        'Dedicated quiet daytime dormitory sleeping zone',
        'Night-shift high-speed workspace with 100% DG backup',
        'Night concierge & security supervision',
        'Hot beverage station & late-night microwave pantry',
        'High-speed LAN & VPN optimization',
        'Move-In: 2 Months Security • 1 Month Advance • 11 Months Lease',
      ],
      popular: false,
    },
  ];

  const transitHighlights = [
    {
      landmark: 'Millennium City Centre (HUDA Metro)',
      dist: '7 Mins Drive',
      desc: 'Direct Yellow Line connectivity to Cyber Hub, Delhi Airport Express, and Connaught Place.',
    },
    {
      landmark: 'Artemis & Fortis Hospitals',
      dist: '4 Mins Drive',
      desc: 'World-class healthcare centers located directly in Sector 44/51 Gurgaon.',
    },
    {
      landmark: 'Golf Course Road & Cyber City',
      dist: '10-12 Mins',
      desc: 'Fast signal-free corridor access via Netaji Subhash Marg and Golf Course Extension Road.',
    },
  ];

  const faqs = [
    {
      q: 'What is included in the Work + Stay monthly membership?',
      a: 'Your membership includes your climate-controlled dormitory bed, personal secure locker, daily room cleaning, fresh bed linens, 24/7 high-speed fiber internet, 100% DG power backup, access to hot water showers, and a dedicated coworking workstation downstairs.',
    },
    {
      q: 'Are food and meals provided on-site?',
      a: 'Yes, our on-site gourmet cafeteria and pantry provide freshly prepared breakfast, lunch, and dinner options at subsidized member rates, along with complimentary bean-to-cup coffee and tea.',
    },
    {
      q: 'How secure is the Work + Stay living space?',
      a: 'We operate 24/7 CCTV surveillance across all common corridors, RFID biometric glass door entry, on-site round-the-clock security personnel, and individual keyed/biometric personal lockers for every resident.',
    },
    {
      q: 'Can I book for short durations like 1 week or 15 days?',
      a: 'Yes! We offer flexible daily, weekly, and monthly passes. Contact our concierge desk or schedule a visit to check short-term availability.',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      <ImageLightboxModal
        images={workStayPhotos}
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
                [ INTEGRATED CO-LIVING & COWORKING ]
              </span>
              <span className="nestor-pill bg-emerald-50 text-emerald-700 border-emerald-200 font-mono text-[10px] sm:text-[11px] flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                SECTOR 45 GURGAON
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-[#111111] font-sans leading-tight">
              Work + Stay. Live, Create & Rest Under One Roof.
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Eliminate Gurgaon traffic fatigue and high residential brokerages. Yoffices Work + Stay integrates luxury dormitory suites with 24/7 plug-and-play coworking infrastructure in Sector 45 Gurugram.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/work-stay/dormitory"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Dormitory Specs & Bunks</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/book-a-visit?space=Work+Stay"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-gray-50 text-gray-900 font-bold text-xs border border-black/10 transition-all shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#C91D24]" />
              <span>Schedule Physical Tour</span>
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

      {/* Real Photos Bento Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 01 / 04 • INSIDE THE COMMUNITY ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111111] font-sans">
              Spaces Designed for Living & Flow
            </h2>
            <p className="text-sm text-gray-600">
              Click any photo to explore our high-resolution amenities and living spaces.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <FadeUp
              delay={0.05}
              className="md:col-span-8 relative h-[320px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl border border-black/10 group cursor-pointer"
              onClick={() => {
                setLightboxIndex(0);
                setLightboxOpen(true);
              }}
            >
              <img
                src={workStayPhotos[0].src}
                alt={workStayPhotos[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="nestor-pill-dark font-mono text-[9px] uppercase font-bold">
                  CAFETERIA & DINING
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-sans">{workStayPhotos[0].title}</h3>
                <p className="text-xs text-gray-300 line-clamp-1">{workStayPhotos[0].desc}</p>
              </div>
            </FadeUp>

            <FadeUp
              delay={0.1}
              className="md:col-span-4 relative h-[320px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl border border-black/10 group cursor-pointer"
              onClick={() => {
                setLightboxIndex(1);
                setLightboxOpen(true);
              }}
            >
              <img
                src={workStayPhotos[1].src}
                alt={workStayPhotos[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="nestor-pill-dark font-mono text-[9px] uppercase font-bold">
                  ARTISAN COFFEE HUB
                </span>
                <h3 className="text-lg font-bold font-sans">{workStayPhotos[1].title}</h3>
                <p className="text-xs text-gray-300 line-clamp-2">{workStayPhotos[1].desc}</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Shift Flexibility Pricing Plans */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 02 / 04 • MEMBERSHIP PACKAGES ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 font-sans">
              Flexible Work + Stay Plans
            </h2>
            <p className="text-sm text-gray-600">
              Whether you need daytime rest pods, US-shift quiet zones, or 24/7 all-inclusive living.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shiftPlans.map((plan, idx) => (
              <FadeUp
                key={idx}
                delay={idx * 0.08}
                className={`nestor-card p-7 sm:p-8 flex flex-col justify-between shadow-xl bg-white ${
                  plan.popular ? 'border-2 border-[#C91D24] relative' : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 right-6 bg-[#C91D24] text-white font-mono text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full shadow">
                    MOST POPULAR RESIDENCY
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <span className="nestor-pill bg-black/5 font-mono text-[10px] text-gray-700 uppercase">
                      {plan.hours}
                    </span>
                    <h3 className="text-xl font-extrabold text-gray-900 font-sans mt-2">{plan.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{plan.desc}</p>
                    <div className="text-3xl font-black text-[#C91D24] font-sans mt-4">
                      {plan.price} <span className="text-xs font-normal text-gray-500 font-sans">/{plan.unit}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-gray-600 pt-4 border-t border-gray-100">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    href={`/contact?service=Work+Stay&plan=${encodeURIComponent(plan.name)}`}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs text-center block transition-all shadow-md ${
                      plan.popular
                        ? 'bg-[#C91D24] hover:bg-[#A3151B] text-white'
                        : 'bg-[#111111] hover:bg-black text-white'
                    }`}
                  >
                    Check Availability
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Transit & Location Snapshot */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeUp className="text-center max-w-2xl mx-auto space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ 03 / 04 • PRIME LOCATION ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#111111] font-sans">
              Sector 45 Gurugram Connectivity
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transitHighlights.map((t, idx) => (
              <FadeUp key={idx} delay={idx * 0.08} className="nestor-card p-6 sm:p-7 space-y-3 bg-white shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#C91D24] flex items-center justify-center font-bold">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    {t.dist}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 font-sans">{t.landmark}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{t.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.08]">
        <div className="max-w-4xl mx-auto space-y-10">
          <FadeUp className="text-center space-y-2">
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-700">
              [ FAQ ACCORDION ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-sans tracking-tight">
              Work + Stay Living FAQs
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
              [ BOOK YOUR RESIDENCY ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight">
              Inquire for Immediate Availability
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Get package details for weekly, monthly, and quarterly co-living memberships in Sector 45 Gurgaon.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <LeadForm
              defaultService="Work + Stay Hub"
              title="Book Your Co-Living Stay"
              subtitle="Submit your details to check bed availability & schedule a physical visit."
              source="Work + Stay Index"
            />
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
