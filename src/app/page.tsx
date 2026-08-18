import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  DoorClosed,
  Briefcase,
  Users,
  FileCheck2,
  TrendingUp,
  Shield,
  Sparkles,
  MapPin,
  Calendar,
  Home,
  Compass,
  Play,
  Star,
  HelpCircle,
  Clock,
  Wifi,
  Coffee,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { db } from '@/lib/db';
import { formatINR } from '@/lib/utils';
import { FranchiseCalculator } from '@/components/franchise/FranchiseCalculator';

export default async function HomePage() {
  const workspaces = db.getWorkspaces();
  const locations = db.getLocations();
  const franchiseModels = db.getFranchiseModels();
  const videos = db.getMediaVideos().slice(0, 3);
  const testimonials = db.getTestimonials().slice(0, 3);
  const faqs = db.getFAQs().slice(0, 6);
  const settings = db.getSiteSettings();

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0C0E12] text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with dark overlay */}
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
            alt="Yoffices Luxury Workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E12] via-[#0C0E12]/80 to-transparent" />
        </div>

        {/* Subtle decorative glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C91D24]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-semibold text-gray-200">
            <span className="w-2 h-2 rounded-full bg-[#C91D24] animate-ping" />
            <span>Next-Gen Workspaces & Hospitality in Gurugram</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white font-sans leading-[1.1]">
            Work Better. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400">
              Grow Faster.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
            Premium flexible workspaces, acoustic private offices, and asset-backed business solutions engineered around the way modern teams and investors operate.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/workspaces"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <span>Explore Workspaces</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/book-a-visit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-base backdrop-blur-md border border-white/20 transition-all hover:scale-[1.02] active:scale-95"
            >
              <Calendar className="w-5 h-5 text-[#C5A880]" />
              <span>Book a Site Visit</span>
            </Link>
          </div>

          {/* Secondary Franchise CTA */}
          <div className="pt-2">
            <Link
              href="/franchise"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#C5A880] hover:text-white transition-colors group"
            >
              <span>Explore Franchise Business Opportunity (Starting ₹5L)</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-white/10">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-sans">100%</div>
              <div className="text-xs text-gray-400 mt-0.5">DG Power & Wi-Fi Uptime</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-sans">3 Min</div>
              <div className="text-xs text-gray-400 mt-0.5">From Metro Corridors</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-sans">₹5,000+</div>
              <div className="text-xs text-gray-400 mt-0.5">Monthly Franchise Rental</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-sans">Zero</div>
              <div className="text-xs text-gray-400 mt-0.5">CapEx / Fit-Out Burden</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: WHAT ARE YOU LOOKING FOR? (3 Intent Cards) */}
      <section className="py-16 sm:py-24 bg-white relative z-20 -mt-8 rounded-t-3xl border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#C91D24] mb-2">
              Tailored Discovery
            </h2>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 font-sans">
              What Are You Looking For?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Select your primary goal to explore customized configurations, pricing, and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Intent Card 1: Office */}
            <Link
              href="/workspaces"
              className="group p-8 rounded-2xl bg-[#FAF9F6] hover:bg-white border border-gray-200 hover:border-[#C91D24]/40 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 text-[#0C0E12] group-hover:bg-[#C91D24] group-hover:text-white flex items-center justify-center transition-colors shadow-sm mb-6">
                  <Building2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-black text-gray-900 font-sans group-hover:text-[#C91D24] transition-colors">
                  I Need an Office
                </h4>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  Lockable private cabins, dedicated team suites, and flexible workstations for fast-growing companies and remote squads.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-gray-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Private cabins (3 to 50+ seats)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Daily housekeeping & conference credits</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-gray-900 group-hover:text-[#C91D24]">
                <span>Explore Workspaces</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Intent Card 2: Virtual Office */}
            <Link
              href="/virtual-office"
              className="group p-8 rounded-2xl bg-[#FAF9F6] hover:bg-white border border-gray-200 hover:border-[#C91D24]/40 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 text-[#0C0E12] group-hover:bg-[#C91D24] group-hover:text-white flex items-center justify-center transition-colors shadow-sm mb-6">
                  <FileCheck2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-black text-gray-900 font-sans group-hover:text-[#C91D24] transition-colors">
                  I Need a Virtual Office
                </h4>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  Establish a prestigious Gurgaon business presence with verified documentation for GST, ROC, and corporate registrations.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-gray-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Commercial Lease + NOC + Tax bills</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Courier & mail handling reception</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-gray-900 group-hover:text-[#C91D24]">
                <span>Get Virtual Office Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Intent Card 3: Franchise Opportunity */}
            <Link
              href="/franchise"
              className="group p-8 rounded-2xl bg-[#0C0E12] text-white border border-[#222634] hover:border-[#C91D24] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C91D24]/20 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 text-[#C5A880] group-hover:bg-[#C91D24] group-hover:text-white flex items-center justify-center transition-colors shadow-sm mb-6">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div className="inline-block text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#C91D24] text-white mb-2">
                  Franchise Asset
                </div>
                <h4 className="text-xl font-black text-white font-sans group-hover:text-[#C5A880] transition-colors">
                  I Want a Business Opportunity
                </h4>
                <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                  Participate in high-yield commercial real estate assets with structured 3-year monthly rental payouts starting at ₹5 Lakhs.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                    <span>3 Post-dated security cheques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                    <span>Monthly rental payouts directly to bank</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white group-hover:text-[#C5A880]">
                <span>Explore 3 Models</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. WORKSPACES DISCOVERY SECTION */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C91D24] block mb-2">
                Engineered for High Performance
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 font-sans">
                Signature Workspace Collections
              </h2>
            </div>
            <Link
              href="/workspaces"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#C91D24] hover:underline"
            >
              <span>View all floor layouts & specs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workspaces.map((ws) => (
              <div
                key={ws.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img
                    src={ws.heroImage}
                    alt={ws.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#0C0E12]/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                    From {ws.startingPrice} <span className="text-gray-300 font-normal">/{ws.priceUnit}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black text-gray-900 font-sans group-hover:text-[#C91D24] transition-colors">
                      {ws.name}
                    </h3>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                      {ws.shortDesc}
                    </p>

                    <div className="mt-4 space-y-1.5 border-t border-gray-100 pt-3">
                      {ws.features.slice(0, 3).map((feat: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-gray-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C91D24] shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href={`/workspaces/${ws.slug}`}
                      className="text-xs font-bold text-gray-900 hover:text-[#C91D24] inline-flex items-center gap-1"
                    >
                      <span>Explore details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href={`/book-a-visit?space=${encodeURIComponent(ws.name)}`}
                      className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-red-50 text-[#C91D24] hover:bg-[#C91D24] hover:text-white transition-colors"
                    >
                      Book Tour
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED LOCATIONS SECTION (Sector 45 & Sector 32 Gurgaon) */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C91D24] block mb-2">
              Strategic NCR Footprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 font-sans">
              Gurugram Commercial Centers
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Positioned in prime institutional and commercial growth corridors with seamless metro and expressway access.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.slice(0, 2).map((loc) => (
              <div
                key={loc.id}
                className="bg-[#FAF9F6] rounded-2xl border border-gray-200 overflow-hidden shadow-md flex flex-col justify-between group hover:border-[#C91D24]/50 transition-all"
              >
                <div>
                  <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
                    <img
                      src={loc.photos[0]}
                      alt={loc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#C91D24] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {loc.status}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 font-sans">{loc.name}</h3>
                      <p className="text-xs text-gray-500 font-medium mt-1">{loc.area}</p>
                    </div>

                    <div className="space-y-2 text-xs text-gray-700 bg-white p-4 rounded-xl border border-gray-200">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#C91D24] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-gray-900">Center Address:</strong> {loc.workspaceAddress}
                        </div>
                      </div>
                      {loc.corporateAddress && loc.corporateAddress !== loc.workspaceAddress && (
                        <div className="flex items-start gap-2 pt-1 border-t border-gray-100">
                          <Building2 className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-gray-900">Corporate Desk:</strong> {loc.corporateAddress}
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                        Key Amenities & Services
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                        {loc.amenities.slice(0, 4).map((amenity: string, idx: number) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="line-clamp-1">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#0C0E12] hover:bg-black text-white text-center text-xs font-bold transition-colors"
                  >
                    View Location Details & Map
                  </Link>
                  <Link
                    href={`/book-a-visit?location=${encodeURIComponent(loc.name)}`}
                    className="w-full sm:w-auto py-3 px-5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white text-center text-xs font-bold shadow-md transition-colors"
                  >
                    Schedule Visit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY YOFFICES VALUE MATRIX */}
      <section className="py-16 sm:py-24 bg-[#0C0E12] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880] block mb-2">
              The Yoffices Advantage
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans">
              Why Forward-Thinking Businesses Choose Yoffices
            </h2>
            <p className="text-sm text-gray-400 mt-3">
              We eliminate traditional real estate friction so your team can focus exclusively on speed, revenue, and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#14171F] border border-[#222634] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C91D24] text-white flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-xl font-black text-white font-sans">Zero Fit-Out CapEx</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Save lakhs in architectural design, acoustic partitioning, HVAC fit-outs, and executive furniture. Move in same-day with plug-and-play ergonomics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#14171F] border border-[#222634] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A880] text-[#0C0E12] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-xl font-black text-white font-sans">100% Business Continuity</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Dual redundant enterprise fiber connections, dual generator power backup, 24/7 biometric security access, and daily sanitization protocols.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#14171F] border border-[#222634] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white text-[#0C0E12] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-xl font-black text-white font-sans">Integrated Ecosystem</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Seamlessly combine private workspace, virtual office GST compliance, shared admin employees, and Work + Stay accommodation under one invoice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WORK + STAY & DORMITORY SPOTLIGHT */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200">
                <Home className="w-3.5 h-3.5 text-amber-700" /> Integrated Co-Living Innovation
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 font-sans leading-tight">
                Work + Stay. <br />
                <span className="text-[#C91D24]">Live and Execute Under One Roof.</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Designed for ambitious founders, remote engineers, and mobile consultants. Enjoy modern dormitory accommodation with zero commuting friction, gourmet cafeteria access, high-speed fiber internet, and productive coworking bays.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs font-medium text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C91D24]" />
                  <span>Furnished AC Dormitory Bedding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C91D24]" />
                  <span>24/7 Dedicated Workstation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C91D24]" />
                  <span>Pantry & Cafeteria Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C91D24]" />
                  <span>Sector 45 Gurgaon Prime Location</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/work-stay"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0C0E12] hover:bg-black text-white text-xs font-bold shadow-md transition-colors"
                >
                  <span>Explore Work + Stay</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/work-stay/dormitory"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs font-bold transition-colors"
                >
                  <span>View Dormitory Specs</span>
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
                alt="Yoffices Work and Stay"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880]">
                    Sector 45 Gurugram
                  </span>
                  <div className="text-xl font-bold font-sans">
                    Combines Accommodation + Coworking in One Seamless Membership
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FRANCHISE MASTER SECTION & CALCULATOR */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C91D24] block mb-2">
              Commercial Asset Ownership
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 font-sans">
              Own a Yoffices Business Opportunity
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
              Structured 3-year commercial rental framework backed by operational real estate, monthly rental disbursements, and 3 annual post-dated security cheques.
            </p>
          </div>

          {/* Interactive Calculator */}
          <div className="max-w-4xl mx-auto">
            <FranchiseCalculator models={franchiseModels} showApplyButton={true} />
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/franchise/models"
              className="text-xs font-bold text-[#C91D24] hover:underline inline-flex items-center gap-1"
            >
              <span>Compare all 3 models in detail (Desk, Dormitory, Cabin)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. MEDIA & YOUTUBE VIDEO SECTION */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C91D24] block mb-2">
                Video Ecosystem
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 font-sans">
                Watch Yoffices in Action
              </h2>
            </div>
            <Link
              href="/media"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#C91D24] hover:underline"
            >
              <span>View full video gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((vid) => (
              <Link
                key={vid.id}
                href={`/media/${vid.slug}`}
                className="group rounded-2xl bg-[#FAF9F6] border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 w-full bg-gray-900 overflow-hidden">
                  <img
                    src={vid.thumbnail || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#C91D24] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-[#0C0E12]/90 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded">
                    {vid.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 font-sans group-hover:text-[#C91D24] transition-colors line-clamp-2">
                      {vid.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2">{vid.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-700 group-hover:text-[#C91D24]">
                    <span>Watch episode</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS SECTION */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C91D24] block mb-2">
              Community Voices
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 font-sans">
              Trusted by Founders & Enterprise Teams
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic">
                    "{test.content}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                  {test.avatar && (
                    <img
                      src={test.avatar}
                      alt={test.name}
                      className="w-10 h-10 rounded-full object-cover border border-gray-200"
                    />
                  )}
                  <div>
                    <div className="text-sm font-bold text-gray-900">{test.name}</div>
                    <div className="text-[11px] text-gray-500">
                      {test.role}, {test.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQS ACCORDION */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C91D24] block mb-2">
              Answers & Clarifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 font-sans">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.id}
                className="group bg-[#FAF9F6] rounded-xl p-5 border border-gray-200 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold text-sm sm:text-base text-gray-900">
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#C91D24] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="text-xs sm:text-sm text-gray-600 mt-3 pl-6 leading-relaxed border-t border-gray-200/60 pt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL HIGH CONVERSION CTA */}
      <section className="py-16 sm:py-20 bg-[#0C0E12] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C91D24]/25 via-[#0C0E12] to-[#0C0E12] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <Sparkles className="w-3.5 h-3.5" /> Ready to Upgrade Your Working Environment?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans">
            Schedule Your Private Center Tour Today
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Visit Sector 45 Gurugram to test high-speed redundant fiber, sample artisan coffee, and pick your team’s new private cabin.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/book-a-visit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-black text-sm tracking-wider uppercase shadow-xl hover:shadow-2xl transition-all"
            >
              <span>Book a Visit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors"
            >
              <span>Talk to Yoffices Team</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
