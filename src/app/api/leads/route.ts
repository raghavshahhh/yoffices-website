import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { leadSchema } from '@/lib/validations';

export async function GET() {
  const leads = db.getLeads();
  return NextResponse.json({ success: true, data: leads });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = leadSchema.parse(body);

    const newLead = db.createLead({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      company: validatedData.company || null,
      service: validatedData.service,
      location: validatedData.location || null,
      teamSize: validatedData.teamSize || null,
      budget: validatedData.budget || null,
      message: validatedData.message || null,
      source: validatedData.source || 'Website Form',
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your enquiry has been received. Our Yoffices workspace consultant will connect with you within 2 hours.',
      data: newLead,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.errors ? error.errors[0]?.message : (error.message || 'Failed to submit enquiry'),
      },
      { status: 400 }
    );
  }
}
