import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/websiteData';
import AnimatedSection, { AnimatedCard } from './AnimatedSection';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS_DATA.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS_DATA.length - 1 ? 0 : prevIdx + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-mint-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Verified Customer Feedback</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Loved by 5,000+ Hyderabad Homeowners
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Read real experiences from families in Jubilee Hills, Gachibowli, Kondapur, and Hitech City who reclaimed their homes from mosquitoes.
          </p>
        </AnimatedSection>

        {/* Featured Testimonial Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-200/90 bg-white relative shadow-xl space-y-8">
            
            <Quote className="w-16 h-16 text-emerald-100 absolute top-6 right-8 pointer-events-none" />

            {/* Stars & Date */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-400">{current.date}</span>
            </div>

            {/* Review Quote Text */}
            <p className="text-base sm:text-xl text-slate-800 leading-relaxed italic font-normal">
              "{current.review}"
            </p>

            {/* Author Info & Navigation Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-slate-100">
              
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-2xl object-cover shadow-md border-2 border-emerald-500/30"
                />
                <div>
                  <h4 className="font-heading font-extrabold text-lg text-slate-900">{current.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{current.location}</p>
                </div>
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-emerald-700 hover:text-white text-slate-700 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                  title="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-bold text-slate-400">
                  {currentIndex + 1} / {TESTIMONIALS_DATA.length}
                </span>
                <button
                  onClick={next}
                  className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-emerald-700 hover:text-white text-slate-700 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                  title="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </AnimatedSection>
        </div>

        {/* 4-Grid Testimonials Preview below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <AnimatedCard
              key={idx}
              index={idx}
              className={`p-6 rounded-3xl border transition-all cursor-pointer ${
                idx === currentIndex
                  ? 'bg-emerald-800 text-white border-emerald-600 shadow-xl'
                  : 'bg-white text-slate-800 border-slate-200/90 hover:border-emerald-500/40'
              }`}
              onClick={() => setCurrentIndex(idx)}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 fill-amber-400 text-amber-400`} />
                  ))}
                </div>
                <p className="text-xs line-clamp-3 leading-relaxed">
                  "{item.review}"
                </p>
                <div className="pt-2 border-t border-slate-200/40">
                  <div className="font-bold text-xs">{item.name}</div>
                  <div className="text-[10px] opacity-80">{item.location.split(',')[0]}</div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

      </div>
    </section>
  );
}
