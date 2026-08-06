import React from 'react';
import { WHY_CHOOSE_US_DATA } from '../data/websiteData';
import { ShieldCheck, Award, Zap, Tag, Sparkles, Heart, Cpu, RefreshCw, ArrowRight } from 'lucide-react';

const iconMap = {
  ShieldCheck,
  Award,
  Zap,
  Tag,
  Sparkles,
  Heart,
  Cpu,
  RefreshCw
};

export default function WhyChooseUs({ onOpenBooking }) {
  return (
    <section id="why-us" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest">
            Why MosquiShield™ Superior Choice
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Thousands of Hyderabad Homes Trust Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            We don’t just spray chemicals — we deliver engineered vector defense backed by government licenses, German fogging technology, and a 100% money-back guarantee.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_DATA.map((item, index) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={index}
                className="hover-lift glass-card p-6 rounded-3xl border border-slate-200/90 bg-white flex flex-col justify-between group shadow-sm hover:shadow-xl"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-700 to-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">
                  <span>Learn Security Standard</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left z-10">
            <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold">
              Protect Your Loved Ones From Mosquito Bites Today
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl font-normal">
              Get an instant free site inspection & customized mosquito barrier plan anywhere in Hyderabad within 2 hours.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="btn-accent py-3.5 px-7 text-sm font-bold shrink-0 cursor-pointer shadow-xl z-10"
          >
            Claim Free Inspection Now
          </button>

          <div className="absolute right-0 bottom-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
