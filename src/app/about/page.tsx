import Link from 'next/link';
import { db } from '@/lib/db';
import {
  Building2,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Target,
  Compass,
  ArrowRight,
  Calendar,
} from 'lucide-react';

export const metadata = {
  title: 'About Yoffices | Next-Generation Workspaces & Hospitality in Gurugram',
  description:
    'Learn about Yoffices philosophy: Redefining commercial real estate through flexible private offices, integrated Work + Stay co-living, and asset-backed franchise opportunities.',
};

export default function AboutPage() {
  const settings = db.getSiteSettings();

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C91D24]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <Building2 className="w-3.5 h-3.5" /> Corporate Philosophy
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Built for the Way Modern Companies Grow
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Yoffices bridges luxury commercial real estate, high-performance flexible workspaces, and asset-backed business partnerships in Gurgaon.
          </p>
        </div>
      </section>

      {/* Philosophy & Vision */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C91D24] block">
                Our Core Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-sans leading-tight">
                Eliminating Commercial Real Estate Friction
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Traditional commercial office leasing has remained virtually unchanged for decades: 5-year lock-ins, onerous security deposits, expensive interior fit-outs, and disconnected hospitality services.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Yoffices replaces this legacy model with flexible turnkey private suites, high-speed redundant enterprise infrastructure, and integrated co-living living hubs (Work + Stay) in Sector 45 and Sector 32 Gurgaon.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Yoffices Center"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C91D24] text-white flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-sans">Speed of Deployment</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Move a 20-person enterprise team into a fully branded, biometric private office cabin within 24 hours of agreement signing.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0C0E12] text-white flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-sans">Asset Backed Security</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Every franchise model and workspace plan is anchored in physical prime real estate assets with clear contractual governance.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C5A880] text-[#0C0E12] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-sans">Holistic Hospitality</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                From gourmet coffee and sanitized dormitory bunks to front-desk greeting and mail handling, our hospitality team manages every detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#0C0E12] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black font-sans text-white">
            Experience the Yoffices Community Firsthand
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Schedule a physical walk-through at Sector 45 Gurugram or connect with our corporate team.
          </p>
          <div className="pt-2">
            <Link
              href="/book-a-visit"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule VIP Visit</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
