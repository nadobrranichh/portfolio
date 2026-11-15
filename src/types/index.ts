import type { IconType } from "react-icons";

export interface DegreeType {
  i18nKey: string;
  topics?: string[];
}

export interface CertificateType {
  title: string;
  author?: string;
  platform: string;
  year?: number;
  url?: string;
  progress?: number;
  status?: string;
}

export interface Project {
  title: string;
  description: string;
  url: string;
  githubUrl: string;
  image: string;
}

interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

export interface TechnologyGroup {
  i18nKey: string;
  items: Technology[];
}

export interface ExperienceItem {
  role: string;
  type: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface ContactItem {
  title: string;
  user: string;
  url: string;
  icon: IconType;
}
