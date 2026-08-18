'use client';

import { useState, useEffect } from 'react';
import { Video, Plus, Trash2, Save, CheckCircle2, Play, ExternalLink } from 'lucide-react';
import { MediaVideoData } from '@/types';

export default function AdminMediaCmsPage() {
  const [videos, setVideos] = useState<MediaVideoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [newVideo, setNewVideo] = useState({
    title: '',
    slug: '',
    youtubeUrl: '',
    description: '',
    category: 'Office Tours',
    isFeatured: false,
  });

  const categories = [
    'Office Tours',
    'Rental Income',
    'Virtual Office',
    'Work + Stay',
    'Coworking',
    'Interviews',
    'Senior Living',
  ];

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/media');
      const data = await res.json();
      if (data.success) {
        setVideos(data.data || []);
      }
    } catch (err) {
      console.error('Error fetching media:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleCreateVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/media', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newVideo),
      });
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        setNewVideo({
          title: '',
          slug: '',
          youtubeUrl: '',
          description: '',
          category: 'Office Tours',
          isFeatured: false,
        });
        fetchVideos();
      }
    } catch (err) {
      console.error('Failed to create video:', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this video?')) return;
    try {
      const res = await fetch(`/api/admin/media?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setVideos((prev) => prev.filter((v) => v.id !== id));
      }
    } catch (err) {
      console.error('Failed to delete video:', err);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="bg-white border border-gray-200 shadow-xs p-6 rounded-2xl border border-gray-200">
        <h1 className="text-2xl font-black text-gray-900 font-sans">Media & YouTube Video CMS</h1>
        <p className="text-xs text-gray-400 mt-1">
          Add and manage YouTube videos with auto-generated thumbnails and categorizations.
        </p>
      </div>

      {success && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800 rounded-xl flex items-center gap-2.5 text-xs text-emerald-400 font-bold animate-fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>Video added to ecosystem successfully!</span>
        </div>
      )}

      {/* Add Video Form */}
      <div className="bg-white border border-gray-200 shadow-xs p-6 sm:p-8 rounded-2xl border border-gray-200 space-y-4">
        <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2">
          Add New YouTube Video
        </h2>

        <form onSubmit={handleCreateVideo} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Video Title</label>
              <input
                type="text"
                required
                placeholder="e.g. Yoffices Sector 45 Tour"
                value={newVideo.title}
                onChange={(e) => {
                  const title = e.target.value;
                  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  setNewVideo({ ...newVideo, title, slug });
                }}
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">URL Slug</label>
              <input
                type="text"
                required
                value={newVideo.slug}
                onChange={(e) => setNewVideo({ ...newVideo, slug: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">YouTube URL</label>
              <input
                type="url"
                required
                placeholder="https://www.youtube.com/watch?v=..."
                value={newVideo.youtubeUrl}
                onChange={(e) => setNewVideo({ ...newVideo, youtubeUrl: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Category</label>
              <select
                value={newVideo.category}
                onChange={(e) => setNewVideo({ ...newVideo, category: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Description</label>
            <textarea
              rows={2}
              required
              placeholder="Short summary of this video..."
              value={newVideo.description}
              onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none resize-none"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <label className="flex items-center gap-2 text-xs font-semibold text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={newVideo.isFeatured}
                onChange={(e) => setNewVideo({ ...newVideo, isFeatured: e.target.checked })}
                className="accent-[#C91D24]"
              />
              <span>Feature on Homepage</span>
            </label>

            <button
              type="submit"
              className="py-2.5 px-5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white text-xs font-bold flex items-center gap-1.5 shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>Publish Video</span>
            </button>
          </div>
        </form>
      </div>

      {/* Videos List */}
      <div className="bg-white border border-gray-200 shadow-xs p-6 rounded-2xl border border-gray-200 space-y-4">
        <h2 className="text-base font-bold text-gray-900">Active Video Library ({videos.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((vid) => (
            <div
              key={vid.id}
              className="bg-gray-50 border border-gray-200 rounded-xl border border-gray-200 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-36 w-full bg-black">
                  <img
                    src={vid.thumbnail || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'}
                    alt={vid.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute top-2 left-2 bg-[#0C0E12]/90 text-[10px] uppercase font-bold text-gray-900 px-2 py-0.5 rounded">
                    {vid.category}
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <h3 className="font-bold text-gray-900 text-xs line-clamp-2">{vid.title}</h3>
                  <p className="text-[11px] text-gray-400 line-clamp-2">{vid.description}</p>
                </div>
              </div>

              <div className="p-4 pt-0 border-t border-gray-200 flex items-center justify-between mt-2">
                <a
                  href={`/media/${vid.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#C5A880] hover:underline inline-flex items-center gap-1"
                >
                  <span>Preview</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => handleDelete(vid.id)}
                  className="p-1.5 rounded-lg text-gray-500 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
