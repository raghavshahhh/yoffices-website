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
      <div className="bg-[#14171F] p-6 rounded-2xl border border-[#222634]">
        <h1 className="text-2xl font-black text-white font-sans">Franchise & Partner Inquiries</h1>
        <p className="text-xs text-gray-400 mt-1">
          High-value commercial franchise applications and capital allocation candidates.
        </p>
      </div>

      <div className="bg-[#14171F] rounded-2xl border border-[#222634] overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-300">
            <thead className="bg-[#1B202B] text-gray-400 uppercase tracking-wider text-[10px] border-b border-[#2A3040]">
              <tr>
                <th className="p-4">Applicant</th>
                <th className="p-4">Model & Budget</th>
                <th className="p-4">Property</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#222634]">
              {apps.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-500">
                    No franchise applications submitted yet.
                  </td>
                </tr>
              ) : (
                apps.map((app) => (
                  <tr key={app.id} className="hover:bg-[#1B202B]/60 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-white text-sm">{app.name}</div>
                      <div className="text-gray-400 text-xs">{app.phone} • {app.email}</div>
                      <div className="text-[#C5A880] text-[11px] font-semibold">{app.city}</div>
                    </td>
                    <td className="p-4">
                      <div className="font-bold text-gray-200">{app.preferredModel}</div>
                      <div className="text-xs text-[#C91D24] font-semibold">{app.investmentRange}</div>
                    </td>
                    <td className="p-4">
                      {app.hasProperty ? (
                        <div className="text-emerald-400 font-semibold text-xs">
                          Yes ({app.propertySize || 'Available'})
                          {app.propertyLocation && <div className="text-gray-400 text-[10px]">{app.propertyLocation}</div>}
                        </div>
                      ) : (
                        <span className="text-gray-500 text-xs">No (Asset Model)</span>
                      )}
                    </td>
                    <td className="p-4">
                      <select
                        value={app.status}
                        onChange={(e) => handleStatusUpdate(app.id, e.target.value)}
                        className="px-2 py-1 rounded bg-[#1B202B] border border-[#2A3040] text-[10px] font-bold uppercase text-white outline-none cursor-pointer"
                      >
                        <option value="NEW">NEW</option>
                        <option value="CONTACTED">CONTACTED</option>
                        <option value="QUALIFIED">QUALIFIED</option>
                        <option value="CONVERTED">CONVERTED</option>
                        <option value="CLOSED">CLOSED</option>
                      </select>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <a
                          href={getWhatsAppUrl(app.phone, `Hi ${app.name}, thank you for your Yoffices franchise application for ${app.preferredModel}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                          title="WhatsApp"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href={`tel:${app.phone}`}
                          className="p-2 rounded-lg bg-[#C91D24] text-white hover:bg-[#A3151B] transition-colors"
                          title="Call"
                        >
                          <Phone className="w-3.5 h-3.5" />
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
