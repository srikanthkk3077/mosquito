import React from 'react';
import { Check, Calendar, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PricingPage() {
  const navigate = useNavigate();

  const pricingTiers = [
    {
      name: '2BHK Apartment',
      price: '₹1,499',
      period: 'Single Treatment',
      popular: false,
      desc: 'Ideal for standard 2-bedroom apartments in Gachibowli, Kondapur, and Kukatpally.',
      features: [
        'Complete Indoor Cold Misting',
        'Balcony Foliage & Drain Spray',
        '100% Odorless & Pet-Safe',
        '90-Day Free Callback Warranty'
      ]
    },
    {
      name: '3BHK / 4BHK Apartment',
      price: '₹1,999',
      period: 'Single Treatment',
      popular: true,
      desc: 'Our most popular package for high-rise family flats across Hitech City & Madhapur.',
      features: [
        '3-Stage Deep Micro-Mist Spray',
        'Balcony & Utility Area Bio-Barrier',
        'BTI Bio-Larvicide Sump Treatment',
        '90-Day Unconditional Warranty',
        'Express Same-Day Service (<2 Hrs)'
      ]
    },
    {
      name: 'Luxury Villa / Estate',
      price: '₹2,999',
      period: 'Single Treatment',
      popular: false,
      desc: 'Bespoke indoor and perimeter barrier treatment for gated villas in Jubilee Hills & Kokapet.',
      features: [
        'Full Indoor & Lawn Foliage Barrier',
        'Water Feature Anti-Larval Bio-Control',
        'Patio & Outdoor Gazebo Protection',
        'VIP Emergency Priority Support',
        '120-Day Extended Warranty Certificate'
      ]
    },
    {
      name: 'Annual AMC Package (4 Visits)',
      price: '₹4,999',
      period: 'Yearly Plan (Save 35%)',
      popular: false,
      desc: 'Round-the-year 365-day mosquito protection with quarterly scheduled visits.',
      features: [
        '4 Scheduled Quarterly Treatments',
        'Unlimited Free Interim Callbacks',
        'Monsoon Peak Season Heavy Fogging',
        'Dedicated Vector Account Manager',
        'Complimentary Surface Disinfection'
      ]
    }
  ];

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-sky-900 via-blue-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-widest">
            Transparent Pricing
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Flat & Honest Mosquito Packages
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Zero hidden charges. Every treatment is backed by our 100% money-back 90-day callback guarantee.
          </p>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`hover-lift glass-card rounded-3xl p-6 border flex flex-col justify-between relative ${
                tier.popular
                  ? 'border-sky-500 ring-2 ring-sky-500/30 bg-white shadow-xl'
                  : 'border-slate-200/80 bg-white/90 shadow-sm'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-extrabold rounded-full uppercase tracking-wider shadow-md">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">{tier.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{tier.desc}</p>
                
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <span className="font-heading font-extrabold text-3xl text-slate-900">{tier.price}</span>
                  <span className="text-xs text-slate-500 font-medium block mt-1">{tier.period}</span>
                </div>

                <ul className="space-y-2.5">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <button
                  onClick={() => navigate('/book')}
                  className={`w-full py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    tier.popular
                      ? 'btn-primary shadow-lg'
                      : 'border border-slate-200 text-slate-800 hover:border-sky-500 hover:text-sky-600 hover:bg-sky-50'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Package Now</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
