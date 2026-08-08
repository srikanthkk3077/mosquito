import React from 'react';
import { ShieldCheck, Award, RefreshCw, CheckCircle2, FileText, Phone, Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ServiceWarrantySection({ onOpenBooking }) {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-y border-sky-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-sky-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Certificate Card Frame */}
          <div className="lg:col-span-6 relative">
            <div className="glass-dark p-8 sm:p-10 rounded-3xl border-2 border-sky-500/50 shadow-2xl space-y-6 relative overflow-hidden">

              {/* Gold Seal Stamp */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 flex flex-col items-center justify-center p-2 shadow-2xl rotate-12 border-4 border-slate-900">
                <Award className="w-8 h-8 stroke-[2.5]" />
                <span className="text-[9px] uppercase font-extrabold tracking-widest text-center leading-none mt-1">
                  100% Genuine
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/30">
                  <ShieldCheck className="w-7 h-7 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
                    Official Guarantee Certificate
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-white">
                    90-Day Free Callback Warranty
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                Every MosquiShield™ residential treatment includes our legally backed 90-Day Protection Certificate. If mosquitoes reappear anytime within 90 days, we perform a complete re-treatment free of charge within 24 hours.
              </p>

              {/* Warranty Certificate Benefits Checklist */}
              <div className="space-y-3 pt-2 border-t border-slate-800">
                {[
                  'Zero-Cost Immediate Callback Re-Treatment',
                  'Coverage Included for All Indoor Rooms & Balconies',
                  '100% Money-Back Satisfaction Guarantee',
                  'Verified Digital Warranty Card Delivered via WhatsApp'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-semibold text-sky-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    if (onOpenBooking) onOpenBooking();
                    else navigate('/book');
                  }}
                  className="w-full btn-primary py-3.5 text-xs font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Guaranteed Service</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Explanation & Policy Details */}
          <div className="lg:col-span-6 space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-sky-400" />
              <span>Unmatched Service Reliability</span>
            </span>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              We Stand Behind Every Spray With Our 90-Day Warranty
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Most local pest control companies spray once and disappear. At MosquiShield™, we engineer long-lasting micro-capsule barrier films that bond to surfaces for up to 90 days.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

              <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center font-extrabold text-lg">
                  ⚡ 24h
                </div>
                <h4 className="font-bold text-white text-sm">Express Re-Visit</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Got a callback request? Our technicians arrive within 24 hours guaranteed.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-extrabold text-lg">
                  💰 100%
                </div>
                <h4 className="font-bold text-white text-sm">Money-Back Promise</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  If you are not 100% satisfied with our mosquito reduction, we refund your service fee.
                </p>
              </div>

            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="tel:+919949187262"
                className="py-3.5 px-6 rounded-full bg-slate-800 border border-slate-700 hover:border-sky-500 text-white font-bold text-xs flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Warranty Claims Helpline: +91 99491 87262</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
