import React from 'react';
import { Star, ShieldCheck, Award, Heart, CheckCircle2, Zap, Clock, ShieldAlert, Sparkles } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    { icon: ShieldCheck, title: 'Government Licensed', desc: 'CGB & CIB Registered', color: 'text-emerald-400' },
    { icon: Sparkles, title: 'Safe Botanical Chemicals', desc: '100% Odorless & Pet Safe', color: 'text-amber-400' },
    { icon: Zap, title: '90-Day Free Warranty', desc: 'Unconditional Callback', color: 'text-rose-400' },
    { icon: Star, title: 'Google Rating 4.9/5', desc: '2,480+ Verified Reviews', color: 'text-amber-400' },
    { icon: Award, title: 'ISO 9001:2015 Certified', desc: 'Quality Management', color: 'text-emerald-400' },
    { icon: Heart, title: 'Child & Pet Safe Formula', desc: 'Zero Toxicity', color: 'text-rose-400' },
    { icon: Clock, title: 'Same Day Express Service', desc: '< 2 Hours Dispatch', color: 'text-emerald-400' },
    { icon: ShieldAlert, title: 'WHO Prequalified Actives', desc: 'BTI Larvicide Spores', color: 'text-emerald-400' },
  ];

  return (
    <section className="py-8 bg-slate-950 text-white overflow-hidden relative border-y border-emerald-950 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <p className="text-xs uppercase tracking-widest font-extrabold text-emerald-400 flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Certified & Trusted Vector Management Standards Across Hyderabad
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        </p>
      </div>

      {/* Infinite Scrolling Marquee Banner */}
      <div className="relative w-full overflow-hidden flex">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {badges.concat(badges).map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-colors shadow-lg"
              >
                <div className={`p-2.5 rounded-xl bg-slate-950 border border-slate-800 ${badge.color}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white tracking-wide">{badge.title}</h4>
                  <p className="text-xs text-slate-400 font-medium">{badge.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
