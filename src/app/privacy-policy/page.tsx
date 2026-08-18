import { Shield } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Yoffices',
  description: 'Privacy Policy and data protection standards of Yoffices.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="bg-[#0C0E12] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#222634]">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <Shield className="w-3.5 h-3.5" /> Data Protection
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-sans">Privacy Policy</h1>
          <p className="text-xs text-gray-400">Last updated: August 2026</p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-700 space-y-6 leading-relaxed">
        <h2 className="text-xl font-bold text-gray-900">1. Information Collection</h2>
        <p>
          Yoffices collects information you provide directly through our website inquiry forms, site visit bookings, and franchise applications (including name, telephone number, email address, corporate identity, and space requirements).
        </p>

        <h2 className="text-xl font-bold text-gray-900">2. Use of Information</h2>
        <p>
          Collected information is used strictly to respond to your specific inquiries, schedule physical center walk-throughs, share commercial franchise documentation, and execute formal lease agreements. We do not sell, rent, or trade your contact data with third-party advertising brokers.
        </p>

        <h2 className="text-xl font-bold text-gray-900">3. Data Security & Storage</h2>
        <p>
          We implement industry-standard encryption, SSL protocols, and restricted role-based internal access to ensure all applicant and client records are stored securely.
        </p>

        <h2 className="text-xl font-bold text-gray-900">4. Contact & Inquiries</h2>
        <p>
          If you have questions regarding your personal data or wish to request deletion, please contact our compliance desk at contact@yoffices.com.
        </p>
      </section>
    </div>
  );
}
