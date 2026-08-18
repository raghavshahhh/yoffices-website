import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { siteVisitSchema } from '@/lib/validations';

export async function GET() {
  const visits = db.getSiteVisits();
  return NextResponse.json({ success: true, data: visits });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = siteVisitSchema.parse(body);

    const newVisit = db.createSiteVisit({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      company: validatedData.company || null,
      teamSize: validatedData.teamSize || null,
      workspaceType: validatedData.workspaceType || null,
      location: validatedData.location,
      preferredDate: validatedData.preferredDate,
      preferredTime: validatedData.preferredTime,
      message: validatedData.message || null,
    });

    return NextResponse.json({
      success: true,
      message: 'Your site visit has been scheduled! Our Center Manager will call to confirm your arrival.',
      data: newVisit,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.errors ? error.errors[0]?.message : (error.message || 'Failed to book site visit'),
      },
      { status: 400 }
    );
  }
}
