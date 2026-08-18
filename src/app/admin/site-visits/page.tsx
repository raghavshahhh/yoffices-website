'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Phone, Mail, CheckCircle2, MessageCircle } from 'lucide-react';
import { SiteVisit } from '@/types';
import { getWhatsAppUrl } from '@/lib/utils';

export default function AdminSiteVisitsPage() {
  const [visits, setVisits] = useState<SiteVisit[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchVisits = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/site-visits');
      const data = await res.json();
      if (data.success) {
        setVisits(data.data || []);
      }
    } catch (err) {
      console.error('Error fetching site visits:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVisits();
  }, []);

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, type: 'visit', status: newStatus }),
      });
      setVisits((prev) =>
        prev.map((v) => (v.id === id ? { ...v, status: newStatus as any } : v))
      );
    } catch (err) {
      console.error('Failed to update visit status:', err);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
        <h1 className="text-2xl font-black text-gray-900 font-sans">Site Visit Bookings</h1>
        <p className="text-xs text-gray-500 mt-1">
          Manage scheduled VIP center tours and walk-through outcomes.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead className="bg-gray-50 text-gray-500 uppercase tracking-wider text-[10px] border-b border-gray-200">
              <tr>
                <th className="p-4 font-bold">Visitor</th>
                <th className="p-4 font-bold">Center & Space</th>
                <th className="p-4 font-bold">Preferred Slot</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold text-right">Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {visits.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-400">
                    No site visits scheduled yet.
                  </td>
                </tr>
              ) : (
                visits.map((v) => (
                  <tr key={v.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-gray-900 text-sm">{v.name}</div>
                      <div className="text-gray-500 text-xs">{v.phone} • {v.email}</div>
                      {v.company && <div className="text-gray-400 text-[11px]">{v.company}</div>}
                    </td>
                    <td className="p-4">
                      <div className="font-semibold text-gray-900">{v.location}</div>
                      <div className="text-gray-500 text-[11px]">{v.workspaceType || 'General Tour'} • {v.teamSize || '1 Seat'}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-[#C91D24] font-bold text-xs">{v.preferredDate}</div>
                      <div className="text-gray-500 text-[11px]">{v.preferredTime}</div>
                    </td>
                    <td className="p-4">
                      <select
                        value={v.status}
                        onChange={(e) => handleStatusUpdate(v.id, e.target.value)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase border outline-none cursor-pointer ${
                          v.status === 'SCHEDULED'
                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                            : v.status === 'COMPLETED'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}
                      >
                        <option value="SCHEDULED">SCHEDULED</option>
                        <option value="COMPLETED">COMPLETED</option>
                        <option value="RESCHEDULED">RESCHEDULED</option>
                        <option value="CANCELLED">CANCELLED</option>
                        <option value="NO_SHOW">NO_SHOW</option>
                      </select>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <a
                          href={`tel:${v.phone}`}
                          className="p-1.5 rounded-lg bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                          title="Call"
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href={getWhatsAppUrl(v.phone, `Hi ${v.name}, confirming your Yoffices VIP visit on ${v.preferredDate}`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                          title="WhatsApp"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
