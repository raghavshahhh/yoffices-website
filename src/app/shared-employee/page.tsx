import Link from 'next/link';
import {
  Users,
  CheckCircle2,
  XCircle,
  TrendingDown,
  ShieldCheck,
  Headphones,
  FileSpreadsheet,
  Monitor,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';

export const metadata = {
  title: 'Shared Employee Solutions in Gurgaon | Yoffices',
  description:
    'Cut operational payroll overhead by 65%. Leverage shared on-site receptionists, IT technicians, billing assistants, and admin staff at Yoffices Gurgaon.',
};

export default function SharedEmployeePage() {
  const roles = [
    {
      title: 'Dedicated Reception & Client Concierge',
      desc: 'Professional front-desk executive greeting your visitors, answering dedicated company phone lines, and receiving deliveries.',
      icon: Headphones,
      savings: 'Save ₹25,000 / month',
    },
    {
      title: 'On-Site IT & Network Support',
      desc: 'Hardware troubleshooting, printer setup, VPN/firewall configuration, and local network diagnostics on demand.',
      icon: Monitor,
      savings: 'Save ₹35,000 / month',
    },
    {
      title: 'Admin & Operations Coordinator',
      desc: 'Filing, courier dispatches, stationery ordering, meeting room scheduling, and office supplies procurement.',
      icon: Users,
      savings: 'Save ₹20,000 / month',
    },
    {
      title: 'Bookkeeping & Invoicing Assistant',
      desc: 'Basic accounts entry, vendor invoice reconciliation, GST billing prep, and expense tracking assistance.',
      icon: FileSpreadsheet,
      savings: 'Save ₹30,000 / month',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C91D24]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <TrendingDown className="w-3.5 h-3.5" /> Operational Efficiency Framework
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Cut Payroll Overhead with Shared Employees
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Why bear full-time salaries, PF/ESI liabilities, and recruitment headaches for administrative roles? Share certified, on-site professionals at Yoffices.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="#comparison"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-lg transition-all"
            >
              <span>Compare Cost Savings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Comparison Matrix */}
      <section id="comparison" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C91D24] block mb-2">
              Cost & Liability Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 font-sans">
              Traditional Hiring vs Yoffices Shared Model
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Traditional Employee */}
            <div className="p-8 rounded-2xl bg-red-50/50 border border-red-200 space-y-6">
              <div className="flex items-center gap-2.5">
                <XCircle className="w-6 h-6 text-[#C91D24]" />
                <h3 className="text-xl font-bold text-gray-900">Traditional Full-Time Hire</h3>
              </div>

              <ul className="space-y-3.5 text-xs text-gray-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C91D24] font-bold">✕</span>
                  <span>Full fixed salary (₹30,000 - ₹50,000/mo) regardless of utilization</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C91D24] font-bold">✕</span>
                  <span>PF, ESI, Gratuity & statutory compliance overhead</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C91D24] font-bold">✕</span>
                  <span>Recruitment consultant fees and 30-day notice periods</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C91D24] font-bold">✕</span>
                  <span>Productivity loss during leaves, sick days, and attrition</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C91D24] font-bold">✕</span>
                  <span>Separate laptop, desk, software licenses, and tea/coffee costs</span>
                </li>
              </ul>
            </div>

            {/* Shared Employee */}
            <div className="p-8 rounded-2xl bg-[#0C0E12] text-white border border-[#222634] shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C91D24]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-6 h-6 text-[#C5A880]" />
                <h3 className="text-xl font-bold text-white">Yoffices Shared Employee</h3>
              </div>

              <ul className="space-y-3.5 text-xs text-gray-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Fractional billing based only on your company's usage</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Zero PF / ESI / legal liabilities — managed 100% by Yoffices</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Fully trained, verified, and pre-onboarded professionals</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Guaranteed backup redundancy — zero downtime when staff is on leave</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Single unified monthly tax invoice with input tax credit (ITC)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Available Shared Roles */}
      <section className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-sans">
              Available Shared Resource Roles
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Select one or combine multiple services to streamline your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((r, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#C91D24] flex items-center justify-center">
                    <r.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{r.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{r.desc}</p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg text-center">
                  {r.savings}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            defaultService="Shared Employee"
            title="Inquire About Shared Employee Plans"
            subtitle="Let us know what operational support your team requires."
            source="Shared Employee Page"
          />
        </div>
      </section>
    </div>
  );
}
