import Link from 'next/link';
import {
  FileCheck2,
  CheckCircle2,
  Building2,
  Sparkles,
  ShieldCheck,
  Mail,
  Scale,
  FileText,
  MapPin,
  HelpCircle,
  ArrowRight,
  Shield,
} from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';
import { INITIAL_SITE_SETTINGS } from '@/lib/constants';

export const metadata = {
  title: 'Virtual Office for GST Registration & ROC in Gurgaon | Yoffices',
  description:
    'Obtain a prime commercial address in Gurugram Sector 32 & Sector 45 for GST, MCA, and ROC company registration. Includes Rent Agreement, NOC, Electricity Bill, and Mail Handling.',
};

export default function VirtualOfficePage() {
  const tiers = [
    {
      name: 'Business Address & Mailing',
      price: '₹1,299',
      unit: 'month (Billed Annually)',
      desc: 'Prime Gurgaon commercial address for website, business cards, client invoices, and mail reception.',
      features: [
        'Prime Institutional Area, Sector 32 / Sector 45 Address',
        'Courier, Parcel & Government Mail Handling Reception',
        'Instant SMS/Email Mail Arrival Notification',
        'Discounted Hourly Meeting Room & Day Pass Access',
      ],
      popular: false,
      cta: 'Choose Business Address',
    },
    {
      name: 'GST Registration Plan',
      price: '₹1,799',
      unit: 'month (Billed Annually)',
      desc: 'Complete statutory documentation package required for Haryana GSTIN issuance and tax compliance.',
      features: [
        'Notarized Commercial Rent Agreement (12-Month Tenure)',
        'Owner No-Objection Certificate (NOC)',
        'Latest Paid Municipal Electricity / Property Tax Bill',
        'Dedicated Physical Company Signage Board at Center',
        'Courier Handling & Government Official Audit Desk Support',
        '100% Tax Document Verification Guarantee',
      ],
      popular: true,
      cta: 'Get GST Office Plan',
    },
    {
      name: 'ROC / Company Incorporation Plan',
      price: '₹2,499',
      unit: 'month (Billed Annually)',
      desc: 'Everything required for Ministry of Corporate Affairs (MCA) incorporation and commercial bank account opening.',
      features: [
        'Full ROC Compliant Lease Documentation & NOC',
        'Commercial Bank Account Verification Assistance',
        'Physical Signage & Inspection Assistance Support',
        'Mail Handling & Digital Scanning Forwarding',
        '4 Complimentary Meeting Room Hours per Year',
      ],
      popular: false,
      cta: 'Get ROC & GST Bundle',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C91D24]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <FileCheck2 className="w-3.5 h-3.5" /> Compliant Business Address
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Virtual Office in Gurugram for GST & ROC
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Establish a prestigious commercial presence in Sector 32 or Sector 45 Gurugram with verified Rent Agreements, NOC, Electricity Bills, and on-site mail handling.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
              Starting from <strong className="text-[#C5A880] text-base">₹1,299</strong> /month
            </div>
            <Link
              href="#pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-lg transition-all"
            >
              <span>Get Virtual Office Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Required Documentation Checklist */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C91D24] block mb-2">
              100% Statutory Compliant
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 font-sans">
              Documentation Provided for Registration
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Every document required by GST tax officers, MCA corporate registrars, and scheduled commercial banks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C91D24] text-white flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-sans">Rent Agreement</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Notarized 12-month commercial lease agreement specifying your company as an authorized commercial occupant.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0C0E12] text-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-sans">Owner NOC</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Official No-Objection Certificate issued by the commercial property owner for business registration.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A880] text-white flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-sans">Electricity Bill</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Latest paid commercial electricity bill and municipal tax receipt matching the exact survey/plot number.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 font-sans">Signage & Mail</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Physical display board at center entrance for tax officer site verification and dedicated mail handling desk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-sans">
              Virtual Office Membership Plans
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Transparent, flat annual pricing with zero hidden documentation fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((t, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl flex flex-col justify-between transition-all ${
                  t.popular
                    ? 'bg-white border-2 border-[#C91D24] shadow-2xl relative'
                    : 'bg-white border border-gray-200 shadow-md'
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-3 right-6 bg-[#C91D24] text-white text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full">
                    Most Recommended
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-black text-gray-900">{t.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{t.desc}</p>
                  <div className="text-3xl font-black text-[#C91D24] mt-6">
                    {t.price} <span className="text-xs font-normal text-gray-500">/{t.unit}</span>
                  </div>

                  <ul className="mt-6 space-y-2.5 text-xs text-gray-600 pt-4 border-t border-gray-100">
                    {t.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    href={`/contact?service=Virtual+Office&plan=${encodeURIComponent(t.name)}`}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs text-center block transition-all shadow-md ${
                      t.popular
                        ? 'bg-[#C91D24] hover:bg-[#A3151B] text-white'
                        : 'bg-[#0C0E12] hover:bg-black text-white'
                    }`}
                  >
                    {t.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Legal Compliance Disclaimer */}
          <div className="mt-12 p-4 rounded-xl bg-gray-100 border border-gray-200 text-xs text-gray-500 flex items-start gap-3">
            <Shield className="w-4 h-4 text-[#C91D24] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Regulatory Notice:</strong> Yoffices provides genuine physical commercial addresses and statutory lessor documentation in accordance with Indian real estate and leasing laws. Final registration approval is granted by the relevant statutory tax authority (GST/MCA) subject to client identity and document verification.
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            defaultService="Virtual Office"
            title="Get Your Virtual Office Started"
            subtitle="Our legal desk will assist you with same-day draft documentation."
            source="Virtual Office Page"
          />
        </div>
      </section>
    </div>
  );
}
