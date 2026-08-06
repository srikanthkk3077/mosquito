import React from 'react';
import { ShieldCheck, Heart, Moon, Baby, Shield, Activity, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HealthBenefits({ onOpenBooking }) {
  const benefits = [
    {
      title: 'Prevent Dengue & Chikungunya Outbreaks',
      desc: 'Aedes mosquitoes carry deadly viral strains. Our targeted active barrier destroys daytime biters before they cause infections.',
      icon: Activity
    },
    {
      title: 'Eliminate Malaria Risk',
      desc: 'Anopheles mosquitoes attack during nighttime. We eliminate breeding sites in gutters, sumps, and lawn vegetation.',
      icon: ShieldCheck
    },
    {
      title: 'Healthy Outdoor & Indoor Living Space',
      desc: 'Reclaim your balcony, terrace gardens, and lawns without constant swatting, itching, or irritating buzzing.',
      icon: Sparkles
    },
    {
      title: 'Deep Restful Sleep Without Disturbance',
      desc: 'Sleep soundly through the night without high-pitched buzzing near ears or painful skin welts.',
      icon: Moon
    },
    {
      title: 'Protect Vulnerable Children & Infants',
      desc: 'Young kids have delicate skin susceptible to severe insect reactions and high Dengue risk.',
      icon: Baby
    },
    {
      title: 'Safeguard Elderly & Immunocompromised',
      desc: 'Protect senior citizens who are most susceptible to Dengue complications and mosquito-borne viral fevers.',
      icon: Heart
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/assets/family.png"
                alt="Happy Indian Family Safe From Mosquitoes"
                className="w-full h-[520px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              {/* Floating Shield Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-dark text-white border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base">365-Day Health Shield</h4>
                    <p className="text-xs text-slate-300">Hyderabad Vector Prevention Protocol</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Blob */}
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Right Side Content & Checklist */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest">
                Health & Protection First
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Why Mosquito Control Is Critical For Your Family
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Mosquitoes are not just an annoying nuisance — they are the world’s deadliest vectors. Protect your household with certified botanical barrier treatments.
              </p>
            </div>

            {/* Benefit Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {benefits.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-emerald-500/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed font-normal">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="btn-primary py-4 px-8 text-base font-bold cursor-pointer"
              >
                Protect Your Family Now
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
