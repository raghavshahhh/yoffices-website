'use client';

import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Building2,
  Calendar,
} from 'lucide-react';
import { SiteSettings } from '@/types';
import { LeadForm } from '@/components/forms/LeadForm';
import { getWhatsAppUrl } from '@/lib/utils';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';

interface ContactPageClientProps {
  settings: SiteSettings;
}

export function ContactPageClient({ settings }: ContactPageClientProps) {
  const whatsappUrl = getWhatsAppUrl(settings.whatsappNumber, settings.whatsappDefaultMsg);

  const marqueeItems = [
    'DIRECT ADVISORY DESK',
    '+91 98765 43210 (TEL)',
    'HELLO@YOFFICES.COM',
    'SECTOR 45 GURUGRAM (FLAGSHIP)',
    'SECTOR 32 GURUGRAM (CORPORATE)',
    'OPEN MON - SAT (8:00 AM - 8:30 PM)',
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <FadeUp delay={0.1}>
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
              [ DIRECT ADVISORY DESK ]
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#111111] font-sans">
              Connect with Yoffices
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have questions regarding office cabins, virtual office GST compliance, or commercial franchise partnerships? Our advisory team is available 7 days a week.
            </p>
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

      {/* Contact Grid */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Col: Contact Info & Addresses (5 cols) */}
            <FadeUp delay={0.1} className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="nestor-pill bg-black/5 font-mono text-[10px] text-gray-800">
                  [ 01 / 02 • DIRECT CHANNELS ]
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-sans">
                  Communication Channels
                </h2>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="space-y-3">
                <a
                  href={`tel:${settings.phone}`}
                  className="p-5 rounded-2xl bg-white border border-black/5 flex items-center gap-4 hover:border-[#C91D24] transition-all shadow-sm group block"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C91D24] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-400 font-bold block">
                      TELEPHONE DESK
                    </span>
                    <div className="text-base font-bold text-gray-900 group-hover:text-[#C91D24] font-sans">
                      {settings.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white border border-black/5 flex items-center gap-4 hover:border-[#25D366] transition-all shadow-sm group block"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-400 font-bold block">
                      WHATSAPP DESK
                    </span>
                    <div className="text-base font-bold text-gray-900 group-hover:text-emerald-600 font-sans">
                      +{settings.whatsappNumber}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${settings.email}`}
                  className="p-5 rounded-2xl bg-white border border-black/5 flex items-center gap-4 hover:border-[#111111] transition-all shadow-sm group block"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#111111] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-400 font-bold block">
                      OFFICIAL EMAIL
                    </span>
                    <div className="text-base font-bold text-gray-900 font-sans">
                      {settings.email}
                    </div>
                  </div>
                </a>
              </div>

              {/* Physical Addresses Box */}
              <div className="p-6 rounded-3xl bg-white border border-black/5 space-y-4 shadow-sm">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#C91D24]">
                    <MapPin className="w-3.5 h-3.5" /> Workspace Center
                  </div>
                  <p className="text-xs text-gray-800 leading-relaxed font-semibold">
                    {settings.operationalAddress}
                  </p>
                </div>

                <div className="space-y-1 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-gray-600">
                    <Building2 className="w-3.5 h-3.5" /> Corporate Desk
                  </div>
                  <p className="text-xs text-gray-800 leading-relaxed font-semibold">
                    {settings.corporateAddress}
                  </p>
                </div>

                <div className="space-y-1 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-gray-600">
                    <Clock className="w-3.5 h-3.5" /> Operating Hours
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">{settings.officeHours}</p>
                </div>
              </div>
            </FadeUp>

            {/* Right Col: Lead Form (7 cols) */}
            <FadeUp delay={0.2} className="lg:col-span-7 space-y-4">
              <LeadForm
                defaultService="General Enquiry"
                title="Send an Online Enquiry"
                subtitle="Fill in your requirements and our team will get in touch promptly."
                source="Contact Page"
              />
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
