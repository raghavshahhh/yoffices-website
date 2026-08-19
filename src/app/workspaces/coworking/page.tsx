import { db } from '@/lib/db';
import { WorkspaceDetailClient } from '@/components/workspaces/WorkspaceDetailClient';

export const metadata = {
  title: 'Coworking Space & Flexi Hot Desks in Gurgaon | Yoffices',
  description:
    'Experience high-energy collaborative coworking and flexible day passes in Gurgaon Sector 45. Ergonomic seating, high-speed Wi-Fi, and networking masterclasses.',
};

export default function CoworkingPage() {
  const ws = db.getWorkspaceBySlug('coworking') || {
    id: 'ws-3',
    name: 'Flexi Coworking Desks',
    slug: 'coworking',
    shortDesc: 'Agile hot desking across vibrant open lounges and quiet zones.',
    fullDesc: 'Ultimate agility for modern freelancers, digital creators, and remote teams. Plug into any open desk across our sunlit collaborative lounges with instant 1Gbps Wi-Fi, free artisanal beverages, and meeting room credits.',
    startingPrice: '₹5,000',
    priceUnit: 'desk / month (or ₹499/day)',
    heroImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
    idealFor: 'Digital nomads, freelance consultants, startup founders, and hybrid teams seeking flexible access.',
    features: [
      'Agile Hot Desk Seating Across Premium Lounges',
      'Dual 1Gbps Redundant High-Speed Wi-Fi',
      'Unlimited Fresh Espresso, Chai & Purified Water',
      'Acoustic Calling Booths for Private Phone Calls',
      'Community Networking Events & Masterclasses',
      'Flexible Daily, Weekly, and Monthly Passes',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
    ],
    amenities: ['Hot Desking', '1Gbps Wi-Fi', 'Artisan Pantry', 'Events Access'],
    isFeatured: true,
    published: true,
    order: 3,
  };

  const locations = db.getLocations();

  return <WorkspaceDetailClient workspace={ws} locations={locations} />;
}
