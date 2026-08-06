import React from 'react';
import { Star, ShieldCheck, Award, Heart, CheckCircle2, Zap, Clock, ShieldAlert } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    { icon: Star, title: 'Google Rating 4.9/5', desc: '2,480+ Reviews', color: 'text-amber-500' },
    { icon: ShieldCheck, title: 'Government Approved', desc: 'CGB Licensed', color: 'text-emerald-600' },
    { icon: Award, title: 'ISO 9001:2015 Certified', desc: 'Quality Management', color: 'text-emerald-700' },
    { icon: Heart, title: '100% Pet Friendly', desc: 'Odorless Formula', color: 'text-rose-500' },
    { icon: CheckCircle2, title: 'Child Safe Formula', desc: 'Zero Toxicity', color: 'text-emerald-600' },
    { icon: Zap, title: '90-Day Free Warranty', desc: 'Unconditional Callback', color: 'text-amber-600' },
    { icon: Clock, title: 'Same Day Express Service', desc: '< 2 Hours Dispatch', color: 'text-emerald-700' },
    { icon: ShieldAlert, title: '100% Bio-Organic Actives', desc: 'Safe Botanicals', color: 'text-emerald-600' },
  ];

  return (
    <section className="py-8 bg-slate-900 text-white overflow-hidden relative border-y border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <p className="text-xs uppercase tracking-widest font-bold text-emerald-400">
          Trusted By Over 5,000+ Families & Commercial IT Parks Across Hyderabad
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
                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-emerald-500/50 transition-colors"
              >
                <div className={`p-2 rounded-xl bg-slate-900/80 ${badge.color}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">{badge.title}</h4>
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
