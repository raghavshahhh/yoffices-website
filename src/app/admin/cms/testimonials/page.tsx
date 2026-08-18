'use client';

import { useState, useEffect } from 'react';
import { MessageSquare, Plus, Trash2, Save, CheckCircle2, Star } from 'lucide-react';
import { TestimonialData } from '@/types';

export default function AdminTestimonialsCmsPage() {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [success, setSuccess] = useState(false);
  const [newTest, setNewTest] = useState({
    name: '',
    role: '',
    company: '',
    content: '',
    rating: 5,
    workspaceType: 'Private Office',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    featured: false,
    published: true,
  });

  const fetchTestimonials = async () => {
    try {
      const res = await fetch('/api/admin/testimonials');
      const data = await res.json();
      if (data.success) {
        setTestimonials(data.data || []);
      }
    } catch (err) {
      console.error('Error fetching testimonials:', err);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const updated = [
      {
        ...newTest,
        id: `test-${Date.now()}`,
      },
      ...testimonials,
    ];

    try {
      const res = await fetch('/api/admin/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated),
      });
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        setTestimonials(updated);
        setNewTest({
          name: '',
          role: '',
          company: '',
          content: '',
          rating: 5,
          workspaceType: 'Private Office',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
          featured: false,
          published: true,
        });
      }
    } catch (err) {
      console.error('Failed to add testimonial:', err);
    }
  };

  const handleDelete = async (id: string) => {
    const updated = testimonials.filter((t) => t.id !== id);
    try {
      await fetch('/api/admin/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated),
      });
      setTestimonials(updated);
    } catch (err) {
      console.error('Failed to delete testimonial:', err);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="bg-white border border-gray-200 shadow-xs p-6 rounded-2xl border border-gray-200">
        <h1 className="text-2xl font-black text-gray-900 font-sans">Testimonials CMS</h1>
        <p className="text-xs text-gray-400 mt-1">Manage member reviews and client endorsements.</p>
      </div>

      {success && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800 rounded-xl flex items-center gap-2.5 text-xs text-emerald-400 font-bold animate-fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>Testimonial saved successfully!</span>
        </div>
      )}

      {/* Add Form */}
      <form onSubmit={handleAdd} className="bg-white border border-gray-200 shadow-xs p-6 sm:p-8 rounded-2xl border border-gray-200 space-y-4">
        <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2">
          Add New Testimonial
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Name</label>
            <input
              type="text"
              required
              value={newTest.name}
              onChange={(e) => setNewTest({ ...newTest, name: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Role / Designation</label>
            <input
              type="text"
              required
              value={newTest.role}
              onChange={(e) => setNewTest({ ...newTest, role: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Company</label>
            <input
              type="text"
              required
              value={newTest.company}
              onChange={(e) => setNewTest({ ...newTest, company: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Testimonial Content</label>
          <textarea
            rows={2}
            required
            value={newTest.content}
            onChange={(e) => setNewTest({ ...newTest, content: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="py-2.5 px-5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white text-xs font-bold flex items-center gap-1.5 shadow-md"
        >
          <Plus className="w-4 h-4" />
          <span>Add Testimonial</span>
        </button>
      </form>

      {/* List */}
      <div className="space-y-3">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white border border-gray-200 shadow-xs p-4 rounded-xl border border-gray-200 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900 text-sm">{t.name}</span>
                <span className="text-xs text-gray-400">({t.role}, {t.company})</span>
              </div>
              <p className="text-xs text-gray-400 line-clamp-1 italic">"{t.content}"</p>
            </div>
            <button
              onClick={() => handleDelete(t.id)}
              className="p-2 rounded-lg text-gray-500 hover:text-red-400"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
