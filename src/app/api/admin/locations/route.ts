import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentSession } from '@/lib/auth';
import { LocationData } from '@/types';

export async function GET() {
  const locations = db.getAllLocations();
  return NextResponse.json({ success: true, data: locations });
}

export async function POST(request: Request) {
  const session = await getCurrentSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const newLocation: LocationData = {
      ...body,
      id: body.id || `loc-${Date.now()}`,
      order: body.order || 0,
      published: body.published !== undefined ? body.published : true,
    };

    db.saveLocation(newLocation);
    return NextResponse.json({ success: true, data: newLocation });
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
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    db.deleteLocation(id);
    return NextResponse.json({ success: true, message: 'Location deleted' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
