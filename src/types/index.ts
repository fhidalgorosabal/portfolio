export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 1-5
  category: "frontend" | "backend" | "tools" | "languages";
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type Theme = "light" | "dark";

export type Language = "en" | "es" | "pt";

export interface LanguageLabels {
  code: Language;
  label: string;
}
