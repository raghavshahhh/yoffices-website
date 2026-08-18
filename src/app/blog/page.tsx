import Link from 'next/link';
import { db } from '@/lib/db';
import { BookOpen, Calendar, Clock, ArrowRight, User } from 'lucide-react';

export const metadata = {
  title: 'Workspace, Real Estate & Business Blog | Yoffices Gurugram',
  description:
    'Read insightful guides on coworking spaces, private offices in Gurgaon, GST virtual office compliance, and commercial franchise investments.',
};

export default function BlogPage() {
  const posts = db.getBlogPosts();

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <BookOpen className="w-3.5 h-3.5" /> Market Insights & Research
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Yoffices Editorial & Insights
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Strategic perspectives on flexible workspace economics, Haryana GST registration compliance, and commercial real estate assets.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-[#FAF9F6] rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 w-full bg-gray-200 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0C0E12]/90 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-gray-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#C91D24]" />
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span>{new Date(post.publishedAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>

                    <h2 className="text-lg font-bold text-gray-900 font-sans group-hover:text-[#C91D24] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#C91D24]">
                  <Link href={`/blog/${post.slug}`} className="hover:underline inline-flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] text-gray-400 font-normal">{post.author.split(' ')[0]}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
