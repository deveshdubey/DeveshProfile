import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#171b2a] relative scroll-mt-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#adc6ff] font-mono-code text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#adc6ff]/10 border border-[#adc6ff]/20">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#dfe1f6] tracking-tight mt-3">
              Featured Projects
            </h2>
            <p className="text-[#94A3B8] text-base max-w-2xl mt-2">
              A curated set of enterprise transformations, SAP S/4HANA modernizations, and AI automation programs.
            </p>
          </div>

          <button
            onClick={() => onSelectProject(PROJECTS_DATA[0])}
            className="text-[#adc6ff] font-semibold text-sm flex items-center gap-2 hover:translate-x-2 transition-transform cursor-pointer group shrink-0"
          >
            <span>See All Projects</span>
            <ArrowRight className="w-4 h-4 text-[#22D3EE] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group glass-card rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 flex flex-col justify-between border border-white/10 hover:border-[#adc6ff]/40 cursor-pointer shadow-xl"
            >
              <div>
                {/* Image Banner Container */}
                <div className="relative h-60 overflow-hidden bg-[#0f1321]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1321] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 bg-[#0f1321]/80 backdrop-blur-md px-3 py-1 rounded-full text-[12px] font-mono-code text-[#22D3EE] border border-[#22D3EE]/30">
                    {project.category}
                  </div>

                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0f1321]/80 backdrop-blur-md flex items-center justify-center text-[#dfe1f6] opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-[#22D3EE]" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#dfe1f6] mb-3 group-hover:text-[#adc6ff] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags Footer */}
              <div className="px-8 pb-8 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#262939] rounded-full text-xs font-mono-code text-[#c2c6d6] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
