import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentSession } from '@/lib/auth';

export async function GET() {
  const testimonials = db.getAllTestimonials();
  return NextResponse.json({ success: true, data: testimonials });
}

export async function POST(request: Request) {
  const session = await getCurrentSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await request.json();
    db.saveTestimonials(body);
    return NextResponse.json({ success: true, message: 'Testimonials updated' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
