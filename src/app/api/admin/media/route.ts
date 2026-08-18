import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentSession } from '@/lib/auth';
import { MediaVideoData } from '@/types';
import { extractYouTubeId, getYouTubeThumbnail } from '@/lib/utils';

export async function GET() {
  const videos = db.getAllMediaVideos();
  return NextResponse.json({ success: true, data: videos });
}

export async function POST(request: Request) {
  const session = await getCurrentSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await request.json();
    const ytId = extractYouTubeId(body.youtubeUrl);
    const video: MediaVideoData = {
      ...body,
      id: body.id || `video-${Date.now()}`,
      youtubeId: ytId,
      thumbnail: body.thumbnail || getYouTubeThumbnail(ytId),
      publishedAt: body.publishedAt || new Date().toISOString(),
    };

    db.saveMediaVideo(video);
    return NextResponse.json({ success: true, data: video });
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

    db.deleteMediaVideo(id);
    return NextResponse.json({ success: true, message: 'Video deleted' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
