import React from 'react';
import TrustBadges from '../components/TrustBadges';
import WhyChooseUs from '../components/WhyChooseUs';
import HealthBenefits from '../components/HealthBenefits';
import { ShieldCheck, Award, Users, CheckCircle, Sparkles, Phone, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-emerald-900 via-emerald-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest">
            About MosquiShield™ Hyderabad
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Hyderabad’s Premier Vector Defense Specialists
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Delivering engineered, eco-certified vector management to over 5,000+ luxury villas, apartments, and corporate IT parks since 2016.
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Company Story & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/assets/hero.png"
                alt="MosquiShield Hyderabad Team"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-dark text-white">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span>ISO 9001:2015 Certified Quality</span>
                  <span className="text-emerald-400">Govt Lic # CGB/HYD/2016</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest">
              Our Heritage & Standard
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
              Pioneering Zero-Odor & Eco-Friendly Vector Control
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Founded in Hyderabad, MosquiShield™ was established with a singular mission: to protect families from dangerous mosquito-borne diseases like Dengue, Chikungunya, and Malaria without relying on harsh toxic smells or messy fogging smoke.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Our team utilizes German Ultra-Low Volume (ULV) cold misting technology and WHO-prequalified biological larvicides that target vector breeding cycles at the source while remaining 100% safe for infants, pets, and pregnant women.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="font-extrabold text-2xl text-emerald-700">10+ Years</div>
                <div className="text-xs text-slate-500 font-medium">Hyderabad Service Excellence</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="font-extrabold text-2xl text-emerald-700">5,000+</div>
                <div className="text-xs text-slate-500 font-medium">Verified Happy Customers</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Detailed Why Choose Us */}
      <WhyChooseUs onOpenBooking={() => navigate('/book')} />

      {/* Health & Safety */}
      <HealthBenefits onOpenBooking={() => navigate('/book')} />

    </div>
  );
}
