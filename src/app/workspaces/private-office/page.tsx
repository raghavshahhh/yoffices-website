import Link from 'next/link';
import { db } from '@/lib/db';
import {
  DoorClosed,
  CheckCircle2,
  Calendar,
  Sparkles,
  Wifi,
  Shield,
  Coffee,
  Users,
  MapPin,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';

export const metadata = {
  title: 'Private Office Cabins in Gurgaon Sector 45 & 32 | Yoffices',
  description:
    'Fully furnished lockable private office cabins for 3 to 50+ members in Gurgaon. Ergonomic furniture, acoustic soundproofing, meeting room credits, and 100% DG power.',
};

export default function PrivateOfficePage() {
  const ws = db.getWorkspaceBySlug('private-office') || {
    name: 'Private Offices',
    startingPrice: '₹8,500',
    priceUnit: 'seat / month',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    features: [
      'Lockable Private Cabin with Biometric / Key Access',
      'Ergonomic Herman Miller-style mesh chairs & executive desks',
      'Complimentary Monthly Meeting Room Credits',
      'High-Speed Redundant Wi-Fi & Dedicated LAN Ports',
      'Daily Housekeeping, Sanitization & Waste Management',
      'Dedicated Receptionist & Client Greeter Support',
      'Business Address for GST / ROC / Company Registration',
      'Unlimited Gourmet Coffee, Tea & Filtered Water',
    ],
  };

  const locations = db.getLocations();

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={ws.heroImage}
            alt="Private Office Suites"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E12] via-[#0C0E12]/80 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <DoorClosed className="w-3.5 h-3.5" /> Lockable Executive Office Suites
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Private Office Cabins in Gurgaon
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade private office suites for teams of 3 to 50+ members with custom acoustic treatment, biometric privacy, and dedicated conference room access.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
              Starting from <strong className="text-[#C5A880] text-base">{ws.startingPrice}</strong> /{ws.priceUnit}
            </div>
            <Link
              href="/book-a-visit?space=Private+Office"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Private Office Visit</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Specifications & What You Get */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C91D24] block mb-2">
              Everything Included
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 font-sans">
              What You Get With Every Private Office
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              One predictable monthly bill with zero unexpected maintenance or utility surcharges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C91D24] text-white flex items-center justify-center">
                <DoorClosed className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-sans">Lockable & Acoustic</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Biometric and key lock access with sound-dampened glass partitions for full team privacy and confidential conversations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0C0E12] text-white flex items-center justify-center">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-sans">Enterprise Fiber</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Dual redundant 1 Gbps internet with private LAN ports, isolated VLAN routing, and firewall protection for data security.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A880] text-white flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-sans">Meeting Room Credits</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Monthly complimentary credits for high-definition 4K conference rooms and client presentation suites across all centers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-sans">Hospitality & Concierge</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Professional front desk reception, guest greeting, courier handling, daily sanitization, and unlimited gourmet beverages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Center Locations */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-gray-900 font-sans">
              Private Office Availability by Location
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Tour ready-to-move cabins across Gurgaon’s key commercial hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.slice(0, 2).map((loc) => (
              <div key={loc.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase px-2.5 py-1 rounded-full bg-red-50 text-[#C91D24]">
                    {loc.status}
                  </span>
                  <span className="text-xs font-semibold text-gray-500">Cabins for 3 - 30 seats</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{loc.name}</h3>
                <p className="text-xs text-gray-600">{loc.workspaceAddress}</p>
                <div className="pt-2">
                  <Link
                    href={`/book-a-visit?location=${encodeURIComponent(loc.name)}&space=Private+Office`}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0C0E12] hover:bg-black text-white text-xs font-bold text-center block transition-colors"
                  >
                    Schedule Walkthrough at {loc.city}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Form */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            defaultService="Private Office"
            title="Book a Private Office Visit & Request Pricing"
            subtitle="Tell us your desired seat count to receive immediate availability and floor layouts."
            source="Private Office Page"
          />
        </div>
      </section>
    </div>
  );
}
