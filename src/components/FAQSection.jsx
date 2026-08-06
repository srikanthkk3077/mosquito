import React, { useState } from 'react';
import { FAQ_DATA } from '../data/websiteData';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = FAQ_DATA.filter(faq =>
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest">
            100% Transparency
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Have questions about safety, chemical ingredients, pricing, or our 90-day warranty? Find answers to 15 key questions below.
          </p>

          {/* Quick FAQ Search Bar */}
          <div className="max-w-md mx-auto pt-4 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search FAQ keywords (e.g. pets, warranty, Dengue, price)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 text-sm outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-slate-200/80 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs shrink-0 font-extrabold">
                      Q{index + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 bg-slate-50/50 animate-in fade-in duration-300">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-emerald-100/60 border border-emerald-200 text-center space-y-3">
          <h3 className="font-heading font-bold text-xl text-emerald-950">
            Have a Specific Question Not Answered Above?
          </h3>
          <p className="text-sm text-emerald-800">
            Our vector control specialists are available 24/7 on WhatsApp & Phone to answer your queries.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a
              href="https://wa.me/919876543210?text=Hi%20MosquiShield,%20I%20have%20a%20question%20about%20mosquito%20treatment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-3 px-6 text-sm font-semibold inline-flex items-center gap-2"
            >
              Ask on WhatsApp &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
