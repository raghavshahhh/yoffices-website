import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumberIndian(amount: number): string {
  return new Intl.NumberFormat('en-IN').format(amount);
}

export function getWhatsAppUrl(phone: string, text: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

export function getYouTubeThumbnail(videoIdOrUrl: string): string {
  let videoId = videoIdOrUrl;
  if (videoIdOrUrl.includes('youtube.com') || videoIdOrUrl.includes('youtu.be')) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = videoIdOrUrl.match(regExp);
    if (match && match[2].length === 11) {
      videoId = match[2];
    }
  }
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export function extractYouTubeId(url: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : url;
}
