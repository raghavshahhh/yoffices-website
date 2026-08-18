import Link from 'next/link';
import { db } from '@/lib/db';
import {
  FileText,
  CreditCard,
  Calendar,
  RotateCw,
  CheckCircle2,
  ShieldCheck,
  Shield,
  ArrowRight,
  Layers,
} from 'lucide-react';

export const metadata = {
  title: 'Franchise How It Works & Terms | Yoffices',
  description:
    'Step-by-step process of the Yoffices commercial franchise agreement: Principal payment, 3 post-dated security cheques, monthly rental disbursements, and 3-year maturity settlement.',
};

export default function FranchiseHowItWorksPage() {
  const terms = db.getFranchiseTerms();

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <Layers className="w-3.5 h-3.5" /> Commercial Process & Governance
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Franchise Terms & Process
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A transparent 6-stage lifecycle governing the execution, security cheques issuance, annual reconciliation, and final settlement over a 3-year validity period.
          </p>
        </div>
      </section>

      {/* Process Cards */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {terms.map((term) => (
              <div
                key={term.id}
                className="p-8 rounded-2xl bg-[#FAF9F6] border border-gray-200 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#C91D24] text-white font-black text-lg flex items-center justify-center">
                    0{term.stepNumber}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 font-sans">{term.title}</h2>
                  {term.subtitle && (
                    <div className="text-xs font-semibold text-[#C5A880] uppercase tracking-wider">
                      {term.subtitle}
                    </div>
                  )}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-2">
                    {term.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Contractual Terms Box */}
          <div className="bg-[#0C0E12] text-white p-8 sm:p-10 rounded-2xl border border-[#222634] space-y-6">
            <h2 className="text-2xl font-black font-sans text-white">Summary of Commercial Terms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-300">
              <div className="space-y-2">
                <strong className="text-[#C5A880] text-sm block">1. Agreement Validity</strong>
                <p>The standard commercial franchise agreement is executed for a fixed validity tenure of exactly three (3) years.</p>
              </div>
              <div className="space-y-2">
                <strong className="text-[#C5A880] text-sm block">2. Security Cheque Protocol</strong>
                <p>Yoffices issues three (3) post-dated annual cheques to the partner corresponding to the annual rental commitments as contractual security.</p>
              </div>
              <div className="space-y-2">
                <strong className="text-[#C5A880] text-sm block">3. Annual Reconciliation</strong>
                <p>At the close of each completed 12-month operational cycle, the security cheque for that respective year is reconciled upon successful monthly disbursements.</p>
              </div>
              <div className="space-y-2">
                <strong className="text-[#C5A880] text-sm block">4. Year 3 Maturity Settlement</strong>
                <p>Full principal and contractual maturity settlement is executed upon the completion of the 36-month period as stipulated in the formal contract.</p>
              </div>
            </div>
          </div>

          {/* Statutory Disclaimer */}
          <div className="p-5 rounded-2xl bg-gray-100 border border-gray-200 text-xs text-gray-600 flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#C91D24] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>“Terms shown are based on information supplied by Yoffices and are subject to the final executed agreement and current approved terms.”</strong>
            </p>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/franchise/apply"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-lg transition-all"
            >
              <span>Submit Franchise Application</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
