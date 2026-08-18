import { Shield } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | Yoffices',
  description: 'Terms and Conditions governing the use of Yoffices website and services.',
};

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="bg-[#0C0E12] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#222634]">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <Shield className="w-3.5 h-3.5" /> Legal Governance
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-sans">Terms & Conditions</h1>
          <p className="text-xs text-gray-400">Last updated: August 2026</p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-700 space-y-6 leading-relaxed">
        <h2 className="text-xl font-bold text-gray-900">1. Acceptance of Terms</h2>
        <p>
          By accessing and using this website, you agree to comply with and be bound by the terms, conditions, and statutory notices set forth herein.
        </p>

        <h2 className="text-xl font-bold text-gray-900">2. Workspace Membership & Agreements</h2>
        <p>
          Information, rates, and availability displayed on this website are indicative. Actual workspace occupancy, private cabin tenures, and security deposits are governed exclusively by formal, written lease and service agreements executed between the client and Yoffices.
        </p>

        <h2 className="text-xl font-bold text-gray-900">3. Franchise & Partnership Agreements</h2>
        <p>
          All commercial franchise models, security cheque workflows, rental disbursement schedules, and settlement timelines are governed by formal, legally binding franchise agreements.
        </p>

        <h2 className="text-xl font-bold text-gray-900">4. Jurisdiction</h2>
        <p>
          Any disputes arising out of the use of this website or related commercial arrangements shall be subject to the exclusive jurisdiction of the competent courts in Gurugram, Haryana.
        </p>
      </section>
    </div>
  );
}
