import React, { useState } from 'react';
import { AREAS_WE_SERVE } from '../data/websiteData';
import { MapPin, Clock, ArrowRight, ShieldCheck, Search } from 'lucide-react';

export default function AreasWeServe({ onOpenBooking }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState(AREAS_WE_SERVE[0]);

  const filteredAreas = AREAS_WE_SERVE.filter(area =>
    area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    area.hotspots.toLowerCase().includes(searchTerm.toLowerCase()) ||
    area.zip.includes(searchTerm)
  );

  return (
    <section id="areas" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest">
            Hyderabad Express Coverage
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Areas We Serve Across Hyderabad
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Our rapid-response mobile units are strategically stationed across major Hyderabad tech & residential corridors for &lt;2 hour dispatch.
          </p>

          {/* Quick Search Input */}
          <div className="max-w-md mx-auto pt-4 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search your locality or pin code (e.g. Gachibowli, 500081)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 text-sm outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Map & Location Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side Interactive Map Mockup */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-slate-800">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <MapPin className="w-5 h-5" />
                <span>Hyderabad Metro Command Hub</span>
              </div>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-semibold">
                Live Status: 100% Active
              </span>
            </div>

            {/* Selected Area Highlight Card */}
            <div className="bg-slate-800/90 rounded-2xl p-5 border border-slate-700 space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-extrabold text-2xl text-white">
                  {selectedArea.name}
                </h3>
                <span className="px-3 py-1 bg-amber-400 text-slate-950 font-bold text-xs rounded-full">
                  {selectedArea.tag}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Zip Code:</span>
                  <span className="font-bold text-white text-sm">{selectedArea.zip}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Avg Arrival:</span>
                  <span className="font-bold text-emerald-400 text-sm">{selectedArea.time}</span>
                </div>
              </div>

              <div>
                <span className="text-slate-400 block text-xs font-medium mb-1">Key Coverage Hotspots:</span>
                <span className="text-xs text-slate-200 font-normal leading-relaxed">{selectedArea.hotspots}</span>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full btn-primary py-3 text-xs font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Book Service in {selectedArea.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Stylized Vector Map Visual */}
            <div className="h-48 rounded-2xl bg-emerald-950/40 border border-emerald-800/50 relative overflow-hidden flex items-center justify-center p-4 text-center">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#66BB6A_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative z-10 space-y-2">
                <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                <p className="text-xs text-slate-300 font-semibold">
                  24 Mobile Technician Vans Stationed Across Hyderabad ORR Corridor
                </p>
              </div>
            </div>

          </div>

          {/* Right Side Location Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAreas.map((area, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedArea(area)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  selectedArea.name === area.name
                    ? 'border-emerald-600 bg-emerald-50/80 shadow-md ring-2 ring-emerald-600/30'
                    : 'border-slate-200/80 bg-white hover:border-emerald-400 hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-slate-900 text-base">{area.name}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {area.zip}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                    {area.hotspots}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-semibold text-emerald-700">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {area.time}
                  </span>
                  <span>Select &rarr;</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
