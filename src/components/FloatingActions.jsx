import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Phone, Calendar, ArrowUp } from 'lucide-react';

export default function FloatingActions({ onOpenBooking }) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Floating Call Button */}
      <a
        href="tel:+919876543210"
        className="pointer-events-auto w-12 h-12 rounded-full bg-emerald-700 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group"
        title="Call Now"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5 fill-white/20 group-hover:rotate-12 transition-transform" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hi%20MosquiShield,%20I%20want%20to%20book%20a%20mosquito%20treatment%20inspection."
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-14 h-14 rounded-full bg-emerald-500 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group relative"
        title="WhatsApp Chat"
        aria-label="WhatsApp Chat"
      >
        <MessageSquare className="w-7 h-7 fill-white/20 group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white" />
      </a>

      {/* Floating Book Inspection Pill */}
      <button
        onClick={() => {
          if (onOpenBooking) onOpenBooking();
          else navigate('/book');
        }}
        className="pointer-events-auto btn-primary py-3 px-5 text-xs font-bold shadow-2xl flex items-center gap-2 cursor-pointer border border-emerald-400/40 animate-bounce"
        style={{ animationDuration: '3s' }}
      >
        <Calendar className="w-4 h-4" />
        <span className="hidden sm:inline">Book Free Inspection</span>
      </button>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-10 h-10 rounded-full bg-slate-900 text-white border border-slate-700 shadow-xl flex items-center justify-center hover:bg-emerald-600 transition-all cursor-pointer"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
