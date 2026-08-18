'use client';

import { useState, useEffect } from 'react';
import { BookOpen, Plus, Trash2, Save, CheckCircle2, ExternalLink } from 'lucide-react';
import { BlogPostData } from '@/types';

export default function AdminBlogCmsPage() {
  const [posts, setPosts] = useState<BlogPostData[]>([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    author: 'Yoffices Editorial Team',
    category: 'Coworking & Workspaces',
    tags: 'Gurgaon, Coworking, Office Space',
    readTime: '5 min read',
    published: true,
  });

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/blog');
      const data = await res.json();
      if (data.success) {
        setPosts(data.data || []);
      }
    } catch (err) {
      console.error('Error fetching blog posts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost),
      });
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        setNewPost({
          title: '',
          slug: '',
          excerpt: '',
          content: '',
          coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
          author: 'Yoffices Editorial Team',
          category: 'Coworking & Workspaces',
          tags: 'Gurgaon, Coworking, Office Space',
          readTime: '5 min read',
          published: true,
        });
        fetchPosts();
      }
    } catch (err) {
      console.error('Failed to create post:', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    try {
      const res = await fetch(`/api/admin/blog?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
      }
    } catch (err) {
      console.error('Failed to delete post:', err);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="bg-[#14171F] p-6 rounded-2xl border border-[#222634]">
        <h1 className="text-2xl font-black text-white font-sans">Blog & SEO Articles CMS</h1>
        <p className="text-xs text-gray-400 mt-1">
          Publish SEO-optimized articles, guides, and corporate announcements.
        </p>
      </div>

      {success && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800 rounded-xl flex items-center gap-2.5 text-xs text-emerald-400 font-bold animate-fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>Article published successfully!</span>
        </div>
      )}

      {/* Add Blog Post Form */}
      <div className="bg-[#14171F] p-6 sm:p-8 rounded-2xl border border-[#222634] space-y-4">
        <h2 className="text-base font-bold text-white border-b border-[#222634] pb-2">
          Create New Article
        </h2>

        <form onSubmit={handleCreatePost} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Article Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. 5 Benefits of Private Offices in Gurgaon"
                value={newPost.title}
                onChange={(e) => {
                  const title = e.target.value;
                  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  setNewPost({ ...newPost, title, slug });
                }}
                className="w-full px-3.5 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Slug *</label>
              <input
                type="text"
                required
                value={newPost.slug}
                onChange={(e) => setNewPost({ ...newPost, slug: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Category</label>
              <input
                type="text"
                required
                value={newPost.category}
                onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Author</label>
              <input
                type="text"
                required
                value={newPost.author}
                onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Read Time</label>
              <input
                type="text"
                value={newPost.readTime}
                onChange={(e) => setNewPost({ ...newPost, readTime: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Excerpt *</label>
            <textarea
              rows={2}
              required
              placeholder="Short summary for preview cards and SEO..."
              value={newPost.excerpt}
              onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Cover Image URL</label>
            <input
              type="url"
              required
              value={newPost.coverImage}
              onChange={(e) => setNewPost({ ...newPost, coverImage: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
              Article Content (Markdown / Text) *
            </label>
            <textarea
              rows={6}
              required
              placeholder="Write full article content here..."
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="py-2.5 px-5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white text-xs font-bold flex items-center gap-1.5 shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>Publish Article</span>
            </button>
          </div>
        </form>
      </div>

      {/* Posts List */}
      <div className="bg-[#14171F] p-6 rounded-2xl border border-[#222634] space-y-4">
        <h2 className="text-base font-bold text-white">Published Articles ({posts.length})</h2>
        <div className="divide-y divide-[#222634]">
          {posts.map((post) => (
            <div key={post.id} className="py-4 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#C91D24]">{post.category}</span>
                <h3 className="text-sm font-bold text-white">{post.title}</h3>
                <div className="text-xs text-gray-500">{post.author} • {post.readTime}</div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#1B202B] text-gray-300 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="p-2 rounded-lg bg-[#1B202B] text-gray-400 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
