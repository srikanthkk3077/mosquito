import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/websiteData';
import { Maximize2, Sparkles } from 'lucide-react';

export default function GallerySection({ onSelectImage }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Outdoor Fogging', 'Larval Control'];

  const filteredItems = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest">
            Field Operations Showcase
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Work in Action
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Take a look inside our certified vector control operations across Hyderabad luxury villas, gated communities, commercial IT parks, and garden estates.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-700/30 scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pinterest Style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className="relative group rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer break-inside-avoid border-4 border-white bg-slate-900"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading font-bold text-lg text-white mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                  <Maximize2 className="w-4 h-4" />
                  <span>Click to expand image</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
