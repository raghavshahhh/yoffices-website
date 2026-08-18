import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { TestimonialData } from '@/types';

export async function GET() {
  const testimonials = db.getTestimonials();
  return NextResponse.json({ success: true, data: testimonials });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, role, company, content, rating, workspaceType } = body;

    if (!name || !content) {
      return NextResponse.json(
        { error: 'Name and review content are required.' },
        { status: 400 }
      );
    }

    const newTestimonial: TestimonialData = {
      id: `test-user-${Date.now()}`,
      name: name.trim(),
      role: role?.trim() || 'Verified Member',
      company: company?.trim() || 'Gurgaon Community',
      content: content.trim(),
      rating: Number(rating) || 5,
      workspaceType: workspaceType || 'Managed Space Member',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      featured: true,
      published: true,
    };

    db.addTestimonial(newTestimonial);

    return NextResponse.json({
      success: true,
      message: 'Review submitted successfully!',
      data: newTestimonial,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
