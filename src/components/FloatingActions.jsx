import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MessageSquare, Phone, Calendar, ArrowUp } from 'lucide-react';

export default function FloatingActions({ onOpenBooking }) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isBookingPage = location.pathname === '/book';

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
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none">

      {/* Floating Call Button */}
      <a
        href="tel:+919949187262"
        className="pointer-events-auto w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-700 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group"
        title="Call Now"
        aria-label="Call Now"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-white/20 group-hover:rotate-12 transition-transform" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919949187262?text=Hi%20mosquitofightre,%20I%20want%20to%20book%20a%20mosquito%20treatment%20inspection."
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group relative"
        title="WhatsApp Chat"
        aria-label="WhatsApp Chat"
      >
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-white/20 group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-amber-400 rounded-full border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-amber-400 rounded-full border-2 border-white" />
      </a>

      {/* Floating Book Inspection Pill (Hidden if user is already on /book) */}
      {!isBookingPage && (
        <button
          onClick={() => {
            if (onOpenBooking) onOpenBooking();
            else navigate('/book');
          }}
          className="pointer-events-auto btn-primary py-2.5 px-4 sm:py-3 sm:px-5 text-[11px] sm:text-xs font-bold shadow-2xl flex items-center gap-1.5 cursor-pointer border border-emerald-400/40 animate-bounce"
          style={{ animationDuration: '3s' }}
        >
          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Book Free Inspection</span>
          <span className="inline sm:hidden">Book</span>
        </button>
      )}

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 text-white border border-slate-700 shadow-xl flex items-center justify-center hover:bg-emerald-600 transition-all cursor-pointer"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

    </div>
  );
}
