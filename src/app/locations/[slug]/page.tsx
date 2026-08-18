import { notFound } from 'next/navigation';
import Link from 'next/link';
import { db } from '@/lib/db';
import {
  MapPin,
  Building2,
  CheckCircle2,
  Calendar,
  Phone,
  Mail,
  ExternalLink,
  Sparkles,
  Shield,
  ArrowRight,
} from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = db.getLocationBySlug(slug);

  if (!location) {
    return { title: 'Location Not Found | Yoffices' };
  }

  return {
    title: `${location.name} | Flexible Workspaces & Offices`,
    description: `Explore workspace options, amenities, photos, and book tours at ${location.name} in ${location.area}.`,
  };
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = db.getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={location.photos[0]}
            alt={location.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E12] via-[#0C0E12]/80 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <MapPin className="w-3.5 h-3.5" /> {location.city} • {location.status}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans">
            {location.name}
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {location.area}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href={`/book-a-visit?location=${encodeURIComponent(location.name)}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Guided Center Visit</span>
            </Link>
            <a
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all"
            >
              <ExternalLink className="w-4 h-4 text-[#C5A880]" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      </section>

      {/* Address & Photos Showcase */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Address Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-[#C91D24] font-bold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4" /> Operational Workspace Address
              </div>
              <p className="text-sm font-semibold text-gray-900">{location.workspaceAddress}</p>
              <p className="text-xs text-gray-500">For daily center visits, tours, and member access.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-gray-700 font-bold text-xs uppercase tracking-wider">
                <Building2 className="w-4 h-4" /> Corporate & Compliance Address
              </div>
              <p className="text-sm font-semibold text-gray-900">
                {location.corporateAddress || location.workspaceAddress}
              </p>
              <p className="text-xs text-gray-500">For legal agreements, ROC filings, and corporate affairs.</p>
            </div>
          </div>

          {/* Photo Gallery */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 font-sans mb-6">Center Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {location.photos.map((photo: string, index: number) => (
                <div key={index} className="relative h-64 rounded-2xl overflow-hidden shadow-md group">
                  <img
                    src={photo}
                    alt={`${location.name} interior ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Amenities & Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start pt-6">
            {/* Amenities List */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-black text-gray-900 font-sans">Center Amenities & Infrastructure</h3>
                <p className="text-sm text-gray-600 mt-1">High-performance amenities available to all members at this center.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {location.amenities.map((amenity: string, idx: number) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#FAF9F6] border border-gray-200 flex items-center gap-2.5 text-xs font-semibold text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#C91D24] shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-black text-gray-900 font-sans">Location & Directions</h3>
                <p className="text-sm text-gray-600 mt-1">Easily accessible via major transport arteries.</p>
              </div>

              <div className="h-80 w-full rounded-2xl overflow-hidden border border-gray-200 shadow-md">
                <iframe
                  src={location.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${location.name} Map`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            defaultService="Private Office"
            defaultLocation={location.name}
            title={`Schedule a Tour at ${location.name}`}
            subtitle="Our center manager will prepare a guided walk-through for your team."
            source={`Location Detail (${location.name})`}
          />
        </div>
      </section>
    </div>
  );
}
