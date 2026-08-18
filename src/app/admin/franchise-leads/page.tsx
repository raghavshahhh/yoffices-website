'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, Coins, Phone, Mail, CheckCircle2, Building, MessageCircle } from 'lucide-react';
import { FranchiseApplication } from '@/types';
import { getWhatsAppUrl } from '@/lib/utils';

export default function AdminFranchiseLeadsPage() {
  const [apps, setApps] = useState<FranchiseApplication[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchApps = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/franchise-apply');
      const data = await res.json();
      if (data.success) {
        setApps(data.data || []);
      }
    } catch (err) {
      console.error('Error fetching franchise applications:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApps();
  }, []);

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, type: 'franchise', status: newStatus }),
      });
      setApps((prev) =>
        prev.map((a) => (a.id === id ? { ...a, status: newStatus as any } : a))
      );
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
        <h1 className="text-2xl font-black text-gray-900 font-sans">Franchise & Partner Inquiries</h1>
        <p className="text-xs text-gray-500 mt-1">
          High-value commercial franchise applications and capital allocation candidates.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead className="bg-gray-50 text-gray-500 uppercase tracking-wider text-[10px] border-b border-gray-200">
              <tr>
                <th className="p-4 font-bold">Applicant</th>
                <th className="p-4 font-bold">Model & Budget</th>
                <th className="p-4 font-bold">Property</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {apps.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-400">
                    No franchise applications submitted yet.
                  </td>
                </tr>
              ) : (
                apps.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-gray-900 text-sm">{app.name}</div>
                      <div className="text-gray-500 text-xs">{app.phone} • {app.email}</div>
                      <div className="text-[#C91D24] text-[11px] font-semibold">{app.city}</div>
                    </td>
                    <td className="p-4">
                      <div className="font-bold text-gray-900">{app.preferredModel}</div>
                      <div className="text-xs text-[#C91D24] font-semibold">{app.investmentRange}</div>
                    </td>
                    <td className="p-4">
                      {app.hasProperty ? (
                        <div className="text-emerald-700 font-semibold text-xs">
                          Yes ({app.propertySize || 'Available'})
                          {app.propertyLocation && <div className="text-gray-500 text-[10px]">{app.propertyLocation}</div>}
                        </div>
                      ) : (
                        <span className="text-gray-400 text-xs">No (Asset Model)</span>
                      )}
                    </td>
                    <td className="p-4">
                      <select
                        value={app.status}
                        onChange={(e) => handleStatusUpdate(app.id, e.target.value)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase border outline-none cursor-pointer ${
                          app.status === 'NEW'
                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                            : app.status === 'CONVERTED' || app.status === 'AGREEMENT_SHARED'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}
                      >
                        <option value="NEW">NEW</option>
                        <option value="CONTACTED">CONTACTED</option>
                        <option value="QUALIFIED">QUALIFIED</option>
                        <option value="NDA_SENT">NDA_SENT</option>
                        <option value="MEETING_SCHEDULED">MEETING_SCHEDULED</option>
                        <option value="AGREEMENT_SHARED">AGREEMENT_SHARED</option>
                        <option value="CONVERTED">CONVERTED</option>
                        <option value="CLOSED">CLOSED</option>
                      </select>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <a
                          href={`tel:${app.phone}`}
                          className="p-1.5 rounded-lg bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                          title="Call"
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href={getWhatsAppUrl(app.phone, `Hi ${app.name}, regarding your Yoffices Commercial Franchise inquiry for ${app.preferredModel}`)}
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
