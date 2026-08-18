import type { Metadata } from 'next';
import { db } from '@/lib/db';
import { TestimonialsPageClient } from '@/components/testimonials/TestimonialsPageClient';

export const metadata: Metadata = {
  title: 'Member Reviews & Google Ratings | Yoffices Gurgaon',
  description:
    'Read verified reviews and Google Business ratings from enterprise teams, startup founders, and commercial franchise partners at Yoffices Sector 45 & 32 Gurugram.',
};

export default function TestimonialsPage() {
  const testimonials = db.getTestimonials();

  return <TestimonialsPageClient initialTestimonials={testimonials} />;
}
