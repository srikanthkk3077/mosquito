import React from 'react';
import { Calendar, Search, ShieldCheck, CheckCircle2, Award, ArrowRight } from 'lucide-react';

export default function ProcessSection({ onOpenBooking }) {
  const steps = [
    {
      num: '01',
      icon: Calendar,
      title: '1. Book Service',
      desc: 'Schedule online or call +91 99491 87262. Express 2-hour arrival available in Hyderabad.'
    },
    {
      num: '02',
      icon: Search,
      title: '2. Comprehensive Audit',
      desc: 'Technicians inspect hidden water sources, larvae habitats, balcony plants, and resting corners.'
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: '3. Eco Micro-Mist Treatment',
      desc: 'Odourless German ULV cold fogging and anti-larval bio-control applied to interior & exterior spaces.'
    },
    {
      num: '04',
      icon: CheckCircle2,
      title: '4. Quality & Safety Audit',
      desc: 'Air purity check, surface inspection, and safety sign-off before handover.'
    },
    {
      num: '05',
      icon: Award,
      title: '5. 90-Day Warranty',
      desc: 'Receive your official protection certificate with 100% free callback re-treatment guarantee.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-emerald-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest">
            Streamlined 5-Step Process
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How Our Vector Defense Works
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            From your initial call to ongoing 90-day protection, experience seamless, hassle-free service designed for busy urban families.
          </p>
        </div>

        {/* Horizontal Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">

          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-14 left-10 right-10 h-1 bg-slate-800 -z-0">
            <div className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400 animate-pulse" />
          </div>

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative z-10 flex flex-col items-center text-center group">

                {/* Step Circle */}
                <div className="w-20 h-20 rounded-3xl bg-slate-800 border-2 border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6 shadow-xl group-hover:border-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all group-hover:scale-110">
                  <IconComponent className="w-9 h-9 stroke-[2]" />
                </div>

                {/* Step Number Tag */}
                <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-1">
                  Step {step.num}
                </span>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {step.desc}
                </p>

              </div>
            );
          })}

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenBooking}
            className="btn-accent py-4 px-10 text-base font-bold inline-flex items-center gap-3 cursor-pointer shadow-2xl"
          >
            <span>Start Step 1: Book Inspection</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
