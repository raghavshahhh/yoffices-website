'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Building2,
  Coins,
} from 'lucide-react';

interface FranchiseApplyFormProps {
  defaultModel?: string;
}

export function FranchiseApplyForm({ defaultModel }: FranchiseApplyFormProps) {
  const searchParams = useSearchParams();
  const modelFromUrl = searchParams.get('model') || defaultModel || 'Desk / Workstation Model';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    investmentRange: '₹5,00,000 - ₹10,00,000 (Desk Tier)',
    preferredModel: modelFromUrl,
    hasProperty: false,
    propertySize: '',
    propertyLocation: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const investmentTiers = [
    '₹5,00,000 - ₹10,00,000 (Desk Tier)',
    '₹11,00,000 - ₹24,00,000 (Dormitory Tier)',
    '₹25,00,000 - ₹50,00,000 (Cabin Suite Tier)',
    '₹50,00,000+ (Multi-Unit Portfolio Partner)',
  ];

  const models = [
    'Desk / Workstation Model (₹5,00,000 Principal)',
    'Dormitory / Co-Living Model (₹11,00,000 Principal)',
    'Cabin Model (8 Seater / 3+1) (₹25,00,000 Principal)',
    'Custom Mixed Portfolio (Desk + Dormitory + Cabin)',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const res = await fetch('/api/franchise-apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit franchise application');
      }

      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Error submitting application. Please reach out directly on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 sm:p-10 rounded-2xl border border-emerald-200 shadow-2xl text-center space-y-4 animate-fade-in">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-gray-900 font-sans">
          Franchise Application Received!
        </h3>
        <p className="text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
          Thank you for your interest in partnering with Yoffices. Your application has been routed directly to the{' '}
          <strong className="text-gray-900">Corporate Expansion Desk</strong>. A senior franchise director will connect with you within 24 business hours.
        </p>
        <div className="p-4 bg-gray-50 rounded-xl max-w-md mx-auto text-xs text-gray-500 text-left border border-gray-100">
          <p className="font-semibold text-gray-800 mb-1">What happens next?</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>Confidential initial consultation call</li>
            <li>Sharing of formal draft agreement & security cheque workflow</li>
            <li>In-person site inspection at Sector 45 or Sector 32 Gurgaon</li>
          </ul>
        </div>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="text-xs font-bold text-[#C91D24] hover:underline"
          >
            Submit another application →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl p-6 sm:p-10">
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#C91D24] mb-2">
          <Coins className="w-3.5 h-3.5" /> Confidential Partner Application
        </div>
        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 font-sans">
          Apply for Yoffices Business Franchise
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Join our asset-backed commercial real estate franchise network starting from ₹5,00,000 principal.
        </p>
      </div>

      {status === 'error' && (
        <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2.5 text-xs text-[#C91D24] font-medium">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row 1: Personal Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
              Investor / Partner Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rajesh Singhania"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
              Direct Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="+91 98100 XXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none transition-all"
            />
          </div>
        </div>

        {/* Row 2: Email and City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="name@domain.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
              Current City & State *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Gurugram, Delhi NCR, Mumbai"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none transition-all"
            />
          </div>
        </div>

        {/* Row 3: Investment Tiers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
              Investment Capital Budget *
            </label>
            <select
              value={formData.investmentRange}
              onChange={(e) => setFormData({ ...formData, investmentRange: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none bg-white transition-all"
            >
              {investmentTiers.map((tier) => (
                <option key={tier} value={tier}>
                  {tier}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
              Preferred Commercial Model *
            </label>
            <select
              value={formData.preferredModel}
              onChange={(e) => setFormData({ ...formData, preferredModel: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none bg-white transition-all"
            >
              {models.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Property Ownership Section */}
        <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
              Do you own or lease a commercial property for expansion?
            </span>
            <div className="flex items-center gap-3">
              <label className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-800 cursor-pointer">
                <input
                  type="radio"
                  name="hasProperty"
                  checked={formData.hasProperty === true}
                  onChange={() => setFormData({ ...formData, hasProperty: true })}
                  className="accent-[#C91D24]"
                />
                Yes
              </label>
              <label className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-800 cursor-pointer">
                <input
                  type="radio"
                  name="hasProperty"
                  checked={formData.hasProperty === false}
                  onChange={() => setFormData({ ...formData, hasProperty: false })}
                  className="accent-[#C91D24]"
                />
                No (Pure Asset Model)
              </label>
            </div>
          </div>

          {formData.hasProperty && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-gray-200 animate-fade-in">
              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">
                  Property Carpet Area (sq. ft.)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2,500 sq.ft"
                  value={formData.propertySize}
                  onChange={(e) => setFormData({ ...formData, propertySize: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs bg-white text-gray-900 outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">
                  Property Location / Landmark
                </label>
                <input
                  type="text"
                  placeholder="e.g. Golf Course Ext Rd, Gurgaon"
                  value={formData.propertyLocation}
                  onChange={(e) => setFormData({ ...formData, propertyLocation: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs bg-white text-gray-900 outline-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
            Questions or Specific Requirements (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="Specify your preferred timeframe, inquiries about security cheques or multi-unit allocation..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-6 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-black text-sm tracking-wider uppercase shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Processing Application...</span>
            </>
          ) : (
            <>
              <TrendingUp className="w-4 h-4" />
              <span>Submit Franchise Application</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-gray-400 text-center leading-relaxed">
          Statutory Note: Information submitted is treated with strict corporate non-disclosure confidentiality. Terms are governed by the executed franchise agreement.
        </p>
      </form>
    </div>
  );
}
