import React from 'react';
import BookingForm from '../components/BookingForm';
import TrustBadges from '../components/TrustBadges';

export default function BookingPage() {
  return (
    <div className="pt-28 pb-20 bg-mint-grid min-h-screen">
      <section className="bg-gradient-to-b from-emerald-900 via-emerald-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest">
            Instant Scheduling
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Book Free Mosquito Inspection
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Schedule online in under 60 seconds. Our certified technician will arrive equipped for complete vector management.
          </p>
        </div>
      </section>

      {/* <TrustBadges /> */}
{/* 9949187262 */}
      <BookingForm />
    </div>
  );
}
