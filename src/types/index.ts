// Shared content types, see docs/ARCHITECTURE.md §2.

export type Project = {
  id: string;
  number: string; // "01"
  title: string;
  tagline: string;
  year: string; // "2025" | "2026 (In Progress)"
  role: string;
  type: string;
  group?: { team: string; role: string };
  inProgress?: boolean;
  tech: string[];
  description: string;
  impact: string;
  learned: string;
  repo: string;
  images: string[]; // [] → render sized placeholder
  imageCaptions?: string[];
};

export type EducationEntry = {
  institution: string;
  degree: string;
  start: string;
  end: string;
  gpa?: string;
  details?: string[];
};

export type ExperienceEntry = {
  org: string;
  role: string;
  start: string;
  end: string;
  summary: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Profile = {
  name: string;
  positioning: string;
  bio: string;
  email: string;
  phone: string;
  github: string;
};
