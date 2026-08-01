import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, Code2, Cpu, Zap, Layers } from 'lucide-react';
import { Project } from '../../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card w-full max-w-3xl max-h-[90vh] rounded-3xl border border-white/10 relative shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Modal Banner */}
        <div className="relative h-48 sm:h-60 overflow-hidden shrink-0 bg-[#0f1321]">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1321] via-[#0f1321]/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-[#0f1321]/80 text-[#dfe1f6] hover:text-white transition-colors cursor-pointer backdrop-blur-md"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-3 py-1 bg-[#22D3EE]/20 border border-[#22D3EE]/40 text-[#22D3EE] font-mono-code text-xs font-semibold rounded-full inline-block mb-2">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#dfe1f6] leading-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left max-h-[55vh] scrollbar-thin">
          {/* Long Description */}
          <p className="text-sm text-[#c2c6d6] leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {/* Key Impact Metrics */}
          {project.metrics && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono-code text-[#adc6ff] uppercase tracking-wider font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#adc6ff]" />
                Key Benchmark Impacts
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((m) => (
                  <div key={m.label} className="p-3 rounded-2xl bg-[#171b2a] border border-white/5 text-center">
                    <span className="text-xl sm:text-2xl font-extrabold text-[#22D3EE] block">
                      {m.value}
                    </span>
                    <span className="text-[11px] font-mono-code text-[#94A3B8]">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Highlights */}
          {project.architectureHighlights && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono-code text-[#ddb7ff] uppercase tracking-wider font-bold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#ddb7ff]" />
                Architecture & Engineering Highlights
              </h4>
              <ul className="space-y-2">
                {project.architectureHighlights.map((highlight, idx) => (
                  <li key={idx} className="p-3 rounded-xl bg-[#1b1f2e] text-xs text-[#dfe1f6] border border-white/5 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] shrink-0 mt-1.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Code Snippet Viewer */}
          {project.codeSnippet && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono-code text-[#22D3EE] uppercase tracking-wider font-bold flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#22D3EE]" />
                  Kernel Code Snippet ({project.codeSnippet.language})
                </h4>
                <button
                  onClick={handleCopyCode}
                  className="text-xs font-mono-code text-[#adc6ff] hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-2xl bg-[#0a0d1c] border border-white/10 text-xs font-mono-code text-[#adc6ff] overflow-x-auto leading-relaxed scrollbar-thin">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <h4 className="text-xs font-mono-code text-[#94A3B8] uppercase">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-[#262939] text-xs font-mono-code text-[#dfe1f6] border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-[#0f1321] flex items-center justify-between shrink-0">
          <span className="text-xs text-[#94A3B8] font-mono-code">
            Company: {project.company}
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-[#262939] hover:bg-[#303444] text-[#dfe1f6] font-mono-code text-xs font-bold transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
