import React, { useState, useEffect } from 'react';
import { Calendar, Phone, Star, Users, Clock, Sparkles, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSection({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: '/assets/hero.png',
      title: 'German ULV Cold Fogging',
      subtitle: 'Precision Micro-Mist Barrier Application',
      badge: 'Villa Protection'
    },
    {
      image: '/assets/garden.png',
      title: 'Landscape & Foliage Misting',
      subtitle: 'Eco-Friendly Plant & Bee Safe Formula',
      badge: 'Outdoor Shield'
    },
    {
      image: '/assets/commercial.png',
      title: 'Corporate IT Hub Sanitization',
      subtitle: 'Discreet After-Hours Office Vector Control',
      badge: 'Commercial'
    },
    {
      image: '/assets/family.png',
      title: 'Baby & Pet Safe Indoor Misting',
      subtitle: '100% Odorless Non-Staining Bio-Actives',
      badge: '100% Odorless'
    }
  ];

  // Auto slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-mint-grid">
      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-amber-400/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-5 text-left">

            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Hyderabad’s #1 Govt-Approved & ISO Certified Mosquito Control</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-[1.18] tracking-tight">
              Professional <br />
              <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                Mosquito Control
              </span> <br />
              Services in Hyderabad
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              Protect your family from Dengue, Chikungunya & Malaria with 100% eco-friendly, odorless micro-mist barrier treatments. Safe for babies, pets & elderly.
            </p>

            {/* Key USPs list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {[
                '100% Odorless & Non-Staining Formula',
                'Same Day Emergency Service (<2 Hrs)',
                '90-Day Unconditional Callback Warranty',
                'CIB Approved & Pet Friendly Actives'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-800 text-xs sm:text-sm font-medium">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                onClick={onOpenBooking}
                className="btn-primary py-3.5 px-7 text-sm sm:text-base flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Book Free Inspection</span>
              </button>

              <a
                href="tel:+919949187262"
                className="py-3.5 px-7 text-sm sm:text-base font-bold rounded-full border-2 border-slate-300 text-slate-800 hover:border-emerald-600 hover:text-emerald-700 hover:bg-emerald-50/50 transition-all flex items-center justify-center gap-2.5"
              >
                <Phone className="w-4 h-4 text-emerald-600 fill-emerald-600/20" />
                <span>Call Now: +91 99491 87262</span>
              </a>
            </div>

            {/* Social Trust Proof Bar */}
            <div className="pt-4 border-t border-slate-200/60 flex items-center gap-4">
              <div className="flex -space-x-2.5">
                {['https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
                  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80',
                  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&q=80'
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Customer"
                    className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-slate-900 ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">Over 2,480+ Verified Google Reviews</p>
              </div>
            </div>

          </div>

          {/* Right Side Interactive Image Carousel Slider */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Main Image Carousel Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">

                {/* Images Slides Container */}
                <div className="relative w-full h-[400px] sm:h-[440px] overflow-hidden">
                  {heroSlides.map((slide, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
                        }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                      {/* Dynamic Bottom Overlay Label */}
                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-dark text-white shadow-xl border border-slate-700/50">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-sm sm:text-base text-white">{slide.title}</h4>
                            <p className="text-[11px] text-slate-300">{slide.subtitle}</p>
                          </div>
                          <span className="px-2.5 py-1 bg-emerald-500/30 border border-emerald-400/50 text-emerald-300 rounded-full text-[10px] font-bold">
                            {slide.badge}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Slider Manual Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-emerald-600 text-white backdrop-blur-md border border-slate-700 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                  title="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-emerald-600 text-white backdrop-blur-md border border-slate-700 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                  title="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Slide Indicator Dots */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 p-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-slate-800">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${idx === currentSlide ? 'w-6 bg-emerald-400' : 'w-2 bg-slate-500/60 hover:bg-slate-400'
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

              </div>

              {/* Stat Card 1 (Bottom Left Overlay) */}
              <div className="absolute bottom-16 -left-3 glass-card p-3 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-2.5 z-20">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">5,000+ Happy Homes</div>
                  <div className="text-[10px] text-slate-500 font-medium">100% Guarantee</div>
                </div>
              </div>

              {/* Stat Card 2 (Top Right Overlay) */}
              <div className="absolute top-4 -right-3 glass-card p-3 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-2.5 z-20">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Same Day Service</div>
                  <div className="text-[10px] text-slate-500 font-medium">&lt; 2 Hour Arrival</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
