import { Suspense } from 'react';
import { SiteVisitForm } from '@/components/forms/SiteVisitForm';
import { Calendar, Sparkles, MapPin, Coffee, Wifi, Shield, CheckCircle2, Clock, Navigation } from 'lucide-react';
import { Marquee } from '@/components/ui/Marquee';

export const metadata = {
  title: 'Book a Site Visit | Schedule a Tour at Yoffices Gurgaon',
  description:
    'Schedule a guided physical tour of Yoffices Sector 45 & Sector 32 Gurgaon. Inspect private cabins, dedicated desks, and meeting rooms with complimentary coffee.',
};

export default function BookAVisitPage() {
  const marqueeItems = [
    'GUIDED PHYSICAL CENTER TOUR',
    'SECTOR 45 & 32 GURUGRAM',
    'TEST 1GBPS FIBER SPEED ON DEMAND',
    'COMPLIMENTARY GOURMET COFFEE',
    'SAME-DAY CABIN & DESK ALLOCATION',
    'FREE BASEMENT PARKING ON-SITE',
  ];

  const highlights = [
    {
      title: 'Complimentary Fresh Roast Coffee',
      desc: 'Enjoy bean-to-cup espresso or cappuccino at our vertical garden pantry during your walk-through.',
      icon: Coffee,
    },
    {
      title: 'Live 1Gbps Speed Test',
      desc: 'Bring your laptop and test dedicated dual-ISP low-latency network performance live.',
      icon: Wifi,
    },
    {
      title: 'Custom Floorplan Consulting',
      desc: 'Our workspace architects will draft tailored layout options for your exact team size on the spot.',
      icon: Navigation,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero */}
      <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[10px] sm:text-[11px]">
              [ GUIDED VIP CENTER TOUR ]
            </span>
            <span className="nestor-pill bg-emerald-50 text-emerald-700 border-emerald-200 font-mono text-[10px] sm:text-[11px] flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              CONFIRMED WITHIN 15 MINS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-[#111111] font-sans leading-tight">
            Schedule a Physical Site Tour
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience our acoustic private cabins, test high-speed fiber internet, and enjoy complimentary artisan coffee during your personalized walk-through in Sector 45 or Sector 32 Gurgaon.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-3xl mx-auto text-left">
            {highlights.map((h, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-white border border-black/10 text-xs text-gray-700 shadow-xs flex items-center gap-2.5">
                <h.icon className="w-4 h-4 text-[#C91D24] shrink-0" />
                <span className="font-medium line-clamp-1">{h.title}</span>
              </div>
            ))}
          </div>
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

      {/* Main Form Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Suspense fallback={<div className="text-center py-12 text-gray-500 font-mono text-xs">Loading Booking Form...</div>}>
            <SiteVisitForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
