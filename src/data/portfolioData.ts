import { Project, ExperienceItem, SkillCategory, MentorStats } from '../types';

export const PROFILE_DATA = {
  name: "Devesh Dubey",
  shortName: "DD",
  role: "CTO | Senior IT Leader | SAP & Digital Transformation Expert",
  subRole: "Cloud & AI/ML Strategist · Program & PMO Governance",
  location: "Qatar / India",
  availability: "Available for Strategic Leadership · Global / Qatar / India",
  bio: "Accomplished Senior IT Leader with 28+ years of global experience across MNCs and Big 4 organizations including Deloitte, Accenture, IBM, TCS, Nakilat, Qatar Shipyard Technology Solutions, and HighBar Technocrat.",
  aboutStory: "Accomplished Senior IT Leader with 28+ years of global experience driving US$50M+ enterprise transformation programs, SAP S/4HANA ERP & IS-U implementations, AI/ML platforms, SAP BTP integrations, and PMO governance across infrastructure, manufacturing, energy, and engineering sectors. Specialized in RISE with SAP, Clean Core adoption, SAP BTP integration, Generative AI (Claude Code, SAP Joule), and AI automation. Proven track record of delivering 40% improvement in IT operational efficiency, 25% reduction in technology costs, and driving revenue growth up to 150% through AI and cloud modernization.",
  stats: {
    yearsOfExp: "28+",
    portfolioValue: "$50M+",
    efficiencyGain: "40%",
    costReduction: "25%"
  },
  profileImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwpQvfdFmvKtygajqeXnsGZXshoki98E5XXvrUPgxJt3WnFNeNE7Uk2MRfyx7Vix2g525Xp6XtfPc2DLZYMxNjlrDrAUOPty5vZwl764C1ItB5Ls6MydybhdQYC6svpSowwG5twWeJwlHTfMCbfu6zEqT60Oku0FRVE1b_nZAJ0bhz69K_CqCnUa_1Ax4MCZ-S5W_XtnYl8Wx5kNJPXhWHQaW46N9FoNMDktXJRyKp5qLzbsUP11y3HYqqCb8QkGePrW4",
  socials: {
    email: "deveshdubey94@gmail.com",
    secondaryEmail: "devesh_dubey@yahoo.com",
    phone: "+91 99870 94840 | +974 66924484",
    linkedin: "https://www.linkedin.com/in/devesh-dubey-432a9512",
    github: "https://github.com/deveshdubey",
    twitter: "https://twitter.com/deveshdubey"
  }
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: "sap-digital",
    title: "SAP & Digital Transformation",
    iconName: "terminal",
    skills: [
      { name: "SAP S/4HANA & SAP IS-U", level: 98, description: "Utilities ERP transformation, Power Utilities IS-U, S/4HANA migration & Clean Core strategy" },
      { name: "SAP BTP & RISE with SAP", level: 95, description: "Business Technology Platform integration, extension suite, RISE modernization & cloud adoption" },
      { name: "SAP Suite (CRM, BI, Fiori, Signavio, SAC)", level: 92, description: "Fiori UI, Signavio business process mining, SAP Analytics Cloud (SAC) & C4C integration" },
      { name: "Enterprise Architecture & Clean Core", level: 94, description: "Designing human-centered scalable architecture, zero-impact core ERP extensions & cloud integration" }
    ]
  },
  {
    id: "ai-emerging",
    title: "AI / ML & Emerging Tech",
    iconName: "psychology",
    skills: [
      { name: "Generative AI & Agentic AI", level: 95, description: "AI Agents, Claude Code, ChatGPT, SAP Joule AI tools, prompt engineering & LLM automation" },
      { name: "Python, TensorFlow & Keras", level: 88, description: "Machine learning algorithms, data science pipelines, predictive modeling & deep learning" },
      { name: "RPA, OCR & Intelligent Automation", level: 92, description: "Process automation, in-house OCR software development (+80% revenue lift) & AI-based workflows" },
      { name: "Robotics, AR & Blockchain", level: 85, description: "Leading research teams of 15+ data scientists on deep learning, blockchain & AR applications" }
    ]
  },
  {
    id: "pmo-leadership",
    title: "Program Management & IT Governance",
    iconName: "language",
    skills: [
      { name: "PMO Governance & Portfolio Management", level: 98, description: "Directing $50M+ enterprise transformation portfolios, financial control & delivery frameworks" },
      { name: "Agile & SAFe Delivery", level: 95, description: "Scrum Master (CSM), Agile transformation, sprint governance & cross-functional delivery" },
      { name: "Cyber Risk & CAPEX/OPEX Strategy", level: 90, description: "IT budgeting (CAPEX/OPEX), vendor management, incident response & compliance alignment" },
      { name: "Change Management & Stakeholder Relations", level: 96, description: "95%+ stakeholder satisfaction, executive client workshops & presales solutioning" }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "us10m-utilities-transformation",
    title: "US$10 Million Utilities Modernization Program",
    category: "SAP S/4HANA & Utilities / HighBar Technocrat",
    company: "HighBar Technocrat Pvt. Ltd.",
    description: "Leading a US$10M Utilities transformation program comprising multiple SAP S/4HANA ERP and SAP IS-U (Power Utilities) projects across infrastructure, energy, and engineering sectors.",
    longDescription: "Spearheading enterprise-wide SAP IS-U and S/4HANA modernization. Managing presales solutioning, RFP management, client workshops, SAP BTP integration, and Clean Core adoption strategies. Delivered 40% improvement in IT operational efficiency and 25% reduction in technology costs.",
    tags: ["SAP S/4HANA", "SAP IS-U", "SAP BTP", "Clean Core", "AI Automation", "Utilities"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpgG99dqlhQEmUPCvca3TTVHbKRGrlJnBBmDZYd0AtKFO23ni-bcx8uB9mhHe5RxM4ERT2KJMVkerpJ5ZTnkawXhjv3zNt540F5hzROG85f7wPTsw7mz4zb8zhJm8FhO9JoDz4lhUkLDXM2I2fsGEzX9oTVLeNr6mPoiN3siFP2wtjukyNB7wW6Vt4PF0hDXMMwusUxoNPcqafzeUypyviiRqYIChz6Xjq1B0sSqYIROO0RmQrO26T-A",
    metrics: [
      { label: "IT Efficiency Gain", value: "40%" },
      { label: "Operational Cost Cut", value: "-25%" },
      { label: "Process Efficiency", value: "+30%" }
    ],
    architectureHighlights: [
      "Architected clean core adoption framework integrated with SAP BTP Extension Suite.",
      "Delivered AI-based process automation solutions improving operational efficiency by 30%.",
      "Achieved 95%+ stakeholder satisfaction across complex multi-sector utility deployments."
    ],
    codeSnippet: {
      language: "json",
      code: `{
  "program": "US$10M Utilities SAP S/4HANA & IS-U Transformation",
  "clientSectors": ["Infrastructure", "Manufacturing", "Power Utilities", "Energy"],
  "coreArchitecture": {
    "erp": "SAP S/4HANA",
    "industrySolution": "SAP IS-U (Utilities)",
    "integrationPlatform": "SAP BTP",
    "strategy": "Clean Core & RISE with SAP"
  },
  "benchmarks": {
    "itEfficiencyImprovement": "40%",
    "costReduction": "25%",
    "stakeholderSatisfaction": "95%+"
  }
}`
    }
  },
  {
    id: "shipyard-digital-transformation",
    title: "Shipyard Enterprise Digital Transformation & SAP BTP",
    category: "Cloud & Maritime / Qatar Shipyard Technology Solutions",
    company: "Qatar Shipyard Technology Solutions (QSTS)",
    description: "Spearheaded enterprise-wide SAP BTP-driven digital transformation for shipyard operations, establishing Clean Core and RISE with SAP roadmaps.",
    longDescription: "Led the IT department at Qatar Shipyard Technology Solutions (QSTS) in Al Khor, Qatar. Defined enterprise IT strategy, business applications, PMO governance, and budget planning. Delivered Proof of Concepts (PoCs) showcasing SAP BTP integration, advanced analytics, and intelligent automation.",
    tags: ["SAP BTP", "RISE with SAP", "Clean Core", "In-House OCR", "Deep Learning", "Maritime"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwK5RB2oHiXGwBYDxIDDYeit1GaUZg-0cYao7xxRZVyCAl82mruxUzX9sr-D7iXiAqd9JuLRzeScT44anIA5SK1Gy5ptqM9KE9zQW_zZTwVMZe9BHAs7CwhJKdo4LpU_ag4ysyTEVXIYcYdEu2BhhksKD-TMOgjK5r-E3PEz2IdGgbu2ISqoIx3i9xd1Ucc4AP-LL8D82qeIWfksvtTHUjV81N6JpXouUihme6Kc1eWj2OXXU3_iHefQ",
    metrics: [
      { label: "Efficiency Gain", value: "30%" },
      { label: "Cost Optimization", value: "20%" },
      { label: "In-House OCR Revenue", value: "+80%" }
    ],
    architectureHighlights: [
      "Oversaw in-house OCR software development which drove an 80% revenue increase.",
      "Led team of 15 data scientists on deep learning and blockchain research initiatives.",
      "Automated business processes across 12 business units, cutting operational costs by 25%."
    ],
    codeSnippet: {
      language: "yaml",
      code: `# Shipyard Enterprise SAP BTP & Clean Core Architecture
transformation_program:
  organization: "Qatar Shipyard Technology Solutions (QSTS)"
  location: "Al Khor, Qatar"
  modules:
    - SAP BTP Integration Suite
    - RISE with SAP Modernization
    - In-house OCR & Deep Learning AI
  key_outcomes:
    operational_efficiency: "+30%"
    cost_reduction: "20%"
    inhouse_capabilities_cost_reduction: "30%"`
    }
  },
  {
    id: "deloitte-pmo-50m-portfolio",
    title: "US$50M Public Sector Enterprise Transformation",
    category: "PMO Governance & Advisory / Deloitte India",
    company: "Deloitte India Pvt Ltd",
    description: "Directed $50 Million enterprise SAP/non-SAP transformation portfolio for the Public Pension Agency (PPA) in Saudi Arabia.",
    longDescription: "Served as Associate Director at Deloitte India (Riyadh, Saudi Arabia). Led PMO governance, project delivery frameworks, financial control, and risk management standards for high-stakes public sector digital transformations.",
    tags: ["PMO Governance", "Deloitte", "Public Sector", "SAP S/4HANA", "$50M Portfolio", "Saudi Arabia"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLUGJIhT8oD0qqyN5WH4EoITwc7vFYFiwrnVH3nuxNUiMipZUbYwafb1WXDwqodo3h-SaqDO7Q9dNkJ1Hk4LeWlQR9tYOAqvkiNNU-twrJRtF52hCdOk8LOzDlPXRGad_1h1KSy3JhveGotGT8coUbUQzUaZNNaQ2ElAt-FreVXglJxLuJk_fcaRaDfekPj-UYsucrwWwhs0nGuetmahJRWvdEQf6qvTdmvEwml1a0ppIXkXPUfm9Qsg",
    metrics: [
      { label: "Client Satisfaction", value: "98%" },
      { label: "Portfolio Value", value: "$50M" },
      { label: "Delivery Efficiency", value: "+25%" }
    ],
    architectureHighlights: [
      "Established PMO governance and project delivery frameworks for $50M portfolio.",
      "Achieved 98% client satisfaction with on-time, on-budget project completion.",
      "Optimized delivery efficiency by 25% through standardized governance tools."
    ],
    codeSnippet: {
      language: "typescript",
      code: `// Deloitte Enterprise PMO Governance Model
export class PMOManagementFramework {
  private client = "Public Pension Agency (PPA), Saudi Arabia";
  private portfolioBudgetUSD = 50_000_000;

  public evaluateProgramStatus(): { satisfactionRate: string; efficiencyGain: string } {
    return {
      satisfactionRate: "98% On-time / On-budget",
      efficiencyGain: "25% PMO Optimization"
    };
  }
}`
    }
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "highbar-agm-pm",
    role: "AGM – Program Manager",
    company: "HighBar Technocrat Pvt. Ltd.",
    location: "India / Global",
    period: "2024 – Present",
    isCurrent: true,
    description: "Leading a US$10 Million Utilities transformation program encompassing multiple SAP S/4HANA ERP and SAP IS-U (Power Utilities) projects.",
    achievements: [
      "Lead a US$10M Utilities transformation program encompassing multiple SAP S/4HANA ERP and SAP IS-U projects.",
      "Drive SAP and digital transformation initiatives across infrastructure, manufacturing, energy, and engineering sectors.",
      "Manage presales solutioning, RFP responses, client workshops, and strategic technology roadmaps.",
      "Lead SAP BTP integration, Clean Core adoption, and enterprise modernization initiatives.",
      "Delivered 40% improvement in IT operational efficiency and 25% reduction in operational technology costs.",
      "Delivered AI-based automation solutions improving operational efficiency by 30% with 95%+ stakeholder satisfaction."
    ],
    technologies: ["SAP S/4HANA", "SAP IS-U", "SAP BTP", "Clean Core", "AI Automation", "PMO Governance", "RFP Management"]
  },
  {
    id: "qsts-shipyard-head",
    role: "Shipyard IT Head",
    company: "Qatar Shipyard Technology Solutions (QSTS)",
    location: "Al Khor, Qatar",
    period: "Feb 2022 – 2024",
    isCurrent: false,
    description: "Spearheaded enterprise-wide SAP BTP-driven digital transformation for shipyard operations, establishing Clean Core and RISE with SAP strategies.",
    achievements: [
      "Spearheaded SAP BTP-driven digital transformation for shipyard operations, enabling business process modernization.",
      "Defined Clean Core and RISE with SAP strategies aligning technology roadmaps with long-term business goals.",
      "Delivered PoCs showcasing SAP BTP integration, advanced analytics, and intelligent automation.",
      "Achieved 30% improvement in operational efficiency and 20% cost optimization.",
      "Oversaw in-house OCR software development which increased company revenue by 80%.",
      "Led a team of 15 data scientists in deep learning and blockchain research.",
      "Established technological infrastructure across 15 states and led 12 business units in process automation, reducing costs by 25%."
    ],
    technologies: ["SAP BTP", "RISE with SAP", "Clean Core", "AI/ML", "In-House OCR", "Deep Learning", "IT Budgeting (CAPEX/OPEX)"]
  },
  {
    id: "deloitte-assoc-director",
    role: "Associate Director",
    company: "Deloitte India Pvt Ltd",
    location: "Riyadh, Saudi Arabia",
    period: "Sep 2019 – Dec 2021",
    isCurrent: false,
    description: "Led PMO governance and managed $50 Million enterprise SAP/non-SAP transformation portfolio for Public Pension Agency (PPA), Saudi Arabia.",
    achievements: [
      "Led PMO governance and managed enterprise SAP/non-SAP transformation programs.",
      "Directed project portfolio management worth $50M ensuring financial control and execution excellence.",
      "Defined project delivery frameworks, resulting in 98% client satisfaction and 25% improved delivery efficiency."
    ],
    technologies: ["PMO Governance", "SAP S/4HANA", "Portfolio Management", "Agile/SAFe", "Public Sector Transformation"]
  },
  {
    id: "mdsap-pmo",
    role: "SAP PMO SSM",
    company: "MDSap Tech LLC",
    location: "Abu Dhabi, UAE",
    period: "Aug 2018 – Aug 2019",
    isCurrent: false,
    description: "Managed SAP PS, BI, CRM, HR, and Portal integration projects for the Federal Authority for Identity & Citizenship.",
    achievements: [
      "Managed SAP PS, BI, CRM, HR, and Portal integration projects for federal identity platforms.",
      "Strengthened PMO governance, reporting frameworks, financial tracking, and compliance alignment."
    ],
    technologies: ["SAP CRM", "SAP PS", "SAP BI", "Portal Integration", "PMO Governance", "UAE Federal"]
  },
  {
    id: "global-leadership-summary",
    role: "Senior IT Leadership & SAP Program Management Roles",
    company: "Accenture, IBM, TCS, SAGIA, Al Rajhi Takaful, MDSap Tech, Sapcle",
    location: "USA, Saudi Arabia, UAE, India",
    period: "1996 – 2018",
    isCurrent: false,
    description: "Over two decades of progressive IT leadership, SAP delivery, and strategy roles across leading global MNCs and consulting leaders.",
    achievements: [
      "Served as CRM Program Lead at Saudi Intelligent Solution (Riyadh) and IT/Project Manager at SAGIA.",
      "SAP Program Manager at Al Rajhi Takaful (Riyadh), leading large-scale insurance & financial application integrations.",
      "SAP Expert / Team Lead at Accenture (USA) & SAP Specialist at IBM India Pvt Ltd.",
      "SAP Project Manager at Tata Consultancy Services (TCS) & Developer at Afteck Business Machines.",
      "Designed enterprise security policies, incident response frameworks, and multi-region IT infrastructure."
    ],
    technologies: ["SAP Ecosystem", "Accenture", "IBM", "TCS", "Cloud Infrastructure", "Enterprise Architecture"]
  }
];

export const MENTOR_DATA: MentorStats = {
  menteesCoached: "500+",
  yearsInIndustry: "28+",
  avgRating: "4.9",
  majorMentorships: "25+",
  platforms: ["HighBar Technocrat", "Deloitte", "Accenture", "TCS", "IBM", "Qatar Shipyard"]
};
