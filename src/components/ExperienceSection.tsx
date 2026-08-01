import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0f1321] relative scroll-mt-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-[#adc6ff] font-mono-code text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#adc6ff]/10 border border-[#adc6ff]/20">
            Career
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#dfe1f6] tracking-tight">
            Experience
          </h2>
          <p className="text-[#94A3B8] text-base max-w-xl mx-auto">
            Where I've been building, leading, and delivering value.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto pl-6 md:pl-0">
          {/* Central Connecting Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#22D3EE] via-[#adc6ff] to-[#303444] -translate-x-1/2" />

          <div className="space-y-16">
            {EXPERIENCE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Spacer Column */}
                  <div className="hidden md:block md:w-[45%]" />

                  {/* Timeline Dot Icon */}
                  <div className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full -translate-x-1/2 border-4 border-[#0f1321] z-20 shadow-lg flex items-center justify-center bg-[#22D3EE] shadow-[#22D3EE]/50" />

                  {/* Experience Card */}
                  <div className="w-full md:w-[45%] pl-10 md:pl-0">
                    <div className="glass-card p-8 rounded-3xl relative hover:border-[#adc6ff]/30 transition-all duration-300 shadow-xl space-y-4">
                      {/* Current Tag */}
                      {item.isCurrent && (
                        <span className="absolute top-6 right-6 bg-[#22D3EE]/20 text-[#22D3EE] font-mono-code text-[11px] font-bold px-2.5 py-1 rounded-md border border-[#22D3EE]/30">
                          CURRENT
                        </span>
                      )}

                      <div>
                        <h3 className="text-xl font-bold text-[#adc6ff] flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-[#22D3EE]" />
                          {item.role}
                        </h3>

                        <p className="font-mono-code text-xs text-[#94A3B8] mt-1 flex flex-wrap items-center gap-3">
                          <span>{item.company} · {item.location}</span>
                          <span className="flex items-center gap-1 text-[#c2c6d6]">
                            <Calendar className="w-3 h-3 text-[#22D3EE]" />
                            {item.period}
                          </span>
                        </p>
                      </div>

                      <p className="text-sm text-[#dfe1f6] leading-relaxed">
                        {item.description}
                      </p>

                      {/* Achievements Bullets */}
                      <ul className="space-y-2 pt-2 border-t border-white/5">
                        {item.achievements.map((ach, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-[#94A3B8] flex items-start gap-2 leading-relaxed"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3EE] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono-code px-2 py-0.5 rounded-md bg-[#1b1f2e] text-[#c2c6d6] border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
