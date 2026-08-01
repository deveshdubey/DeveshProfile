import React, { useState } from 'react';
import { X, Calendar, Clock, Check, Sparkles, User, Mail, MessageSquare } from 'lucide-react';

interface BookSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookSessionModal: React.FC<BookSessionModalProps> = ({ isOpen, onClose }) => {
  const [topic, setTopic] = useState('System Design & Architecture');
  const [date, setDate] = useState('2026-08-05');
  const [timeSlot, setTimeSlot] = useState('06:00 PM IST');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [goals, setGoals] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    onClose();
  };

  const topics = [
    'System Design & Architecture',
    'Modern C++ & WebAssembly Optimization',
    'AI Tools (Copilot/Claude) Productivity',
    'Adobe Interview Prep & Career Growth',
  ];

  const availableSlots = [
    '10:00 AM IST',
    '02:00 PM IST',
    '06:00 PM IST',
    '08:30 PM IST',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card w-full max-w-xl rounded-3xl border border-white/10 p-6 sm:p-8 relative shadow-2xl space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-[#262939] text-[#dfe1f6] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="flex items-center gap-2 text-[#ddb7ff] font-mono-code text-xs uppercase tracking-widest font-semibold mb-1">
            <Sparkles className="w-4 h-4" />
            <span>1:1 Mentorship</span>
          </div>
          <h3 className="text-2xl font-bold text-[#dfe1f6]">Book a Session with Devesh</h3>
          <p className="text-[#94A3B8] text-sm mt-1">
            Pick a topic, select your preferred date & time, and get tailored guidance.
          </p>
        </div>

        {confirmed ? (
          <div className="py-8 text-center space-y-4 bg-[#171b2a] p-6 rounded-2xl border border-[#22D3EE]/30">
            <div className="w-14 h-14 rounded-full bg-[#22D3EE]/20 text-[#22D3EE] flex items-center justify-center mx-auto shadow-lg">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-[#dfe1f6]">Session Confirmed!</h4>
            <p className="text-sm text-[#94A3B8]">
              A calendar invitation for <strong className="text-[#adc6ff]">{topic}</strong> on{' '}
              <strong className="text-[#22D3EE]">{date} at {timeSlot}</strong> has been routed to{' '}
              <span className="text-white">{email}</span>.
            </p>

            <div className="p-3 bg-[#0f1321] rounded-xl text-xs font-mono-code text-[#c2c6d6] border border-white/5 inline-block">
              Booking Ref: #DRD-MENTOR-{Math.floor(1000 + Math.random() * 9000)}
            </div>

            <div>
              <button
                onClick={handleReset}
                className="bg-[#adc6ff] hover:bg-[#8cb1ff] text-[#002e6a] font-bold text-sm px-8 py-3 rounded-xl transition-colors cursor-pointer mt-2"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Topic Selection */}
            <div>
              <label className="block text-xs font-mono-code text-[#94A3B8] mb-1.5">
                Select Mentorship Topic
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTopic(t)}
                    className={`p-3 rounded-xl text-left text-xs font-mono-code border transition-all cursor-pointer ${
                      topic === t
                        ? 'bg-[#22D3EE]/15 border-[#22D3EE] text-[#22D3EE] font-bold'
                        : 'bg-[#1b1f2e] border-white/5 text-[#94A3B8] hover:text-[#dfe1f6]'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Date and Time Slot Picker */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-code text-[#94A3B8] mb-1">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#1b1f2e] border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-[#dfe1f6] focus:outline-none focus:border-[#22D3EE] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code text-[#94A3B8] mb-1">
                  Time Slot (IST)
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-[#1b1f2e] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#dfe1f6] focus:outline-none focus:border-[#22D3EE] transition-colors"
                >
                  {availableSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* User Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-code text-[#94A3B8] mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Aarav Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#1b1f2e] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#dfe1f6] focus:outline-none focus:border-[#22D3EE] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-[#94A3B8] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="aarav@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1b1f2e] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#dfe1f6] focus:outline-none focus:border-[#22D3EE] transition-colors"
                />
              </div>
            </div>

            {/* Session Goals */}
            <div>
              <label className="block text-xs font-mono-code text-[#94A3B8] mb-1">
                Primary Goal or Specific Questions
              </label>
              <textarea
                rows={2}
                placeholder="E.g., Preparing for Adobe System Design round or optimizing WebAssembly loops..."
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                className="w-full bg-[#1b1f2e] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#dfe1f6] focus:outline-none focus:border-[#22D3EE] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#adc6ff] hover:bg-[#8cb1ff] text-[#002e6a] font-bold text-sm py-3 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Confirm 1:1 Mentorship Booking</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
