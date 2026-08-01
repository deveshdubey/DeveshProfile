import React, { useState } from 'react';
import { X, Download, FileText, Check, ExternalLink, Briefcase, GraduationCap, Code } from 'lucide-react';
import { PROFILE_DATA, EXPERIENCE_DATA, SKILLS_DATA } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    // Create text file blob
    const resumeText = `
DEVESH DUBEY
CTO | Senior IT Leader | SAP & Digital Transformation Expert | Cloud & AI/ML Strategist
Location: Qatar / India
Email: ${PROFILE_DATA.socials.email} | ${PROFILE_DATA.socials.secondaryEmail}
Phone: ${PROFILE_DATA.socials.phone}
LinkedIn: ${PROFILE_DATA.socials.linkedin}

SUMMARY:
Accomplished Senior IT Leader with 28+ years of global experience driving US$50M+ enterprise transformation programs,
SAP S/4HANA & SAP IS-U implementations, AI/ML platforms, SAP BTP integrations, and PMO governance across MNCs,
Big 4 consulting (Deloitte), and enterprise organizations (Accenture, IBM, TCS, HighBar, QSTS).

CORE COMPETENCIES:
- Digital Transformation & SAP Architecture: SAP S/4HANA, SAP IS-U, SAP BTP, RISE with SAP, Clean Core, CRM, BI, Fiori, C4C, Signavio, SAC
- AI / ML & Automation: Generative AI, AI Agents, Agentic AI, Claude Code, SAP Joule AI Tools, TensorFlow, Keras, Python, RPA, OCR, Robotics
- Cloud, PMO & Governance: Cloud Architecture, IT Program & Portfolio Management ($50M+ portfolios), PMO Governance, Agile & SAFe, Cyber Risk

KEY RECENT EXPERIENCE:
1. AGM – Program Manager @ HighBar Technocrat Pvt. Ltd. (2024 - Present)
   - Leading US$10M Utilities transformation program encompassing SAP S/4HANA ERP and SAP IS-U projects.
   - Delivered 40% improvement in IT operational efficiency and 25% reduction in overall technology costs.

2. Shipyard IT Head @ Qatar Shipyard Technology Solutions (Feb 2022 - 2024)
   - Spearheaded enterprise-wide SAP BTP-driven digital transformation establishing Clean Core & RISE strategies.
   - Delivered 30% operational efficiency gains, 20% cost optimization, and 80% revenue lift from in-house OCR software.

3. Associate Director @ Deloitte India Pvt Ltd, Riyadh (Sep 2019 - Dec 2021)
   - Managed $50M project portfolio for Public Pension Agency (PPA), Saudi Arabia with 98% client satisfaction.

4. SAP PMO SSM @ MDSap Tech LLC, Abu Dhabi (Aug 2018 - Aug 2019)
   - Managed SAP PS, BI, CRM, HR, and Portal integration for Federal Authority for Identity & Citizenship.

5. Global IT Leadership Roles (1996 - 2018)
   - Accenture (USA), IBM India, Tata Consultancy Services (TCS), Al Rajhi Takaful, SAGIA, Afteck.
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Devesh_Dubey_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card w-full max-w-3xl max-h-[90vh] rounded-3xl border border-white/10 p-6 sm:p-8 relative shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#adc6ff]/10 text-[#adc6ff]">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#dfe1f6]">Devesh Dubey - Executive Resume</h3>
              <p className="text-xs text-[#94A3B8] font-mono-code">CTO & Senior IT Leader | SAP & AI Strategist</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#262939] text-[#dfe1f6] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Resume Document */}
        <div className="overflow-y-auto pr-2 space-y-6 text-left font-sans text-sm text-[#dfe1f6] max-h-[60vh] scrollbar-thin">
          {/* Executive Summary */}
          <div className="p-4 rounded-2xl bg-[#171b2a] border border-white/5 space-y-2">
            <p className="text-xs font-mono-code text-[#22D3EE] font-semibold uppercase tracking-wider">
              Executive Summary
            </p>
            <p className="text-xs text-[#c2c6d6] leading-relaxed">
              {PROFILE_DATA.aboutStory}
            </p>
          </div>

          {/* Experience Section */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-code text-[#adc6ff] font-bold uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#adc6ff]" />
              Work Experience
            </h4>

            {EXPERIENCE_DATA.map((exp) => (
              <div key={exp.id} className="p-4 rounded-2xl bg-[#1b1f2e] border border-white/5 space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-bold text-[#dfe1f6]">{exp.role} @ {exp.company}</span>
                  <span className="text-xs font-mono-code text-[#22D3EE]">{exp.period}</span>
                </div>
                <p className="text-xs text-[#94A3B8]">{exp.description}</p>
                <ul className="list-disc list-inside text-xs text-[#c2c6d6] space-y-1 pl-1">
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Credentials */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-code text-[#ddb7ff] font-bold uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#ddb7ff]" />
              Education & Global Leadership
            </h4>

            <div className="p-4 rounded-2xl bg-[#1b1f2e] border border-white/5 flex items-center justify-between flex-wrap gap-2">
              <div>
                <p className="font-bold text-[#dfe1f6]">Post Graduate Degree & Executive IT Certifications</p>
                <p className="text-xs text-[#94A3B8]">Certified Scrum Master (CSM) · SAP Certified Specialist · Agile / SAFe</p>
              </div>
              <span className="text-xs font-mono-code text-[#adc6ff]">Qatar / India</span>
            </div>
          </div>

          {/* Core Technical Arsenal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-code text-[#22D3EE] font-bold uppercase tracking-wider flex items-center gap-2">
              <Code className="w-4 h-4 text-[#22D3EE]" />
              Core Competencies
            </h4>
            <div className="p-4 rounded-2xl bg-[#1b1f2e] border border-white/5 flex flex-wrap gap-2">
              {['SAP S/4HANA', 'SAP IS-U', 'SAP BTP', 'RISE with SAP', 'Clean Core', 'Generative AI', 'Agentic AI', 'Claude Code', 'SAP Joule AI', 'TensorFlow & Keras', 'Python', 'PMO Governance', 'Portfolio Mgmt ($50M+)', 'CAPEX/OPEX', 'Cyber Risk'].map((skill) => (
                <span key={skill} className="px-2.5 py-1 rounded-lg bg-[#262939] text-xs font-mono-code text-[#dfe1f6] border border-white/5">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-white/10 pt-4 mt-4 flex items-center justify-between shrink-0">
          <span className="text-xs text-[#94A3B8] font-mono-code hidden sm:inline-block">
            Verified Senior IT Leader & CTO Profile
          </span>

          <button
            onClick={handleDownload}
            className="bg-gradient-to-r from-[#adc6ff] to-[#ddb7ff] text-[#002e6a] font-bold text-sm px-6 py-2.5 rounded-xl shadow-lg flex items-center gap-2 hover:opacity-95 transition-opacity cursor-pointer ml-auto"
          >
            {downloaded ? <Check className="w-4 h-4 text-[#002e6a]" /> : <Download className="w-4 h-4" />}
            <span>{downloaded ? 'Resume Saved!' : 'Download Resume File'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
