'use client';

import { usePathname } from 'next/navigation';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/utils';
import { INITIAL_SITE_SETTINGS } from '@/lib/constants';

export function WhatsAppButton() {
  const pathname = usePathname();

  // Determine contextual pre-filled message
  let message = INITIAL_SITE_SETTINGS.whatsappDefaultMsg;

  if (pathname.includes('/franchise')) {
    message = 'Hi Yoffices, I’m interested in the franchise opportunity.';
  } else if (pathname.includes('/virtual-office')) {
    message = 'Hi Yoffices, I’m interested in a virtual office for GST / business address.';
  } else if (pathname.includes('/work-stay') || pathname.includes('/dormitory')) {
    message = 'Hi Yoffices, I’m interested in your Work + Stay dormitory accommodation.';
  } else if (pathname.includes('/workspaces') || pathname.includes('/private-office')) {
    message = 'Hi Yoffices, I’m interested in private office / workstation options in Gurgaon.';
  } else if (pathname.includes('/book-a-visit')) {
    message = 'Hi Yoffices, I’d like to schedule a physical site visit to inspect your center.';
  }

  const whatsappUrl = getWhatsAppUrl(INITIAL_SITE_SETTINGS.whatsappNumber, message);

  // Hide on admin routes
  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center group">
      <div className="hidden sm:block mr-2.5 px-3 py-1.5 rounded-xl bg-white text-xs font-semibold text-gray-800 shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with Yoffices Advisor
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366]" />
      </a>
    </aside>
  );
}
