import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentSession } from '@/lib/auth';
import { BlogPostData } from '@/types';

export async function GET() {
  const posts = db.getAllBlogPosts();
  return NextResponse.json({ success: true, data: posts });
}

export async function POST(request: Request) {
  const session = await getCurrentSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await request.json();
    const post: BlogPostData = {
      ...body,
      id: body.id || `blog-${Date.now()}`,
      tags: Array.isArray(body.tags) ? body.tags : (body.tags ? body.tags.split(',').map((t: string) => t.trim()) : []),
      publishedAt: body.publishedAt || new Date().toISOString(),
    };

    db.saveBlogPost(post);
    return NextResponse.json({ success: true, data: post });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const session = await getCurrentSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    db.deleteBlogPost(id);
    return NextResponse.json({ success: true, message: 'Blog post deleted' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
