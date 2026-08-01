import React from 'react';
import { Calendar, Linkedin, Star, Users, Award, Clock } from 'lucide-react';
import { MENTOR_DATA, PROFILE_DATA } from '../data/portfolioData';

interface MentorSectionProps {
  onOpenBookingModal: () => void;
}

export const MentorSection: React.FC<MentorSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="mentor" className="py-24 px-6 bg-[#0a0d1c] relative scroll-mt-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="glass-card rounded-[40px] p-8 md:p-16 relative overflow-hidden border border-white/10 shadow-2xl">
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ddb7ff]/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column Text & CTAs */}
            <div className="space-y-6">
              <span className="text-[#ddb7ff] font-mono-code text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#ddb7ff]/10 border border-[#ddb7ff]/20">
                Mentor with Devesh
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#dfe1f6] tracking-tight leading-tight">
                Book a 1:1 Mentor Session
              </h2>

              <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed font-normal">
                Strategic advice, enterprise SAP architecture, digital transformation, PMO governance, and executive guidance from a Senior IT Leader & CTO with 28+ years of global experience.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenBookingModal}
                  className="bg-[#adc6ff] hover:bg-[#8cb1ff] text-[#002e6a] px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-[#adc6ff]/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <Calendar className="w-5 h-5 text-[#002e6a]" />
                  <span>Book a Session</span>
                </button>

                <a
                  href={PROFILE_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#262939] text-[#dfe1f6] hover:bg-[#303444] px-8 py-4 rounded-xl font-bold flex items-center gap-2 border border-white/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-[#22D3EE]" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right Column Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 sm:p-8 rounded-3xl border-l-4 border-l-[#adc6ff]">
                <span className="text-4xl font-extrabold text-[#adc6ff] block mb-1">
                  {MENTOR_DATA.menteesCoached}
                </span>
                <span className="text-xs font-mono-code text-[#94A3B8] uppercase tracking-wider">
                  Mentees Coached
                </span>
              </div>

              <div className="glass-card p-6 sm:p-8 rounded-3xl border-l-4 border-l-[#ddb7ff]">
                <span className="text-4xl font-extrabold text-[#ddb7ff] block mb-1">
                  {MENTOR_DATA.yearsInIndustry}
                </span>
                <span className="text-xs font-mono-code text-[#94A3B8] uppercase tracking-wider">
                  Years Global Exp
                </span>
              </div>

              <div className="glass-card p-6 sm:p-8 rounded-3xl border-l-4 border-l-[#22D3EE]">
                <span className="text-4xl font-extrabold text-[#22D3EE] block mb-1">
                  {MENTOR_DATA.avgRating}
                </span>
                <span className="text-xs font-mono-code text-[#94A3B8] uppercase tracking-wider">
                  Avg Rating
                </span>
              </div>

              <div className="glass-card p-6 sm:p-8 rounded-3xl border-l-4 border-l-white">
                <span className="text-4xl font-extrabold text-white block mb-1">
                  {MENTOR_DATA.majorMentorships}
                </span>
                <span className="text-xs font-mono-code text-[#94A3B8] uppercase tracking-wider">
                  Major Mentorships
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
