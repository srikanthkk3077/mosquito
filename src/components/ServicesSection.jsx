import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/websiteData';
import AnimatedSection, { AnimatedCard } from './AnimatedSection';
import { Check, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function ServicesSection({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services (5)' },
    { id: 'residential', label: 'Residential & Villas' },
    { id: 'commercial', label: 'Commercial & Offices' },
    { id: 'outdoor', label: 'Outdoor & Gardens' },
    { id: 'specialized', label: 'Specialized & Industrial' }
  ];

  const filteredServices = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-mint-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Targeted Vector Management</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Mosquito Control Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            From high-rise apartments and luxury villas to corporate IT parks and outdoor lawns, choose the precise treatment package tailored to your property.
          </p>
        </AnimatedSection>

        {/* Filter Category Tabs */}
        <AnimatedSection className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12" delay={0.1}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30 scale-105'
                  : 'bg-white text-slate-700 hover:bg-sky-50 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </AnimatedSection>

        {/* Services Grid with Framer Motion Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <AnimatedCard
              key={service.id}
              index={index % 6}
              className="glass-card rounded-3xl overflow-hidden border border-slate-200/90 bg-white flex flex-col justify-between group shadow-sm hover:shadow-xl cursor-pointer"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Tag Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-sky-600 text-white font-extrabold text-xs rounded-full shadow-md">
                      {service.tag}
                    </span>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 right-4">
                    <span className="px-3.5 py-1.5 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-amber-400 font-extrabold text-sm rounded-xl shadow-lg">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <Check className="w-4 h-4 text-sky-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full btn-primary py-3 text-xs font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md group-hover:shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Package</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </AnimatedCard>
          ))}
        </div>

      </div>
    </section>
  );
}
