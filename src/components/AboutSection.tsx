import React from 'react';
import { Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#0a0d1c] relative scroll-mt-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-[#adc6ff] font-mono-code text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#adc6ff]/10 border border-[#adc6ff]/20">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#dfe1f6] tracking-tight">
            The Story so far
          </h2>
          <p className="text-[#94A3B8] text-base max-w-xl mx-auto">
            A glimpse into my journey, achievements, and what drives me.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Who I am Card */}
          <div className="lg:col-span-8 glass-card p-8 rounded-3xl relative overflow-hidden flex flex-col justify-center">
            <div className="flex items-start gap-5 mb-4">
              <div className="p-3 rounded-2xl bg-[#ddb7ff]/10 text-[#ddb7ff] border border-[#ddb7ff]/20 shrink-0">
                <Sparkles className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#dfe1f6] mb-3">Who I am</h3>
                <p className="text-[#94A3B8] text-base leading-relaxed">
                  {PROFILE_DATA.aboutStory}
                </p>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-center border-l-4 border-l-[#adc6ff] hover:border-l-[#22D3EE] transition-colors">
              <span className="text-3xl font-extrabold text-[#adc6ff] mb-1">
                {PROFILE_DATA.stats.yearsOfExp}
              </span>
              <span className="text-xs font-mono-code text-[#94A3B8] uppercase tracking-wider">
                Years Experience
              </span>
            </div>

            <div className="glass-card p-6 rounded-2xl flex flex-col justify-center border-l-4 border-l-[#ddb7ff] hover:border-l-[#22D3EE] transition-colors">
              <span className="text-3xl font-extrabold text-[#ddb7ff] mb-1">
                {PROFILE_DATA.stats.portfolioValue}
              </span>
              <span className="text-xs font-mono-code text-[#94A3B8] uppercase tracking-wider">
                Portfolio Managed
              </span>
            </div>

            <div className="glass-card p-6 rounded-2xl flex flex-col justify-center border-l-4 border-l-[#22D3EE] hover:border-l-[#adc6ff] transition-colors">
              <span className="text-3xl font-extrabold text-[#22D3EE] mb-1">
                {PROFILE_DATA.stats.efficiencyGain}
              </span>
              <span className="text-xs font-mono-code text-[#94A3B8] uppercase tracking-wider">
                IT Efficiency Gain
              </span>
            </div>

            <div className="glass-card p-6 rounded-2xl flex flex-col justify-center border-l-4 border-l-white hover:border-l-[#ddb7ff] transition-colors">
              <span className="text-3xl font-extrabold text-white mb-1">
                {PROFILE_DATA.stats.costReduction}
              </span>
              <span className="text-xs font-mono-code text-[#94A3B8] uppercase tracking-wider">
                Tech Cost Cut
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
