'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Building2, CheckCircle2, ArrowRight, Calendar } from 'lucide-react';
import { LocationData } from '@/types';
import { FadeUp } from '@/components/motion/MotionWrapper';
import { Marquee } from '@/components/ui/Marquee';

interface LocationsListClientProps {
  locations: LocationData[];
}

export function LocationsListClient({ locations }: LocationsListClientProps) {
  const marqueeItems = [
    'SECTOR 45 GURGAON FLAGSHIP',
    'SECTOR 32 INSTITUTIONAL DESK',
    'MILLENNIUM CITY METRO CONNECTIVITY',
    'NH-48 EXPRESSWAY CORRIDOR',
    '24/7 POWER & FIBER BACKED',
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <FadeUp delay={0.1}>
            <span className="nestor-pill bg-black/5 font-mono text-[11px] text-gray-800">
              [ PRIME NCR COMMERCIAL CORRIDORS ]
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#111111] font-sans">
              Our Commercial Hubs in Gurugram
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Strategically positioned in Sector 45 and Sector 32 Institutional Area for seamless connectivity across NH-48, Cyber City, and Delhi Metro.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Live Marquee Strip */}
      <div className="bg-[#111111] text-white">
        <Marquee
          items={marqueeItems}
          speed={60}
          className="border-none py-3"
          itemClassName="text-white/90 font-mono text-xs tracking-widest uppercase"
        />
      </div>

      {/* Locations List Grid */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {locations.map((loc, idx) => {
              const itemNumber = (idx + 1).toString().padStart(2, '0');
              return (
                <FadeUp
                  key={loc.id}
                  delay={idx * 0.15}
                  className="nestor-card overflow-hidden shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-72 w-full bg-black overflow-hidden group">
                      <img
                        src={loc.photos[0]}
                        alt={loc.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-4 left-4 bg-black/80 text-white font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur-md">
                        {loc.status}
                      </div>
                      {loc.startingPrice && (
                        <div className="absolute bottom-4 right-4 bg-black/90 text-white font-mono text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-lg backdrop-blur-md">
                          From {loc.startingPrice}
                        </div>
                      )}
                    </div>

                    <div className="p-6 sm:p-8 space-y-5">
                      <div className="space-y-1">
                        <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[10px]">
                          [ {itemNumber} / 02 • {loc.area.toUpperCase()} ]
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-sans">
                          {loc.name}
                        </h2>
                      </div>

                      <div className="space-y-2.5 text-xs text-gray-700 bg-[#F0EFE9] p-4 rounded-2xl border border-black/5">
                        <div className="flex items-start gap-2.5">
                          <MapPin className="w-4 h-4 text-[#C91D24] shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-gray-900 block font-bold">Workspace Address:</strong>
                            <span className="text-gray-700">{loc.workspaceAddress}</span>
                          </div>
                        </div>
                        {loc.corporateAddress && (
                          <div className="flex items-start gap-2.5 pt-2 border-t border-black/5">
                            <Building2 className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-gray-900 block font-bold">Corporate Desk:</strong>
                              <span className="text-gray-700">{loc.corporateAddress}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2 pt-1">
                        <span className="text-[10px] font-mono uppercase text-gray-400 block font-bold">
                          AVAILABLE AMENITIES
                        </span>
                        <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
                          {loc.amenities.slice(0, 4).map((amenity: string, i: number) => (
                            <div key={i} className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span className="line-clamp-1">{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row items-center gap-3 border-t border-gray-100">
                    <Link
                      href={`/locations/${loc.slug}`}
                      className="w-full sm:flex-1 py-3.5 px-4 rounded-xl bg-[#111111] hover:bg-black text-white text-center text-xs font-bold transition-all"
                    >
                      View Details & Map
                    </Link>
                    <Link
                      href={`/book-a-visit?location=${encodeURIComponent(loc.name)}`}
                      className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white text-center text-xs font-bold shadow-md hover:shadow-lg transition-all"
                    >
                      Book Tour
                    </Link>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
