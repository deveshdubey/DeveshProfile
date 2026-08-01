import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { MentorSection } from './components/MentorSection';
import { Footer } from './components/Footer';

import { GetInTouchModal } from './components/modals/GetInTouchModal';
import { ResumeModal } from './components/modals/ResumeModal';
import { BookSessionModal } from './components/modals/BookSessionModal';
import { ProjectDetailModal } from './components/modals/ProjectDetailModal';
import { AdminModal } from './components/modals/AdminModal';

import { Project } from './types';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1321] text-[#dfe1f6] selection:bg-[#adc6ff]/30 selection:text-[#dfe1f6] flex flex-col justify-between">
      {/* Top Header */}
      <Header onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Layout */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onViewProjects={handleScrollToProjects}
        />

        <AboutSection />

        <SkillsSection />

        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        <ExperienceSection />

        <MentorSection onOpenBookingModal={() => setIsBookingOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Interactive Modals */}
      <GetInTouchModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <BookSessionModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />
    </div>
  );
}
