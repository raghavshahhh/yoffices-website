'use client';

import { useState } from 'react';
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
  Menu,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        { label: 'Franchise Inquiries', href: '/admin/franchise-leads', icon: TrendingUp },
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
    <div className="min-h-screen bg-[#F4F5F7] text-gray-900 flex flex-col font-sans">
      {/* Top Header */}
      <header className="h-16 bg-white border-b border-gray-200 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-40 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link href="/admin" className="flex items-center gap-3">
            <img
              src="/images/logo-dark.png"
              alt="YOFFICES ADMIN"
              className="h-7 w-auto object-contain"
            />
            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-red-50 text-[#C91D24] border border-red-200">
              Admin Portal
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-200 transition-colors font-medium"
          >
            <span>Live Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
            <div className="w-8 h-8 rounded-full bg-red-100 border border-red-200 flex items-center justify-center text-xs font-bold text-[#C91D24]">
              SA
            </div>
            <div className="hidden md:block text-left text-xs">
              <div className="font-bold text-gray-900 leading-none">Super Admin</div>
              <div className="text-[10px] text-gray-500">admin@yoffices.com</div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="p-2 rounded-xl text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
            title="Sign Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col justify-between p-4 overflow-y-auto shrink-0 shadow-xs">
          <div className="space-y-6">
            {navSections.map((section, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-3 mb-2">
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
                        'flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group',
                        isActive
                          ? 'bg-[#C91D24] text-white shadow-sm'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      )}
                    >
                      <item.icon
                        className={cn(
                          'w-4 h-4 shrink-0 transition-colors',
                          isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'
                        )}
                      />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-200 text-[11px] text-gray-400 font-mono">
            <div>Yoffices CMS v2.6.0</div>
            <div>Gurgaon Hubs Edition</div>
          </div>
        </aside>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-xs"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="relative w-72 max-w-full bg-white h-full p-4 overflow-y-auto flex flex-col justify-between shadow-2xl z-10">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="font-black text-sm text-gray-900">NAVIGATION MENU</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded-lg text-gray-500 hover:bg-gray-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {navSections.map((section, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-3 mb-1">
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
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            'flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all',
                            isActive
                              ? 'bg-[#C91D24] text-white shadow-sm'
                              : 'text-gray-600 hover:bg-gray-100'
                          )}
                        >
                          <item.icon className="w-4 h-4 shrink-0" />
                          <span>{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200 text-[11px] text-gray-400">
                <div>Yoffices CMS v2.6.0</div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Bottom Navigation Bar */}
        <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 z-30 flex items-center justify-around py-2 shadow-lg">
          <Link
            href="/admin"
            className={cn(
              'flex flex-col items-center gap-1 text-[10px]',
              pathname === '/admin' ? 'text-[#C91D24] font-bold' : 'text-gray-500'
            )}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/admin/leads"
            className={cn(
              'flex flex-col items-center gap-1 text-[10px]',
              pathname.startsWith('/admin/leads') ? 'text-[#C91D24] font-bold' : 'text-gray-500'
            )}
          >
            <Users className="w-4 h-4" />
            <span>Leads</span>
          </Link>
          <Link
            href="/admin/site-visits"
            className={cn(
              'flex flex-col items-center gap-1 text-[10px]',
              pathname.startsWith('/admin/site-visits') ? 'text-[#C91D24] font-bold' : 'text-gray-500'
            )}
          >
            <Calendar className="w-4 h-4" />
            <span>Visits</span>
          </Link>
          <Link
            href="/admin/franchise-leads"
            className={cn(
              'flex flex-col items-center gap-1 text-[10px]',
              pathname.startsWith('/admin/franchise-leads') ? 'text-[#C91D24] font-bold' : 'text-gray-500'
            )}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Franchise</span>
          </Link>
          <Link
            href="/admin/settings"
            className={cn(
              'flex flex-col items-center gap-1 text-[10px]',
              pathname.startsWith('/admin/settings') ? 'text-[#C91D24] font-bold' : 'text-gray-500'
            )}
          >
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </Link>
        </div>

        {/* Main Content Pane */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 pb-24 lg:pb-12 bg-[#F4F5F7]">
          {children}
        </main>
      </div>
    </div>
  );
}
