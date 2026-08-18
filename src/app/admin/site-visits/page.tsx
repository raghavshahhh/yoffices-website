'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Phone, Mail, CheckCircle2, Trash2 } from 'lucide-react';
import { SiteVisit } from '@/types';

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
      <div className="bg-[#14171F] p-6 rounded-2xl border border-[#222634]">
        <h1 className="text-2xl font-black text-white font-sans">Site Visit Bookings</h1>
        <p className="text-xs text-gray-400 mt-1">
          Manage scheduled VIP center tours and walk-through outcomes.
        </p>
      </div>

      <div className="bg-[#14171F] rounded-2xl border border-[#222634] overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-300">
            <thead className="bg-[#1B202B] text-gray-400 uppercase tracking-wider text-[10px] border-b border-[#2A3040]">
              <tr>
                <th className="p-4">Visitor</th>
                <th className="p-4">Center & Space</th>
                <th className="p-4">Preferred Slot</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#222634]">
              {visits.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-500">
                    No site visits scheduled yet.
                  </td>
                </tr>
              ) : (
                visits.map((v) => (
                  <tr key={v.id} className="hover:bg-[#1B202B]/60 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-white text-sm">{v.name}</div>
                      <div className="text-gray-400 text-xs">{v.phone} • {v.email}</div>
                      {v.company && <div className="text-gray-500 text-[11px]">{v.company}</div>}
                    </td>
                    <td className="p-4">
                      <div className="font-semibold text-gray-200">{v.location}</div>
                      <div className="text-gray-400 text-[11px]">{v.workspaceType || 'General Tour'} • {v.teamSize || '1 Seat'}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-[#C5A880] font-bold text-xs">{v.preferredDate}</div>
                      <div className="text-gray-400 text-[11px]">{v.preferredTime}</div>
                    </td>
                    <td className="p-4">
                      <select
                        value={v.status}
                        onChange={(e) => handleStatusUpdate(v.id, e.target.value)}
                        className="px-2 py-1 rounded bg-[#1B202B] border border-[#2A3040] text-[10px] font-bold uppercase text-white outline-none cursor-pointer"
                      >
                        <option value="SCHEDULED">SCHEDULED</option>
                        <option value="COMPLETED">COMPLETED</option>
                        <option value="RESCHEDULED">RESCHEDULED</option>
                        <option value="CANCELLED">CANCELLED</option>
                        <option value="NO_SHOW">NO_SHOW</option>
                      </select>
                    </td>
                    <td className="p-4 text-right">
                      <a
                        href={`tel:${v.phone}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#C91D24] text-white text-xs font-bold"
                      >
                        <Phone className="w-3.5 h-3.5" /> Call
                      </a>
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
