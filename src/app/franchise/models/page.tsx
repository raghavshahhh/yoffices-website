import { db } from '@/lib/db';
import { FranchiseModelsClient } from '@/components/franchise/FranchiseModelsClient';

export const metadata = {
  title: 'Franchise Investment Models (Desk, Dormitory, Cabin) | Yoffices',
  description:
    'Detailed breakdown of the 3 official Yoffices franchise models: Desk (₹5L), Dormitory (₹11L), and Cabin (₹25L) with 3-year rental schedules.',
};

export default function FranchiseModelsPage() {
  const models = db.getFranchiseModels();

  return <FranchiseModelsClient models={models} />;
}
