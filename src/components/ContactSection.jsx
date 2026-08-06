import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const contactCards = [
    {
      icon: Phone,
      title: '24/7 Call Center',
      value: '+91 98765 43210',
      sub: 'Emergency & Same Day Dispatch',
      action: 'tel:+919876543210',
      actionText: 'Call Now'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Instant Support',
      value: '+91 98765 43210',
      sub: 'Instant Quotes & Video Audits',
      action: 'https://wa.me/919876543210',
      actionText: 'Chat on WhatsApp'
    },
    {
      icon: Mail,
      title: 'Email Inquiries',
      value: 'support@mosquishield.in',
      sub: 'Response within 1 Hour',
      action: 'mailto:support@mosquishield.in',
      actionText: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: 'Monday – Sunday: 7:00 AM – 9:00 PM',
      sub: '24/7 Emergency Line Available',
      action: '#book',
      actionText: 'Book Slot'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            We Are Here To Help You 24/7
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Visit our HQ in Hitech City or speak directly with our vector control engineers.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl border border-slate-200/90 bg-white flex flex-col justify-between hover-lift group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">{card.title}</h3>
                  <p className="font-extrabold text-emerald-800 text-sm mb-1">{card.value}</p>
                  <p className="text-xs text-slate-500 font-normal">{card.sub}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={card.action}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>{card.actionText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Large Interactive Map Simulation */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 relative h-96">
          <iframe
            title="MosquiShield Hyderabad HQ Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.271337482329!2d78.37861931535497!3d17.45037098804135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb57d079eb!2sCyber%20Towers%2C%20HITEC%20City%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Map Overlay Card */}
          <div className="absolute bottom-6 left-6 p-4 rounded-2xl glass-dark text-white border border-white/20 hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">MosquiShield™ Headquarters</h4>
                <p className="text-xs text-slate-300">Level 4, Cyber Towers, Hitech City, Hyderabad 500081</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
