import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AnnouncementBanner } from '@/components/layout/AnnouncementBanner';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { INITIAL_SITE_SETTINGS } from '@/lib/constants';

export const metadata: Metadata = {
  title: {
    default: 'Yoffices | Premium Flexible Workspaces & Business Solutions in Gurgaon',
    template: '%s | Yoffices Gurgaon',
  },
  description:
    'Experience luxury private offices, dedicated workstations, meeting rooms, virtual office GST compliance, and franchise business opportunities in Gurgaon Sector 45 & Sector 32.',
  keywords: [
    'Coworking space Gurgaon',
    'Private office Sector 45 Gurugram',
    'Virtual office for GST Gurgaon',
    'Work and stay co-living Gurgaon',
    'Commercial real estate franchise',
    'Yoffices Gurgaon',
    'Meeting rooms Gurgaon',
  ],
  authors: [{ name: 'Yoffices Team' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Yoffices | Work Better. Grow Faster.',
    description:
      'Turnkey private offices, ergonomic workstations, and high-yield commercial franchise models in Gurugram.',
    siteName: 'Yoffices',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#C91D24',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#FAF9F6] text-gray-900 selection:bg-[#C91D24] selection:text-white font-sans">
        <AnnouncementBanner
          enabled={INITIAL_SITE_SETTINGS.bannerEnabled}
          text={INITIAL_SITE_SETTINGS.bannerText}
          link={INITIAL_SITE_SETTINGS.bannerLink}
        />
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
