import Link from 'next/link';
import { db } from '@/lib/db';
import {
  MapPin,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  Calendar,
} from 'lucide-react';

export const metadata = {
  title: 'Yoffices Centers & Locations in Gurgaon | Flexible Workspace Hubs',
  description:
    'Explore Yoffices commercial workspace centers across Gurugram: Sector 45 Hub, Sector 32 Corporate Office, and upcoming centers.',
};

export default function LocationsPage() {
  const locations = db.getLocations();

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C91D24]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <MapPin className="w-3.5 h-3.5" /> Prime NCR Business Footprint
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Our Commercial Centers in Gurugram
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Strategically located near major metro corridors, expressways, and institutional clusters for effortless connectivity.
          </p>
        </div>
      </section>

      {/* Locations List */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {locations.map((loc) => (
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
                    {loc.startingPrice && (
                      <div className="absolute bottom-4 right-4 bg-[#0C0E12]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                        From {loc.startingPrice}
                      </div>
                    )}
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div>
                      <h2 className="text-2xl font-black text-gray-900 font-sans">{loc.name}</h2>
                      <p className="text-xs text-gray-500 font-medium mt-1">{loc.area}</p>
                    </div>

                    <div className="space-y-2 text-xs text-gray-700 bg-white p-4 rounded-xl border border-gray-200">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#C91D24] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-gray-900">Workspace Address:</strong> {loc.workspaceAddress}
                        </div>
                      </div>
                      {loc.corporateAddress && loc.corporateAddress !== loc.workspaceAddress && (
                        <div className="flex items-start gap-2 pt-1 border-t border-gray-100">
                          <Building2 className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-gray-900">Corporate Address:</strong> {loc.corporateAddress}
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                        Available Amenities
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
                    View Details & Map
                  </Link>
                  <Link
                    href={`/book-a-visit?location=${encodeURIComponent(loc.name)}`}
                    className="w-full sm:w-auto py-3 px-5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white text-center text-xs font-bold shadow-md transition-colors"
                  >
                    Book Visit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
