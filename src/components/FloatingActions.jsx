import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MessageSquare, Phone, Calendar, ArrowUp, Bot } from 'lucide-react';
import ChatBoard from './ChatBoard';

export default function FloatingActions({ onOpenBooking }) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

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
    <>
      {/* Interactive Chat Board Modal Window */}
      <ChatBoard isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Floating Action Container - Tailored for Mobile & Desktop */}
      <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">

        {/* Back to Top Button (Hidden on tiny screens unless scrolled far down) */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-900 text-white border border-slate-700 shadow-xl flex items-center justify-center hover:bg-sky-500 transition-all cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          </button>
        )}

        {/* Phone Call Button (Desktop Only or compact mobile) */}
        <a
          href="tel:+919949187262"
          className="pointer-events-auto hidden sm:flex w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-900 text-white border border-slate-700 shadow-2xl items-center justify-center hover:bg-sky-600 hover:scale-105 transition-all group"
          title="Call Hotline"
          aria-label="Call Hotline"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-white/20 group-hover:rotate-12 transition-transform" />
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919949187262?text=Hi%20mosquitofightre,%20I%20want%20to%20book%20a%20mosquito%20treatment%20inspection."
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-sky-600 text-white shadow-2xl flex items-center justify-center hover:scale-105 transition-transform group relative"
          title="WhatsApp Chat"
          aria-label="WhatsApp Chat"
        >
          <MessageSquare className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-white/20 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-amber-400 rounded-full border-2 border-white animate-ping" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-amber-400 rounded-full border-2 border-white" />
        </a>

        {/* AI Vector Specialist Chat Button */}
        {!isChatOpen && (
          <button
            onClick={() => setIsChatOpen(true)}
            className="pointer-events-auto group relative flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white py-2 px-3 sm:py-2.5 sm:px-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-white"
            aria-label="Open Vector Control Chat Board"
          >
            <div className="relative">
              <Bot className="w-4 h-4 text-white" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full border border-white animate-pulse" />
            </div>
            <span className="text-xs font-extrabold tracking-wide hidden sm:inline">Chat with Specialist</span>
            <span className="text-[11px] font-extrabold tracking-wide sm:hidden">Chat</span>
            <span className="px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded-full bg-amber-400 text-slate-950 font-extrabold text-[9px] sm:text-[10px] uppercase shadow-sm">
              Live
            </span>
          </button>
        )}

      </div>
    </>
  );
}
