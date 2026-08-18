'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Building2,
  ChevronDown,
  Menu,
  X,
  Briefcase,
  Users,
  DoorClosed,
  Compass,
  Home,
  FileCheck2,
  ArrowUpRight,
  TrendingUp,
  Coins,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const workspacesMenu = [
    {
      title: 'Private Offices',
      href: '/workspaces/private-office',
      desc: 'Lockable acoustic cabins for teams of 3 to 50+',
      icon: DoorClosed,
      tag: 'Popular',
    },
    {
      title: 'Dedicated Workstations',
      href: '/workspaces/workstations',
      desc: 'Assigned personal desks with lockable storage',
      icon: Briefcase,
    },
    {
      title: 'Flexi Coworking',
      href: '/workspaces/coworking',
      desc: 'Hot desking across premium open lounges',
      icon: Users,
    },
    {
      title: 'Meeting & Boardrooms',
      href: '/workspaces/meeting-rooms',
      desc: 'Acoustic presentation & video conferencing suites',
      icon: Building2,
    },
  ];

  const solutionsMenu = [
    {
      title: 'Virtual Office',
      href: '/virtual-office',
      desc: 'Prime Gurgaon commercial address for GST & ROC',
      icon: FileCheck2,
      tag: 'High Demand',
    },
    {
      title: 'Shared Employee',
      href: '/shared-employee',
      desc: 'Shared reception, IT, and admin to cut overhead',
      icon: Users,
    },
    {
      title: 'Work + Stay Hub',
      href: '/work-stay',
      desc: 'Integrated living, dining & working ecosystem',
      icon: Home,
      tag: 'New 2026',
    },
    {
      title: 'Dormitory Suites',
      href: '/work-stay/dormitory',
      desc: 'Co-living accommodation combined with coworking',
      icon: Compass,
    },
  ];

  const isNavActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-300',
        isScrolled
          ? 'bg-[#F0EFE9]/90 backdrop-blur-md border-b border-black/[0.08] py-3 shadow-sm'
          : 'bg-[#F0EFE9] border-b border-black/[0.06] py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-[#111111] flex items-center justify-center text-white font-bold text-lg tracking-wider group-hover:bg-[#C91D24] transition-colors shadow-sm">
              <span className="text-[#C91D24] group-hover:text-white transition-colors">Y</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-[#111111] font-sans">
                YOFFICES<span className="text-[#C91D24]">.</span>
              </span>
              <span className="text-[9px] font-mono uppercase tracking-widest text-gray-500 font-semibold -mt-1">
                SECTOR 45 & 32
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (Nestor Pill Buttons) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-white/70 backdrop-blur-md p-1.5 rounded-full border border-black/[0.06] shadow-sm">
            {/* Workspaces Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('workspaces')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={cn(
                  'flex items-center gap-1 px-3 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer',
                  isNavActive('/workspaces')
                    ? 'text-white bg-[#111111] shadow-sm'
                    : 'text-gray-700 hover:text-black hover:bg-white'
                )}
              >
                <span>Workspaces</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {activeDropdown === 'workspaces' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-black/10 p-3 animate-fade-in">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 px-3 py-1 mb-1">
                    [ WORKSPACE TYPES ]
                  </div>
                  {workspacesMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F0EFE9] transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-gray-100 text-gray-700 group-hover:bg-[#C91D24] group-hover:text-white transition-colors">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-gray-900 group-hover:text-[#C91D24] transition-colors">
                            {item.title}
                          </span>
                          {item.tag && (
                            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-red-100 text-[#C91D24]">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-gray-100 px-3">
                    <Link
                      href="/workspaces"
                      className="text-xs font-bold text-[#C91D24] hover:underline inline-flex items-center gap-1"
                    >
                      View All Workspaces <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={cn(
                  'flex items-center gap-1 px-3 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer',
                  isNavActive('/virtual-office') || isNavActive('/shared-employee') || isNavActive('/work-stay')
                    ? 'text-white bg-[#111111] shadow-sm'
                    : 'text-gray-700 hover:text-black hover:bg-white'
                )}
              >
                <span>Solutions</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-84 bg-white rounded-2xl shadow-2xl border border-black/10 p-3 animate-fade-in">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 px-3 py-1 mb-1">
                    [ ENTERPRISE & LIVING ]
                  </div>
                  {solutionsMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F0EFE9] transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-gray-100 text-gray-700 group-hover:bg-[#C91D24] group-hover:text-white transition-colors">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-gray-900 group-hover:text-[#C91D24] transition-colors">
                            {item.title}
                          </span>
                          {item.tag && (
                            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations */}
            <Link
              href="/locations"
              className={cn(
                'px-3 py-1.5 text-xs font-bold rounded-full transition-all',
                isNavActive('/locations')
                  ? 'text-white bg-[#111111] shadow-sm'
                  : 'text-gray-700 hover:text-black hover:bg-white'
              )}
            >
              Locations
            </Link>

            {/* Franchise */}
            <Link
              href="/franchise"
              className={cn(
                'px-3 py-1.5 text-xs font-bold rounded-full transition-all flex items-center gap-1.5',
                isNavActive('/franchise')
                  ? 'text-white bg-[#111111] shadow-sm'
                  : 'text-gray-700 hover:text-black hover:bg-white'
              )}
            >
              <span>Franchise</span>
              <span className="text-[9px] font-mono font-extrabold px-1.5 py-0.2 rounded-full bg-[#C91D24] text-white">
                ₹5L+
              </span>
            </Link>

            {/* Media */}
            <Link
              href="/media"
              className={cn(
                'px-3 py-1.5 text-xs font-bold rounded-full transition-all',
                isNavActive('/media')
                  ? 'text-white bg-[#111111] shadow-sm'
                  : 'text-gray-700 hover:text-black hover:bg-white'
              )}
            >
              Media
            </Link>

            {/* Blog */}
            <Link
              href="/blog"
              className={cn(
                'px-3 py-1.5 text-xs font-bold rounded-full transition-all',
                isNavActive('/blog')
                  ? 'text-white bg-[#111111] shadow-sm'
                  : 'text-gray-700 hover:text-black hover:bg-white'
              )}
            >
              Blog
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={cn(
                'px-3 py-1.5 text-xs font-bold rounded-full transition-all',
                isNavActive('/about')
                  ? 'text-white bg-[#111111] shadow-sm'
                  : 'text-gray-700 hover:text-black hover:bg-white'
              )}
            >
              About
            </Link>
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              href="/franchise/apply"
              className="hidden xl:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-gray-800 bg-white/80 hover:bg-white rounded-full transition-all border border-black/10 shadow-sm"
            >
              <Coins className="w-3.5 h-3.5 text-[#C91D24]" />
              <span>Franchise Desk</span>
            </Link>

            <Link
              href="/book-a-visit"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-[#C91D24] hover:bg-[#A3151B] rounded-full transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <span>Book Tour</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/book-a-visit"
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#C91D24] rounded-full"
            >
              Book Tour
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:bg-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bottom-0 bg-[#F0EFE9] z-50 overflow-y-auto border-t border-black/10 p-5 animate-fade-in pb-24">
          <div className="space-y-6">
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                [ WORKSPACES ]
              </div>
              <div className="grid grid-cols-1 gap-2">
                {workspacesMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-black/5"
                  >
                    <item.icon className="w-4 h-4 text-[#C91D24]" />
                    <span className="text-xs font-bold text-gray-900">{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                [ BUSINESS SOLUTIONS ]
              </div>
              <div className="grid grid-cols-1 gap-2">
                {solutionsMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-black/5"
                  >
                    <item.icon className="w-4 h-4 text-[#C91D24]" />
                    <span className="text-xs font-bold text-gray-900">{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-black/10 grid grid-cols-2 gap-2">
              <Link
                href="/locations"
                className="p-3 rounded-2xl bg-white text-xs font-bold text-gray-800 text-center border border-black/5"
              >
                Locations
              </Link>
              <Link
                href="/franchise"
                className="p-3 rounded-2xl bg-red-50 text-xs font-bold text-[#C91D24] text-center border border-red-100"
              >
                Franchise (₹5L+)
              </Link>
              <Link
                href="/media"
                className="p-3 rounded-2xl bg-white text-xs font-bold text-gray-800 text-center border border-black/5"
              >
                Media & Videos
              </Link>
              <Link
                href="/blog"
                className="p-3 rounded-2xl bg-white text-xs font-bold text-gray-800 text-center border border-black/5"
              >
                Editorial Blog
              </Link>
              <Link
                href="/about"
                className="p-3 rounded-2xl bg-white text-xs font-bold text-gray-800 text-center border border-black/5"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="p-3 rounded-2xl bg-white text-xs font-bold text-gray-800 text-center border border-black/5"
              >
                Contact Desk
              </Link>
            </div>

            <div className="pt-4 border-t border-black/10 space-y-2">
              <Link
                href="/book-a-visit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#C91D24] text-white font-bold text-xs shadow-md"
              >
                Schedule Guided Walkthrough
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
