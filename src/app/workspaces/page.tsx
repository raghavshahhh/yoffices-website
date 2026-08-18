import Link from 'next/link';
import { db } from '@/lib/db';
import { ArrowRight, CheckCircle2, Building2, Sparkles, PhoneCall, Calendar } from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';

export const metadata = {
  title: 'Flexible Workspaces & Private Office Cabins in Gurgaon',
  description:
    'Discover private lockable office cabins, dedicated workstations, flexi coworking desks, and acoustic meeting rooms at Yoffices Gurgaon Sector 45 & Sector 32.',
};

export default function WorkspacesPage() {
  const workspaces = db.getWorkspaces();

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C91D24]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <Sparkles className="w-3.5 h-3.5" /> Commercial Workspace Catalog
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Workspaces Built for Focus, Velocity & Scale
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From single agile workstations to bespoke 50-seat corporate private cabins, experience turnkey enterprise infrastructure in Gurgaon with zero capital expenditure.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {workspaces.map((ws, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={ws.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center ${
                    !isEven ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={ws.heroImage}
                      alt={ws.name}
                      className="w-full h-[360px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-[#0C0E12]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                      From {ws.startingPrice} /{ws.priceUnit}
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#C91D24] block mb-1">
                        Turnkey Solution
                      </span>
                      <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-gray-900 font-sans">
                        {ws.name}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {ws.fullDesc}
                    </p>

                    {ws.idealFor && (
                      <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-700">
                        <strong className="text-gray-900">Ideal For:</strong> {ws.idealFor}
                      </div>
                    )}

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                        Included Features & Amenities
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {ws.features.slice(0, 6).map((feat: string, i: number) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Link
                        href={`/workspaces/${ws.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0C0E12] hover:bg-black text-white font-bold text-xs shadow-md transition-colors"
                      >
                        <span>Full Details & Specs</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link
                        href={`/book-a-visit?space=${encodeURIComponent(ws.name)}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-md transition-colors"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book Site Tour</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            defaultService="Private Office"
            title="Request Custom Floor Plan & Quotation"
            subtitle="Tell us your team size and moving timeline to get tailored options."
            source="Workspaces Page"
          />
        </div>
      </section>
    </div>
  );
}
