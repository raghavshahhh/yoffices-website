'use client';

import { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, AlertCircle, Loader2, Sparkles, Building } from 'lucide-react';

interface SiteVisitFormProps {
  defaultLocation?: string;
  defaultWorkspace?: string;
}

export function SiteVisitForm({
  defaultLocation = 'Sector 45, Gurugram (Operational Hub)',
  defaultWorkspace = 'Private Office Suite',
}: SiteVisitFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    teamSize: '5-10 Members',
    workspaceType: defaultWorkspace,
    location: defaultLocation,
    preferredDate: '',
    preferredTime: '11:00 AM',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const workspaceOptions = [
    'Private Office Suite',
    'Dedicated Workstations',
    'Flexi Coworking Desks',
    'Meeting & Boardrooms',
    'Work + Stay Dormitory Suite',
    'Virtual Office & Mail Desk',
  ];

  const locationOptions = [
    'Sector 45, Gurugram (Operational Hub)',
    'Sector 32, Gurugram (Corporate & Virtual Office)',
    'Golf Course Road, Gurugram (Upcoming Q3)',
  ];

  const timeSlots = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
    '06:30 PM',
  ];

  const teamSizes = [
    '1 Person',
    '2-5 Members',
    '6-12 Members',
    '13-25 Members',
    '26-50 Members',
    '50+ Enterprise Team',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const res = await fetch('/api/site-visits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to schedule tour');
      }

      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Unable to schedule visit. Please try again or reach out on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-2xl border border-emerald-200 shadow-2xl text-center space-y-4 animate-fade-in">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-black text-gray-900 font-sans">Site Visit Scheduled!</h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
          We have reserved your guided tour at <strong className="text-gray-900">{formData.location}</strong> on{' '}
          <strong className="text-gray-900">{formData.preferredDate}</strong> at{' '}
          <strong className="text-gray-900">{formData.preferredTime}</strong>.
        </p>
        <p className="text-xs text-gray-500">
          Our Center Experience Manager will call you 1 hour prior to confirm entry gate and parking details.
        </p>
        <div className="pt-3">
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="text-xs font-bold text-[#C91D24] hover:underline"
          >
            Book another visit →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl p-6 sm:p-8">
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#C91D24] mb-2">
          <Sparkles className="w-3.5 h-3.5" /> Guided VIP Center Tour
        </div>
        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 font-sans">
          Schedule Your Physical Site Visit
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Inspect ergonomic private cabins, test high-speed fiber internet, and experience our hospitality.
        </p>
      </div>

      {status === 'error' && (
        <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2.5 text-xs text-[#C91D24] font-medium">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Your Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Vikram Malhotra"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Mobile Phone *
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
              Company Name
            </label>
            <input
              type="text"
              placeholder="e.g. Apex Dynamics"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none transition-all"
            />
          </div>
        </div>

        {/* Center & Workspace Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#C91D24]" /> Preferred Center *
            </label>
            <select
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none bg-white transition-all"
            >
              {locationOptions.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1 flex items-center gap-1">
              <Building className="w-3.5 h-3.5 text-[#C91D24]" /> Interested Space
            </label>
            <select
              value={formData.workspaceType}
              onChange={(e) => setFormData({ ...formData, workspaceType: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none bg-white transition-all"
            >
              {workspaceOptions.map((ws) => (
                <option key={ws} value={ws}>
                  {ws}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Team Headcount
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

        {/* Date and Time Slot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#C91D24]" /> Visit Date *
            </label>
            <input
              type="date"
              required
              min={new Date().toISOString().split('T')[0]}
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#C91D24]" /> Preferred Time Slot *
            </label>
            <select
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none bg-white transition-all"
            >
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
            Special Requests (e.g. Test Wi-Fi speed, Coffee tasting, Parking)
          </label>
          <textarea
            rows={2}
            placeholder="Let us know if you need to test video conferencing or bring multiple team leaders..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-sm text-gray-900 outline-none transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-6 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-black text-sm tracking-wider uppercase shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Confirming Reservation...</span>
            </>
          ) : (
            <>
              <span>Confirm Site Visit Reservation</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-gray-400 text-center">
          ☕ Enjoy complimentary artisan coffee & tea during your guided tour. Free visitor parking available.
        </p>
      </form>
    </div>
  );
}
