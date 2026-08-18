import type { Metadata } from 'next';
import { db } from '@/lib/db';
import { TestimonialsPageClient } from '@/components/testimonials/TestimonialsPageClient';

export const metadata: Metadata = {
  title: 'Member Reviews & Ratings | Yoffices Gurgaon',
  description:
    'Read verified reviews and ratings from members and partners operating out of Yoffices Gurgaon.',
};

export default function ReviewsPage() {
  const testimonials = db.getTestimonials();

  return <TestimonialsPageClient initialTestimonials={testimonials} />;
}
