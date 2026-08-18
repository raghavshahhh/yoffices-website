import { MetadataRoute } from 'next';
import { db } from '@/lib/db';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoffices.com';

  const staticRoutes = [
    '',
    '/workspaces',
    '/workspaces/private-office',
    '/workspaces/workstations',
    '/workspaces/coworking',
    '/workspaces/meeting-rooms',
    '/virtual-office',
    '/shared-employee',
    '/work-stay',
    '/work-stay/dormitory',
    '/locations',
    '/franchise',
    '/franchise/models',
    '/franchise/how-it-works',
    '/franchise/apply',
    '/about',
    '/media',
    '/blog',
    '/contact',
    '/book-a-visit',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const locations = db.getLocations().map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPosts = db.getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt).toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const mediaVideos = db.getMediaVideos().map((video) => ({
    url: `${baseUrl}/media/${video.slug}`,
    lastModified: new Date(video.publishedAt).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...locations, ...blogPosts, ...mediaVideos];
}
