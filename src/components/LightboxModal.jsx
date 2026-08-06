import React from 'react';
import { X, Calendar, Clock, Tag, BookOpen, ShieldCheck } from 'lucide-react';

export default function LightboxModal({ item, type = 'image', onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      
      <div className="bg-slate-900 text-white border border-slate-700/80 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-800/90 text-slate-300 hover:text-white hover:bg-emerald-600 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {type === 'image' ? (
          /* Gallery Lightbox View */
          <div className="space-y-6">
            <div className="relative h-80 sm:h-[450px] bg-slate-950 rounded-t-3xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-emerald-600 text-white font-bold text-xs rounded-full">
                {item.category}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-3">
              <h3 className="font-heading font-extrabold text-2xl text-white">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Field vector control operation executed by MosquiShield™ certified technicians in Hyderabad. Botanical non-toxic formula applied with German ULV equipment.
              </p>
            </div>
          </div>
        ) : (
          /* Blog Post Modal Reader View */
          <div className="p-6 sm:p-10 space-y-6">
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-950">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-emerald-600 text-white font-bold text-xs rounded-full">
                {item.category}
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                <span>{item.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {item.readTime}
                </span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                {item.title}
              </h2>

              <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed whitespace-pre-line font-normal space-y-4">
                {item.content}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex justify-end">
              <button
                onClick={onClose}
                className="btn-primary py-2.5 px-6 text-xs font-bold"
              >
                Close Article
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
