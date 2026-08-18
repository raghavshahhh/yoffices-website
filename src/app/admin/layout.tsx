'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  LayoutDashboard,
  Users,
  Calendar,
  TrendingUp,
  Building2,
  MapPin,
  Coins,
  Video,
  BookOpen,
  MessageSquare,
  HelpCircle,
  Settings,
  LogOut,
  ExternalLink,
  Shield,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // If on login page, don't render admin chrome
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch {
      router.push('/admin/login');
    }
  };

  const navSections = [
    {
      title: 'Operations & Leads',
      items: [
        { label: 'Dashboard Overview', href: '/admin', icon: LayoutDashboard },
        { label: 'All Leads Pipeline', href: '/admin/leads', icon: Users },
        { label: 'Site Visits', href: '/admin/site-visits', icon: Calendar },
        { label: 'Franchise Enquiries', href: '/admin/franchise-leads', icon: TrendingUp },
      ],
    },
    {
      title: 'Website CMS',
      items: [
        { label: 'Homepage Editor', href: '/admin/cms/homepage', icon: Layers },
        { label: 'Workspaces & Plans', href: '/admin/cms/workspaces', icon: Building2 },
        { label: 'Centers & Locations', href: '/admin/cms/locations', icon: MapPin },
        { label: 'Franchise Models & Terms', href: '/admin/cms/franchise', icon: Coins },
        { label: 'Media & YouTube Videos', href: '/admin/cms/media', icon: Video },
        { label: 'Blog & SEO Articles', href: '/admin/cms/blog', icon: BookOpen },
        { label: 'Testimonials', href: '/admin/cms/testimonials', icon: MessageSquare },
        { label: 'FAQs Manager', href: '/admin/cms/faqs', icon: HelpCircle },
      ],
    },
    {
      title: 'Platform',
      items: [
        { label: 'Global Settings & Contacts', href: '/admin/settings', icon: Settings },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0C0E12] text-gray-200 flex flex-col font-sans">
      {/* Top Header */}
      <header className="h-16 bg-[#14171F] border-b border-[#222634] px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#C91D24] text-white font-bold flex items-center justify-center text-sm shadow-md">
              Y
            </div>
            <span className="font-black text-lg text-white tracking-tight">
              YOFFICES<span className="text-[#C91D24]">.</span> ADMIN
            </span>
          </Link>
          <span className="hidden sm:inline-block text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-red-900/40 text-red-300 border border-red-800/50">
            Unified CMS Control Center
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white px-3 py-1.5 rounded-lg bg-[#1B202B] border border-[#2A3040] transition-colors"
          >
            <span>Live Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="flex items-center gap-2 pl-2 border-l border-[#222634]">
            <div className="w-8 h-8 rounded-full bg-[#1B202B] border border-[#2A3040] flex items-center justify-center text-xs font-bold text-[#C5A880]">
              SA
            </div>
            <div className="hidden md:block text-left text-xs">
              <div className="font-bold text-white leading-none">Super Admin</div>
              <div className="text-[10px] text-gray-400">admin@yoffices.com</div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#1B202B] transition-colors"
            title="Sign Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-[#14171F] border-r border-[#222634] hidden lg:flex flex-col justify-between p-4 overflow-y-auto shrink-0">
          <div className="space-y-6">
            {navSections.map((section, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 px-3 mb-2">
                  {section.title}
                </div>
                {section.items.map((item) => {
                  const isActive =
                    item.href === '/admin'
                      ? pathname === '/admin'
                      : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all group',
                        isActive
                          ? 'bg-[#C91D24] text-white shadow-md'
                          : 'text-gray-400 hover:text-white hover:bg-[#1B202B]'
                      )}
                    >
                      <item.icon
                        className={cn(
                          'w-4 h-4 shrink-0 transition-colors',
                          isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                        )}
                      />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#222634] text-[11px] text-gray-500">
            <div>Yoffices CMS v2.6.0</div>
            <div>Gurgaon Hubs Edition</div>
          </div>
        </aside>

        {/* Mobile Navigation Tabs for Small Screens */}
        <div className="lg:hidden fixed bottom-0 inset-x-0 bg-[#14171F] border-t border-[#222634] z-30 flex items-center justify-around py-2">
          <Link
            href="/admin"
            className={cn(
              'flex flex-col items-center gap-1 text-[10px]',
              pathname === '/admin' ? 'text-[#C91D24] font-bold' : 'text-gray-400'
            )}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/admin/leads"
            className={cn(
              'flex flex-col items-center gap-1 text-[10px]',
              pathname.startsWith('/admin/leads') ? 'text-[#C91D24] font-bold' : 'text-gray-400'
            )}
          >
            <Users className="w-4 h-4" />
            <span>Leads</span>
          </Link>
          <Link
            href="/admin/site-visits"
            className={cn(
              'flex flex-col items-center gap-1 text-[10px]',
              pathname.startsWith('/admin/site-visits') ? 'text-[#C91D24] font-bold' : 'text-gray-400'
            )}
          >
            <Calendar className="w-4 h-4" />
            <span>Visits</span>
          </Link>
          <Link
            href="/admin/cms/homepage"
            className={cn(
              'flex flex-col items-center gap-1 text-[10px]',
              pathname.startsWith('/admin/cms') ? 'text-[#C91D24] font-bold' : 'text-gray-400'
            )}
          >
            <Layers className="w-4 h-4" />
            <span>CMS</span>
          </Link>
          <Link
            href="/admin/settings"
            className={cn(
              'flex flex-col items-center gap-1 text-[10px]',
              pathname.startsWith('/admin/settings') ? 'text-[#C91D24] font-bold' : 'text-gray-400'
            )}
          >
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </Link>
        </div>

        {/* Main Content Pane */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 pb-24 lg:pb-12 bg-[#0C0E12]">
          {children}
        </main>
      </div>
    </div>
  );
}
