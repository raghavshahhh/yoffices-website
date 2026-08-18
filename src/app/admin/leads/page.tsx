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
  X,
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
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
        );
        if (selectedLead?.id === id) {
          setSelectedLead((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
      }
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedLead) return;
    try {
      setUpdating(true);
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedLead.id, notes: noteInput }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === selectedLead.id ? { ...l, notes: noteInput } : l))
        );
        setSelectedLead((prev) => (prev ? { ...prev, notes: noteInput } : null));
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

  const getStatusBadge = (status: LeadStatus) => {
    switch (status) {
      case 'NEW':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'CONTACTED':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'QUALIFIED':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'FOLLOW_UP':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'CONVERTED':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'CLOSED':
      case 'NOT_INTERESTED':
        return 'bg-gray-100 text-gray-600 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
        <div>
          <h1 className="text-2xl font-black text-gray-900 font-sans">Lead Management Pipeline</h1>
          <p className="text-xs text-gray-500 mt-1">
            Track inquiries, update contact milestones, and export records.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-gray-100 rounded-xl border border-gray-200 p-1">
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                viewMode === 'table' ? 'bg-[#C91D24] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <List className="w-4 h-4" />
              <span>Table</span>
            </button>
            <button
              onClick={() => setViewMode('kanban')}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                viewMode === 'kanban' ? 'bg-[#C91D24] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Kanban</span>
            </button>
          </div>

          <button
            onClick={handleExportCSV}
            className="px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold border border-gray-200 flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white p-4 rounded-2xl border border-gray-200 shadow-xs">
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search by name, email, phone, company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white transition-all"
          />
        </div>

        <div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white transition-all"
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
            className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white transition-all"
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
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-700">
              <thead className="bg-gray-50 text-gray-500 uppercase tracking-wider text-[10px] border-b border-gray-200">
                <tr>
                  <th className="p-4 font-bold">Contact Info</th>
                  <th className="p-4 font-bold">Service & Location</th>
                  <th className="p-4 font-bold">Status</th>
                  <th className="p-4 font-bold">Date</th>
                  <th className="p-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-gray-400">
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
                      className="hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <td className="p-4">
                        <div className="font-bold text-gray-900 text-sm">{lead.name}</div>
                        <div className="text-gray-500 mt-0.5">{lead.phone} • {lead.email}</div>
                        {lead.company && <div className="text-gray-400 text-[11px]">{lead.company}</div>}
                      </td>
                      <td className="p-4">
                        <span className="font-semibold text-gray-900">{lead.service}</span>
                        {lead.location && <div className="text-gray-500 text-[11px]">{lead.location}</div>}
                        {lead.teamSize && <div className="text-gray-400 text-[11px]">Team: {lead.teamSize}</div>}
                      </td>
                      <td className="p-4">
                        <select
                          value={lead.status}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase border outline-none cursor-pointer ${getStatusBadge(
                            lead.status
                          )}`}
                        >
                          {statuses.map((st) => (
                            <option key={st} value={st}>
                              {st}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="p-4 text-gray-500 font-mono text-[11px]">
                        {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                          <a
                            href={`tel:${lead.phone}`}
                            className="p-1.5 rounded-lg bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                            title="Call"
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </a>
                          <a
                            href={getWhatsAppUrl(lead.phone, `Hi ${lead.name}, regarding your inquiry with Yoffices`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                            title="WhatsApp"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                          </a>
                          <button
                            onClick={() => handleDeleteLead(lead.id)}
                            className="p-1.5 rounded-lg bg-gray-100 text-gray-400 hover:text-red-600 hover:bg-red-50"
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-4">
          {statuses.slice(0, 5).map((status) => {
            const statusLeads = filteredLeads.filter((l) => l.status === status);
            return (
              <div key={status} className="bg-white rounded-2xl p-4 border border-gray-200 space-y-3 min-w-[240px] shadow-xs">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="font-bold text-xs text-gray-800">{status}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
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
                      className="p-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#C91D24] cursor-pointer space-y-2 transition-all shadow-xs"
                    >
                      <div className="font-bold text-xs text-gray-900">{lead.name}</div>
                      <div className="text-[11px] text-gray-500">{lead.service}</div>
                      <div className="text-[10px] text-gray-400 flex items-center justify-between">
                        <span>{lead.phone}</span>
                        <span>{lead.location || 'Gurgaon'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Selected Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-6 shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <h3 className="text-lg font-black text-gray-900 font-sans">{selectedLead.name}</h3>
                <p className="text-xs text-gray-500">{selectedLead.service} • {selectedLead.location || 'Sector 45'}</p>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-1.5 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-[10px] font-bold text-gray-400 uppercase">Phone</span>
                <div className="font-bold text-gray-900 mt-0.5">{selectedLead.phone}</div>
              </div>
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-[10px] font-bold text-gray-400 uppercase">Email</span>
                <div className="font-bold text-gray-900 mt-0.5 truncate">{selectedLead.email}</div>
              </div>
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-[10px] font-bold text-gray-400 uppercase">Company</span>
                <div className="font-bold text-gray-900 mt-0.5">{selectedLead.company || 'Not Specified'}</div>
              </div>
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-[10px] font-bold text-gray-400 uppercase">Team Size</span>
                <div className="font-bold text-gray-900 mt-0.5">{selectedLead.teamSize || '1 Seat'}</div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-gray-800">Admin Internal Notes & Follow-up</span>
              <textarea
                rows={3}
                value={noteInput}
                onChange={(e) => setNoteInput(e.target.value)}
                placeholder="Add meeting notes, agreed terms, quote details..."
                className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 outline-none focus:border-[#C91D24] focus:bg-white"
              />
              <button
                onClick={handleSaveNotes}
                disabled={updating}
                className="px-4 py-2 rounded-xl bg-[#111111] hover:bg-black text-white text-xs font-bold transition-colors"
              >
                {updating ? 'Saving...' : 'Save Notes'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
