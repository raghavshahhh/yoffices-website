import { db } from '@/lib/db';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Building2,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { LeadForm } from '@/components/forms/LeadForm';
import { getWhatsAppUrl } from '@/lib/utils';
import { INITIAL_SITE_SETTINGS } from '@/lib/constants';

export const metadata = {
  title: 'Contact Yoffices | Gurugram Workspaces & Corporate Desk',
  description:
    'Get in touch with Yoffices Gurgaon team. Operational center in Sector 45, Corporate desk in Sector 32. Phone, WhatsApp, email, and visit booking.',
};

export default function ContactPage() {
  const settings = db.getSiteSettings();
  const whatsappUrl = getWhatsAppUrl(settings.whatsappNumber, settings.whatsappDefaultMsg);

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-[#0C0E12] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#222634] relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C91D24] text-white">
            <Phone className="w-3.5 h-3.5" /> Direct Advisory Desk
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-sans">
            Connect with Yoffices
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have questions regarding office cabins, virtual office GST compliance, or commercial franchise partnerships? Our advisory team is available 7 days a week.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Col: Contact Info & Addresses (1 col) */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black text-gray-900 font-sans">Contact Details</h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Direct communication channels.</p>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="space-y-3">
                <a
                  href={`tel:${settings.phone}`}
                  className="p-4 rounded-xl bg-[#FAF9F6] border border-gray-200 flex items-center gap-3.5 hover:border-[#C91D24] transition-colors group block"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C91D24] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-medium">Direct Telephone</span>
                    <div className="text-sm font-bold text-gray-900 group-hover:text-[#C91D24]">{settings.phone}</div>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#FAF9F6] border border-gray-200 flex items-center gap-3.5 hover:border-[#25D366] transition-colors group block"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-medium">WhatsApp Advisory</span>
                    <div className="text-sm font-bold text-gray-900 group-hover:text-emerald-600">
                      +{settings.whatsappNumber}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${settings.email}`}
                  className="p-4 rounded-xl bg-[#FAF9F6] border border-gray-200 flex items-center gap-3.5 hover:border-[#0C0E12] transition-colors group block"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0C0E12] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-medium">Corporate Email</span>
                    <div className="text-sm font-bold text-gray-900">{settings.email}</div>
                  </div>
                </a>
              </div>

              {/* Addresses Box */}
              <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-gray-200 space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C91D24]">
                    <MapPin className="w-3.5 h-3.5" /> Workspace Center
                  </div>
                  <p className="text-xs text-gray-800 leading-relaxed font-semibold">
                    {settings.operationalAddress}
                  </p>
                </div>

                <div className="space-y-1 pt-3 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600">
                    <Building2 className="w-3.5 h-3.5" /> Corporate Desk
                  </div>
                  <p className="text-xs text-gray-800 leading-relaxed font-semibold">
                    {settings.corporateAddress}
                  </p>
                </div>

                <div className="space-y-1 pt-3 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600">
                    <Clock className="w-3.5 h-3.5" /> Operational Hours
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">{settings.officeHours}</p>
                </div>
              </div>
            </div>

            {/* Right Col: Lead Form (2 cols) */}
            <div className="lg:col-span-2">
              <LeadForm
                defaultService="General Enquiry"
                title="Send an Online Enquiry"
                subtitle="Fill in your requirements and our team will get in touch promptly."
                source="Contact Page"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
