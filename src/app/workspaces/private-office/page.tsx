import { db } from '@/lib/db';
import { WorkspaceDetailClient } from '@/components/workspaces/WorkspaceDetailClient';

export const metadata = {
  title: 'Private Office Cabins in Gurgaon Sector 45 & 32 | Yoffices',
  description:
    'Fully furnished lockable private office cabins for 3 to 50+ members in Gurgaon. Ergonomic furniture, acoustic soundproofing, meeting room credits, and 100% DG power.',
};

export default function PrivateOfficePage() {
  const ws = db.getWorkspaceBySlug('private-office') || {
    id: 'ws-1',
    name: 'Private Offices',
    slug: 'private-office',
    shortDesc: 'Acoustic lockable cabins for teams of 3 to 50+ members.',
    fullDesc: 'Enterprise-grade private office cabins with acoustic double-glazed glass partitions, dedicated biometric locks, redundant 1Gbps fiber internet, and complimentary conference room credits.',
    startingPrice: '₹25,000',
    priceUnit: 'lockable office / month',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    idealFor: 'Growing tech startups, corporate branches, legal firms, and funded ventures requiring physical privacy.',
    features: [
      'Lockable Private Cabin with Biometric / Key Access',
      'Ergonomic high-back mesh chairs & executive desks',
      'Complimentary Monthly Meeting Room Credits',
      'High-Speed Redundant Wi-Fi & Dedicated LAN Ports',
      'Daily Housekeeping, Sanitization & Waste Management',
      'Dedicated Receptionist & Client Greeter Support',
      'Business Address for GST / ROC / Company Registration',
      'Unlimited Gourmet Coffee, Tea & Filtered Water',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80',
    ],
    amenities: ['1Gbps Fiber', '100% DG Backup', 'Acoustic Cabins', 'RFID Biometrics'],
    isFeatured: true,
    published: true,
    order: 1,
  };

  const locations = db.getLocations();

  return <WorkspaceDetailClient workspace={ws} locations={locations} />;
}
