import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentSession } from '@/lib/auth';

export async function GET() {
  const session = await getCurrentSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const leads = db.getLeads();
  const siteVisits = db.getSiteVisits();
  const franchiseApps = db.getFranchiseApplications();

  return NextResponse.json({
    success: true,
    data: {
      leads,
      siteVisits,
      franchiseApps,
    },
  });
}

export async function PATCH(request: Request) {
  const session = await getCurrentSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, type = 'lead', ...updates } = body;

    if (!id) {
      return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
    }

    let updated;
    if (type === 'visit') {
      updated = db.updateSiteVisit(id, updates);
    } else if (type === 'franchise') {
      updated = db.updateFranchiseApplication(id, updates);
    } else {
      updated = db.updateLead(id, updates);
    }

    if (!updated) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updated });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const session = await getCurrentSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
    }

    db.deleteLead(id);
    return NextResponse.json({ success: true, message: 'Lead deleted' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
