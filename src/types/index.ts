export interface DegreeType {
  title: string;
  place: string;
  period: string;
  status: string;
  description: string;
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
