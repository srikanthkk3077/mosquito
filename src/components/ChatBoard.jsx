import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Phone, Calendar, ShieldCheck, Sparkles, CheckCircle2, Bot, User, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ChatBoard({ isOpen: externalIsOpen, onClose: externalOnClose }) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = (val) => {
    if (externalOnClose && !val) {
      externalOnClose();
    } else {
      setInternalIsOpen(val);
    }
  };
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: '👋 Namaste! Welcome to MosquiShield™ Vector Assistant. How can I help protect your home from mosquitoes today?',
      time: 'Just now',
      showQuickChips: true
    }
  ]);
  const [inChatBooking, setInChatBooking] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({ name: '', phone: '', locality: 'Gachibowli' });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen, inChatBooking]);

  // Quick Chips Options
  const quickQuestions = [
    { label: '👶 Is it safe for babies & pets?', key: 'safety' },
    { label: '⚡ How fast can you arrive?', key: 'dispatch' },
    { label: '🛡️ How does the 90-day warranty work?', key: 'warranty' },
    { label: '📅 Book a Free Inspection', key: 'book' }
  ];

  const handleSendMessage = (textToSend = inputMessage, chipKey = null) => {
    const text = textToSend.trim();
    if (!text) return;

    // User message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Process Bot Response after short typing delay
    setTimeout(() => {
      setIsTyping(false);
      let replyText = '';
      let triggerForm = false;

      const lower = text.toLowerCase();

      if (chipKey === 'safety' || lower.includes('baby') || lower.includes('pet') || lower.includes('safe') || lower.includes('smell') || lower.includes('odor')) {
        replyText = '🌿 **100% Safe & Odorless Guarantee**: Our treatments use WHO-prequalified botanical actives that are 100% odorless, non-toxic, and non-staining. Rooms are ready for children, elderly & pets within 30 minutes!';
      } else if (chipKey === 'dispatch' || lower.includes('fast') || lower.includes('time') || lower.includes('arrive') || lower.includes('dispatch') || lower.includes('emergency')) {
        replyText = '⚡ **Express Dispatch (< 2 Hours)**: We have 24 mobile units stationed across Gachibowli, Hitech City, Kondapur, Jubilee Hills, Nallagandla, & ORR corridors in Hyderabad for immediate same-day arrival!';
      } else if (chipKey === 'warranty' || lower.includes('warranty') || lower.includes('guarantee') || lower.includes('90') || lower.includes('re-spray')) {
        replyText = '🛡️ **90-Day Free Callback Warranty**: If mosquitoes reappear anytime within 90 days of treatment, our team will re-spray your entire property completely FREE within 24 hours!';
      } else if (chipKey === 'book' || lower.includes('book') || lower.includes('inspection') || lower.includes('price') || lower.includes('cost') || lower.includes('appoint')) {
        replyText = '📅 **Instant Inspection Booking**: Fill out your basic details below to schedule your FREE site audit with our Hyderabad vector specialist!';
        triggerForm = true;
      } else {
        replyText = 'Thank you for reaching out! Our botanical micro-misting targets Aedes & Anopheles mosquitoes at the source. Would you like to book a free inspection or speak with a senior specialist at +91 99491 87262?';
      }

      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showQuickChips: !triggerForm
      };

      setMessages(prev => [...prev, botMsg]);
      if (triggerForm) {
        setInChatBooking(true);
      }
    }, 1200);
  };

  const handleInChatBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingDetails.name || !bookingDetails.phone) return;

    const ref = 'MS-HYD-' + Math.floor(100000 + Math.random() * 900000);
    setBookingSuccess(true);

    const botConfirm = {
      id: Date.now() + 2,
      sender: 'bot',
      text: `🎉 **Booking Confirmed!**\n\nReference No: **${ref}**\nClient: **${bookingDetails.name}**\nLocality: **${bookingDetails.locality}**\n\nOur technician will contact you on **${bookingDetails.phone}** within 15 minutes to confirm exact time slot!`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, botConfirm]);
    setInChatBooking(false);
  };

  return (
    <>
      {/* Floating Chat Board Modal */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Chat Header */}
          <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-sky-500 text-white flex items-center justify-center font-extrabold text-sm shadow-md">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-900" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-sm text-white flex items-center gap-1.5">
                  <span>MosquiShield™ Expert</span>
                  <span className="text-[10px] px-2 py-0.2 bg-sky-500/30 text-sky-300 rounded-full border border-sky-400/40">AI</span>
                </h3>
                <p className="text-[11px] text-slate-300 font-normal">Online • Instant Vector Support</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <a
                href="tel:+919949187262"
                className="p-2 rounded-full hover:bg-slate-800 text-slate-300 hover:text-sky-400 transition-colors"
                title="Call Hotline"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50">
            
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-end gap-2 max-w-[88%]">
                  {msg.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mb-1">
                      🛡️
                    </div>
                  )}

                  <div
                    className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-sky-500 text-white rounded-br-none shadow-md font-medium'
                        : 'bg-white text-slate-800 rounded-bl-none border border-slate-200/90 shadow-sm font-normal'
                    }`}
                  >
                    {msg.text.split('\n').map((line, lineIdx) => (
                      <p key={lineIdx} className={lineIdx > 0 ? 'mt-1.5' : ''}>
                        {line.split(/(\*\*.*?\*\*)/g).map((part, partIdx) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={partIdx} className="font-extrabold text-slate-900">{part.slice(2, -2)}</strong>;
                          }
                          return part;
                        })}
                      </p>
                    ))}
                  </div>
                </div>

                <span className="text-[9px] text-slate-400 mt-1 px-1">{msg.time}</span>

                {/* Render Quick Action Chips for Bot Messages */}
                {msg.sender === 'bot' && msg.showQuickChips && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {quickQuestions.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(chip.label, chip.key)}
                        className="px-2.5 py-1.5 rounded-full bg-white hover:bg-sky-50 text-sky-700 border border-sky-200 text-[11px] font-semibold transition-all cursor-pointer shadow-xs hover:border-sky-400"
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator Dots */}
            {isTyping && (
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                  🛡️
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-200 shadow-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            {/* In-Chat Quick Lead Booking Form */}
            {inChatBooking && !bookingSuccess && (
              <form onSubmit={handleInChatBookingSubmit} className="p-3.5 rounded-2xl bg-slate-900 text-white space-y-2.5 border border-slate-700 mt-2 shadow-lg animate-in fade-in duration-300">
                <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-xs font-extrabold text-sky-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> 1-Click Free Inspection
                  </span>
                  <span className="text-[10px] text-slate-400">Hyderabad Metro</span>
                </div>

                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={bookingDetails.name}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white outline-none focus:border-sky-500"
                />

                <input
                  type="tel"
                  required
                  placeholder="Mobile Phone Number"
                  value={bookingDetails.phone}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white outline-none focus:border-sky-500"
                />

                <select
                  value={bookingDetails.locality}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, locality: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white outline-none focus:border-sky-500"
                >
                  <option value="Gachibowli">Gachibowli (500032)</option>
                  <option value="Hitech City">Hitech City (500081)</option>
                  <option value="Jubilee Hills">Jubilee Hills (500033)</option>
                  <option value="Kondapur">Kondapur (500084)</option>
                  <option value="Banjara Hills">Banjara Hills (500034)</option>
                  <option value="Nallagandla">Nallagandla / Tellapur</option>
                  <option value="Miyapur">Miyapur / Kukatpally</option>
                </select>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs cursor-pointer shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Confirm Free Audit</span>
                </button>
              </form>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0">
            <input
              type="text"
              placeholder="Ask a question or type 'book'..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 px-3.5 py-2.5 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white transition-all"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim()}
              className="w-9 h-9 rounded-full bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-white flex items-center justify-center shrink-0 cursor-pointer shadow-md transition-all"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </>
  );
}
