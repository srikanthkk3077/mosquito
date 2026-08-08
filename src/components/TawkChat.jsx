import React, { useEffect, useState } from 'react';
import { MessageSquare, X, ShieldCheck, User, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { AREAS_WE_SERVE } from '../data/websiteData';

export default function TawkChat() {
  const propertyId = import.meta.env.VITE_TAWKTO_PROPERTY_ID || '67fe648fafd309190c8e57cb';
  const widgetId = import.meta.env.VITE_TAWKTO_WIDGET_ID || '1iosrhkn5';

  const [showPreChatModal, setShowPreChatModal] = useState(false);
  const [isPreChatVerified, setIsPreChatVerified] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Gachibowli'
  });

  // Check if user has already identified in localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('mosquitofightre_user_lead');
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        if (parsed.name && parsed.phone) {
          setFormData(parsed);
          setIsPreChatVerified(true);
        }
      } catch (e) {
        console.error('Error reading saved user lead from localStorage:', e);
      }
    }
  }, []);

  // Initialize & Load Tawk.to script
  useEffect(() => {
    if (!propertyId || !widgetId) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Intercept when user tries to expand/maximize chat
    window.Tawk_API.onChatMaximized = function () {
      const savedUser = localStorage.getItem('mosquitofightre_user_lead');
      if (!savedUser) {
        // Minimize tawk widget and show pre-chat lead form
        if (window.Tawk_API.minimize) {
          window.Tawk_API.minimize();
        }
        setShowPreChatModal(true);
      }
    };

    window.Tawk_API.onLoad = function () {
      if (window.Tawk_API.setAttributes) {
        window.Tawk_API.setAttributes({
          company: 'Mosquitofightre™ Vector Experts',
          site: 'Mosquitofightre Hyderabad'
        });
      }
    };

    // If script is already injected, return
    if (document.getElementById('tawkto-script')) return;

    const s1 = document.createElement('script');
    s1.id = 'tawkto-script';
    s1.async = true;
    s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');

    const s0 = document.getElementsByTagName('script')[0];
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }

    return () => {
      // Cleanup script tag if needed on unmount
      const script = document.getElementById('tawkto-script');
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [propertyId, widgetId]);

  // Handle Pre-Chat Form Submission
  const handlePreChatSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    // 1. Save lead to localStorage
    localStorage.setItem('mosquitofightre_user_lead', JSON.stringify(formData));
    setIsPreChatVerified(true);
    setShowPreChatModal(false);

    // 2. Pass visitor attributes to Tawk.to Live Chat API
    if (window.Tawk_API && window.Tawk_API.setAttributes) {
      window.Tawk_API.setAttributes(
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email || `${formData.phone}@mosquitofightre.lead`,
          location: formData.location || 'Hyderabad'
        },
        function (error) {
          if (error) {
            console.error('Tawk.to setAttributes error:', error);
          }
        }
      );
    }

    // 3. Open Tawk.to Live Chat Window
    if (window.Tawk_API && window.Tawk_API.maximize) {
      window.Tawk_API.maximize();
    }
  };

  // Custom trigger handler for floating chat buttons
  const handleOpenChat = () => {
    const savedUser = localStorage.getItem('mosquitofightre_user_lead');
    if (savedUser || isPreChatVerified) {
      if (window.Tawk_API && window.Tawk_API.maximize) {
        window.Tawk_API.maximize();
      }
    } else {
      setShowPreChatModal(true);
    }
  };

  return (
    <>
      {/* Pre-Chat Lead Capture Form Modal */}
      {showPreChatModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-300">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-300">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-sky-600 to-blue-700 p-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-base text-white">
                    Live Vector Specialist Chat
                  </h3>
                  <p className="text-xs text-sky-100 font-normal">
                    Enter details to connect with a technician in &lt; 30 seconds
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowPreChatModal(false)}
                className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handlePreChatSubmit} className="p-6 space-y-4">
              
              {/* Mandatory Name */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Suresh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white transition-all font-medium"
                  />
                </div>
              </div>

              {/* Mandatory Phone */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Mobile Phone Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 99491 87262"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white transition-all font-medium"
                  />
                </div>
                <p className="text-[10px] text-slate-500">
                  📞 Required so our local dispatch team can call back if chat disconnects.
                </p>
              </div>

              {/* Optional Email */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Optional Location */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Hyderabad Area <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white transition-all"
                  >
                    {AREAS_WE_SERVE.map((area, idx) => (
                      <option key={idx} value={area.name}>
                        {area.name} ({area.zip})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-primary py-3.5 text-xs font-extrabold rounded-2xl flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-sky-500/25 hover:scale-[1.01] transition-all"
                >
                  <span>Start Live Chat Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
                <span>100% Privacy Protected • Instant Technician Response</span>
              </div>

            </form>

          </div>
        </div>
      )}
    </>
  );
}
