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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 font-sans">
            Executive Command Center
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Real-time lead flow, site visit schedules, franchise submissions, and CMS status.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/leads"
            className="px-4 py-2 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white text-xs font-bold shadow-sm transition-all hover:shadow"
          >
            Open Leads Pipeline
          </Link>
          <Link
            href="/admin/cms/homepage"
            className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold border border-gray-200 transition-colors"
          >
            Edit Homepage CMS
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Inquiries */}
        <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Total Leads</span>
            <div className="p-2 rounded-xl bg-red-50 text-[#C91D24] border border-red-100">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-gray-900 font-sans">{leads.length}</div>
          <div className="flex items-center gap-2 text-[11px] text-emerald-600 font-medium">
            <span>{newLeadsCount} Action Required (New)</span>
          </div>
        </div>

        {/* Site Visits */}
        <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Site Visits</span>
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-gray-900 font-sans">{totalVisitsCount}</div>
          <div className="text-[11px] text-gray-500">Scheduled Tours in Gurgaon</div>
        </div>

        {/* Franchise Enquiries */}
        <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Franchise Apps</span>
            <div className="p-2 rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-gray-900 font-sans">{totalFranchiseCount}</div>
          <div className="text-[11px] text-amber-700 font-medium">Asset Allocation Inquiries</div>
        </div>

        {/* Centers & Locations */}
        <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Centers / Spaces</span>
            <div className="p-2 rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
              <Building2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-gray-900 font-sans">
            {locations.length} / {workspaces.length}
          </div>
          <div className="text-[11px] text-gray-500">Active Centers & Workspace Types</div>
        </div>
      </div>

      {/* Conversion Status Distribution */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4 shadow-xs">
        <h2 className="text-base font-bold text-gray-900 font-sans">Lead Pipeline Health</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200">
            <div className="text-[10px] uppercase font-bold text-blue-700">New</div>
            <div className="text-xl font-bold text-blue-900 mt-0.5">
              {leads.filter((l) => l.status === 'NEW').length}
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
            <div className="text-[10px] uppercase font-bold text-amber-700">Contacted</div>
            <div className="text-xl font-bold text-amber-900 mt-0.5">
              {leads.filter((l) => l.status === 'CONTACTED').length}
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-200">
            <div className="text-[10px] uppercase font-bold text-purple-700">Qualified</div>
            <div className="text-xl font-bold text-purple-900 mt-0.5">
              {leads.filter((l) => l.status === 'QUALIFIED').length}
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200">
            <div className="text-[10px] uppercase font-bold text-indigo-700">Follow-Up</div>
            <div className="text-xl font-bold text-indigo-900 mt-0.5">
              {leads.filter((l) => l.status === 'FOLLOW_UP').length}
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <div className="text-[10px] uppercase font-bold text-emerald-700">Converted</div>
            <div className="text-xl font-bold text-emerald-900 mt-0.5">
              {leads.filter((l) => l.status === 'CONVERTED').length}
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
            <div className="text-[10px] uppercase font-bold text-gray-500">Closed / Dropped</div>
            <div className="text-xl font-bold text-gray-700 mt-0.5">
              {leads.filter((l) => l.status === 'CLOSED' || l.status === 'NOT_INTERESTED').length}
            </div>
          </div>
        </div>
      </div>

      {/* Two Columns: Recent Leads & Recent Site Visits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Inquiries */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#C91D24]" />
              <h2 className="text-base font-bold text-gray-900 font-sans">Recent Workspace Leads</h2>
            </div>
            <Link
              href="/admin/leads"
              className="text-xs font-bold text-[#C91D24] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-gray-100">
            {leads.slice(0, 5).map((lead) => (
              <div key={lead.id} className="py-3 flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-gray-900">{lead.name}</div>
                  <div className="text-[11px] text-gray-500 flex items-center gap-2">
                    <span>{lead.phone}</span>
                    <span>•</span>
                    <span className="text-[#C91D24] font-medium">{lead.service}</span>
                  </div>
                </div>

                <div className="text-right space-y-1">
                  <span
                    className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      lead.status === 'NEW'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : lead.status === 'CONVERTED'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {lead.status}
                  </span>
                  <div className="text-[10px] text-gray-400">
                    {new Date(lead.createdAt).toLocaleDateString('en-IN', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Site Visits */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <h2 className="text-base font-bold text-gray-900 font-sans">Upcoming Guided Visits</h2>
            </div>
            <Link
              href="/admin/site-visits"
              className="text-xs font-bold text-[#C91D24] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-gray-100">
            {siteVisits.slice(0, 5).map((visit) => (
              <div key={visit.id} className="py-3 flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-gray-900">{visit.name}</div>
                  <div className="text-[11px] text-gray-500 flex items-center gap-2">
                    <span>{visit.location}</span>
                    <span>•</span>
                    <span className="text-blue-600 font-medium">{visit.preferredDate} ({visit.preferredTime})</span>
                  </div>
                </div>

                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    visit.status === 'SCHEDULED'
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : visit.status === 'COMPLETED'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}
                >
                  {visit.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
