'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  ArrowUp,
  Building2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Coins,
  DoorClosed,
  Users,
  Compass,
  FileCheck2,
  Lock,
} from 'lucide-react';
import { Marquee } from '@/components/ui/Marquee';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const marqueeItems = [
    'SECTOR 45 GURGAON FLAGSHIP',
    'SECTOR 32 INSTITUTIONAL DESK',
    '1GBPS REDUNDANT FIBER',
    '100% DG POWER BACKUP',
    'PRIVATE ACOUSTIC CABINS',
    '₹5,000/MO FRANCHISE CASH FLOW',
    'WORK + STAY CO-LIVING SUITES',
    'HARYANA GST & ROC REGISTRATION',
    '24/7 BIOMETRIC SMART ACCESS',
    '3 ANNUAL POST-DATED SECURITY CHEQUES',
  ];

  return (
    <footer className="w-full bg-[#0C0E12] text-white overflow-hidden border-t border-white/[0.08]">
      {/* 1. Live Infinite Marquee Ticker Loop (Socio-Space / Framer Style) */}
      <div className="bg-[#14171F] border-b border-white/[0.08]">
        <Marquee
          items={marqueeItems}
          speed={30}
          className="border-none py-3.5"
          itemClassName="text-white/80 hover:text-white transition-colors"
          separator={<span className="text-[#C91D24] text-xs font-bold">✦</span>}
        />
      </div>

      {/* 2. Pre-Footer Call to Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-b border-white/[0.08]">
        <div className="bg-gradient-to-r from-[#181C26] via-[#12151D] to-[#181C26] rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C91D24]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-3 text-center lg:text-left relative z-10">
            <span className="nestor-pill-dark font-mono text-[10px]">
              [ YOUR 2026 WORKSPACE ADVENTURE BEGINS NOW ]
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white font-sans tracking-tight">
              Ready to experience Gurugram&apos;s finest workspace?
            </h3>
            <p className="text-sm text-gray-400 max-w-xl">
              Book a guided physical walkthrough at Sector 45 or speak directly with our commercial asset franchise desk.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 w-full sm:w-auto">
            <Link
              href="/book-a-visit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Schedule Site Visit</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/franchise/apply"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/10 transition-all duration-300"
            >
              <Coins className="w-4 h-4 text-[#C5A880]" />
              <span>Apply for Franchise</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Main Multi-Column Links Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-[#C91D24] flex items-center justify-center text-white font-bold text-xl tracking-wider shadow-md">
                Y
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white font-sans">
                  YOFFICES<span className="text-[#C91D24]">.</span>
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-gray-400 font-semibold -mt-1">
                  Managed Workspaces & Living
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Luxury commercial real estate, turnkey private offices, workstations, and fractional franchise cash flow solutions in Gurgaon, Haryana.
            </p>

            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C91D24] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Workspace Center:</strong> Plot 120, Sector 45, Gurugram, Haryana 122003
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Corporate Desk:</strong> Sector 32 Institutional Area, Gurugram, Haryana
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C91D24] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white font-mono">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                <a href="mailto:info@yoffices.com" className="hover:text-white font-mono">
                  info@yoffices.com
                </a>
              </div>
            </div>
          </div>

          {/* Workspaces Column */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
              [ WORKSPACES ]
            </div>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link href="/workspaces/private-office" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <DoorClosed className="w-3.5 h-3.5 text-[#C91D24]" />
                  <span>Private Offices</span>
                </Link>
              </li>
              <li>
                <Link href="/workspaces/workstations" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Dedicated Workstations</span>
                </Link>
              </li>
              <li>
                <Link href="/workspaces/coworking" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-400" />
                  <span>Flexi Coworking</span>
                </Link>
              </li>
              <li>
                <Link href="/workspaces/meeting-rooms" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Meeting & Boardrooms</span>
                </Link>
              </li>
              <li>
                <Link href="/workspaces" className="text-[#C91D24] hover:underline font-semibold block pt-1">
                  Browse All Workspaces →
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Franchise Column */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
              [ SOLUTIONS & FRANCHISE ]
            </div>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link href="/virtual-office" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Virtual Office (GST/ROC)</span>
                </Link>
              </li>
              <li>
                <Link href="/shared-employee" className="hover:text-white transition-colors">
                  Shared Employee Matrix
                </Link>
              </li>
              <li>
                <Link href="/work-stay" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  <span>Work + Stay Co-Living</span>
                </Link>
              </li>
              <li>
                <Link href="/work-stay/dormitory" className="hover:text-white transition-colors">
                  Dormitory Accommodations
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="hover:text-white font-semibold text-[#C5A880] flex items-center gap-1">
                  <Coins className="w-3.5 h-3.5" />
                  <span>Commercial Franchise Overview</span>
                </Link>
              </li>
              <li>
                <Link href="/franchise/models" className="hover:text-white transition-colors">
                  Franchise Models (₹5L/₹11L/₹25L)
                </Link>
              </li>
              <li>
                <Link href="/franchise/how-it-works" className="hover:text-white transition-colors">
                  Security Cheques & Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources Column */}
          <div className="space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
              [ COMPANY & HUBS ]
            </div>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link href="/locations" className="hover:text-white transition-colors">
                  Gurgaon Locations
                </Link>
              </li>
              <li>
                <Link href="/locations/gurgaon-sector-45" className="hover:text-white transition-colors">
                  Sector 45 Flagship
                </Link>
              </li>
              <li>
                <Link href="/locations/gurgaon-sector-32-institutional" className="hover:text-white transition-colors">
                  Sector 32 Corporate Desk
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-white transition-colors">
                  Media & YouTube Tours
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Insights & Articles
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Yoffices
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray-500 hover:text-gray-300 text-[11px] font-mono flex items-center gap-1 pt-1">
                  <Lock className="w-3 h-3" />
                  <span>CMS Admin Portal</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4. Giant Screen-Filling "YOFFICES." Typography (Socio-Space / Framer Aesthetic) */}
      <div className="w-full border-t border-white/[0.08] pt-8 pb-4 px-4 select-none overflow-hidden text-center relative">
        <div className="text-[14vw] sm:text-[16vw] font-black font-sans tracking-tighter leading-none text-white/5 hover:text-[#C91D24]/20 transition-all duration-700 cursor-default">
          YOFFICES<span className="text-[#C91D24]">.</span>
        </div>
      </div>

      {/* 5. Sub-Footer Bar with Live Indicator & Back to Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            ALL GURUGRAM HUBS OPERATIONAL (2026)
          </span>
          <span>© {new Date().getFullYear()} Yoffices Private Limited. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="/disclaimer" className="hover:text-white transition-colors">
            Disclaimer
          </Link>
          
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white/10 hover:bg-[#C91D24] text-white transition-colors flex items-center gap-1 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
