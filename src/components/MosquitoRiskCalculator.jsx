import React, { useState } from 'react';
import { CALCULATOR_OPTIONS } from '../data/websiteData';
import { Calculator, CheckCircle2, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MosquitoRiskCalculator() {
  const [propertyIdx, setPropertyIdx] = useState(1);
  const [severityIdx, setSeverityIdx] = useState(0);
  const navigate = useNavigate();

  const selectedProperty = CALCULATOR_OPTIONS.propertyTypes[propertyIdx];
  const selectedSeverity = CALCULATOR_OPTIONS.severities[severityIdx];

  return (
    <section className="py-20 bg-sky-950 text-white relative overflow-hidden border-y border-sky-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Explanation */}
          <div className="lg:col-span-5 space-y-5">
            <span className="px-3.5 py-1.5 rounded-full bg-sky-800/80 border border-sky-600 text-sky-300 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
              <Calculator className="w-4 h-4 text-sky-400" />
              <span>Interactive Property Audit</span>
            </span>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Calculate Your Home’s Mosquito Risk Level
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Select your property type and current mosquito infestation level to get an instant automated Dengue risk score and recommended botanical treatment.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Instant Risk Assessment Score',
                'Calculates Exact Treatment Price',
                'Zero Obligation Free Site Audit'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-sky-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Interactive Form Box */}
          <div className="lg:col-span-7">
            <div className="glass-dark p-6 sm:p-10 rounded-3xl border border-sky-800/80 shadow-2xl space-y-6">
              
              {/* Step 1: Select Property Type */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-sky-300">
                  1. Select Property Type & Size *
                </label>
                <select
                  value={propertyIdx}
                  onChange={(e) => setPropertyIdx(Number(e.target.value))}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-500 text-white text-sm outline-none cursor-pointer"
                >
                  {CALCULATOR_OPTIONS.propertyTypes.map((prop, idx) => (
                    <option key={idx} value={idx} className="bg-slate-900 text-white">
                      {prop.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 2: Select Severity */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-sky-300">
                  2. Select Current Mosquito Infestation Level *
                </label>
                <div className="space-y-2">
                  {CALCULATOR_OPTIONS.severities.map((sev, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSeverityIdx(idx)}
                      className={`w-full p-3.5 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                        severityIdx === idx
                          ? 'border-sky-400 bg-sky-900/60 text-white ring-2 ring-sky-500/30'
                          : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span>{sev.label}</span>
                      <span className="text-[11px] font-extrabold text-amber-400">{sev.threat}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Result Summary Box */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-sky-700/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Assessed Threat Level:</span>
                  <span className="px-3 py-1 bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-extrabold rounded-full">
                    {selectedSeverity.threat}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Recommended Treatment:</span>
                    <span className="font-extrabold text-white text-base">{selectedProperty.label.split('(')[0]}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block font-medium">Starting Price:</span>
                    <span className="font-extrabold text-sky-400 text-xl">{selectedProperty.price}</span>
                  </div>
                </div>
              </div>

              {/* Direct Booking Action */}
              <button
                onClick={() => navigate('/book')}
                className="w-full btn-accent py-4 text-sm font-extrabold rounded-2xl flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Free Inspection For {selectedProperty.price}</span>
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
