import React from 'react';
import { MOSQUITO_SPECIES_DATA } from '../data/websiteData';
import { ShieldAlert, Crosshair, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MosquitoSpeciesRadar() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <span>Target Species Eradication Radar</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Know Your Enemy: Hyderabad Vector Threats
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Different mosquitoes bite at different hours and carry different viral fevers. Our multi-stage treatment is engineered to destroy all 3 species.
          </p>
        </div>

        {/* 3 Mosquito Species Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOSQUITO_SPECIES_DATA.map((species) => (
            <div
              key={species.id}
              className="glass-dark p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-2xl relative flex flex-col justify-between hover:border-emerald-500/60 transition-all group"
            >
              <div className="space-y-4">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 text-white font-extrabold text-xs rounded-full uppercase tracking-wider ${species.color}`}>
                    {species.tag}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center border border-slate-700 group-hover:scale-110 transition-transform">
                    <Crosshair className="w-5 h-5" />
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-heading font-extrabold text-xl text-white">
                  {species.name}
                </h3>

                {/* Activity Hours */}
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center gap-2.5 text-xs text-amber-300 font-bold">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{species.activity}</span>
                </div>

                {/* Threat Description */}
                <div className="space-y-1.5 text-xs text-slate-300">
                  <span className="font-bold text-rose-400 block">Health Threat:</span>
                  <p className="leading-relaxed font-normal">{species.threat}</p>
                </div>

                {/* Breeding Habitat */}
                <div className="space-y-1.5 text-xs text-slate-300">
                  <span className="font-bold text-emerald-400 block">Breeding Hotspots:</span>
                  <p className="leading-relaxed font-normal">{species.habitat}</p>
                </div>

                {/* Eradication Tech */}
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-xs text-emerald-300 space-y-1">
                  <span className="font-bold block text-white flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> MosquiShield Fix:
                  </span>
                  <p className="text-[11px] text-emerald-200 font-normal leading-relaxed">{species.eradication}</p>
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <button
                  onClick={() => navigate('/book')}
                  className="w-full btn-primary py-3 text-xs font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Eliminate {species.name.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
