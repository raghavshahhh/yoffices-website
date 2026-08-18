import Link from 'next/link';
import { db } from '@/lib/db';
import {
  Users,
  CheckCircle2,
  Calendar,
  Sparkles,
  Wifi,
  Coffee,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';

export const metadata = {
  title: 'Coworking Space & Flexi Hot Desks in Gurgaon | Yoffices',
  description:
    'Experience high-energy collaborative coworking and flexible day passes in Gurgaon Sector 45. Ergonomic seating, high-speed Wi-Fi, and networking masterclasses.',
};

export default function CoworkingPage() {
  const ws = db.getWorkspaceBySlug('coworking') || {
    name: 'Flexi Coworking Desks',
    startingPrice: '₹4,500',
    priceUnit: 'seat / month',
    heroImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={ws.heroImage}
            alt="Coworking Lounges"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E12] via-[#0C0E12]/80 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <Users className="w-3.5 h-3.5" /> Agile Hot Desking
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Collaborative Coworking in Gurgaon
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ultimate flexibility for modern freelancers, digital creators, and remote teams. Plug into any open seat across our premium open lounges and execute.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
              Starting from <strong className="text-[#C5A880] text-base">{ws.startingPrice}</strong> /{ws.priceUnit}
            </div>
            <Link
              href="/book-a-visit?space=Coworking"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Get a 1-Day Trial Pass</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Plans & Perks */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase text-[#C91D24]">Day Access</span>
                <h3 className="text-2xl font-black text-gray-900 mt-1">Day Pass</h3>
                <div className="text-3xl font-black text-gray-900 mt-4">₹499 <span className="text-xs font-normal text-gray-500">/ day</span></div>
                <p className="text-xs text-gray-600 mt-2">Single-day full access to coworking lounge, Wi-Fi, and coffee.</p>
                <ul className="mt-6 space-y-2 text-xs text-gray-600">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> High-speed internet</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Unlimited tea & coffee</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Access to phone booths</li>
                </ul>
              </div>
              <Link href="/book-a-visit" className="mt-8 w-full py-3 rounded-xl bg-[#0C0E12] text-white text-xs font-bold text-center block hover:bg-black">
                Book Day Pass
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-white border-2 border-[#C91D24] shadow-xl flex flex-col justify-between relative">
              <span className="absolute -top-3 right-6 bg-[#C91D24] text-white text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full">
                Most Popular
              </span>
              <div>
                <span className="text-xs font-bold uppercase text-[#C91D24]">Monthly Flex</span>
                <h3 className="text-2xl font-black text-gray-900 mt-1">Flexi Monthly</h3>
                <div className="text-3xl font-black text-[#C91D24] mt-4">₹4,500 <span className="text-xs font-normal text-gray-500">/ month</span></div>
                <p className="text-xs text-gray-600 mt-2">Full monthly hot desking across open collaborative zones.</p>
                <ul className="mt-6 space-y-2 text-xs text-gray-600">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 24/7 Access option</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 2 Hours monthly meeting credits</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free printing allowance</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Community event invites</li>
                </ul>
              </div>
              <Link href="/contact" className="mt-8 w-full py-3 rounded-xl bg-[#C91D24] text-white text-xs font-bold text-center block hover:bg-[#A3151B]">
                Start Monthly Plan
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase text-gray-500">10-Day Pass</span>
                <h3 className="text-2xl font-black text-gray-900 mt-1">Flexi Bundle</h3>
                <div className="text-3xl font-black text-gray-900 mt-4">₹3,500 <span className="text-xs font-normal text-gray-500">/ 10 visits</span></div>
                <p className="text-xs text-gray-600 mt-2">Valid for 60 days. Ideal for hybrid work schedules.</p>
                <ul className="mt-6 space-y-2 text-xs text-gray-600">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 10 Flexible day check-ins</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Transferable within team</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> High-speed Wi-Fi & tea/coffee</li>
                </ul>
              </div>
              <Link href="/contact" className="mt-8 w-full py-3 rounded-xl bg-[#0C0E12] text-white text-xs font-bold text-center block hover:bg-black">
                Get Flexi Bundle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            defaultService="Flexi Coworking"
            title="Get Coworking Plan Details"
            subtitle="Connect with our community manager for same-day onboarding."
            source="Coworking Page"
          />
        </div>
      </section>
    </div>
  );
}
