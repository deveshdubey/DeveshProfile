export interface Project {
  id: string;
  title: string;
  category: string;
  company: string;
  description: string;
  longDescription?: string;
  tags: string[];
  imageUrl: string;
  metrics?: { label: string; value: string }[];
  architectureHighlights?: string[];
  codeSnippet?: { language: string; code: string };
  demoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: { name: string; level: number; description?: string }[];
}

export interface MentorStats {
  menteesCoached: string;
  yearsInIndustry: string;
  avgRating: string;
  majorMentorships: string;
  platforms: string[];
}

export interface BookingFormData {
  name: string;
  email: string;
  topic: string;
  date: string;
  timeSlot: string;
  message: string;
}
