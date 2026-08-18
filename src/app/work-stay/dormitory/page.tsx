import Link from 'next/link';
import {
  Compass,
  CheckCircle2,
  Calendar,
  Sparkles,
  Bed,
  Wifi,
  Shield,
  Coffee,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';

export const metadata = {
  title: 'Co-Living Dormitory Suites in Gurgaon Sector 45 | Yoffices',
  description:
    'Affordable, high-quality dormitory accommodation integrated with 24/7 coworking in Gurgaon Sector 45. AC rooms, private lockers, Wi-Fi, and cafeteria.',
};

export default function DormitoryPage() {
  const facilities = [
    'Air-Conditioned Dormitory Living Pods / Bunks',
    'Personal Secure Lockable Storage Pedestal & Closet',
    '24/7 Access to Coworking Lounges & Hot Desks',
    'High-Speed 1 Gbps Dual-Band Wi-Fi throughout',
    'Daily Professional Housekeeping & Sanitized Linen',
    'Modern Clean Washrooms with 24/7 Hot Water Geysers',
    'In-House Cafeteria with Meal Subscription Options',
    '100% DG Power Backup & 24/7 CCTV / Security Guards',
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <Compass className="w-3.5 h-3.5" /> Sector 45 Gurgaon Facility
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Co-Living Dormitory Suites
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Comfortable, clean, and fully-managed dormitory living coupled with full coworking membership. No brokerage, no heavy deposits, zero commute.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
              Starting from <strong className="text-[#C5A880] text-base">₹9,999</strong> /month (Stay + Work)
            </div>
            <Link
              href="/book-a-visit?space=Dormitory"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Dormitory Tour</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-sans">
              Dormitory Amenities & Inclusions
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Everything you need for productive work and restful living in central Gurgaon.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-[#C91D24]" />
                <h3 className="text-sm font-bold text-gray-900">{fac}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            defaultService="Dormitory Co-Living"
            title="Book Your Dormitory Bedding & Workspace"
            subtitle="Tell us your check-in date and duration to reserve your spot."
            source="Dormitory Page"
          />
        </div>
      </section>
    </div>
  );
}
