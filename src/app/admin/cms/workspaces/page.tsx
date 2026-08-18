'use client';

import { useState, useEffect } from 'react';
import { Building2, Save, CheckCircle2, Edit3, Plus } from 'lucide-react';
import { WorkspaceTypeData } from '@/types';

export default function AdminWorkspacesCmsPage() {
  const [workspaces, setWorkspaces] = useState<WorkspaceTypeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedWs, setSelectedWs] = useState<WorkspaceTypeData | null>(null);
  const [success, setSuccess] = useState(false);

  const fetchWorkspaces = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/workspaces');
      const data = await res.json();
      if (data.success) {
        setWorkspaces(data.data || []);
        if (data.data.length > 0 && !selectedWs) {
          setSelectedWs(data.data[0]);
        }
      }
    } catch (err) {
      console.error('Error fetching workspaces:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkspaces();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedWs) return;

    try {
      const res = await fetch('/api/admin/workspaces', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selectedWs),
      });
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        fetchWorkspaces();
      }
    } catch (err) {
      console.error('Failed to save workspace:', err);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="bg-white border border-gray-200 shadow-xs p-6 rounded-2xl border border-gray-200">
        <h1 className="text-2xl font-black text-gray-900 font-sans">Workspace Types & Pricing CMS</h1>
        <p className="text-xs text-gray-400 mt-1">
          Manage starting rates, seat units, descriptions, and feature checklists.
        </p>
      </div>

      {success && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800 rounded-xl flex items-center gap-2.5 text-xs text-emerald-400 font-bold animate-fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>Workspace updated successfully!</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Workspace List on Left */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase text-gray-400 block px-1">Select Workspace</span>
          {workspaces.map((ws) => (
            <button
              key={ws.id}
              onClick={() => setSelectedWs(ws)}
              className={`w-full p-4 rounded-xl text-left border transition-all ${
                selectedWs?.id === ws.id
                  ? 'bg-gray-50 border border-gray-200 border-[#C91D24] text-white shadow-md'
                  : 'bg-white border border-gray-200 shadow-xs border-gray-200 text-gray-400 hover:text-white hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <div className="font-bold text-sm text-gray-900">{ws.name}</div>
              <div className="text-xs text-[#C5A880] mt-1 font-semibold">
                Starting: {ws.startingPrice} /{ws.priceUnit}
              </div>
            </button>
          ))}
        </div>

        {/* Editor Form on Right */}
        {selectedWs && (
          <div className="lg:col-span-2 bg-white border border-gray-200 shadow-xs p-6 sm:p-8 rounded-2xl border border-gray-200">
            <form onSubmit={handleSave} className="space-y-5">
              <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">
                Edit: {selectedWs.name}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                    Starting Price (e.g. ₹8,500)
                  </label>
                  <input
                    type="text"
                    required
                    value={selectedWs.startingPrice}
                    onChange={(e) => setSelectedWs({ ...selectedWs, startingPrice: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-sm text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                    Price Unit (e.g. seat / month, hour)
                  </label>
                  <input
                    type="text"
                    required
                    value={selectedWs.priceUnit}
                    onChange={(e) => setSelectedWs({ ...selectedWs, priceUnit: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-sm text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white text-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                  Short Description
                </label>
                <textarea
                  rows={2}
                  value={selectedWs.shortDesc}
                  onChange={(e) => setSelectedWs({ ...selectedWs, shortDesc: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white text-gray-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                  Full Description
                </label>
                <textarea
                  rows={4}
                  value={selectedWs.fullDesc}
                  onChange={(e) => setSelectedWs({ ...selectedWs, fullDesc: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white text-gray-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                  Hero Image URL
                </label>
                <input
                  type="url"
                  value={selectedWs.heroImage}
                  onChange={(e) => setSelectedWs({ ...selectedWs, heroImage: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white text-gray-900"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="py-3 px-6 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white text-xs font-bold shadow-md flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Workspace Changes</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
