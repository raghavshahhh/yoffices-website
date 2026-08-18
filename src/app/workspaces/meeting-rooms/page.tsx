import Link from 'next/link';
import { db } from '@/lib/db';
import {
  Building2,
  CheckCircle2,
  Calendar,
  Sparkles,
  Wifi,
  Tv,
  Users,
  Video,
  Coffee,
  ArrowRight,
} from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';

export const metadata = {
  title: 'Meeting & Board Rooms for Rent in Gurgaon | Yoffices',
  description:
    'Book soundproofed 4-seater to 16-seater conference rooms and boardrooms in Sector 45 & 32 Gurgaon. 4K displays, video conferencing, high-speed Wi-Fi, and beverage service.',
};

export default function MeetingRoomsPage() {
  const ws = db.getWorkspaceBySlug('meeting-rooms') || {
    name: 'Meeting & Board Rooms',
    startingPrice: '₹499',
    priceUnit: 'hour',
    heroImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80',
  };

  const rooms = [
    {
      title: 'Interview & 1-on-1 Suite',
      capacity: '2 - 4 Persons',
      rate: '₹499 / hour',
      features: ['Acoustic sound dampening', '50-inch 4K Display', 'High-speed Wi-Fi', 'Artisan Coffee/Tea'],
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Conference & Scrum Room',
      capacity: '6 - 8 Persons',
      rate: '₹899 / hour',
      features: ['65-inch Smart Display', 'Wide-angle Video Conference Cam', 'Magnetic Glass Whiteboard', 'Executive Seating'],
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Executive Boardroom',
      capacity: '12 - 16 Persons',
      rate: '₹1,499 / hour',
      features: ['75-inch UHD Presentation Screen', 'Ceiling Microphone Array & Speakers', 'Dedicated Hospitality Attendant', 'HDMI/Wireless Mirroring'],
      image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={ws.heroImage}
            alt="Meeting Rooms"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E12] via-[#0C0E12]/80 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <Building2 className="w-3.5 h-3.5" /> High-Definition Client Suites
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Meeting & Board Rooms in Gurgaon
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Acoustic soundproofed meeting rooms and executive boardrooms equipped with 4K presentation screens, video conference hardware, and attentive beverage service.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
              Starting from <strong className="text-[#C5A880] text-base">{ws.startingPrice}</strong> /{ws.priceUnit}
            </div>
            <Link
              href="/book-a-visit?space=Meeting+Room"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Room by the Hour</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Room Sizes & Rates */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-sans">
              Choose the Right Presentation Suite
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Available by the hour, half-day, or full-day for members and non-members alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((r, idx) => (
              <div key={idx} className="bg-[#FAF9F6] rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all">
                <div>
                  <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                    <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 right-3 bg-[#0C0E12]/90 text-white text-xs font-bold px-2.5 py-1 rounded">
                      {r.capacity}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-black text-gray-900 font-sans">{r.title}</h3>
                    <div className="text-base font-extrabold text-[#C91D24]">{r.rate}</div>
                    <ul className="space-y-2 text-xs text-gray-600 pt-2 border-t border-gray-200">
                      {r.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/book-a-visit?space=${encodeURIComponent(r.title)}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0C0E12] hover:bg-[#C91D24] text-white text-xs font-bold text-center block transition-colors"
                  >
                    Check Slot Availability
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            defaultService="Meeting Rooms"
            title="Book Meeting Room or Presentation Suite"
            subtitle="Let us know your date, time, and participant headcount for immediate booking."
            source="Meeting Rooms Page"
          />
        </div>
      </section>
    </div>
  );
}
