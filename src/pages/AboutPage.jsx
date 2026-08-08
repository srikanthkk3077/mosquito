import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import HealthBenefits from '../components/HealthBenefits';
import { ShieldCheck, Award, Users, CheckCircle, Sparkles, Phone, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-sky-900 via-blue-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-widest">
            About MosquiShield™
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Protecting Hyderabad Families Since 2014
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Govt-Approved & ISO Certified Vector Eradication Experts specializing in zero-odor botanical micro-misting.
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      </section>


      {/* Company Story & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img
                src="/assets/hero.png"
                alt="MosquiShield Field Operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-dark text-white text-xs font-semibold flex items-center justify-between">
                <span>Government License Verified</span>
                <span className="text-sky-400">Govt Lic # CGB/HYD/2016</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-widest">
              Our Mission
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 leading-tight">
              Eradicating Mosquito Swarms Without Harmful Chemical Fumes
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Founded in Hyderabad, MosquiShield was born out of a critical mission: to protect families from dangerous Dengue & Chikungunya outbreaks using WHO-prequalified, eco-friendly botanical actives.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="font-extrabold text-2xl text-sky-600">10+ Years</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Hyderabad Field Experience</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="font-extrabold text-2xl text-sky-600">5,000+</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Villas & Apartments Protected</div>
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
