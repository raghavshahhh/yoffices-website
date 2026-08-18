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
    return <div className="p-8 text-center text-gray-500">Loading settings...</div>;
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-[#14171F] p-6 rounded-2xl border border-[#222634]">
        <h1 className="text-2xl font-black text-white font-sans">Global Platform & Contact Settings</h1>
        <p className="text-xs text-gray-400 mt-1">
          Configure phone numbers, WhatsApp routing, operational vs corporate addresses, and statutory disclaimers.
        </p>
      </div>

      {success && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800 rounded-xl flex items-center gap-2.5 text-xs text-emerald-400 font-bold animate-fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>Settings saved and updated across entire website!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="bg-[#14171F] p-6 sm:p-8 rounded-2xl border border-[#222634] space-y-6">
        {/* Contact Numbers & Channels */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-white border-b border-[#222634] pb-2 flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#C91D24]" />
            <span>Direct Communication Numbers</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Company Phone</label>
              <input
                type="text"
                required
                value={settings.phone}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Corporate Email</label>
              <input
                type="email"
                required
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                WhatsApp Phone Number (with Country Code)
              </label>
              <input
                type="text"
                required
                value={settings.whatsappNumber}
                onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
                Office / Reception Hours
              </label>
              <input
                type="text"
                required
                value={settings.officeHours}
                onChange={(e) => setSettings({ ...settings, officeHours: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none"
              />
            </div>
          </div>
        </div>

        {/* Addresses */}
        <div className="space-y-4 pt-4 border-t border-[#222634]">
          <h2 className="text-base font-bold text-white border-b border-[#222634] pb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#C91D24]" />
            <span>Corporate & Operational Addresses</span>
          </h2>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
              Workspace Center Address (Sector 45 Hub)
            </label>
            <input
              type="text"
              required
              value={settings.operationalAddress}
              onChange={(e) => setSettings({ ...settings, operationalAddress: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">
              Corporate Office Address (Sector 32 Institutional Area)
            </label>
            <input
              type="text"
              required
              value={settings.corporateAddress}
              onChange={(e) => setSettings({ ...settings, corporateAddress: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none"
            />
          </div>
        </div>

        {/* Top Announcement Banner */}
        <div className="space-y-4 pt-4 border-t border-[#222634]">
          <div className="flex items-center justify-between border-b border-[#222634] pb-2">
            <h2 className="text-base font-bold text-white">Top Announcement Banner</h2>
            <label className="flex items-center gap-2 text-xs text-gray-300 font-bold cursor-pointer">
              <input
                type="checkbox"
                checked={settings.bannerEnabled}
                onChange={(e) => setSettings({ ...settings, bannerEnabled: e.target.checked })}
                className="accent-[#C91D24]"
              />
              <span>Banner Active</span>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Banner Text</label>
              <input
                type="text"
                value={settings.bannerText}
                onChange={(e) => setSettings({ ...settings, bannerText: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Link URL</label>
              <input
                type="text"
                value={settings.bannerLink}
                onChange={(e) => setSettings({ ...settings, bannerLink: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none"
              />
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="space-y-4 pt-4 border-t border-[#222634]">
          <h2 className="text-base font-bold text-white border-b border-[#222634] pb-2 flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#C91D24]" />
            <span>Statutory Legal & Franchise Disclaimer</span>
          </h2>
          <div>
            <textarea
              rows={3}
              value={settings.disclaimerText}
              onChange={(e) => setSettings({ ...settings, disclaimerText: e.target.value })}
              className="w-full p-3 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none leading-relaxed"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-[#222634]">
          <button
            type="submit"
            disabled={saving}
            className="py-3 px-6 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white text-xs font-bold shadow-md flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'Saving Changes...' : 'Save Global Settings'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
