import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Space_Mono } from 'next/font/google';
import './globals.css';
import { PublicChromeWrapper } from '@/components/layout/PublicChromeWrapper';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

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
    <html lang="en" className={`h-full antialiased ${jakarta.variable} ${spaceMono.variable}`}>
      <body className="min-h-full flex flex-col bg-[#F0EFE9] text-gray-900 selection:bg-[#C91D24] selection:text-white font-sans">
        <PublicChromeWrapper>{children}</PublicChromeWrapper>
      </body>
    </html>
  );
}
