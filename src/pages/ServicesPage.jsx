import React from 'react';
import ServicesSection from '../components/ServicesSection';
import TrustBadges from '../components/TrustBadges';
import { useNavigate } from 'react-router-dom';

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-20 space-y-12">
      <section className="bg-gradient-to-b from-emerald-900 via-emerald-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest">
            13 Specialized Treatments
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Our Mosquito Control Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Explore our complete suite of residential micro-misting, commercial IT park sanitization, landscape fogging, and biological anti-larval control.
          </p>
        </div>
      </section>

      <TrustBadges />

      <ServicesSection onOpenBooking={() => navigate('/book')} />
    </div>
  );
}
