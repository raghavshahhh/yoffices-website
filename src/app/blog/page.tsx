import { db } from '@/lib/db';
import { BlogListClient } from '@/components/blog/BlogListClient';

export const metadata = {
  title: 'Workspace, Real Estate & Business Blog | Yoffices Gurugram',
  description:
    'Read insightful guides on coworking spaces, private offices in Gurgaon, GST virtual office compliance, and commercial franchise investments.',
};

export default function BlogPage() {
  const posts = db.getBlogPosts();

  return <BlogListClient posts={posts} />;
}
