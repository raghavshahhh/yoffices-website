import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { franchiseApplicationSchema } from '@/lib/validations';

export async function GET() {
  const apps = db.getFranchiseApplications();
  return NextResponse.json({ success: true, data: apps });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = franchiseApplicationSchema.parse(body);

    const newApplication = db.createFranchiseApplication({
      name: validatedData.name,
      phone: validatedData.phone,
      email: validatedData.email,
      city: validatedData.city,
      investmentRange: validatedData.investmentRange,
      preferredModel: validatedData.preferredModel,
      hasProperty: Boolean(validatedData.hasProperty),
      propertySize: validatedData.propertySize || null,
      propertyLocation: validatedData.propertyLocation || null,
      message: validatedData.message || null,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for your franchise application. The Yoffices Corporate Expansion team will contact you to schedule a confidential partner presentation.',
      data: newApplication,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.errors ? error.errors[0]?.message : (error.message || 'Failed to submit franchise application'),
      },
      { status: 400 }
    );
  }
}
