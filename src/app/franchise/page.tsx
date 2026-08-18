import { db } from '@/lib/db';
import { FranchisePageClient } from '@/components/franchise/FranchisePageClient';

export const metadata = {
  title: 'Commercial Workspace Franchise Opportunity | Yoffices',
  description:
    'Explore asset-backed commercial real estate franchise opportunities with Yoffices. 3-year term models starting from ₹5 Lakhs with structured monthly rental disbursements.',
};

export default function FranchisePage() {
  const models = db.getFranchiseModels();
  const terms = db.getFranchiseTerms();

  return <FranchisePageClient models={models} terms={terms} />;
}
