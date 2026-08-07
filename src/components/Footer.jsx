import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12 border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-1 shadow-lg shadow-emerald-600/30 overflow-hidden flex items-center justify-center border border-emerald-500/40">
                <img
                  src="/assets/logo.png"
                  alt="MosquiShield Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                  MosquiShield<span className="text-amber-400">™</span>
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-emerald-400 -mt-1">
                  Vector Control Hyderabad
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              Hyderabad’s premier Govt-Approved, ISO 9001:2015 Certified eco-friendly mosquito control service provider. Protecting luxury homes, apartments, & corporate IT parks with zero-odor bio-mist.
            </p>

            {/* Google Rating Badge */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3 w-fit">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-extrabold text-white">4.9 / 5.0</span>
                <span className="text-slate-400 block font-medium">2,480+ Google Reviews</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Services</Link></li>
              <li><Link to="/process" className="hover:text-emerald-400 transition-colors">5-Step Process</Link></li>
              <li><Link to="/pricing" className="hover:text-emerald-400 transition-colors">Pricing</Link></li>
              <li><Link to="/gallery" className="hover:text-emerald-400 transition-colors">Gallery</Link></li>
              <li><Link to="/reviews" className="hover:text-emerald-400 transition-colors">Reviews</Link></li>
              <li><Link to="/areas" className="hover:text-emerald-400 transition-colors">Areas We Serve</Link></li>
              <li><Link to="/faq" className="hover:text-emerald-400 transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider">
              Mosquito Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Residential Micro-Misting</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Corporate IT Park Sanitization</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Luxury Villa Protection</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Landscape & Garden Fogging</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Anti-Larval Biological Control</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Automated Mist Systems</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider">
              Dengue Safety Newsletter
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to get seasonal Dengue alerts, monsoon pest advisories, and exclusive discount vouchers.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! You are subscribed to Dengue Alerts.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-emerald-500 text-white text-xs outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary py-2.5 text-xs font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe Free</span>
                </button>
              </form>
            )}

            <div className="pt-2 text-[11px] text-slate-500">
              Lic. No: CGB/HYD/2016/9821 • ISO 9001:2015 Certified
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} MosquiShield™ Vector Control Pvt. Ltd. All rights reserved. Designed for Hyderabad.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/faq" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/faq" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link to="/faq" className="hover:text-slate-300 transition-colors">Warranty Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
