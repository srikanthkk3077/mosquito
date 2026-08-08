import React from 'react';
import BookingForm from '../components/BookingForm';
import { Calendar, ShieldCheck, Sparkles, Clock, CheckCircle2, Phone } from 'lucide-react';

export default function BookingPage() {
  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28 bg-mint-grid min-h-screen relative overflow-hidden">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-sky-400/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Single Clean Page Header Callout */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-300/80 text-sky-900 text-xs font-extrabold tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>HYDERABAD VECTOR INSPECTION HUB</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-snug">
            Book Your Free Mosquito Inspection
          </h1>

          <p className="text-xs sm:text-base text-slate-600 font-normal max-w-xl mx-auto leading-relaxed">
            Schedule online in under 60 seconds. Our certified technician will arrive equipped with WHO bio-actives for complete property vector management.
          </p>
        </div>

        {/* Value Guarantee Badges Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {[
            { icon: Clock, title: 'Same Day Dispatch', desc: '< 2 Hour Arrival in Hyderabad' },
            { icon: ShieldCheck, title: '90-Day Free Callback', desc: 'Unconditional Re-spray Warranty' },
            { icon: CheckCircle2, title: '100% Odorless & Safe', desc: 'Harmless for Infants & Household Pets' }
          ].map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-slate-900">{item.title}</h4>
                  <p className="text-[11px] text-slate-500 font-normal">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Embedded Booking Form Component */}
        <div className="max-w-4xl mx-auto">
          <BookingForm />
        </div>

      </div>
    </div>
  );
}
