import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentSession } from '@/lib/auth';
import { WorkspaceTypeData } from '@/types';

export async function GET() {
  const workspaces = db.getAllWorkspaces();
  return NextResponse.json({ success: true, data: workspaces });
}

export async function POST(request: Request) {
  const session = await getCurrentSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await request.json();
    const workspace: WorkspaceTypeData = {
      ...body,
      id: body.id || `ws-${Date.now()}`,
    };
    db.saveWorkspace(workspace);
    return NextResponse.json({ success: true, data: workspace });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
