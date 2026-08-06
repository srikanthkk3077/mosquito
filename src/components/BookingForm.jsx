import React, { useState } from 'react';
import { SERVICES_DATA, AREAS_WE_SERVE } from '../data/websiteData';
import { Calendar, Clock, MapPin, User, Phone, MessageSquare, CheckCircle, ShieldCheck, Sparkles, X } from 'lucide-react';

export default function BookingForm({ isModal = false, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    locality: 'Gachibowli',
    address: '',
    serviceId: 'residential',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '09:00 AM - 11:00 AM',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const timeSlots = [
    '08:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 02:00 PM',
    '02:00 PM - 04:00 PM',
    '04:00 PM - 06:00 PM',
    '06:00 PM - 08:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = 'MS-HYD-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setSubmitted(true);
  };

  return (
    <section id="book" className={`${isModal ? 'p-2 sm:p-4' : 'py-24 bg-slate-900 text-white relative overflow-hidden'}`}>
      
      {!isModal && (
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      )}

      <div className={`${isModal ? 'w-full' : 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'}`}>
        
        {!isModal && (
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest">
              Instant Online Booking
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Book Your Free Inspection
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal">
              Select your preferred service & time slot. Our certified technician will arrive equipped for complete vector management.
            </p>
          </div>
        )}

        <div className={`glass-dark p-6 sm:p-10 rounded-3xl border border-slate-700/80 shadow-2xl relative ${isModal ? 'bg-slate-900 text-white' : ''}`}>
          
          {isModal && (
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">Book Free Inspection</h3>
                  <p className="text-xs text-slate-400">Same Day Dispatch Available</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          )}

          {submitted ? (
            /* Success Confirmation State */
            <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/40">
                <CheckCircle className="w-12 h-12 stroke-[2.5]" />
              </div>

              <div className="space-y-2">
                <span className="px-3 py-1 bg-amber-400 text-slate-950 font-extrabold text-xs rounded-full uppercase tracking-wider">
                  Booking Confirmed!
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                  Appointment Scheduled
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>! Your technician assignment is in progress.
                </p>
              </div>

              <div className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700 text-left max-w-md mx-auto space-y-3 text-xs">
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Reference No:</span>
                  <span className="font-bold text-emerald-400">{bookingRef}</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Locality:</span>
                  <span className="font-bold text-white">{formData.locality}</span>
                </div>
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Date & Slot:</span>
                  <span className="font-bold text-white">{formData.date} ({formData.timeSlot})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Emergency Line:</span>
                  <span className="font-bold text-amber-300">+91 98765 43210</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    if (isModal && onClose) onClose();
                  }}
                  className="btn-primary py-3 px-8 text-sm font-semibold cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form Inputs */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-white text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Mobile Phone */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Mobile Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-white text-sm outline-none transition-all"
                    />
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Locality Selector */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Select Locality in Hyderabad *
                  </label>
                  <div className="relative">
                    <MapPin className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.locality}
                      onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 focus:border-emerald-500 text-white text-sm outline-none transition-all"
                    >
                      {AREAS_WE_SERVE.map((area, i) => (
                        <option key={i} value={area.name} className="bg-slate-900 text-white">
                          {area.name} ({area.zip})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Service Package *
                  </label>
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 focus:border-emerald-500 text-white text-sm outline-none transition-all"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.id} className="bg-slate-900 text-white">
                        {srv.title} ({srv.price})
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Full Address */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Flat / House / Villa Address *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Flat 402, Aparna Cyber Life, Nallagandla"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 focus:border-emerald-500 text-white text-sm outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Date Picker */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 focus:border-emerald-500 text-white text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Time Slot */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Preferred Time Slot *
                  </label>
                  <div className="relative">
                    <Clock className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 focus:border-emerald-500 text-white text-sm outline-none transition-all"
                    >
                      {timeSlots.map((slot, idx) => (
                        <option key={idx} value={slot} className="bg-slate-900 text-white">
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>

              {/* Message Notes */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Please treat balcony plants and outdoor lawn specifically."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 focus:border-emerald-500 text-white text-sm outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-accent py-4 rounded-2xl text-base font-bold cursor-pointer shadow-xl flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>Confirm Free Inspection Booking</span>
              </button>

              <p className="text-center text-[11px] text-slate-400 font-medium">
                🔒 100% Privacy Protected. No spam. You will receive an instant WhatsApp confirmation.
              </p>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
