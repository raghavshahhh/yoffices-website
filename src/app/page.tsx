import { db } from '@/lib/db';
import { HomeClient } from '@/components/home/HomeClient';

export const metadata = {
  title: 'Yoffices | Premium Flexible Workspaces & Commercial Franchise in Gurgaon',
  description:
    'Spaces crafted with intention. Acoustic private offices, dedicated workstations, and asset-backed franchise yields in Gurgaon Sector 45 & Sector 32.',
};

export default function HomePage() {
  const workspaces = db.getAllWorkspaces();
  const locations = db.getAllLocations();
  const franchiseModels = db.getFranchiseModels();
  const mediaVideos = db.getMediaVideos();
  const blogPosts = db.getBlogPosts();
  const testimonials = db.getTestimonials();
  const faqs = db.getFAQs();
  const settings = db.getSiteSettings();

  return (
    <HomeClient
      workspaces={workspaces}
      locations={locations}
      franchiseModels={franchiseModels}
      mediaVideos={mediaVideos}
      blogPosts={blogPosts}
      testimonials={testimonials}
      faqs={faqs}
      settings={settings}
    />
  );
}
