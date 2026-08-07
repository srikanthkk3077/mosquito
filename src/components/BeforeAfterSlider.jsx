import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest">
            Interactive Visual Proof
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            See the MosquiShield™ Difference
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Drag the interactive slider below to compare an untreated mosquito-infested area vs. a MosquiShield eco-protected paradise.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[400px] sm:h-[520px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-ew-resize before-after-container"
          >
            {/* AFTER Image (Background - Clean Sunlit Protected Zone) */}
            <img
              src="/assets/after.png"
              alt="After MosquiShield Mosquito Treatment"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* AFTER Label */}
            <div className="absolute top-6 right-6 px-4 py-2 rounded-full glass-dark text-white text-xs font-bold flex items-center gap-2 z-20 border border-emerald-400/40 shadow-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>AFTER: 100% Bite-Free Protected Zone</span>
            </div>

            {/* BEFORE Image (Clipped Overlay - Infested Gloomy Garden) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/assets/before.png"
                alt="Before Mosquito Treatment"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
              />
              <div className="absolute inset-0 bg-red-950/20 mix-blend-multiply" />
            </div>

            {/* BEFORE Label */}
            <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-red-900/90 backdrop-blur-md text-white text-xs font-bold flex items-center gap-2 z-20 border border-red-400/40 shadow-xl">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>BEFORE: High Dengue Risk & Swarms</span>
            </div>

            {/* Slider Divider Line & Drag Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white text-slate-900 shadow-2xl border-2 border-emerald-600 flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
                <SlidersHorizontal className="w-6 h-6 text-emerald-700" />
              </div>
            </div>

          </div>

          <p className="text-center text-xs text-slate-400 mt-4 font-medium">
            💡 Drag slider left or right to inspect garden vegetation & outdoor patio protection
          </p>
        </div>

      </div>
    </section>
  );
}
