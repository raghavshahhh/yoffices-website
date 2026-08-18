'use client';

import { useState, useEffect } from 'react';
import {
  Users,
  Search,
  Filter,
  Download,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  CheckCircle2,
  Trash2,
  Edit,
  ExternalLink,
  ChevronDown,
  LayoutGrid,
  List,
} from 'lucide-react';
import { Lead, LeadStatus } from '@/types';
import { getWhatsAppUrl } from '@/lib/utils';
import { INITIAL_SITE_SETTINGS } from '@/lib/constants';

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [serviceFilter, setServiceFilter] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'table' | 'kanban'>('table');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [noteInput, setNoteInput] = useState('');
  const [updating, setUpdating] = useState(false);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/leads');
      const data = await res.json();
      if (data.success) {
        setLeads(data.data.leads || []);
      }
    } catch (err) {
      console.error('Error fetching leads:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id: string, newStatus: LeadStatus) => {
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setLeads((prev: Lead[]) =>
          prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
        );
        if (selectedLead?.id === id) {
          setSelectedLead((prev: Lead | null) => (prev ? { ...prev, status: newStatus } : null));
        }
      }
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedLead) return;
    setUpdating(true);
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedLead.id, notes: noteInput }),
      });
      const data = await res.json();
      if (data.success) {
        setLeads((prev: Lead[]) =>
          prev.map((l) => (l.id === selectedLead.id ? { ...l, notes: noteInput } : l))
        );
        setSelectedLead((prev: Lead | null) => (prev ? { ...prev, notes: noteInput } : null));
      }
    } catch (err) {
      console.error('Failed to save notes:', err);
    } finally {
      setUpdating(false);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!confirm('Are you sure you want to permanently delete this lead?')) return;
    try {
      const res = await fetch(`/api/admin/leads?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setLeads((prev) => prev.filter((l) => l.id !== id));
        if (selectedLead?.id === id) setSelectedLead(null);
      }
    } catch (err) {
      console.error('Failed to delete lead:', err);
    }
  };

  const handleExportCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Company', 'Service', 'Location', 'Team Size', 'Status', 'Date', 'Notes'];
    const rows = leads.map((l) => [
      l.id,
      `"${l.name}"`,
      l.email,
      l.phone,
      `"${l.company || ''}"`,
      `"${l.service}"`,
      `"${l.location || ''}"`,
      `"${l.teamSize || ''}"`,
      l.status,
      l.createdAt,
      `"${(l.notes || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `yoffices-leads-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered Leads
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery) ||
      (lead.company && lead.company.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = statusFilter === 'ALL' || lead.status === statusFilter;
    const matchesService = serviceFilter === 'ALL' || lead.service.includes(serviceFilter);

    return matchesSearch && matchesStatus && matchesService;
  });

  const statuses: LeadStatus[] = [
    'NEW',
    'CONTACTED',
    'QUALIFIED',
    'FOLLOW_UP',
    'CONVERTED',
    'CLOSED',
    'NOT_INTERESTED',
  ];

  const getStatusColor = (status: LeadStatus) => {
    switch (status) {
      case 'NEW':
        return 'bg-blue-900/60 text-blue-300 border-blue-800';
      case 'CONTACTED':
        return 'bg-amber-900/60 text-amber-300 border-amber-800';
      case 'QUALIFIED':
        return 'bg-purple-900/60 text-purple-300 border-purple-800';
      case 'FOLLOW_UP':
        return 'bg-indigo-900/60 text-indigo-300 border-indigo-800';
      case 'CONVERTED':
        return 'bg-emerald-900/60 text-emerald-300 border-emerald-800';
      case 'CLOSED':
      case 'NOT_INTERESTED':
        return 'bg-gray-800 text-gray-400 border-gray-700';
      default:
        return 'bg-gray-800 text-gray-400 border-gray-700';
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#14171F] p-6 rounded-2xl border border-[#222634]">
        <div>
          <h1 className="text-2xl font-black text-white font-sans">Lead Management Pipeline</h1>
          <p className="text-xs text-gray-400 mt-1">
            Track inquiries, update contact milestones, and export records.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-[#1B202B] rounded-xl border border-[#2A3040] p-1">
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                viewMode === 'table' ? 'bg-[#C91D24] text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <List className="w-4 h-4" />
              <span>Table</span>
            </button>
            <button
              onClick={() => setViewMode('kanban')}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                viewMode === 'kanban' ? 'bg-[#C91D24] text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Kanban</span>
            </button>
          </div>

          <button
            onClick={handleExportCSV}
            className="px-3.5 py-2 rounded-xl bg-[#1B202B] hover:bg-[#2A3040] text-gray-200 text-xs font-bold border border-[#2A3040] flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#14171F] p-4 rounded-2xl border border-[#222634]">
        <div className="relative">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search by name, email, phone, company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none focus:border-[#C91D24]"
          />
        </div>

        <div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none focus:border-[#C91D24]"
          >
            <option value="ALL">All Statuses ({leads.length})</option>
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s} ({leads.filter((l) => l.status === s).length})
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none focus:border-[#C91D24]"
          >
            <option value="ALL">All Services</option>
            <option value="Private Office">Private Office</option>
            <option value="Workstations">Dedicated Workstations</option>
            <option value="Coworking">Coworking</option>
            <option value="Meeting Room">Meeting Rooms</option>
            <option value="Virtual Office">Virtual Office</option>
            <option value="Franchise">Franchise Opportunity</option>
            <option value="Site Visit">Site Visit</option>
          </select>
        </div>
      </div>

      {/* Main Table View */}
      {viewMode === 'table' ? (
        <div className="bg-[#14171F] rounded-2xl border border-[#222634] overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-300">
              <thead className="bg-[#1B202B] text-gray-400 uppercase tracking-wider text-[10px] border-b border-[#2A3040]">
                <tr>
                  <th className="p-4">Contact Info</th>
                  <th className="p-4">Service & Location</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Date</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#222634]">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-gray-500">
                      No matching leads found.
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr
                      key={lead.id}
                      onClick={() => {
                        setSelectedLead(lead);
                        setNoteInput(lead.notes || '');
                      }}
                      className="hover:bg-[#1B202B]/60 transition-colors cursor-pointer"
                    >
                      <td className="p-4">
                        <div className="font-bold text-white text-sm">{lead.name}</div>
                        <div className="text-gray-400 mt-0.5">{lead.phone} • {lead.email}</div>
                        {lead.company && <div className="text-gray-500 text-[11px]">{lead.company}</div>}
                      </td>
                      <td className="p-4">
                        <span className="font-semibold text-gray-200">{lead.service}</span>
                        {lead.location && <div className="text-gray-500 text-[11px]">{lead.location}</div>}
                        {lead.teamSize && <div className="text-gray-500 text-[11px]">{lead.teamSize}</div>}
                      </td>
                      <td className="p-4">
                        <select
                          value={lead.status}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase border outline-none cursor-pointer ${getStatusColor(
                            lead.status
                          )}`}
                        >
                          {statuses.map((s) => (
                            <option key={s} value={s} className="bg-[#14171F] text-white">
                              {s}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="p-4 text-gray-400">
                        {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </td>
                      <td className="p-4 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end gap-2">
                          <a
                            href={getWhatsAppUrl(lead.phone, `Hi ${lead.name}, thank you for contacting Yoffices regarding ${lead.service}.`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                            title="Chat on WhatsApp"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                          </a>
                          <a
                            href={`tel:${lead.phone}`}
                            className="p-2 rounded-lg bg-[#1B202B] hover:bg-[#C91D24] text-white transition-colors"
                            title="Call Lead"
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </a>
                          <button
                            onClick={() => handleDeleteLead(lead.id)}
                            className="p-2 rounded-lg bg-[#1B202B] hover:bg-red-950 text-gray-400 hover:text-red-400 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Kanban View */
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto pb-4">
          {statuses.map((status) => {
            const statusLeads = filteredLeads.filter((l) => l.status === status);
            return (
              <div key={status} className="bg-[#14171F] p-4 rounded-2xl border border-[#222634] space-y-3 min-w-[220px]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    {status}
                  </span>
                  <span className="text-xs font-black px-2 py-0.5 rounded-full bg-[#1B202B] text-gray-400">
                    {statusLeads.length}
                  </span>
                </div>

                <div className="space-y-2.5">
                  {statusLeads.map((lead) => (
                    <div
                      key={lead.id}
                      onClick={() => {
                        setSelectedLead(lead);
                        setNoteInput(lead.notes || '');
                      }}
                      className="p-3 rounded-xl bg-[#1B202B] border border-[#2A3040] hover:border-[#C91D24] transition-all cursor-pointer space-y-2"
                    >
                      <div className="font-bold text-white text-xs line-clamp-1">{lead.name}</div>
                      <div className="text-[11px] text-gray-400">{lead.service}</div>
                      <div className="text-[10px] text-gray-500">{lead.phone}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Lead Details Modal / Drawer */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#14171F] border border-[#222634] rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl animate-fade-in relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A880]">
                  Lead Record Details
                </span>
                <h2 className="text-2xl font-black text-white font-sans">{selectedLead.name}</h2>
                <p className="text-xs text-gray-400 mt-0.5">{selectedLead.email} • {selectedLead.phone}</p>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="text-gray-400 hover:text-white p-1 rounded-lg bg-[#1B202B]"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-[#1B202B] p-4 rounded-xl text-xs">
              <div>
                <span className="text-gray-400 block">Service:</span>
                <strong className="text-white">{selectedLead.service}</strong>
              </div>
              <div>
                <span className="text-gray-400 block">Location:</span>
                <strong className="text-white">{selectedLead.location || 'Not Specified'}</strong>
              </div>
              <div>
                <span className="text-gray-400 block">Team Size:</span>
                <strong className="text-white">{selectedLead.teamSize || 'N/A'}</strong>
              </div>
              <div>
                <span className="text-gray-400 block">Source:</span>
                <strong className="text-white">{selectedLead.source}</strong>
              </div>
            </div>

            {/* Status Picker */}
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1.5">
                Update Lead Status
              </label>
              <select
                value={selectedLead.status}
                onChange={(e) => handleStatusChange(selectedLead.id, e.target.value as LeadStatus)}
                className="w-full p-2.5 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs font-bold text-white outline-none"
              >
                {statuses.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Internal Notes */}
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1.5">
                Internal Sales & Follow-Up Notes
              </label>
              <textarea
                rows={3}
                value={noteInput}
                onChange={(e) => setNoteInput(e.target.value)}
                placeholder="Log discussion details, preferred budget, move-in requirements..."
                className="w-full p-3 rounded-xl bg-[#1B202B] border border-[#2A3040] text-xs text-white outline-none focus:border-[#C91D24] resize-none"
              />
              <button
                onClick={handleSaveNotes}
                disabled={updating}
                className="mt-2 py-2 px-4 rounded-lg bg-[#C91D24] hover:bg-[#A3151B] text-white text-xs font-bold shadow-sm transition-colors"
              >
                {updating ? 'Saving...' : 'Save Notes'}
              </button>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-[#222634] flex items-center justify-between">
              <a
                href={getWhatsAppUrl(
                  selectedLead.phone,
                  `Hi ${selectedLead.name}, I am reaching out from Yoffices regarding your enquiry for ${selectedLead.service}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Lead</span>
              </a>

              <a
                href={`tel:${selectedLead.phone}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1B202B] hover:bg-black text-white font-bold text-xs border border-[#2A3040]"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
