import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { ShieldCheck, Linkedin } from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  return (
    <footer className="bg-[#0a0d1c] border-t border-white/5 mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center py-10 px-6 max-w-[1280px] mx-auto gap-6">
        <div>
          <span className="font-extrabold text-xl text-[#adc6ff] tracking-tight">
            {PROFILE_DATA.name}
          </span>
          <p className="text-[#94A3B8] text-xs font-mono-code mt-2">
            © {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved. CTO & Senior IT Leadership Portfolio.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href={PROFILE_DATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0077b5] hover:text-[#22D3EE] text-sm transition-colors flex items-center gap-1.5 font-mono-code font-bold"
          >
            <Linkedin className="w-4 h-4 fill-current" />
            <span>LinkedIn</span>
          </a>
          <a
            href={PROFILE_DATA.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94A3B8] hover:text-[#22D3EE] text-sm transition-colors"
          >
            GitHub
          </a>
          <a
            href={PROFILE_DATA.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94A3B8] hover:text-[#22D3EE] text-sm transition-colors"
          >
            Twitter
          </a>

          <div className="h-4 w-px bg-white/10 hidden md:block" />

          <button
            onClick={onOpenAdmin}
            className="text-[#94A3B8] hover:text-[#22D3EE] text-sm transition-colors underline underline-offset-4 flex items-center gap-1 cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Admin Login</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
