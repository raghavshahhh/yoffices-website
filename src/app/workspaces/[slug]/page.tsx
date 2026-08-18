import { notFound } from 'next/navigation';
import Link from 'next/link';
import { db } from '@/lib/db';
import {
  Building2,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Wifi,
  Coffee,
  Shield,
} from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';

interface WorkspacePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: WorkspacePageProps) {
  const { slug } = await params;
  const ws = db.getWorkspaceBySlug(slug);

  if (!ws) {
    return { title: 'Workspace Not Found | Yoffices' };
  }

  return {
    title: `${ws.name} in Gurgaon Sector 45 & 32 | Yoffices`,
    description: ws.shortDesc,
  };
}

export default async function DynamicWorkspacePage({ params }: WorkspacePageProps) {
  const { slug } = await params;
  const ws = db.getWorkspaceBySlug(slug);

  if (!ws) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={ws.heroImage}
            alt={ws.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E12] via-[#0C0E12]/80 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <Building2 className="w-3.5 h-3.5" /> Turnkey Workspace Solution
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            {ws.name} in Gurgaon
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {ws.shortDesc}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
              Starting from <strong className="text-[#C5A880] text-base">{ws.startingPrice}</strong> /{ws.priceUnit}
            </div>
            <Link
              href={`/book-a-visit?space=${encodeURIComponent(ws.name)}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Site Visit</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Details & Specs */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-sans">
                Overview & Inclusions
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {ws.fullDesc}
              </p>

              {ws.idealFor && (
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-700">
                  <strong className="text-gray-900">Recommended For:</strong> {ws.idealFor}
                </div>
              )}

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                  Key Features
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ws.features.map((feat: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src={ws.gallery?.[0] || ws.heroImage}
                alt={ws.name}
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            defaultService={ws.name}
            title={`Enquire About ${ws.name}`}
            subtitle="Get detailed availability and customized pricing for your team."
            source={`Workspace Detail (${ws.name})`}
          />
        </div>
      </section>
    </div>
  );
}
