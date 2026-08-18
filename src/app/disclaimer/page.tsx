import { Shield } from 'lucide-react';
import { INITIAL_SITE_SETTINGS } from '@/lib/constants';

export const metadata = {
  title: 'Statutory Disclaimer | Yoffices',
  description: 'Legal and financial statutory disclaimer regarding Yoffices material.',
};

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="bg-[#0C0E12] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#222634]">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <Shield className="w-3.5 h-3.5" /> Official Notice
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-sans">Legal & Financial Disclaimer</h1>
          <p className="text-xs text-gray-400">Last updated: August 2026</p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-700 space-y-6 leading-relaxed">
        <div className="p-6 rounded-2xl bg-red-50 border border-red-200 text-gray-900 font-semibold space-y-2">
          <p className="text-[#C91D24] text-base font-bold uppercase tracking-wider">
            Client-Supplied Material Statement
          </p>
          <p>
            {INITIAL_SITE_SETTINGS.disclaimerText}
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900">1. Commercial Franchise Disclosures</h2>
        <p>
          Rental yields, monthly disbursements, and maturity totals shown across Desk (₹5,00,000 principal / ₹5,000 monthly), Dormitory (₹11,00,000 principal / ₹11,00,000 total realization / ₹11,000 monthly), and Cabin (₹25,00,000 principal / ₹25,000 monthly) models represent figures stated in the official franchise document supplied by Yoffices.
        </p>
        <p>
          These representations do not constitute a public financial offering, collective investment scheme, or speculative security. All rights, obligations, and security covenants are governed strictly by individual bilateral agreements executed with Yoffices.
        </p>

        <h2 className="text-xl font-bold text-gray-900">2. Virtual Office & Statutory Compliance</h2>
        <p>
          Yoffices provides physical commercial leasing, lessor documentation, owner NOCs, and address infrastructure. Final approval of GSTIN, MCA company incorporation, and banking approvals is subject to the review and discretion of the respective statutory government authorities.
        </p>
      </section>
    </div>
  );
}
