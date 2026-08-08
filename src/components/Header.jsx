import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Phone, Calendar, Menu, X, ChevronRight, ShieldCheck, Zap, Sparkles, MapPin, Star, HelpCircle } from 'lucide-react';

export default function Header({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Process & Tech', path: '/process' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'FAQ & Help', path: '/faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Emergency Announcement Ticker Strip */}
      <div className="bg-slate-950 text-white text-[11px] py-1.5 px-4 hidden sm:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-medium">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sky-300 font-bold">mosquitofightre™ Express Dispatch</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">Same-Day Emergency Service Across Hyderabad (&lt; 2 Hrs Arrival)</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1 text-sky-400 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>90-Day Free Callback Warranty</span>
            </span>
            <a
              href="tel:+919949187262"
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-extrabold transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>Hotline: +91 99491 87262</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Glassmorphism Main Navbar */}
      <div className={`px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? 'py-1.5' : 'py-2.5'}`}>
        <div className={`max-w-7xl mx-auto rounded-full transition-all duration-300 border ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-slate-200/90 shadow-xl shadow-sky-500/5 py-2 px-4 sm:px-6'
            : 'bg-white/80 backdrop-blur-md border-white/80 shadow-md py-2.5 px-4 sm:px-6'
        }`}>
          <div className="flex items-center justify-between">

            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl overflow-hidden shadow-md shadow-sky-500/20 border border-sky-300 bg-white flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform">
                <img
                  src="/assets/logo.png"
                  alt="MosquiShield Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight bg-gradient-to-r from-sky-600 via-blue-600 to-slate-900 bg-clip-text text-transparent leading-none">
                  mosquitofightre<span className="text-amber-500">™</span>
                </span>
                <span className="block text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-sky-600 mt-0.5">
                  Hyderabad Vector Experts
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25 font-extrabold'
                        : 'text-slate-700 hover:text-sky-600 hover:bg-sky-50/80'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <a
                href="tel:+919949187262"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200/90 text-slate-800 hover:border-sky-500 hover:text-sky-600 font-bold text-xs transition-all hover:bg-sky-50/60"
              >
                <Phone className="w-3.5 h-3.5 text-sky-500 fill-sky-500/20" />
                <span>+91 99491 87262</span>
              </a>

              <button
                onClick={() => {
                  if (onOpenBooking) onOpenBooking();
                  else navigate('/book');
                }}
                className="btn-primary flex items-center gap-1.5 px-4 py-2 text-xs font-extrabold cursor-pointer shadow-lg shadow-sky-500/20 hover:scale-105 transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Inspection</span>
              </button>
            </div>

            {/* Mobile Navigation Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => {
                  if (onOpenBooking) onOpenBooking();
                  else navigate('/book');
                }}
                className="btn-primary p-2 text-xs font-bold sm:hidden flex items-center gap-1 shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-slate-100 text-slate-800 hover:bg-sky-100 hover:text-sky-600 transition-colors focus:outline-none cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Glassmorphism Sliding Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-4 mt-1 bg-white/95 backdrop-blur-2xl rounded-3xl border border-slate-200 shadow-2xl p-5 transition-all animate-in slide-in-from-top-3 duration-300">
          <div className="text-[10px] uppercase tracking-widest font-extrabold text-sky-600 mb-2 px-2">
            Navigation Menu
          </div>

          <nav className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 text-xs font-semibold rounded-2xl transition-colors ${
                    isActive
                      ? 'bg-sky-500 text-white font-extrabold shadow-sm'
                      : 'text-slate-800 hover:bg-sky-50 hover:text-sky-600'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </NavLink>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="tel:+919949187262"
              className="flex items-center justify-center gap-2 py-3 rounded-2xl border border-slate-200 text-slate-800 font-bold text-xs hover:bg-sky-50"
            >
              <Phone className="w-4 h-4 text-sky-500 fill-sky-500/20" />
              <span>Call Hotline: +91 99491 87262</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
                else navigate('/book');
              }}
              className="btn-primary py-3.5 w-full flex items-center justify-center gap-2 font-extrabold text-xs cursor-pointer shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Site Inspection</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
