import React, { useState } from 'react';
import { Terminal, Brain, Languages, Search, Info } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeInfoSkill, setActiveInfoSkill] = useState<string | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'terminal':
        return <Terminal className="w-5 h-5 text-[#adc6ff]" />;
      case 'psychology':
        return <Brain className="w-5 h-5 text-[#ddb7ff]" />;
      case 'language':
        return <Languages className="w-5 h-5 text-[#22D3EE]" />;
      default:
        return <Terminal className="w-5 h-5 text-[#adc6ff]" />;
    }
  };

  const filteredCategories = SKILLS_DATA.map((cat) => ({
    ...cat,
    skills: cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter(
    (cat) =>
      (selectedCategory === 'all' || cat.id === selectedCategory) &&
      cat.skills.length > 0
  );

  return (
    <section id="skills" className="py-24 px-6 bg-[#0f1321] relative scroll-mt-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-[#adc6ff] font-mono-code text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#adc6ff]/10 border border-[#adc6ff]/20">
            Skills & Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#dfe1f6] tracking-tight">
            Technologies I work with
          </h2>
          <p className="text-[#94A3B8] text-base max-w-xl mx-auto">
            A high-impact toolkit honed over 28+ years of global enterprise transformations.
          </p>
        </div>

        {/* Filter and Search Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-2xl mx-auto">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 p-1.5 glass-card rounded-2xl border border-white/10 w-full sm:w-auto justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono-code font-medium transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#adc6ff] text-[#002e6a] font-bold'
                  : 'text-[#94A3B8] hover:text-[#dfe1f6]'
              }`}
            >
              All
            </button>
            {SKILLS_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono-code font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#adc6ff] text-[#002e6a] font-bold'
                    : 'text-[#94A3B8] hover:text-[#dfe1f6]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g., SAP, S/4HANA, AI, PMO)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#1b1f2e] border border-white/10 rounded-2xl pl-9 pr-4 py-2 text-xs text-[#dfe1f6] placeholder-[#94A3B8] focus:outline-none focus:border-[#22D3EE] transition-colors"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-card p-8 rounded-3xl space-y-6 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="p-2 rounded-xl bg-[#262939]">
                  {getCategoryIcon(category.iconName)}
                </div>
                <h3 className="text-xl font-bold text-[#dfe1f6]">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono-code text-sm font-medium text-[#dfe1f6] group-hover:text-[#22D3EE] transition-colors">
                          {skill.name}
                        </span>
                        {skill.description && (
                          <button
                            onClick={() =>
                              setActiveInfoSkill(
                                activeInfoSkill === skill.name ? null : skill.name
                              )
                            }
                            className="text-[#94A3B8] hover:text-[#22D3EE] transition-colors"
                            title="View breakdown"
                          >
                            <Info className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                      <span className="font-mono-code text-xs font-semibold text-[#adc6ff]">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="skill-progress">
                      <div
                        className="skill-progress-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    {/* Description Popup on Click */}
                    {activeInfoSkill === skill.name && skill.description && (
                      <p className="mt-2 text-[12px] text-[#22D3EE] bg-[#171b2a] p-2 rounded-xl border border-[#22D3EE]/20 animate-in fade-in duration-200 font-mono-code">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
