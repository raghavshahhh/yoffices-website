import Link from 'next/link';
import { db } from '@/lib/db';
import {
  Briefcase,
  CheckCircle2,
  Calendar,
  Sparkles,
  Wifi,
  Lock,
  Coffee,
  HelpCircle,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';
import { getWhatsAppUrl } from '@/lib/utils';
import { INITIAL_SITE_SETTINGS } from '@/lib/constants';

export const metadata = {
  title: 'Dedicated Workstations & Fixed Desks in Gurgaon | Yoffices',
  description:
    'Reserve your own dedicated workstation desk in Sector 45 Gurgaon. Ergonomic chairs, lockable storage pedestals, high-speed fiber internet, and pantry access.',
};

export default function WorkstationsPage() {
  const ws = db.getWorkspaceBySlug('workstations') || {
    name: 'Dedicated Workstations',
    startingPrice: '₹5,500',
    priceUnit: 'desk / month',
    heroImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80',
  };

  const whatsappUrl = getWhatsAppUrl(
    INITIAL_SITE_SETTINGS.whatsappNumber,
    'Hi Yoffices, I would like to inquire about dedicated workstation availability in Gurgaon.'
  );

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={ws.heroImage}
            alt="Workstation Desks"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E12] via-[#0C0E12]/80 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <Briefcase className="w-3.5 h-3.5" /> Fixed Personal Desks
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Dedicated Workstations in Gurgaon
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your own reserved desk with lockable storage, ergonomic high-back mesh seating, high-speed fiber internet, and access to all shared lounges.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
              Starting from <strong className="text-[#C5A880] text-base">{ws.startingPrice}</strong> /{ws.priceUnit}
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Instant WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-sans">
              Why Choose a Dedicated Workstation at Yoffices?
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              The stability of a fixed office desk with the vibrant energy of a high-end coworking community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C91D24] text-white flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Assigned Desk & Lockable Pedestal</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Leave your dual monitors, files, and equipment securely on your desk overnight with 24/7 CCTV surveillance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0C0E12] text-white flex items-center justify-center">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Gigabit Internet & Power Backup</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Surge-protected universal power plugs, high-speed dual-band Wi-Fi, and 100% DG generator redundancy.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A880] text-white flex items-center justify-center">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Full Community & Cafe Access</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Unlimited fresh artisan coffee, tea, acoustic phone booths for private client calls, and discounted meeting room rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            defaultService="Dedicated Workstations"
            title="Reserve Your Dedicated Workstation"
            subtitle="Get same-day desk assignment and monthly flexible payment options."
            source="Workstations Page"
          />
        </div>
      </section>
    </div>
  );
}
