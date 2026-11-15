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
  i18nKey: string;
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

export interface ExperienceItemType {
  company: string;
  i18nKey: string;
}

export interface ExperienceValues {
  time: string[];
  title: string;
  type: string;
  description: string[];
}

export interface ContactItem {
  title: string;
  user: string;
  url: string;
  icon: IconType;
}
