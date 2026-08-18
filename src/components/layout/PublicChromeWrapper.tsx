'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AnnouncementBanner } from '@/components/layout/AnnouncementBanner';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { LeadPopupModal } from '@/components/ui/LeadPopupModal';
import { INITIAL_SITE_SETTINGS } from '@/lib/constants';

interface PublicChromeWrapperProps {
  children: React.ReactNode;
}

export function PublicChromeWrapper({ children }: PublicChromeWrapperProps) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <main className="flex-1 flex flex-col w-full">{children}</main>;
  }

  return (
    <>
      <AnnouncementBanner
        enabled={INITIAL_SITE_SETTINGS.bannerEnabled}
        text={INITIAL_SITE_SETTINGS.bannerText}
        link={INITIAL_SITE_SETTINGS.bannerLink}
      />
      <Header />
      <main className="flex-1 flex flex-col w-full">{children}</main>
      <Footer />
      <WhatsAppButton />
      <LeadPopupModal />
    </>
  );
}
