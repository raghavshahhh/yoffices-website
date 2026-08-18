'use client';

import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface LightboxImage {
  src: string;
  title?: string;
  desc?: string;
}

interface ImageLightboxModalProps {
  images: LightboxImage[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageLightboxModal({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
}: ImageLightboxModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-black/90 flex flex-col justify-between p-4 sm:p-6"
        onClick={onClose}
      >
        {/* Top Bar */}
        <div
          className="flex items-center justify-between z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <span className="nestor-pill-dark font-mono text-[10px] text-white/90">
              [ PHOTOGRAPHY • {currentIndex + 1} / {images.length} ]
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-[#C5A880] font-mono">
              <MapPin className="w-3.5 h-3.5" /> Sector 45 Gurgaon Flagship
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Image Display */}
        <div
          className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {images.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 backdrop-blur-md transition-all hover:scale-110 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <motion.div
            key={current.src}
            initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl max-h-[75vh] relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <img
              src={current.src}
              alt={current.title || 'Yoffices Actual Photo'}
              className="max-h-[75vh] w-auto object-contain rounded-2xl"
            />
          </motion.div>

          {images.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 backdrop-blur-md transition-all hover:scale-110 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Bottom Caption & Thumbnail Strip */}
        <div
          className="z-10 max-w-4xl mx-auto w-full text-center space-y-3"
          onClick={(e) => e.stopPropagation()}
        >
          {current.title && (
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-black text-white font-sans">
                {current.title}
              </h3>
              {current.desc && (
                <p className="text-xs text-gray-300 max-w-xl mx-auto">
                  {current.desc}
                </p>
              )}
            </div>
          )}

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex items-center justify-center gap-2 overflow-x-auto py-1">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    i === currentIndex
                      ? 'border-[#C91D24] scale-105 shadow-md'
                      : 'border-white/20 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.src}
                    alt="thumbnail"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
