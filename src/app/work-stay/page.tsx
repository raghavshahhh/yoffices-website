import Link from 'next/link';
import {
  Home,
  CheckCircle2,
  Calendar,
  Sparkles,
  Coffee,
  Compass,
  Bed,
  Wifi,
  Car,
  Utensils,
  ArrowRight,
} from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';

export const metadata = {
  title: 'Work + Stay | Integrated Co-Living & Coworking Hub in Gurgaon | Yoffices',
  description:
    'Experience seamless hybrid living and working in Gurgaon Sector 45. AC dormitory suites, ergonomic coworking desks, cafeteria, and 24/7 security under one roof.',
};

export default function WorkStayPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2000&q=80"
            alt="Work and Stay Hub"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E12] via-[#0C0E12]/80 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <Home className="w-3.5 h-3.5" /> Next-Gen Co-Living & Coworking
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Work + Stay. Live, Create & Sleep Under One Roof.
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate traffic fatigue and exorbitant residential rents. Yoffices Work + Stay integrates high-standard dormitory accommodation with plug-and-play coworking infrastructure in Sector 45 Gurugram.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/work-stay/dormitory"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-lg transition-all"
            >
              <span>View Dormitory Options</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/book-a-visit?space=Work+Stay"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all"
            >
              <Calendar className="w-4 h-4 text-[#C5A880]" />
              <span>Schedule Experience Visit</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Cinematic Concept Breakdown */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C91D24] text-white flex items-center justify-center">
                <Bed className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 font-sans">01. Rest & Recharge</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Furnished, climate-controlled dormitory suites with private lockers, clean linen, daily sanitization, and hot water washrooms.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0C0E12] text-white flex items-center justify-center">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 font-sans">02. Deep Focus Work</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Step downstairs into high-speed fiber coworking zones, acoustic phone booths, and collaborative lounges 24/7 without stepping into street traffic.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A880] text-[#0C0E12] flex items-center justify-center">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 font-sans">03. Dining & Community</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Gourmet cafeteria access, nutritious meal options, terrace lounges, and organic networking with fellow creators, software engineers, and founders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            defaultService="Work + Stay Hub"
            title="Inquire About Work + Stay Accommodation"
            subtitle="Get package details for weekly, monthly, and quarterly co-living memberships."
            source="Work + Stay Page"
          />
        </div>
      </section>
    </div>
  );
}
