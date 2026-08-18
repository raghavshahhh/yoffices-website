import { db } from '@/lib/db';
import { WorkspaceDetailClient } from '@/components/workspaces/WorkspaceDetailClient';

export const metadata = {
  title: 'Dedicated Workstations & Fixed Desks in Gurgaon | Yoffices',
  description:
    'Reserve your own dedicated workstation desk in Sector 45 Gurgaon. Ergonomic chairs, lockable storage pedestals, high-speed fiber internet, and pantry access.',
};

export default function WorkstationsPage() {
  const ws = db.getWorkspaceBySlug('workstations') || {
    id: 'ws-2',
    name: 'Dedicated Workstations',
    slug: 'workstations',
    shortDesc: 'Personal assigned desks with lockable drawers in open workspace floor.',
    fullDesc: 'Your own reserved desk equipped with high-back ergonomic mesh seating, private lockable pedestal, universal power ports, high-speed fiber internet, and seamless access to communal phone booths and meeting suites.',
    startingPrice: '₹5,500',
    priceUnit: 'desk / month',
    heroImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
    idealFor: 'Solo founders, remote software developers, financial analysts, and independent consultants.',
    features: [
      'Assigned Fixed Desk with 24/7 Access Rights',
      'Personal Under-Desk Lockable Storage Unit',
      'Dual-Band High-Speed Wi-Fi & LAN Option',
      'Unlimited Fresh Pantry Coffee, Tea & Filtered Water',
      'Access to Soundproof Phone Booths for Calls',
      'Discounted Meeting & Presentation Room Rates',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
    ],
    amenities: ['Fixed Desk', 'Lockable Storage', '1Gbps Wi-Fi', 'Phone Booths'],
    isFeatured: true,
    published: true,
    order: 2,
  };

  const locations = db.getLocations();

  return <WorkspaceDetailClient workspace={ws} locations={locations} />;
}
