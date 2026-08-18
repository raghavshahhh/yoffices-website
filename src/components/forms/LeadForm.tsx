'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';

interface LeadFormProps {
  defaultService?: string;
  defaultLocation?: string;
  title?: string;
  subtitle?: string;
  source?: string;
  compact?: boolean;
}

export function LeadForm({
  defaultService = 'Private Office',
  defaultLocation = 'Sector 45, Gurugram',
  title = 'Enquire About Workspace Solutions',
  subtitle = 'Get tailored floor plans, member rates, and same-day availability.',
  source = 'Website Form',
  compact = false,
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService,
    location: defaultLocation,
    teamSize: '1-5 Seats',
    budget: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'Private Office',
    'Dedicated Workstations',
    'Flexi Coworking',
    'Meeting Rooms',
    'Virtual Office',
    'Shared Employee',
    'Work + Stay Hub',
    'Dormitory Co-Living',
    'Franchise Opportunity',
    'General Enquiry',
  ];

  const locations = [
    'Sector 45, Gurugram (Operational)',
    'Sector 32, Gurugram (Corporate & Virtual Office)',
    'Golf Course Road, Gurugram (Upcoming Q3)',
  ];

  const teamSizes = ['1 Seat', '2-5 Seats', '6-12 Seats', '13-30 Seats', '30+ Enterprise Suite'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit inquiry');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: defaultService,
        location: defaultLocation,
        teamSize: '1-5 Seats',
        budget: '',
        message: '',
      });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again or WhatsApp us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-2xl border border-emerald-200 shadow-xl text-center space-y-4 animate-fade-in">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-black text-gray-900 font-sans">Enquiry Successfully Received!</h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
          Thank you for choosing Yoffices. A workspace advisor is preparing customized options and will reach out to you within 2 hours.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="text-xs font-bold text-[#C91D24] hover:underline"
          >
            Submit another enquiry →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl border border-gray-200 shadow-xl ${compact ? 'p-5 sm:p-6' : 'p-6 sm:p-8'}`}>
      {title && (
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#C91D24] mb-1.5">
            <Sparkles className="w-3 h-3" /> Quick Response Guarantee
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 font-sans">{title}</h3>
          {subtitle && <p className="text-xs sm:text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
      )}

      {status === 'error' && (
        <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2.5 text-xs text-[#C91D24] font-medium">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Phone Number *
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Work Email *
            </label>
            <input
              type="email"
              required
              placeholder="name@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Company / Firm Name
            </label>
            <input
              type="text"
              placeholder="e.g. Acme Tech Pvt Ltd"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Interested Solution *
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none bg-white transition-all"
            >
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Preferred Location
            </label>
            <select
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none bg-white transition-all"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Team Size
            </label>
            <select
              value={formData.teamSize}
              onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none bg-white transition-all"
            >
              {teamSizes.map((ts) => (
                <option key={ts} value={ts}>
                  {ts}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
            Requirement Details / Questions (Optional)
          </label>
          <textarea
            rows={compact ? 2 : 3}
            placeholder="Tell us about move-in timeframe, customized branding, or specific amenities required..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-6 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting Details...</span>
            </>
          ) : (
            <>
              <span>Get Immediate Proposal & Pricing</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-[11px] text-gray-400 text-center">
          🔒 Your contact information is strictly confidential. Zero spam guarantee.
        </p>
      </form>
    </div>
  );
}
