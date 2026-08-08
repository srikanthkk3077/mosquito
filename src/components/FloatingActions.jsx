import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MessageSquare, Phone, Calendar, ArrowUp } from 'lucide-react';

export default function FloatingActions({ onOpenBooking }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

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
    <>
      {/* Floating Actions Container - Positioned on Bottom-Left to prevent overlap with Tawk.to Live Chat */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 flex flex-col items-start gap-2.5 pointer-events-none">

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 text-white border border-slate-700 shadow-xl flex items-center justify-center hover:bg-sky-500 transition-all cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}

        {/* Call Button */}
        <a
          href="tel:+919949187262"
          className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900 text-white border border-slate-700 shadow-2xl flex items-center justify-center hover:bg-sky-600 hover:scale-105 transition-all group"
          title="Call Hotline: +91 99491 87262"
          aria-label="Call Hotline"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-white/20 group-hover:rotate-12 transition-transform" />
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919949187262?text=Hi%20mosquitofightre,%20I%20want%20to%20book%20a%20mosquito%20treatment%20inspection."
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-sky-500 text-white shadow-2xl flex items-center justify-center hover:scale-105 transition-transform group relative"
          title="WhatsApp Chat"
          aria-label="WhatsApp Chat"
        >
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-white/20 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-amber-400 rounded-full border-2 border-white animate-ping" />
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-amber-400 rounded-full border-2 border-white" />
        </a>

      </div>
    </>
  );
}
