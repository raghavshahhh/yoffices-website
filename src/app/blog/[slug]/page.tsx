import { notFound } from 'next/navigation';
import Link from 'next/link';
import { db } from '@/lib/db';
import { Clock, Calendar, ArrowLeft, User, Share2, ArrowRight, Sparkles, Building2 } from 'lucide-react';

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
    title: post.seoTitle || `${post.title} | Yoffices`,
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

  // Structured JSON-LD Data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Yoffices',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yoffices.com/logo.png',
      },
    },
    datePublished: post.publishedAt,
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="bg-[#0C0E12] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-[#222634]">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Articles
          </Link>
          <div className="inline-block text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded bg-[#C91D24] text-white">
            {post.category}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-sans leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-gray-400 pt-2">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#C5A880]" />
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
      </div>

      {/* Cover Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-100 max-h-[440px]">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
          <p className="text-lg font-medium text-gray-700 leading-relaxed border-l-4 border-[#C91D24] pl-4 italic">
            {post.excerpt}
          </p>

          <div className="space-y-4 text-sm sm:text-base leading-relaxed whitespace-pre-line text-gray-700">
            {post.content}
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-gray-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-gray-400 mr-2">Tags:</span>
            {post.tags.map((tag: string, idx: number) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Mid-Article CTA Banner */}
        <div className="my-12 p-8 rounded-2xl bg-[#0C0E12] text-white border border-[#222634] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880]">
              Ready for Turnkey Workspaces?
            </span>
            <div className="text-xl font-bold font-sans">
              Schedule a Walkthrough at Yoffices Sector 45 Gurgaon
            </div>
          </div>
          <Link
            href="/book-a-visit"
            className="px-6 py-3 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-md transition-colors whitespace-nowrap"
          >
            Book Tour
          </Link>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-gray-200">
            <h3 className="text-2xl font-black text-gray-900 font-sans">Recommended Reading</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/blog/${rp.slug}`}
                  className="p-5 rounded-xl bg-[#FAF9F6] border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#C91D24]">{rp.category}</span>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#C91D24] transition-colors mt-1 line-clamp-2">
                      {rp.title}
                    </h4>
                  </div>
                  <div className="pt-3 text-xs font-semibold text-gray-500 inline-flex items-center gap-1">
                    <span>Read guide</span>
                    <ArrowRight className="w-3 h-3" />
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
