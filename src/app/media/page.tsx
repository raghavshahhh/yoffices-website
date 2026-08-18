import Link from 'next/link';
import { db } from '@/lib/db';
import { Play, Sparkles, Video, ArrowUpRight, Filter } from 'lucide-react';

export const metadata = {
  title: 'Media & Video Ecosystem | Yoffices Gurugram',
  description:
    'Watch video tours, franchise rental income breakdowns, virtual office guides, and coworking interviews from Yoffices.',
};

export default function MediaPage() {
  const videos = db.getMediaVideos();
  const categories = Array.from(new Set(videos.map((v) => v.category)));

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <Video className="w-3.5 h-3.5" /> Official YouTube Video Hub
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Yoffices Media & Video Showcase
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore center walkthroughs, commercial franchise masterclasses, virtual office guides, and resident interviews.
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 border-b border-gray-100 pb-6">
            <span className="text-xs font-bold uppercase text-gray-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter by Category:
            </span>
            <span className="px-3 py-1 rounded-full bg-[#0C0E12] text-white text-xs font-bold">
              All Videos ({videos.length})
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((vid) => (
              <Link
                key={vid.id}
                href={`/media/${vid.slug}`}
                className="group rounded-2xl bg-[#FAF9F6] border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 w-full bg-gray-900 overflow-hidden">
                    <img
                      src={vid.thumbnail || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'}
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#C91D24] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 bg-[#0C0E12]/90 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded">
                      {vid.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h2 className="text-base font-bold text-gray-900 font-sans group-hover:text-[#C91D24] transition-colors line-clamp-2">
                      {vid.title}
                    </h2>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {vid.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between text-xs font-bold text-[#C91D24] border-t border-gray-100 mt-2">
                  <span>Watch Video & Details</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
