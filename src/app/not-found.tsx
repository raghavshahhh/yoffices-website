import Link from 'next/link';
import { ArrowLeft, Building2 } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6 bg-[#FAF9F6] text-center">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#0C0E12] text-white font-black text-2xl flex items-center justify-center mx-auto shadow-xl">
          <span className="text-[#C91D24]">404</span>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-gray-900 font-sans">Page Not Found</h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            The workspace, center, or resource you are looking for might have been relocated or updated.
          </p>
        </div>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#C91D24] text-white text-xs font-bold shadow-md hover:bg-[#A3151B] transition-colors inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/workspaces"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0C0E12] text-white text-xs font-bold hover:bg-black transition-colors"
          >
            <span>Explore Workspaces</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
