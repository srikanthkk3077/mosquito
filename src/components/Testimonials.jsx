import React, { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../data/websiteData';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest">
            Verified Customer Feedback
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Loved By Homeowners Across Hyderabad
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Read real stories from families in Jubilee Hills, Gachibowli, Kondapur, and Hitech City who reclaimed their homes from mosquitoes.
          </p>
        </div>

        {/* Testimonials Showcase */}
        <div className="max-w-4xl mx-auto relative">
          
          <div className="glass-dark p-8 sm:p-12 rounded-3xl border border-slate-700/80 shadow-2xl relative">
            <Quote className="w-16 h-16 text-emerald-500/20 absolute top-6 right-6" />

            <div className="space-y-6 relative z-10">
              
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(TESTIMONIALS_DATA[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-xs font-bold text-slate-300">5.0 Star Rating</span>
              </div>

              {/* Review Text */}
              <p className="text-lg sm:text-xl text-slate-100 font-normal leading-relaxed italic">
                "{TESTIMONIALS_DATA[currentIndex].review}"
              </p>

              {/* User Bio */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <img
                  src={TESTIMONIALS_DATA[currentIndex].avatar}
                  alt={TESTIMONIALS_DATA[currentIndex].name}
                  className="w-14 h-14 rounded-full border-2 border-emerald-500 object-cover"
                />
                <div>
                  <h4 className="font-heading font-bold text-base text-white flex items-center gap-2">
                    <span>{TESTIMONIALS_DATA[currentIndex].name}</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                      <CheckCircle className="w-3 h-3" /> Verified Customer
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400 font-medium">
                    {TESTIMONIALS_DATA[currentIndex].location} • {TESTIMONIALS_DATA[currentIndex].date}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    currentIndex === i ? 'bg-emerald-500 w-8' : 'bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
