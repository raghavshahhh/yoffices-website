'use client';

import { useState, useEffect } from 'react';
import { Layers, Save, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function AdminHomepageCmsPage() {
  const [heroData, setHeroData] = useState({
    headline: 'Work Better. Grow Faster.',
    subheadline:
      'Premium flexible workspaces, turnkey private offices, and asset-backed business solutions engineered for modern enterprises in Gurgaon.',
    primaryCtaText: 'Explore Workspaces',
    primaryCtaLink: '/workspaces',
    secondaryCtaText: 'Book a Site Visit',
    secondaryCtaLink: '/book-a-visit',
    franchiseCtaText: 'Explore Franchise Opportunity →',
    franchiseCtaLink: '/franchise',
  });

  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch('/api/admin/homepage')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.hero) {
          setHeroData(data.data.hero);
        }
      })
      .catch(console.error);
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccess(false);

    try {
      const res = await fetch('/api/admin/homepage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sectionKey: 'hero', content: heroData }),
      });
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      console.error('Failed to save homepage hero:', err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-white border border-gray-200 shadow-xs p-6 rounded-2xl border border-gray-200 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-gray-900 font-sans">Homepage Hero & Sections Editor</h1>
          <p className="text-xs text-gray-400 mt-1">
            Customize headlines, subtext, and primary conversion call-to-actions.
          </p>
        </div>
      </div>

      {success && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800 rounded-xl flex items-center gap-2.5 text-xs text-emerald-400 font-bold animate-fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>Homepage content updated successfully! Live website will reflect changes.</span>
        </div>
      )}

      <form onSubmit={handleSave} className="bg-white border border-gray-200 shadow-xs p-6 sm:p-8 rounded-2xl border border-gray-200 space-y-6">
        <div className="space-y-4">
          <h2 className="text-base font-bold text-gray-900 font-sans border-b border-gray-200 pb-2">
            Main Hero Banner
          </h2>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1.5">
              Primary Headline
            </label>
            <input
              type="text"
              required
              value={heroData.headline}
              onChange={(e) => setHeroData({ ...heroData, headline: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-sm text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white text-gray-900"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1.5">
              Supporting Subheadline
            </label>
            <textarea
              rows={3}
              required
              value={heroData.subheadline}
              onChange={(e) => setHeroData({ ...heroData, subheadline: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-sm text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white text-gray-900 resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1.5">
                Primary Button Label
              </label>
              <input
                type="text"
                value={heroData.primaryCtaText}
                onChange={(e) => setHeroData({ ...heroData, primaryCtaText: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1.5">
                Primary Button Route
              </label>
              <input
                type="text"
                value={heroData.primaryCtaLink}
                onChange={(e) => setHeroData({ ...heroData, primaryCtaLink: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1.5">
                Secondary Button Label
              </label>
              <input
                type="text"
                value={heroData.secondaryCtaText}
                onChange={(e) => setHeroData({ ...heroData, secondaryCtaText: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1.5">
                Secondary Button Route
              </label>
              <input
                type="text"
                value={heroData.secondaryCtaLink}
                onChange={(e) => setHeroData({ ...heroData, secondaryCtaLink: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <button
            type="submit"
            disabled={saving}
            className="py-3 px-6 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white text-xs font-bold shadow-md flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'Publishing Updates...' : 'Save & Publish Homepage'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
