import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Phone, Calendar, Menu, X, ChevronDown, ChevronRight, Layers, Star, MapPin, HelpCircle, BookOpen, Image } from 'lucide-react';

export default function Header({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Primary 5 Header Navigation Links
  const primaryNav = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const secondaryNav = [
    { name: 'Gallery Showcase', path: '/gallery', desc: 'Photos of field operations', icon: Image },
    { name: 'Customer Reviews', path: '/reviews', desc: '2,480+ Google 5-Star ratings', icon: Star },
    { name: 'Areas We Serve', path: '/areas', desc: 'Gachibowli, Hitech City & hubs', icon: MapPin },
    { name: 'FAQ & Help', path: '/faq', desc: '15 Answers on safety & pets', icon: HelpCircle },
    { name: 'Dengue Blog', path: '/blog', desc: 'Prevention guides & tips', icon: BookOpen },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 text-slate-900 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand Logo with Clean Crisp Icon Mark */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-emerald-700/20 border border-emerald-600/30 group-hover:scale-105 transition-transform bg-white flex items-center justify-center p-0.5">
              <img
                src="/assets/logo.png"
                alt="MosquiShield Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-heading font-extrabold text-lg tracking-tight bg-gradient-to-r from-emerald-800 via-emerald-700 to-slate-900 bg-clip-text text-transparent">
                mosquitofightre<span className="text-amber-500">™</span>
              </span>
              <span className="block text-[9px] uppercase font-bold tracking-widest text-emerald-600 -mt-1">
                Hyderabad Vector Experts
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {primaryNav.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-xs font-semibold rounded-full transition-all ${isActive
                    ? 'bg-emerald-700 text-white shadow-sm font-bold'
                    : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* "More" Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-full flex items-center gap-1 transition-all cursor-pointer ${moreDropdownOpen
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50'
                  }`}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180 text-emerald-700' : ''}`} />
              </button>

              {/* Mega Dropdown Panel */}
              {moreDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 grid grid-cols-1 gap-1 z-50 animate-in fade-in zoom-in-95 duration-200">
                  {secondaryNav.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        onClick={() => setMoreDropdownOpen(false)}
                        className={({ isActive }) =>
                          `flex items-start gap-3 p-2.5 rounded-xl transition-all ${isActive
                            ? 'bg-emerald-50 text-emerald-800 font-bold'
                            : 'hover:bg-slate-50 text-slate-800'
                          }`
                        }
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{item.name}</div>
                          <div className="text-[10px] text-slate-500 font-normal">{item.desc}</div>
                        </div>
                      </NavLink>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href="tel:+919949187262"
              className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-slate-200 text-slate-800 hover:border-emerald-600 hover:text-emerald-700 font-semibold text-xs transition-all hover:bg-emerald-50/50"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600/20" />
              <span>+91 99491 87262</span>
            </a>

            <button
              onClick={() => {
                if (onOpenBooking) onOpenBooking();
                else navigate('/book');
              }}
              className="btn-primary flex items-center gap-1.5 px-4 py-2 text-xs font-bold cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Inspection</span>
            </button>
          </div>

          {/* Mobile/Tablet Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => {
                if (onOpenBooking) onOpenBooking();
                else navigate('/book');
              }}
              className="btn-primary p-2 text-xs font-bold flex sm:hidden items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl p-6 transition-all animate-in slide-in-from-top duration-300">
          <div className="text-xs uppercase tracking-wider font-extrabold text-slate-400 mb-2 px-2">
            Main Pages
          </div>
          <nav className="grid grid-cols-2 gap-2 mb-4">
            {primaryNav.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 text-xs font-semibold rounded-xl transition-colors ${isActive
                    ? 'bg-emerald-700 text-white font-bold'
                    : 'text-slate-800 hover:bg-emerald-50 hover:text-emerald-700'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </NavLink>
            ))}
          </nav>

          <div className="text-xs uppercase tracking-wider font-extrabold text-slate-400 mb-2 px-2">
            Explore More
          </div>
          <nav className="grid grid-cols-2 gap-2">
            {secondaryNav.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-xl transition-colors ${isActive
                    ? 'bg-emerald-700 text-white font-bold'
                    : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-700'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </NavLink>
            ))}
          </nav>

          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="tel:+919949187262"
              className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-slate-800 font-bold text-xs"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Now: +91 99491 87262</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
                else navigate('/book');
              }}
              className="btn-primary py-3.5 w-full flex items-center justify-center gap-2 font-bold text-xs cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Inspection</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
