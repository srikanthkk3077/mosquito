import React, { useState } from 'react';
import { Calendar, Phone, Star, ShieldCheck, Sparkles, CheckCircle2, Clock, Zap, ArrowRight, Shield, Leaf, HeartHandshake, Home, Building2, Trees, Award } from 'lucide-react';

const MosquitoSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Translucent Wings */}
    <path d="M28 20 C18 6, 10 14, 26 26 Z" fill="rgba(0, 162, 255, 0.45)" stroke="#00A2FF" strokeWidth="1.2" />
    <path d="M36 20 C46 6, 54 14, 38 26 Z" fill="rgba(0, 162, 255, 0.45)" stroke="#00A2FF" strokeWidth="1.2" />
    {/* Slender Abdomen */}
    <ellipse cx="32" cy="38" rx="4" ry="14" fill="#1E293B" stroke="#00A2FF" strokeWidth="1" />
    {/* Thorax & Head */}
    <circle cx="32" cy="20" r="4" fill="#0F172A" />
    <circle cx="32" cy="14" r="2.5" fill="#E11D48" />
    {/* Sharp Needle Proboscis */}
    <line x1="32" y1="12" x2="32" y2="2" stroke="#F43F5E" strokeWidth="1.2" strokeLinecap="round" />
    {/* Legs */}
    <path d="M28 30 L14 36 L6 48" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M36 30 L50 36 L58 48" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M28 38 L12 46 L4 60" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M36 38 L52 46 L60 60" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export default function HeroSection({ onOpenBooking }) {
  const [selectedProperty, setSelectedProperty] = useState('villa');

  const propertyTypes = [
    {
      id: 'apartment',
      icon: Home,
      title: '2-3 BHK Apartments',
      subtitle: 'Zero-Odor Indoor Barrier',
      price: 'Free Inspection',
      time: '< 2 Hour Arrival',
      warranty: '90-Day Guarantee',
      img: '/assets/family.png',
      badge: 'Indoor Safe'
    },
    {
      id: 'villa',
      icon: Building2,
      title: 'Luxury Villas & Duplexes',
      subtitle: 'Complete Indoor & Balcony Misting',
      price: 'Free Inspection',
      time: '< 2 Hour Arrival',
      warranty: '90-Day Guarantee',
      img: '/assets/hero.png',
      badge: 'Most Popular'
    },
    {
      id: 'garden',
      icon: Trees,
      title: 'Lawns & Open Gardens',
      subtitle: 'Eco Foliage & Larvicide Barrier',
      price: 'Free Inspection',
      time: 'Same Day Service',
      warranty: '90-Day Guarantee',
      img: '/assets/garden.png',
      badge: 'Outdoor Shield'
    }
  ];

  const currentProp = propertyTypes.find(p => p.id === selectedProperty) || propertyTypes[1];

  return (
    <section id="home" className="relative pt-24 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-mint-grid">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[45rem] h-[25rem] bg-sky-400/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Animated Background Flying Mosquitoes & Shield Barriers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Floating Mosquito 1 (Top Left) */}
        <div className="absolute top-28 left-[10%] animate-mosquito-1 opacity-70">
          <MosquitoSVG className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-md" />
          <span className="absolute -top-3 -right-2 px-1.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-[9px] font-bold text-rose-500">
            Aedes Target
          </span>
        </div>

        {/* Floating Mosquito 2 (Top Right) */}
        <div className="absolute top-36 right-[12%] animate-mosquito-2 opacity-65">
          <MosquitoSVG className="w-12 h-12 sm:w-14 sm:h-14 drop-shadow-md rotate-45" />
          <span className="absolute -bottom-3 -left-2 px-1.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-[9px] font-bold text-amber-600">
            Anopheles Vector
          </span>
        </div>

        {/* Floating Mosquito 3 (Mid Left) */}
        <div className="absolute top-[55%] left-[5%] animate-mosquito-3 opacity-60">
          <MosquitoSVG className="w-9 h-9 sm:w-11 sm:h-11 drop-shadow-md -rotate-12" />
        </div>

        {/* Floating Mosquito 4 (Bottom Right) */}
        <div className="absolute bottom-[20%] right-[8%] animate-mosquito-1 opacity-65">
          <MosquitoSVG className="w-11 h-11 sm:w-13 sm:h-13 drop-shadow-md rotate-180" />
        </div>

        {/* Pulsing Bio-Shield Protection Ripple Rings */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-sky-400/30 animate-ping pointer-events-none" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full border border-sky-500/20 animate-pulse pointer-events-none" />

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Center Callout */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-sky-300/80 text-sky-900 text-xs font-extrabold tracking-wide shadow-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
            </span>
            <span>HYDERABAD VECTOR DEFENSE COMMAND</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.12] tracking-tight">
            Zero Mosquitoes. <br />
            <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-sky-600 bg-clip-text text-transparent">
              100% Eco-Friendly Protection.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Hyderabad’s premier botanical micro-misting system. Destroys Dengue & Chikungunya vector swarms instantly with zero toxic smell. Safe for babies, pets & elders.
          </p>

          {/* Dual CTA Action Bar */}
          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="btn-primary py-4 px-8 text-sm sm:text-base font-extrabold flex items-center justify-center gap-3 cursor-pointer shadow-xl shadow-sky-500/25 hover:scale-105 transition-all"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Free Inspection Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+919949187262"
              className="py-4 px-7 text-sm sm:text-base font-bold rounded-full bg-white border-2 border-slate-200 text-slate-800 hover:border-sky-500 hover:text-sky-600 hover:bg-sky-50 transition-all flex items-center justify-center gap-2.5 shadow-sm"
            >
              <Phone className="w-4.5 h-4.5 text-sky-500 fill-sky-500/20" />
              <span>Call Helpline: +91 99491 87262</span>
            </a>
          </div>

        </div>

        {/* Unique Feature Matrix Banner (3 Interactive Property Cards) */}
        <div className="mt-14 max-w-6xl mx-auto">

          {/* Selected Plan High-Res Visual Preview Bar */}
          <div className="mt-8 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              <div className="lg:col-span-7 h-64 sm:h-80 relative overflow-hidden">
                <img
                  src={currentProp.img}
                  alt={currentProp.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 lg:hidden p-4 rounded-2xl glass-dark text-white">
                  <h4 className="font-extrabold text-base">{currentProp.title}</h4>
                  <p className="text-xs text-slate-300 mt-0.5">{currentProp.subtitle}</p>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 text-white space-y-5 bg-slate-950">
                <div className="space-y-2">
                  <span className="px-3 py-1 bg-sky-500/20 text-sky-300 border border-sky-500/30 text-[10px] font-extrabold uppercase rounded-full tracking-wider">
                    Official Guarantee Standard
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-white">
                    {currentProp.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Includes German ULV cold fogging, anti-larval sump treatment, and 90 days of unconditional free re-treatment callbacks.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>WHO-Prequalified Odorless Bio-Actives</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Safe for Babies, Pets & Pregnant Women</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Same Day Dispatch Across Hyderabad</span>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full btn-primary py-3.5 px-4 text-xs font-extrabold rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span className="hidden sm:inline">Book Free Inspection For {currentProp.title}</span>
                  <span className="inline sm:hidden">Book Free Site Inspection</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
