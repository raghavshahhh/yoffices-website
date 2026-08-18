'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RotateCcw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled app error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6 bg-[#FAF9F6] text-center">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-red-100 text-[#C91D24] flex items-center justify-center mx-auto shadow-md">
          <AlertCircle className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 font-sans">
            Something Went Wrong
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            An unexpected error occurred while loading this page. Our technical team has been notified.
          </p>
        </div>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#C91D24] text-white text-xs font-bold shadow-md hover:bg-[#A3151B] transition-colors inline-flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0C0E12] text-white text-xs font-bold hover:bg-black transition-colors"
          >
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
