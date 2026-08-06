import React from 'react';
import { Users, ShieldCheck, Award, TrendingUp } from 'lucide-react';

export default function StatsCounter() {
  const stats = [
    {
      num: '5,000+',
      label: 'Happy Customers',
      sub: 'Residences & Businesses in Hyderabad',
      icon: Users
    },
    {
      num: '15,000+',
      label: 'Eco Treatments',
      sub: 'Successfully Delivered Since 2016',
      icon: ShieldCheck
    },
    {
      num: '10+ Yrs',
      label: 'Vector Expertise',
      sub: 'Govt Certified Specialist Staff',
      icon: Award
    },
    {
      num: '98.6%',
      label: 'Success Rate',
      sub: 'Immediate Mosquito Knockdown',
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-emerald-600/60">
          {stats.map((stat, index) => {
            const IconComp = stat.icon;
            return (
              <div key={index} className="pt-6 lg:pt-0 lg:px-6 text-center space-y-2 group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-amber-300 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-900 transition-all">
                  <IconComp className="w-6 h-6" />
                </div>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                  {stat.num}
                </div>
                <div className="font-bold text-sm sm:text-base text-amber-300">
                  {stat.label}
                </div>
                <div className="text-xs text-emerald-100 font-medium">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
