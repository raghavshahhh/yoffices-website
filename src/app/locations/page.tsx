import { db } from '@/lib/db';
import { LocationsListClient } from '@/components/locations/LocationsListClient';

export const metadata = {
  title: 'Yoffices Centers & Locations in Gurgaon | Flexible Workspace Hubs',
  description:
    'Explore Yoffices commercial workspace centers across Gurugram: Sector 45 Hub, Sector 32 Corporate Office, and upcoming centers.',
};

export default function LocationsPage() {
  const locations = db.getLocations();

  return <LocationsListClient locations={locations} />;
}
