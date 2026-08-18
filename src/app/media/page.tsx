import { db } from '@/lib/db';
import { MediaListClient } from '@/components/media/MediaListClient';

export const metadata = {
  title: 'Media & Video Ecosystem | Yoffices Gurugram',
  description:
    'Watch video tours, franchise rental income breakdowns, virtual office guides, and coworking interviews from Yoffices.',
};

export default function MediaPage() {
  const videos = db.getMediaVideos();

  return <MediaListClient videos={videos} />;
}
