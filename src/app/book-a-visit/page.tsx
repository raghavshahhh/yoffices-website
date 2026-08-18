import { Suspense } from 'react';
import { SiteVisitForm } from '@/components/forms/SiteVisitForm';
import { Calendar, Sparkles, MapPin, Coffee, Wifi, Shield } from 'lucide-react';

export const metadata = {
  title: 'Book a Site Visit | Schedule a Tour at Yoffices Gurgaon',
  description:
    'Schedule a guided physical tour of Yoffices Sector 45 & Sector 32 Gurgaon. Inspect private cabins, dedicated desks, and meeting rooms with complimentary coffee.',
};

export default function BookAVisitPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C91D24]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <Calendar className="w-3.5 h-3.5" /> Guided VIP Center Tour
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Schedule a Physical Site Tour
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience our acoustic private cabins, test high-speed fiber internet, and enjoy complimentary artisan coffee during your personalized walk-through.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="text-center py-12 text-gray-500">Loading Booking System...</div>}>
            <SiteVisitForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
