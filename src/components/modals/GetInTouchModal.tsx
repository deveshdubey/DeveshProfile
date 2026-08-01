import React, { useState } from 'react';
import { X, Send, Copy, Check, Mail, MessageSquare } from 'lucide-react';
import { PROFILE_DATA } from '../../data/portfolioData';

interface GetInTouchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetInTouchModal: React.FC<GetInTouchModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card w-full max-w-lg rounded-3xl border border-white/10 p-6 sm:p-8 relative shadow-2xl space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-[#262939] text-[#dfe1f6] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="flex items-center gap-2 text-[#22D3EE] font-mono-code text-xs uppercase tracking-widest font-semibold mb-1">
            <Mail className="w-4 h-4" />
            <span>Contact Devesh</span>
          </div>
          <h3 className="text-2xl font-bold text-[#dfe1f6]">Get in Touch</h3>
          <p className="text-[#94A3B8] text-sm mt-1">
            Send a direct message or copy Devesh's email address below.
          </p>
        </div>

        {/* Direct Email Box */}
        <div className="p-4 rounded-2xl bg-[#171b2a] border border-white/5 flex items-center justify-between gap-4">
          <div className="overflow-hidden">
            <p className="text-xs text-[#94A3B8] font-mono-code">Direct Email</p>
            <p className="text-sm font-bold text-[#adc6ff] truncate">{PROFILE_DATA.socials.email}</p>
          </div>
          <button
            onClick={handleCopyEmail}
            className="px-4 py-2 rounded-xl bg-[#262939] hover:bg-[#303444] text-[#22D3EE] font-mono-code text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>

        {/* Form or Sent Confirmation */}
        {sent ? (
          <div className="py-10 text-center space-y-3 bg-[#171b2a]/60 rounded-2xl border border-green-500/20">
            <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[#dfe1f6]">Message Sent!</h4>
            <p className="text-xs text-[#94A3B8]">
              Thank you! Devesh will get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-code text-[#94A3B8] mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Rahul Verma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#1b1f2e] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-[#dfe1f6] placeholder-[#94A3B8] focus:outline-none focus:border-[#22D3EE] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-[#94A3B8] mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="rahul@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#1b1f2e] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-[#dfe1f6] placeholder-[#94A3B8] focus:outline-none focus:border-[#22D3EE] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono-code text-[#94A3B8] mb-1">Inquiry Type</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-[#1b1f2e] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-[#dfe1f6] focus:outline-none focus:border-[#22D3EE] transition-colors"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Adobe Engineering Collaboration">Adobe Engineering Collaboration</option>
                <option value="Mentorship / Career Coaching">Mentorship / Career Coaching</option>
                <option value="Speaking / Tech Talk">Speaking / Tech Talk</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono-code text-[#94A3B8] mb-1">Message</label>
              <textarea
                required
                rows={3}
                placeholder="Hi Devesh, I would like to discuss..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#1b1f2e] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-[#dfe1f6] placeholder-[#94A3B8] focus:outline-none focus:border-[#22D3EE] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#4d8eff] hover:bg-[#3b82f6] text-[#00285d] font-bold text-sm py-3 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
