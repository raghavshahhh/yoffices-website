import { db } from '@/lib/db';
import { ContactPageClient } from '@/components/contact/ContactPageClient';

export const metadata = {
  title: 'Contact Yoffices | Gurugram Workspaces & Corporate Desk',
  description:
    'Get in touch with Yoffices Gurgaon team. Operational center in Sector 45, Corporate desk in Sector 32. Phone, WhatsApp, email, and visit booking.',
};

export default function ContactPage() {
  const settings = db.getSiteSettings();

  return <ContactPageClient settings={settings} />;
}
