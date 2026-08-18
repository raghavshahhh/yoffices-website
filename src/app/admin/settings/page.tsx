'use client';

import { useState, useEffect } from 'react';
import { Settings, Save, CheckCircle2, Phone, Mail, MapPin, MessageCircle, Shield } from 'lucide-react';
import { SiteSettings } from '@/types';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/settings');
      const data = await res.json();
      if (data.success) {
        setSettings(data.data);
      }
    } catch (err) {
      console.error('Error fetching settings:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!settings) return;
    setSaving(true);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      console.error('Failed to update settings:', err);
    } finally {
      setSaving(false);
    }
  };

  if (!settings) {
    return <div className="p-8 text-center text-gray-400">Loading settings...</div>;
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
        <h1 className="text-2xl font-black text-gray-900 font-sans">Global Platform & Contact Settings</h1>
        <p className="text-xs text-gray-500 mt-1">
          Configure phone numbers, WhatsApp routing, operational vs corporate addresses, and statutory disclaimers.
        </p>
      </div>

      {success && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2.5 text-xs text-emerald-800 font-bold animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Settings saved and updated across entire website!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 space-y-6 shadow-xs">
        {/* Contact Numbers & Channels */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-2 flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#C91D24]" />
            <span>Direct Communication Numbers</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Company Phone</label>
              <input
                type="text"
                required
                value={settings.phone}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Corporate Email</label>
              <input
                type="email"
                required
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1">WhatsApp Number (with country code, no +)</label>
              <input
                type="text"
                required
                value={settings.whatsappNumber}
                onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Default WhatsApp Message</label>
              <input
                type="text"
                value={settings.whatsappDefaultMsg}
                onChange={(e) => setSettings({ ...settings, whatsappDefaultMsg: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Addresses */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#C91D24]" />
            <span>Operational & Corporate Addresses</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Operational Address (Sector 45)</label>
              <textarea
                rows={2}
                required
                value={settings.operationalAddress}
                onChange={(e) => setSettings({ ...settings, operationalAddress: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Corporate Compliance Desk (Sector 32)</label>
              <textarea
                rows={2}
                required
                value={settings.corporateAddress}
                onChange={(e) => setSettings({ ...settings, corporateAddress: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Top Announcement Banner */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-2 flex items-center justify-between">
            <span>Announcement Ticker Bar</span>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.bannerEnabled}
                onChange={(e) => setSettings({ ...settings, bannerEnabled: e.target.checked })}
                className="rounded text-[#C91D24] focus:ring-[#C91D24]"
              />
              <span className="text-xs font-bold text-gray-600">Enable Ticker</span>
            </label>
          </h2>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Banner Text</label>
            <input
              type="text"
              value={settings.bannerText}
              onChange={(e) => setSettings({ ...settings, bannerText: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-3 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-sm flex items-center gap-2 transition-all hover:shadow"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'Saving Changes...' : 'Save Settings'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
