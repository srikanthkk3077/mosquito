import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/websiteData';
import { Check, Calendar, ArrowRight, Sparkles, Filter } from 'lucide-react';

export default function ServicesSection({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services (13)' },
    { id: 'residential', label: 'Residential & Villas' },
    { id: 'commercial', label: 'Commercial & Offices' },
    { id: 'outdoor', label: 'Outdoor & Gardens' },
    { id: 'specialized', label: 'Specialized & Industrial' }
  ];

  const filteredServices = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest">
            Complete Vector Solutions
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Targeted Mosquito Control Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            From high-rise luxury apartments in Gachibowli to extensive industrial sites in Kukatpally, explore our 13 specialized eco-friendly mosquito treatments.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-700/30 scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="hover-lift glass-card rounded-3xl overflow-hidden border border-slate-200/90 bg-white flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md text-emerald-800 text-xs font-bold rounded-full shadow-sm">
                    {service.tag}
                  </span>

                  {/* Starting Price Badge */}
                  <span className="absolute bottom-4 right-4 px-3.5 py-1.5 bg-emerald-600 text-white font-extrabold text-sm rounded-full shadow-lg">
                    {service.price}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Features Bullet List */}
                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Book Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full btn-primary py-3 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm cursor-pointer group-hover:shadow-lg transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Service Now</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
