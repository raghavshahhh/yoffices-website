'use client';

import { useState, useEffect } from 'react';
import { Coins, Save, CheckCircle2, TrendingUp, Shield } from 'lucide-react';
import { FranchiseModelData } from '@/types';
import { formatINR } from '@/lib/utils';

export default function AdminFranchiseCmsPage() {
  const [models, setModels] = useState<FranchiseModelData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedModel, setSelectedModel] = useState<FranchiseModelData | null>(null);
  const [success, setSuccess] = useState(false);

  const fetchFranchise = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/franchise');
      const data = await res.json();
      if (data.success) {
        setModels(data.data.models || []);
        if (data.data.models.length > 0 && !selectedModel) {
          setSelectedModel(data.data.models[0]);
        }
      }
    } catch (err) {
      console.error('Error fetching franchise models:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFranchise();
  }, []);

  const handlePrincipalChange = (newPrincipal: number) => {
    if (!selectedModel) return;
    // Keep 1% monthly rental proportion or manual override
    const monthly = Math.round(newPrincipal * 0.01);
    const annual = monthly * 12;
    const threeYr = annual * 3;
    const total = newPrincipal + threeYr;

    setSelectedModel({
      ...selectedModel,
      principal: newPrincipal,
      monthlyRental: monthly,
      annualRental: annual,
      threeYearRental: threeYr,
      statedTotal: total,
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedModel) return;

    try {
      const res = await fetch('/api/admin/franchise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'model', data: selectedModel }),
      });
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        fetchFranchise();
      }
    } catch (err) {
      console.error('Failed to save franchise model:', err);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="bg-white border border-gray-200 shadow-xs p-6 rounded-2xl border border-gray-200">
        <h1 className="text-2xl font-black text-gray-900 font-sans">Franchise Models & Rental CMS</h1>
        <p className="text-xs text-gray-400 mt-1">
          Edit principal amounts, monthly rental disbursements, and 3-year totals. The public calculator reflects these changes in real-time.
        </p>
      </div>

      {success && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800 rounded-xl flex items-center gap-2.5 text-xs text-emerald-400 font-bold animate-fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>Franchise model updated! Public calculator and models page updated.</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left List */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase text-gray-400 block px-1">Franchise Models</span>
          {models.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedModel(m)}
              className={`w-full p-4 rounded-xl text-left border transition-all ${
                selectedModel?.id === m.id
                  ? 'bg-gray-50 border border-gray-200 border-[#C91D24] text-white shadow-md'
                  : 'bg-white border border-gray-200 shadow-xs border-gray-200 text-gray-400 hover:text-white'
              }`}
            >
              <div className="font-bold text-sm text-gray-900">{m.name}</div>
              <div className="text-xs text-[#C5A880] mt-1 font-semibold">
                Principal: {formatINR(m.principal)}
              </div>
              <div className="text-xs text-[#C91D24] font-bold">
                Rental: {formatINR(m.monthlyRental)} / mo
              </div>
            </button>
          ))}
        </div>

        {/* Right Editor */}
        {selectedModel && (
          <div className="lg:col-span-2 bg-white border border-gray-200 shadow-xs p-6 sm:p-8 rounded-2xl border border-gray-200">
            <form onSubmit={handleSave} className="space-y-4">
              <h2 className="text-base font-bold text-gray-900 border-b border-gray-200 pb-2">
                Edit: {selectedModel.name}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                    Principal Amount (₹)
                  </label>
                  <input
                    type="number"
                    required
                    value={selectedModel.principal}
                    onChange={(e) => handlePrincipalChange(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-sm text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                    Monthly Rental Disbursement (₹)
                  </label>
                  <input
                    type="number"
                    required
                    value={selectedModel.monthlyRental}
                    onChange={(e) =>
                      setSelectedModel({ ...selectedModel, monthlyRental: Number(e.target.value) })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-sm text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white text-gray-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-50 border border-gray-200 p-4 rounded-xl">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">Annual Rental</span>
                  <div className="text-sm font-bold text-gray-900 mt-1">
                    {formatINR(selectedModel.annualRental)}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">3-Yr Total Rental</span>
                  <div className="text-sm font-bold text-[#C5A880] mt-1">
                    {formatINR(selectedModel.threeYearRental)}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">Stated Realization</span>
                  <div className="text-sm font-bold text-[#C91D24] mt-1">
                    {formatINR(selectedModel.statedTotal)}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                  Model Description
                </label>
                <textarea
                  rows={3}
                  value={selectedModel.description}
                  onChange={(e) => setSelectedModel({ ...selectedModel, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 border border-gray-200 text-xs text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white text-gray-900"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="py-3 px-6 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white text-xs font-bold shadow-md flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Update Franchise Model</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
