import React from 'react';
import { ArrowDown, FileText, Code2, Sparkles, MapPin } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onViewProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onViewProjects }) => {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center px-6 overflow-hidden">
      {/* Background Radial Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-[#adc6ff]/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-[#ddb7ff]/10 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column Text Content */}
        <div className="md:col-span-7 space-y-6 text-left">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 bg-[#262939] px-4 py-2 rounded-full border border-white/10 shadow-inner">
            <span className="w-2.5 h-2.5 bg-[#22D3EE] rounded-full animate-pulse shadow-[0_0_8px_#22D3EE]" />
            <span className="font-mono-code text-xs font-medium text-[#22D3EE] tracking-wide flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#22D3EE]" />
              {PROFILE_DATA.availability}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#dfe1f6]">
            Namaste, I'm <br />
            <span className="gradient-text">{PROFILE_DATA.name}</span>
          </h1>

          {/* Role Subhead */}
          <div className="space-y-1">
            <p className="text-xl sm:text-2xl font-bold text-[#adc6ff] tracking-wide flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#22D3EE] inline-block shrink-0" />
              <span>{PROFILE_DATA.role}</span>
            </p>
            <p className="text-xs sm:text-sm font-mono-code text-[#22D3EE] tracking-wider font-semibold">
              {PROFILE_DATA.subRole}
            </p>
          </div>

          {/* Short Bio */}
          <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            {PROFILE_DATA.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onViewProjects}
              className="bg-gradient-to-r from-[#adc6ff] to-[#ddb7ff] text-[#002e6a] px-8 py-3.5 rounded-full font-bold shadow-lg shadow-[#adc6ff]/20 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenResume}
              className="border border-[#adc6ff]/60 text-[#adc6ff] hover:bg-[#adc6ff]/10 px-8 py-3.5 rounded-full font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer backdrop-blur-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {/* Right Column Profile Photo Card */}
        <div className="md:col-span-5 relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm aspect-square glass-card rounded-3xl overflow-hidden p-3 cyan-glow rotate-2 hover:rotate-0 transition-transform duration-500 group shadow-2xl">
            <img
              src={PROFILE_DATA.profileImageUrl}
              alt={PROFILE_DATA.name}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 filter brightness-105 contrast-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1321]/40 via-transparent to-transparent rounded-2xl pointer-events-none" />
          </div>

          {/* Floating Animated Badge */}
          <div className="absolute -bottom-5 left-4 md:-left-4 glass-card p-4 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-3 animate-bounce">
            <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/20 flex items-center justify-center text-[#22D3EE]">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono-code text-[#22D3EE] font-semibold">SAP S/4HANA & BTP</p>
              <p className="text-[11px] text-[#94A3B8]">AI & PMO Governance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
