'use client';

import { useState, useEffect } from 'react';
import { HelpCircle, Plus, Trash2, Save, CheckCircle2 } from 'lucide-react';
import { FAQData } from '@/types';

export default function AdminFaqsCmsPage() {
  const [faqs, setFaqs] = useState<FAQData[]>([]);
  const [success, setSuccess] = useState(false);
  const [newFaq, setNewFaq] = useState({
    category: 'General',
    question: '',
    answer: '',
    order: 0,
    published: true,
  });

  const categories = ['General', 'Workspaces', 'Virtual Office', 'Franchise', 'Work + Stay'];

  const fetchFaqs = async () => {
    try {
      const res = await fetch('/api/admin/faqs');
      const data = await res.json();
      if (data.success) {
        setFaqs(data.data || []);
      }
    } catch (err) {
      console.error('Error fetching faqs:', err);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const handleAddFaq = async (e: React.FormEvent) => {
    e.preventDefault();
    const updated = [
      ...faqs,
      {
        ...newFaq,
        id: `faq-${Date.now()}`,
        order: faqs.length + 1,
      },
    ];

    try {
      const res = await fetch('/api/admin/faqs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated),
      });
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        setFaqs(updated);
        setNewFaq({
          category: 'General',
          question: '',
          answer: '',
          order: 0,
          published: true,
        });
      }
    } catch (err) {
      console.error('Failed to save faqs:', err);
    }
  };

  const handleDelete = async (id: string) => {
    const updated = faqs.filter((f) => f.id !== id);
    try {
      await fetch('/api/admin/faqs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated),
      });
      setFaqs(updated);
    } catch (err) {
      console.error('Failed to delete FAQ:', err);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="bg-[#14171F] p-6 rounded-2xl border border-[#222634]">
        <h1 className="text-2xl font-black text-white font-sans">Frequently Asked Questions CMS</h1>
        <p className="text-xs text-gray-400 mt-1">Manage public Q&A across all service categories.</p>
      </div>

      {success && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800 rounded-xl flex items-center gap-2.5 text-xs text-emerald-400 font-bold animate-fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>FAQ added successfully!</span>
        </div>
      )}

      {/* Add Form */}
      <form onSubmit={handleAddFaq} className="bg-[#14171F] p-6 sm:p-8 rounded-2xl border border-[#222634] space-y-4">
        <h2 className="text-base font-bold text-white border-b border-[#222634] pb-2">
          Add New Question
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Category</label>
            <select
              value={newFaq.category}
              onChange={(e) => setNewFaq({ ...newFaq, category: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Question *</label>
            <input
              type="text"
              required
              placeholder="e.g. What are the operating hours at Sector 45?"
              value={newFaq.question}
              onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Answer *</label>
          <textarea
            rows={3}
            required
            placeholder="Write clear, comprehensive explanation..."
            value={newFaq.answer}
            onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="py-2.5 px-5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white text-xs font-bold flex items-center gap-1.5 shadow-md"
        >
          <Plus className="w-4 h-4" />
          <span>Save FAQ</span>
        </button>
      </form>

      {/* List */}
      <div className="space-y-3">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-[#14171F] p-4 rounded-xl border border-[#222634] flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase text-[#C91D24]">{faq.category}</span>
              <h3 className="font-bold text-white text-sm">{faq.question}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{faq.answer}</p>
            </div>
            <button
              onClick={() => handleDelete(faq.id)}
              className="p-2 rounded-lg text-gray-500 hover:text-red-400 shrink-0"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
