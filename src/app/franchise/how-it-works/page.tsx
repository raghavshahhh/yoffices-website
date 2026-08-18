import { db } from '@/lib/db';
import { FranchiseHowItWorksClient } from '@/components/franchise/FranchiseHowItWorksClient';

export const metadata = {
  title: 'Franchise How It Works & Terms | Yoffices',
  description:
    'Step-by-step process of the Yoffices commercial franchise agreement: Principal payment, 3 post-dated security cheques, monthly rental disbursements, and 3-year maturity settlement.',
};

export default function FranchiseHowItWorksPage() {
  const terms = db.getFranchiseTerms();

  return <FranchiseHowItWorksClient terms={terms} />;
}
