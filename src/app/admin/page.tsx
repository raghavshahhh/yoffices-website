import Link from 'next/link';
import { db } from '@/lib/db';
import {
  Users,
  Calendar,
  TrendingUp,
  Building2,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Sparkles,
  PhoneCall,
  Mail,
  MapPin,
  Filter,
} from 'lucide-react';
import { formatINR } from '@/lib/utils';

export default function AdminDashboardPage() {
  const leads = db.getLeads();
  const siteVisits = db.getSiteVisits();
  const franchiseApps = db.getFranchiseApplications();
  const workspaces = db.getAllWorkspaces();
  const locations = db.getAllLocations();

  const newLeadsCount = leads.filter((l) => l.status === 'NEW').length;
  const qualifiedLeadsCount = leads.filter((l) => l.status === 'QUALIFIED').length;
  const convertedLeadsCount = leads.filter((l) => l.status === 'CONVERTED').length;

  const totalVisitsCount = siteVisits.length;
  const totalFranchiseCount = franchiseApps.length;

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#14171F] p-6 rounded-2xl border border-[#222634]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white font-sans">
            Executive Command Center
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Real-time lead flow, site visit schedules, franchise submissions, and CMS status.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/leads"
            className="px-4 py-2 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white text-xs font-bold shadow-md transition-colors"
          >
            Open Leads Kanban
          </Link>
          <Link
            href="/admin/cms/homepage"
            className="px-4 py-2 rounded-xl bg-[#1B202B] hover:bg-[#2A3040] text-gray-300 hover:text-white text-xs font-semibold border border-[#2A3040] transition-colors"
          >
            Edit Homepage
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Inquiries */}
        <div className="bg-[#14171F] p-5 rounded-2xl border border-[#222634] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Total Leads</span>
            <div className="p-2 rounded-lg bg-red-950/60 text-[#C91D24]">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-white font-sans">{leads.length}</div>
          <div className="flex items-center gap-2 text-[11px] text-emerald-400">
            <span>{newLeadsCount} Action Required (New)</span>
          </div>
        </div>

        {/* Site Visits */}
        <div className="bg-[#14171F] p-5 rounded-2xl border border-[#222634] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Site Visits</span>
            <div className="p-2 rounded-lg bg-blue-950/60 text-blue-400">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-white font-sans">{totalVisitsCount}</div>
          <div className="text-[11px] text-gray-400">Scheduled Tours in Gurgaon</div>
        </div>

        {/* Franchise Enquiries */}
        <div className="bg-[#14171F] p-5 rounded-2xl border border-[#222634] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Franchise Apps</span>
            <div className="p-2 rounded-lg bg-amber-950/60 text-amber-400">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-white font-sans">{totalFranchiseCount}</div>
          <div className="text-[11px] text-[#C5A880]">Asset Allocation Inquiries</div>
        </div>

        {/* Centers & Locations */}
        <div className="bg-[#14171F] p-5 rounded-2xl border border-[#222634] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Centers / Spaces</span>
            <div className="p-2 rounded-lg bg-purple-950/60 text-purple-400">
              <Building2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-white font-sans">
            {locations.length} / {workspaces.length}
          </div>
          <div className="text-[11px] text-gray-400">Active Centers & Workspace Types</div>
        </div>
      </div>

      {/* Conversion Status Distribution */}
      <div className="bg-[#14171F] p-6 rounded-2xl border border-[#222634] space-y-4">
        <h2 className="text-base font-bold text-white font-sans">Lead Pipeline Health</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="p-3.5 rounded-xl bg-[#1B202B] border border-[#2A3040]">
            <div className="text-[10px] uppercase font-bold text-blue-400">New</div>
            <div className="text-xl font-bold text-white mt-0.5">
              {leads.filter((l) => l.status === 'NEW').length}
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#1B202B] border border-[#2A3040]">
            <div className="text-[10px] uppercase font-bold text-amber-400">Contacted</div>
            <div className="text-xl font-bold text-white mt-0.5">
              {leads.filter((l) => l.status === 'CONTACTED').length}
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#1B202B] border border-[#2A3040]">
            <div className="text-[10px] uppercase font-bold text-purple-400">Qualified</div>
            <div className="text-xl font-bold text-white mt-0.5">
              {leads.filter((l) => l.status === 'QUALIFIED').length}
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#1B202B] border border-[#2A3040]">
            <div className="text-[10px] uppercase font-bold text-indigo-400">Follow-Up</div>
            <div className="text-xl font-bold text-white mt-0.5">
              {leads.filter((l) => l.status === 'FOLLOW_UP').length}
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#1B202B] border border-[#2A3040]">
            <div className="text-[10px] uppercase font-bold text-emerald-400">Converted</div>
            <div className="text-xl font-bold text-white mt-0.5">
              {leads.filter((l) => l.status === 'CONVERTED').length}
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#1B202B] border border-[#2A3040]">
            <div className="text-[10px] uppercase font-bold text-gray-500">Closed</div>
            <div className="text-xl font-bold text-white mt-0.5">
              {leads.filter((l) => l.status === 'CLOSED').length}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Inquiries & Site Visits Two-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Inquiries Stream */}
        <div className="bg-[#14171F] p-6 rounded-2xl border border-[#222634] space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white font-sans">Recent Inquiries</h2>
            <Link href="/admin/leads" className="text-xs text-[#C91D24] hover:underline">
              View All Leads →
            </Link>
          </div>

          <div className="space-y-3">
            {leads.slice(0, 5).map((lead) => (
              <div
                key={lead.id}
                className="p-4 rounded-xl bg-[#1B202B] border border-[#2A3040] flex items-start justify-between gap-3"
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{lead.name}</span>
                    <span
                      className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                        lead.status === 'NEW'
                          ? 'bg-blue-900/60 text-blue-300'
                          : lead.status === 'QUALIFIED'
                          ? 'bg-purple-900/60 text-purple-300'
                          : lead.status === 'CONVERTED'
                          ? 'bg-emerald-900/60 text-emerald-300'
                          : 'bg-gray-800 text-gray-400'
                      }`}
                    >
                      {lead.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {lead.service} • {lead.phone}
                  </div>
                  {lead.notes && (
                    <p className="text-[11px] text-gray-500 line-clamp-1 italic">{lead.notes}</p>
                  )}
                </div>

                <div className="text-[10px] text-gray-500 whitespace-nowrap">
                  {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Site Visits Stream */}
        <div className="bg-[#14171F] p-6 rounded-2xl border border-[#222634] space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white font-sans">Upcoming Site Visits</h2>
            <Link href="/admin/site-visits" className="text-xs text-[#C91D24] hover:underline">
              Manage Tours →
            </Link>
          </div>

          <div className="space-y-3">
            {siteVisits.slice(0, 5).map((visit) => (
              <div
                key={visit.id}
                className="p-4 rounded-xl bg-[#1B202B] border border-[#2A3040] flex items-start justify-between gap-3"
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{visit.name}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-900/50 text-amber-300">
                      {visit.status}
                    </span>
                  </div>
                  <div className="text-xs text-[#C5A880]">
                    {visit.preferredDate} at {visit.preferredTime}
                  </div>
                  <div className="text-[11px] text-gray-400">
                    {visit.location} • {visit.teamSize || 'Team'}
                  </div>
                </div>

                <a
                  href={`tel:${visit.phone}`}
                  className="p-2 rounded-lg bg-[#2A3040] hover:bg-[#C91D24] text-white transition-colors"
                  title="Call Lead"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
