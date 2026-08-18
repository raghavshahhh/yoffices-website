import { db } from '@/lib/db';
import { WorkspacesListClient } from '@/components/workspaces/WorkspacesListClient';

export const metadata = {
  title: 'Flexible Workspaces & Private Office Cabins in Gurgaon | Yoffices',
  description:
    'Discover private lockable office cabins, dedicated workstations, flexi coworking desks, and acoustic meeting rooms at Yoffices Gurgaon Sector 45 & Sector 32.',
};

export default function WorkspacesPage() {
  const workspaces = db.getWorkspaces();

  return <WorkspacesListClient workspaces={workspaces} />;
}
