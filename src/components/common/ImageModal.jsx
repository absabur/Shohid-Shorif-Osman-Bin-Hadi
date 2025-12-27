"use client";
import React, { useEffect, useState, useCallback } from "react";
import { X, Download, ChevronLeft, ChevronRight } from "lucide-react";

const ImageGalleryModal = ({ isOpen, onClose, images, initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setDirection("");
  }, [initialIndex, isOpen]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [images.length, isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [images.length, isAnimating]);

  // --- RE-ADDED SWIPE LOGIC ---
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    // Swipe sensitivity (70px)
    if (distance > 70) handleNext(); // Swiped Left -> Show Next
    if (distance < -70) handlePrev(); // Swiped Right -> Show Previous

    setTouchStart(null);
  };

  const handleDownload = async (url, filename) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  if (!isOpen || !images || images.length === 0) return null;

  const activeImg = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-3xl transition-opacity duration-300">
      {/* Background Overlay */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[120] text-white/50 hover:text-red-600 transition-colors p-2"
      >
        <X size={32} />
      </button>

      {/* Nav Buttons (Hidden on Mobile) */}
      <button
        onClick={handlePrev}
        className="absolute left-4 z-[110] text-white/20 hover:text-white p-4 hidden sm:block"
      >
        <ChevronLeft size={48} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 z-[110] text-white/20 hover:text-white p-4 hidden sm:block"
      >
        <ChevronRight size={48} />
      </button>

      <div
        className="relative z-[105] w-full h-full flex items-center justify-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative group flex items-center justify-center w-full h-full">
          {/* THE IMAGE WITH SLIDE ANIMATION */}
          <img
            key={currentIndex}
            src={activeImg?.url}
            alt={activeImg?.title}
            style={{
              animation:
                direction === "right"
                  ? "slideInRight 0.5s ease-out forwards"
                  : direction === "left"
                  ? "slideInLeft 0.5s ease-out forwards"
                  : "fadeIn 0.5s ease-out forwards",
            }}
            className="max-h-[90vh] w-auto object-contain shadow-2xl pointer-events-none select-none"
          />

          {/* OVERLAYS (Title & Download) */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 p-10 flex flex-col items-center opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <h3 className="text-xl md:text-3xl font-black text-white italic uppercase mb-4 text-center">
              {activeImg?.title || "Archive Image"}
            </h3>
            <button
              onClick={() =>
                handleDownload(activeImg.url, `archive-${currentIndex}.jpg`)
              }
              className="bg-white text-black hover:bg-red-700 hover:text-white px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all"
            >
              Download
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default ImageGalleryModal;
