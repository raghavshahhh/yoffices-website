import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentSession } from '@/lib/auth';
import { FranchiseModelData } from '@/types';

export async function GET() {
  const models = db.getAllFranchiseModels();
  const terms = db.getFranchiseTerms();
  return NextResponse.json({ success: true, data: { models, terms } });
}

export async function POST(request: Request) {
  const session = await getCurrentSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await request.json();
    const { type = 'model', data } = body;

    if (type === 'terms') {
      db.saveFranchiseTerms(data);
      return NextResponse.json({ success: true, message: 'Terms updated' });
    }

    const model: FranchiseModelData = {
      ...data,
      id: data.id || `franchise-${Date.now()}`,
      principal: Number(data.principal),
      monthlyRental: Number(data.monthlyRental),
      annualRental: Number(data.annualRental),
      threeYearRental: Number(data.threeYearRental),
      statedTotal: Number(data.statedTotal),
      validityYears: Number(data.validityYears || 3),
      securityChequesCount: Number(data.securityChequesCount || 3),
    };

    db.saveFranchiseModel(model);
    return NextResponse.json({ success: true, data: model });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
