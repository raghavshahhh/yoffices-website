import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import { WorkspaceDetailClient } from '@/components/workspaces/WorkspaceDetailClient';

interface WorkspacePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: WorkspacePageProps) {
  const { slug } = await params;
  const ws = db.getWorkspaceBySlug(slug);

  if (!ws) {
    return { title: 'Workspace Not Found | Yoffices' };
  }

  return {
    title: `${ws.name} in Gurgaon Sector 45 & 32 | Yoffices`,
    description: ws.shortDesc,
  };
}

export default async function DynamicWorkspacePage({ params }: WorkspacePageProps) {
  const { slug } = await params;
  const ws = db.getWorkspaceBySlug(slug);

  if (!ws) {
    notFound();
  }

  const locations = db.getLocations();

  return <WorkspaceDetailClient workspace={ws} locations={locations} />;
}
