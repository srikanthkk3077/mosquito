import React from 'react';
import AreasWeServe from '../components/AreasWeServe';
import TrustBadges from '../components/TrustBadges';
import { useNavigate } from 'react-router-dom';

export default function AreasPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-20 space-y-12">
      <section className="bg-gradient-to-b from-emerald-900 via-emerald-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest">
            Hyderabad Express Dispatch
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Areas We Serve in Hyderabad
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Our rapid-response mobile units are strategically stationed across major Hyderabad tech & residential corridors for &lt;2 hour dispatch.
          </p>
        </div>
      </section>

      <TrustBadges />

      <AreasWeServe onOpenBooking={() => navigate('/book')} />
    </div>
  );
}
