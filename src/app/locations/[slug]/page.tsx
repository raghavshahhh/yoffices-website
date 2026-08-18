import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import { LocationDetailClient } from '@/components/locations/LocationDetailClient';

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = db.getLocationBySlug(slug);

  if (!location) {
    return { title: 'Location Not Found | Yoffices' };
  }

  return {
    title: `${location.name} | Flexible Workspaces & Offices`,
    description: `Explore workspace options, amenities, photos, and book tours at ${location.name} in ${location.area}.`,
  };
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = db.getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return <LocationDetailClient location={location} />;
}
