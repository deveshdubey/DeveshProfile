import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Linkedin } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Mentor', href: '#mentor' },
    { name: 'Contact', onClick: onOpenContact },
  ];

  const handleNavClick = (link: { name: string; href?: string; onClick?: () => void }) => {
    setMobileMenuOpen(false);
    if (link.onClick) {
      link.onClick();
      return;
    }
    if (link.href) {
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f1321]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-[#0f1321]/70 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 font-extrabold text-2xl tracking-tight text-[#dfe1f6] hover:text-[#adc6ff] transition-colors"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4d8eff] to-[#6f00be] flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:scale-105 transition-transform">
            {PROFILE_DATA.shortName}
          </span>
          <span className="hidden sm:inline-block font-display text-xl tracking-tight">
            Devesh Dubey
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href || '#'}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link);
              }}
              className="text-[#c2c6d6] font-medium text-sm hover:text-[#adc6ff] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#22D3EE] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={PROFILE_DATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 border border-[#0077b5]/50 bg-[#0077b5]/10 hover:bg-[#0077b5]/20 text-[#0077b5] hover:text-white px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-300"
          >
            <Linkedin className="w-3.5 h-3.5 fill-current" />
            <span>Connect on LinkedIn</span>
          </a>

          <button
            onClick={onOpenContact}
            className="bg-[#4d8eff] hover:bg-[#3b82f6] text-[#00285d] font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg shadow-[#4d8eff]/20 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#dfe1f6] hover:bg-[#262939] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href || '#'}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link);
                }}
                className="text-[#dfe1f6] font-medium text-base hover:text-[#22D3EE] transition-colors py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href={PROFILE_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#22D3EE] font-semibold text-sm py-2"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
