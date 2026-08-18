import { db } from '@/lib/db';
import { WorkspaceDetailClient } from '@/components/workspaces/WorkspaceDetailClient';

export const metadata = {
  title: 'Meeting & Board Rooms for Rent in Gurgaon | Yoffices',
  description:
    'Book soundproofed 4-seater to 16-seater conference rooms and boardrooms in Sector 45 & 32 Gurgaon. 4K displays, video conferencing, high-speed Wi-Fi, and beverage service.',
};

export default function MeetingRoomsPage() {
  const ws = db.getWorkspaceBySlug('meeting-rooms') || {
    id: 'ws-4',
    name: 'Meeting & Board Rooms',
    slug: 'meeting-rooms',
    shortDesc: 'Acoustic presentation & video conferencing suites for 4 to 18 persons.',
    fullDesc: 'High-definition conference suites equipped with 4K UHD presentation screens, wide-angle video conference cameras, ceiling microphone arrays, magnetic glass whiteboards, and attentive beverage service.',
    startingPrice: '₹499',
    priceUnit: 'hour',
    heroImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80',
    idealFor: 'Client pitches, board reviews, investor presentations, agile scrums, and team interviews.',
    features: [
      '4K Ultra HD Display & Wireless Screen Casting',
      'Wide-Angle HD Video Conferencing Hardware',
      'Acoustic Soundproofing & Double Glazed Glass',
      'Magnetic Glass Whiteboards & Markers Provided',
      'Attentive On-Site Hospitality & Beverage Attendant',
      'Flexible Hourly, Half-Day, and Full-Day Slots',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80',
    ],
    amenities: ['4K Screen', 'Video Conf', 'Acoustic Glass', 'Beverage Service'],
    isFeatured: true,
    published: true,
    order: 4,
  };

  const locations = db.getLocations();

  return <WorkspaceDetailClient workspace={ws} locations={locations} />;
}
