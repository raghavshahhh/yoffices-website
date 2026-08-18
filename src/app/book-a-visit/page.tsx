import { Suspense } from 'react';
import { SiteVisitForm } from '@/components/forms/SiteVisitForm';
import { Calendar, Sparkles, MapPin, Coffee, Wifi, Shield } from 'lucide-react';
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
    'TEST 1GBPS FIBER SPEED',
    'COMPLIMENTARY ARTISAN COFFEE',
    'SAME-DAY DESK & CABIN ALLOCATION',
  ];

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Hero */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[11px]">
            [ GUIDED VIP CENTER TOUR ]
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#111111] font-sans">
            Schedule a Physical Site Tour
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience our acoustic private cabins, test high-speed fiber internet, and enjoy complimentary artisan coffee during your personalized walk-through.
          </p>
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
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Suspense fallback={<div className="text-center py-12 text-gray-500 font-mono text-xs">Loading Booking Form...</div>}>
            <SiteVisitForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
