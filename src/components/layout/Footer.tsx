import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Shield,
  Globe,
} from 'lucide-react';
import { INITIAL_SITE_SETTINGS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0C0E12] text-gray-300 pt-16 pb-12 border-t border-[#1F2430]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-12 border-b border-[#222634]">
          {/* Column 1: Brand & Contact Info (2 cols wide) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group inline-flex">
              <div className="w-10 h-10 rounded-lg bg-[#C91D24] flex items-center justify-center text-white font-bold text-xl tracking-wider shadow-sm">
                Y
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white font-sans">
                  YOFFICES<span className="text-[#C91D24]">.</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold -mt-1">
                  Workspace & Living
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed pr-4">
              Premium flexible workspaces, managed private offices, and asset-backed commercial franchise opportunities engineered for ambitious companies and discerning investors.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C91D24] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Workspace Center:</strong> {INITIAL_SITE_SETTINGS.operationalAddress}
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Corporate Office:</strong> {INITIAL_SITE_SETTINGS.corporateAddress}
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C91D24] shrink-0" />
                <a href={`tel:${INITIAL_SITE_SETTINGS.phone}`} className="hover:text-white transition-colors">
                  {INITIAL_SITE_SETTINGS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C91D24] shrink-0" />
                <a href={`mailto:${INITIAL_SITE_SETTINGS.email}`} className="hover:text-white transition-colors">
                  {INITIAL_SITE_SETTINGS.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gray-500 shrink-0" />
                <span>{INITIAL_SITE_SETTINGS.officeHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Workspaces */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Workspaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/workspaces/private-office" className="text-gray-400 hover:text-white transition-colors">
                  Private Offices
                </Link>
              </li>
              <li>
                <Link href="/workspaces/workstations" className="text-gray-400 hover:text-white transition-colors">
                  Dedicated Desks
                </Link>
              </li>
              <li>
                <Link href="/workspaces/coworking" className="text-gray-400 hover:text-white transition-colors">
                  Flexi Coworking
                </Link>
              </li>
              <li>
                <Link href="/workspaces/meeting-rooms" className="text-gray-400 hover:text-white transition-colors">
                  Meeting Rooms
                </Link>
              </li>
              <li>
                <Link href="/workspaces" className="text-[#C91D24] font-semibold hover:underline inline-flex items-center gap-1">
                  All Workspaces <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/virtual-office" className="text-gray-400 hover:text-white transition-colors">
                  Virtual Office & GST
                </Link>
              </li>
              <li>
                <Link href="/shared-employee" className="text-gray-400 hover:text-white transition-colors">
                  Shared Employee
                </Link>
              </li>
              <li>
                <Link href="/work-stay" className="text-gray-400 hover:text-white transition-colors">
                  Work + Stay Hub
                </Link>
              </li>
              <li>
                <Link href="/work-stay/dormitory" className="text-gray-400 hover:text-white transition-colors">
                  Co-Living Dormitory
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-400 hover:text-white transition-colors">
                  Gurugram Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Franchise */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Franchise (₹5L+)</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/franchise" className="text-gray-400 hover:text-white transition-colors">
                  Business Opportunity
                </Link>
              </li>
              <li>
                <Link href="/franchise/models" className="text-gray-400 hover:text-white transition-colors">
                  Franchise Models
                </Link>
              </li>
              <li>
                <Link href="/franchise/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  Process & Terms
                </Link>
              </li>
              <li>
                <Link href="/franchise/apply" className="text-[#C91D24] font-semibold hover:underline inline-flex items-center gap-1">
                  Apply Online <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Yoffices
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-gray-400 hover:text-white transition-colors">
                  Media & Videos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Insights & Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/book-a-visit" className="text-gray-400 hover:text-white transition-colors">
                  Schedule Tour
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Banner */}
        <div className="py-6 border-b border-[#222634] text-xs text-gray-400 flex items-start gap-3">
          <Shield className="w-4 h-4 text-[#C91D24] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-gray-300">Statutory Disclaimer:</strong> {INITIAL_SITE_SETTINGS.disclaimerText}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {currentYear} Yoffices Workspace & Hospitality Solutions. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-gray-300 transition-colors">
              Legal Disclaimer
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <a
              href={INITIAL_SITE_SETTINGS.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={INITIAL_SITE_SETTINGS.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              YouTube
            </a>
            <span>•</span>
            <a
              href={INITIAL_SITE_SETTINGS.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
