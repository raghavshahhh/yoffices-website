'use client';

import React, { useState } from 'react';
import { X, Star, ExternalLink, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export function WriteReviewModal({ isOpen, onClose, onSuccess }: WriteReviewModalProps) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [workspaceType, setWorkspaceType] = useState('Private Cabin');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const googleMapsReviewUrl = 'https://maps.app.goo.gl/LdkCuzynh8p4RRPZ8';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) {
      setError('Please provide your name and review details.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          role: role.trim() || 'Verified Member',
          company: company.trim() || 'Gurgaon Community',
          workspaceType,
          rating,
          content,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        if (onSuccess) onSuccess();
      } else {
        setError(data.error || 'Failed to submit review. Please try again.');
      }
    } catch (err: any) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-black/10 overflow-hidden my-8"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-gray-100 flex items-center justify-between bg-[#FAF9F6]">
            <div className="space-y-1">
              <span className="nestor-pill bg-black/5 text-gray-800 font-mono text-[10px]">
                [ WRITE A REVIEW ]
              </span>
              <h3 className="text-xl font-extrabold text-gray-900 font-sans tracking-tight">
                Share Your Yoffices Experience
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 sm:p-7 space-y-6">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-extrabold text-gray-900 font-sans">
                    Thank You for Your Feedback!
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Your review has been successfully submitted and published to the Yoffices community.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <p className="text-xs text-gray-500 font-medium">
                    Help other founders find us by posting your review on Google Maps too!
                  </p>
                  <a
                    href={googleMapsReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#4285F4] hover:bg-[#3367D6] text-white font-bold text-xs shadow-md transition-all"
                  >
                    <span>Post on Google Business Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onClose}
                    className="text-xs font-bold text-gray-500 hover:text-gray-900"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* 1. Google Direct Review Quick-Action */}
                <div className="p-4 rounded-2xl bg-[#4285F4]/5 border border-[#4285F4]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-xs shrink-0">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-gray-900">Have a Google Account?</div>
                      <div className="text-[11px] text-gray-500">Post directly to Google Business Profile</div>
                    </div>
                  </div>

                  <a
                    href={googleMapsReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#4285F4] hover:bg-[#3367D6] text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-xs shrink-0"
                  >
                    <span>Write on Google</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-[10px] font-mono text-gray-400 uppercase font-bold">
                    OR SUBMIT ON WEBSITE
                  </span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* 2. Website Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-xl bg-red-50 text-[#C91D24] text-xs font-medium border border-red-200">
                      {error}
                    </div>
                  )}

                  {/* Rating Selector */}
                  <div className="space-y-1.5 text-center sm:text-left">
                    <label className="text-xs font-bold text-gray-700 block">
                      Overall Rating <span className="text-[#C91D24]">*</span>
                    </label>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 cursor-pointer transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              (hoverRating || rating) >= star
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="ml-2 text-xs font-bold text-amber-600 font-mono">
                        {rating} / 5 Stars
                      </span>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">
                        Your Full Name <span className="text-[#C91D24]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Vikram Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 text-xs focus:ring-2 focus:ring-[#C91D24] outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">Designation / Role</label>
                      <input
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="e.g. Founder & CEO / Consultant"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 text-xs focus:ring-2 focus:ring-[#C91D24] outline-none"
                      />
                    </div>
                  </div>

                  {/* Company & Workspace Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">Company / Venture Name</label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. TechCorp Solutions"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 text-xs focus:ring-2 focus:ring-[#C91D24] outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">Workspace Category</label>
                      <select
                        value={workspaceType}
                        onChange={(e) => setWorkspaceType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 text-xs focus:ring-2 focus:ring-[#C91D24] outline-none bg-white cursor-pointer"
                      >
                        <option value="Private Cabin">Private Office / Cabin</option>
                        <option value="Dedicated Workstations">Dedicated Workstations</option>
                        <option value="Flexi Coworking">Flexible Coworking</option>
                        <option value="Meeting & Boardrooms">Meeting & Boardrooms</option>
                        <option value="Virtual Office (GST)">Virtual Office (GST/ROC)</option>
                        <option value="Work + Stay Co-Living">Work + Stay Co-Living</option>
                        <option value="Commercial Franchise Partner">Franchise Partner</option>
                      </select>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">
                      Your Review & Feedback <span className="text-[#C91D24]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Share what you like about Yoffices: internet speed, acoustic cabins, coffee pantry, management, cleanliness, or location..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 text-xs focus:ring-2 focus:ring-[#C91D24] outline-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-2.5 rounded-xl border border-black/10 text-xs font-bold text-gray-600 hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#C91D24] hover:bg-[#A3151B] text-white font-bold text-xs shadow-md transition-all disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Publishing...' : 'Submit Review'}</span>
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
