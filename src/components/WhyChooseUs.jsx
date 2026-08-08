import React from 'react';
import { WHY_CHOOSE_US_DATA } from '../data/websiteData';
import AnimatedSection, { AnimatedCard } from './AnimatedSection';
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
    <section id="why-us" className="py-20 bg-mint-grid relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-widest">
            Why Mosquitofightre™ Superior Choice
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Thousands of Hyderabad Homes Trust Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Designed to outperform standard pest control companies with WHO-approved chemicals, odorless cold fogging, and instant callback guarantees.
          </p>
        </AnimatedSection>

        {/* 8-Card Grid with Framer Motion Stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_DATA.map((item, index) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <AnimatedCard
                key={index}
                index={index}
                className="glass-card p-6 rounded-3xl border border-slate-200/90 bg-white flex flex-col justify-between group shadow-sm hover:shadow-xl cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-600 to-blue-500 text-white flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-sky-600 group-hover:translate-x-1 transition-transform">
                  <span>Learn Security Standard</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </AnimatedCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
