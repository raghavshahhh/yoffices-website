'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  X,
  Calendar,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Building2,
  Clock,
  Loader2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppUrl } from '@/lib/utils';
import { INITIAL_SITE_SETTINGS } from '@/lib/constants';

export function LeadPopupModal() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    workspaceType: 'Private Cabin Suite',
  });

  useEffect(() => {
    // Do not show on admin pages
    if (pathname?.startsWith('/admin')) return;

    // Check if already dismissed in this session
    const hasDismissed = sessionStorage.getItem('yoffices_lead_popup_dismissed');
    if (hasDismissed) return;

    // Trigger popup after 7 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('yoffices_lead_popup_dismissed', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: formData.workspaceType,
          message: 'Lead submitted via 7-second Timed VIP Popup Modal',
          source: 'Timed VIP Popup',
        }),
      });

      setSubmitted(true);
      sessionStorage.setItem('yoffices_lead_popup_dismissed', 'true');

      // Auto close after 3 seconds
      setTimeout(() => {
        setIsOpen(false);
      }, 3500);
    } catch {
      // If error, still show success message to user and log
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = getWhatsAppUrl(
    INITIAL_SITE_SETTINGS.whatsappNumber,
    'Hi Yoffices, I would like to schedule a VIP walkthrough & get special pricing for Sector 45 / Sector 32 Gurgaon.'
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#FAF9F6] border border-black/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/5 hover:bg-black/10 text-gray-700 hover:text-black transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-extrabold text-gray-900 font-sans">
                    VIP Pass Confirmed!
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-xs mx-auto">
                    Our Gurgaon Workspace Director will contact you within 15 minutes to confirm your walkthrough time and reserved pricing.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Chat Directly on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Header */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5">
                    <span className="nestor-pill bg-[#C91D24]/10 border-[#C91D24]/20 text-[#C91D24] font-mono text-[10px]">
                      <Sparkles className="w-3 h-3 text-[#C91D24]" />
                      [ VIP EXCLUSIVE • GURGAON HUBS ]
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 font-sans leading-tight">
                    Book a VIP Tour & Unlock Member Pricing
                  </h2>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    Inspect acoustic private cabins & workstations in Sector 45 & 32 Gurgaon with complimentary fresh roast coffee.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Raghav Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/10 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-xs sm:text-sm text-gray-900 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/10 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-xs sm:text-sm text-gray-900 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Workspace Preference
                    </label>
                    <select
                      value={formData.workspaceType}
                      onChange={(e) => setFormData({ ...formData, workspaceType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/10 focus:border-[#C91D24] focus:ring-2 focus:ring-[#C91D24]/10 text-xs sm:text-sm text-gray-900 outline-none transition-all cursor-pointer"
                    >
                      <option value="Private Cabin Suite">Private Acoustic Cabin (3 to 50+ seats)</option>
                      <option value="Dedicated Workstation">Dedicated Workstation Desk</option>
                      <option value="Virtual Office (GST/ROC)">Virtual Office (Haryana GST & ROC)</option>
                      <option value="Work + Stay Dormitory">Work + Stay Co-Living Suite</option>
                      <option value="Franchise Opportunity">Commercial Franchise (₹5,000/mo Yield)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Confirming VIP Pass...</span>
                      </>
                    ) : (
                      <>
                        <span>Claim VIP Tour & Exclusive Rates</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                {/* Direct WhatsApp Option */}
                <div className="pt-2 border-t border-black/10 flex items-center justify-between text-[11px]">
                  <span className="text-gray-500">Need instant answer?</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#25D366] hover:underline inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
                    <span>WhatsApp Concierge</span>
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
