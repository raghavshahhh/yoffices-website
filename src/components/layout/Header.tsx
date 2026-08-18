'use client';

import { useState, useEffect, useRef } from 'react';
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
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/Logo';

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>('workspaces');
  
  const navContainerRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown and mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleDropdown = (menu: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

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
          ? 'bg-[#F0EFE9]/95 backdrop-blur-md border-b border-black/[0.08] py-3 shadow-xs'
          : 'bg-[#F0EFE9] border-b border-black/[0.06] py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo variant="dark" showSubtitle={true} subtitleText="SECTOR 45 & 32" />

          {/* Desktop Navigation (Nestor Pill Buttons) */}
          <nav
            ref={navContainerRef}
            className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-black/[0.06] shadow-xs relative"
          >
            {/* Workspaces Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('workspaces')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleDropdown('workspaces')}
                className={cn(
                  'flex items-center gap-1 px-3 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer select-none',
                  activeDropdown === 'workspaces' || isNavActive('/workspaces')
                    ? 'text-white bg-[#111111] shadow-xs'
                    : 'text-gray-700 hover:text-black hover:bg-gray-100'
                )}
              >
                <span>Workspaces</span>
                <ChevronDown
                  className={cn(
                    'w-3.5 h-3.5 transition-transform duration-200 opacity-70',
                    activeDropdown === 'workspaces' ? 'rotate-180 text-white' : ''
                  )}
                />
              </button>

              {/* Dropdown Menu Container with zero-gap hover bridge */}
              {activeDropdown === 'workspaces' && (
                <div
                  className="absolute top-full left-0 pt-2 w-80 z-50"
                  onMouseEnter={() => handleMouseEnter('workspaces')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-black/10 p-3 space-y-1 animate-fade-in">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 px-3 py-1 mb-1">
                      [ WORKSPACE TYPES ]
                    </div>
                    {workspacesMenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F0EFE9] transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-gray-100 text-gray-700 group-hover:bg-[#C91D24] group-hover:text-white transition-colors shrink-0">
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
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs font-bold text-[#C91D24] hover:underline inline-flex items-center gap-1"
                      >
                        View All Workspaces <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleDropdown('solutions')}
                className={cn(
                  'flex items-center gap-1 px-3 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer select-none',
                  activeDropdown === 'solutions' ||
                    isNavActive('/virtual-office') ||
                    isNavActive('/shared-employee') ||
                    isNavActive('/work-stay')
                    ? 'text-white bg-[#111111] shadow-xs'
                    : 'text-gray-700 hover:text-black hover:bg-gray-100'
                )}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={cn(
                    'w-3.5 h-3.5 transition-transform duration-200 opacity-70',
                    activeDropdown === 'solutions' ? 'rotate-180 text-white' : ''
                  )}
                />
              </button>

              {/* Dropdown Menu Container with zero-gap hover bridge */}
              {activeDropdown === 'solutions' && (
                <div
                  className="absolute top-full left-0 pt-2 w-84 z-50"
                  onMouseEnter={() => handleMouseEnter('solutions')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-black/10 p-3 space-y-1 animate-fade-in">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 px-3 py-1 mb-1">
                      [ ENTERPRISE & LIVING ]
                    </div>
                    {solutionsMenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F0EFE9] transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-gray-100 text-gray-700 group-hover:bg-[#C91D24] group-hover:text-white transition-colors shrink-0">
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
                </div>
              )}
            </div>

            {/* Locations */}
            <Link
              href="/locations"
              className={cn(
                'px-3 py-1.5 text-xs font-bold rounded-full transition-all',
                isNavActive('/locations')
                  ? 'text-white bg-[#111111] shadow-xs'
                  : 'text-gray-700 hover:text-black hover:bg-gray-100'
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
                  ? 'text-white bg-[#111111] shadow-xs'
                  : 'text-gray-700 hover:text-black hover:bg-gray-100'
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
                  ? 'text-white bg-[#111111] shadow-xs'
                  : 'text-gray-700 hover:text-black hover:bg-gray-100'
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
                  ? 'text-white bg-[#111111] shadow-xs'
                  : 'text-gray-700 hover:text-black hover:bg-gray-100'
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
                  ? 'text-white bg-[#111111] shadow-xs'
                  : 'text-gray-700 hover:text-black hover:bg-gray-100'
              )}
            >
              About
            </Link>
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              href="/franchise/apply"
              className="hidden xl:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-gray-800 bg-white hover:bg-gray-100 rounded-full transition-all border border-black/10 shadow-xs"
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
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#C91D24] rounded-full shadow-xs"
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
            {/* Workspaces Accordion */}
            <div className="bg-white rounded-2xl p-4 border border-black/5 shadow-xs space-y-3">
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === 'workspaces' ? null : 'workspaces'
                  )
                }
                className="w-full flex items-center justify-between font-bold text-xs text-gray-900"
              >
                <span className="font-mono text-[10px] text-gray-500">[ WORKSPACES ]</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform',
                    mobileExpandedSection === 'workspaces' ? 'rotate-180 text-[#C91D24]' : ''
                  )}
                />
              </button>

              {mobileExpandedSection === 'workspaces' && (
                <div className="grid grid-cols-1 gap-2 pt-2 border-t border-gray-100">
                  {workspacesMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F0EFE9] transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-[#C91D24] shrink-0" />
                      <div className="flex-1 flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-900">{item.title}</span>
                        {item.tag && (
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-red-100 text-[#C91D24]">
                            {item.tag}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                  <Link
                    href="/workspaces"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-bold text-[#C91D24] p-2 hover:underline inline-flex items-center gap-1"
                  >
                    View All Workspaces →
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Accordion */}
            <div className="bg-white rounded-2xl p-4 border border-black/5 shadow-xs space-y-3">
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === 'solutions' ? null : 'solutions'
                  )
                }
                className="w-full flex items-center justify-between font-bold text-xs text-gray-900"
              >
                <span className="font-mono text-[10px] text-gray-500">[ BUSINESS SOLUTIONS ]</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform',
                    mobileExpandedSection === 'solutions' ? 'rotate-180 text-[#C91D24]' : ''
                  )}
                />
              </button>

              {mobileExpandedSection === 'solutions' && (
                <div className="grid grid-cols-1 gap-2 pt-2 border-t border-gray-100">
                  {solutionsMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F0EFE9] transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-[#C91D24] shrink-0" />
                      <div className="flex-1 flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-900">{item.title}</span>
                        {item.tag && (
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800">
                            {item.tag}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Links Grid */}
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/locations"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-2xl bg-white text-xs font-bold text-gray-800 text-center border border-black/5 shadow-xs"
              >
                Locations
              </Link>
              <Link
                href="/franchise"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-2xl bg-red-50 text-xs font-bold text-[#C91D24] text-center border border-red-100 shadow-xs"
              >
                Franchise (₹5L+)
              </Link>
              <Link
                href="/media"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-2xl bg-white text-xs font-bold text-gray-800 text-center border border-black/5 shadow-xs"
              >
                Media & Videos
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-2xl bg-white text-xs font-bold text-gray-800 text-center border border-black/5 shadow-xs"
              >
                Editorial Blog
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-2xl bg-white text-xs font-bold text-gray-800 text-center border border-black/5 shadow-xs"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-2xl bg-white text-xs font-bold text-gray-800 text-center border border-black/5 shadow-xs"
              >
                Contact Desk
              </Link>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/book-a-visit"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-md transition-colors"
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
