import { notFound } from 'next/navigation';
import Link from 'next/link';
import { db } from '@/lib/db';
import { Play, Sparkles, ArrowLeft, ArrowUpRight, CheckCircle2, Calendar } from 'lucide-react';

interface MediaVideoPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: MediaVideoPageProps) {
  const { slug } = await params;
  const video = db.getMediaVideoBySlug(slug);

  if (!video) {
    return { title: 'Video Not Found | Yoffices' };
  }

  return {
    title: `${video.title} | Yoffices Media`,
    description: video.description,
  };
}

export default async function MediaDetailPage({ params }: MediaVideoPageProps) {
  const { slug } = await params;
  const video = db.getMediaVideoBySlug(slug);

  if (!video) {
    notFound();
  }

  const relatedVideos = db
    .getMediaVideos()
    .filter((v) => v.slug !== video.slug)
    .slice(0, 2);

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Top Breadcrumb Header */}
      <div className="bg-[#0C0E12] text-white py-8 px-4 sm:px-6 lg:px-8 border-b border-[#222634]">
        <div className="max-w-5xl mx-auto space-y-3">
          <Link
            href="/media"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Media
          </Link>
          <div className="inline-block text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#C91D24] text-white">
            {video.category}
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white font-sans">{video.title}</h1>
        </div>
      </div>

      {/* Main Video Embed Section */}
      <section className="py-12 sm:py-16 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* YouTube Embed Container */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Description & Key Takeaways */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 font-sans">Video Summary & Overview</h2>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">{video.description}</p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-gray-500 font-medium">Interested in this solution?</span>
                <div className="text-sm font-bold text-gray-900">Experience Yoffices Centers in Gurgaon</div>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href="/book-a-visit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-md transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Site Visit</span>
                </Link>
                <Link
                  href="/franchise"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-[#0C0E12] hover:bg-black text-white font-bold text-xs transition-colors"
                >
                  <span>Franchise Info</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Videos */}
          {relatedVideos.length > 0 && (
            <div className="space-y-6 pt-6">
              <h3 className="text-xl font-bold text-gray-900 font-sans">Related Videos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedVideos.map((rv) => (
                  <Link
                    key={rv.id}
                    href={`/media/${rv.slug}`}
                    className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
                  >
                    <div className="relative w-32 h-20 bg-gray-900 rounded-lg overflow-hidden shrink-0">
                      <img src={rv.thumbnail || ''} alt={rv.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Play className="w-5 h-5 fill-white text-white" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-bold text-[#C91D24]">{rv.category}</span>
                      <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#C91D24] transition-colors line-clamp-2 mt-0.5">
                        {rv.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
