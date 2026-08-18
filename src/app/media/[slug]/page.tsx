import { notFound } from 'next/navigation';
import Link from 'next/link';
import { db } from '@/lib/db';
import { Play, ArrowLeft, ArrowRight, Calendar, Video, CheckCircle2 } from 'lucide-react';
import { Marquee } from '@/components/ui/Marquee';

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
    .slice(0, 3);

  const isShort = video.youtubeUrl.includes('/shorts/') || video.youtubeId.startsWith('E-') || video.youtubeId.startsWith('-J') || video.youtubeId.startsWith('FJ');

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Top Breadcrumb Header */}
      <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <Link
              href="/media"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Videos
            </Link>

            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[10px] uppercase font-bold">
              [ {video.category} ]
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight leading-tight">
            {video.title}
          </h1>
        </div>
      </section>

      {/* Main Video Embed Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* YouTube Embed Container */}
          <div className={`relative ${isShort ? 'aspect-[9/16] max-w-[420px] mx-auto' : 'aspect-video w-full'} rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-black`}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0 absolute inset-0"
            />
          </div>

          {/* Description & Key Takeaways Card */}
          <div className="nestor-card p-8 sm:p-10 space-y-6 shadow-xl">
            <div className="space-y-2">
              <span className="nestor-pill bg-black/5 font-mono text-[10px] text-gray-500">
                [ OVERVIEW & SUMMARY ]
              </span>
              <h2 className="text-2xl font-black text-gray-900 font-sans">
                About this Presentation
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed pt-2">
                {video.description}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-gray-500 font-medium font-mono">EXPLORE IN PERSON</span>
                <div className="text-sm font-bold text-gray-900">Experience Yoffices Sector 45 Gurgaon</div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href="/book-a-visit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-md transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Center Tour</span>
                </Link>
                <Link
                  href="/franchise"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111111] hover:bg-black text-white font-bold text-xs transition-all"
                >
                  <span>Franchise Models</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Videos */}
          {relatedVideos.length > 0 && (
            <div className="space-y-6 pt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 font-sans">More Videos & Walkthroughs</h3>
                <Link href="/media" className="text-xs font-bold text-[#C91D24] hover:underline flex items-center gap-1">
                  <span>View All</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedVideos.map((rv) => (
                  <Link
                    key={rv.id}
                    href={`/media/${rv.slug}`}
                    className="nestor-card p-4 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="relative h-36 w-full bg-gray-900 rounded-2xl overflow-hidden">
                        <img src={rv.thumbnail || ''} alt={rv.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-[#C91D24] text-white flex items-center justify-center shadow-lg">
                            <Play className="w-4 h-4 fill-white ml-0.5" />
                          </div>
                        </div>
                        <div className="absolute top-2.5 left-2.5 bg-black/80 text-white font-mono text-[9px] uppercase px-2 py-0.5 rounded">
                          {rv.category}
                        </div>
                      </div>

                      <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#C91D24] transition-colors line-clamp-2">
                        {rv.title}
                      </h4>
                    </div>

                    <div className="pt-3 text-[11px] font-bold text-[#C91D24] flex items-center gap-1">
                      <span>Watch Reel</span>
                      <ArrowRight className="w-3 h-3" />
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
