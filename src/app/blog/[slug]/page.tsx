import { notFound } from 'next/navigation';
import Link from 'next/link';
import { db } from '@/lib/db';
import { Clock, Calendar, ArrowLeft, User, ArrowRight, BookOpen, Share2 } from 'lucide-react';
import { Marquee } from '@/components/ui/Marquee';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = db.getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Article Not Found | Yoffices' };
  }

  return {
    title: post.seoTitle || `${post.title} | Yoffices Insights`,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = db.getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = db
    .getBlogPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <div className="flex flex-col w-full bg-[#F0EFE9] text-[#111111] overflow-hidden">
      {/* Header */}
      <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-black/[0.08]">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Articles
            </Link>

            <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[10px] uppercase font-bold">
              [ {post.category} ]
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#111111] font-sans tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-mono pt-2">
            <span className="flex items-center gap-1.5 font-bold text-gray-700">
              <User className="w-3.5 h-3.5 text-[#C91D24]" />
              {post.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C91D24]" />
              {post.readTime}
            </span>
            <span>•</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-gray-100 max-h-[460px]">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="nestor-card p-8 sm:p-12 shadow-xl space-y-8">
          <p className="text-lg font-medium text-gray-800 leading-relaxed border-l-4 border-[#C91D24] pl-4 italic bg-[#F0EFE9]/60 p-4 rounded-r-2xl">
            {post.excerpt}
          </p>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-gray-700 whitespace-pre-line font-normal">
            {post.content}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-gray-400 mr-2 font-mono">TAGS:</span>
              {post.tags.map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-[#F0EFE9] text-gray-700 text-xs font-mono border border-black/5"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Bottom Action CTA */}
          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#111111] text-white p-6 sm:p-8 rounded-2xl">
            <div className="space-y-1">
              <span className="nestor-pill bg-white/10 text-[#C5A880] font-mono text-[10px]">
                NEXT STEPS
              </span>
              <h3 className="text-lg font-bold font-sans text-white">
                Experience Yoffices Centers in Gurugram
              </h3>
              <p className="text-xs text-gray-400">
                Book a personalized tour of Sector 45 or Sector 32 workspaces today.
              </p>
            </div>

            <Link
              href="/book-a-visit"
              className="px-6 py-3 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white text-xs font-bold shrink-0 shadow-md transition-colors"
            >
              Schedule Tour
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 space-y-6">
            <h3 className="text-2xl font-black text-gray-900 font-sans">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/blog/${rp.slug}`}
                  className="nestor-card p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-gray-200">
                      <img src={rp.coverImage} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-2.5 left-2.5 bg-black/80 text-white font-mono text-[9px] uppercase px-2 py-0.5 rounded">
                        {rp.category}
                      </div>
                    </div>
                    <h4 className="font-bold text-sm text-gray-900 group-hover:text-[#C91D24] transition-colors line-clamp-2">
                      {rp.title}
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-2">{rp.excerpt}</p>
                  </div>
                  <div className="pt-4 text-xs font-bold text-[#C91D24] flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
