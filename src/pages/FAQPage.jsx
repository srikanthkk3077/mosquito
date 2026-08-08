import React from 'react';
import FAQSection from '../components/FAQSection';

export default function FAQPage() {
  return (
    <div className="pt-28 pb-20 space-y-12">
      <section className="bg-gradient-to-b from-sky-900 via-blue-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-widest">
            FAQ & Help
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Have questions about safety, chemical ingredients, pricing, or our 90-day warranty? Find answers to 15 key questions below.
          </p>
        </div>
      </section>


      <FAQSection />
    </div>
  );
}
