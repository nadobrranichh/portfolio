import type { CertificateType, DegreeType } from "../types";

export const degrees: DegreeType[] = [
  {
    i18nKey: "bachelors",
    topics: [
      "OOP",
      "SOLID",
      "SDLC",
      "DSA",
      "Design Patterns",
      "Architecture",
      "Design",
      "SQL",
      "C++",
      "Java",
      "Web Development",
      "REST API",
    ],
  },
  {
    i18nKey: "masters",
  },
];

export const certificates: CertificateType[] = [
  {
    title: "NodeJS - The Complete Guide",
    platform: "Udemy",
    author: "Academind by Maximilian Schwarzmüller",
    year: 2026,
    url: "https://www.udemy.com/certificate/UC-d6e2e742-f7ea-4b46-8801-4226d3d2c0ac/",
  },
  {
    title: "React - The Complete Guide (incl. Next.js, Redux)",
    platform: "Udemy",
    author: "Academind by Maximilian Schwarzmüller",
    year: 2026,
    url: "https://www.udemy.com/certificate/UC-4dabb6f1-45fa-4230-82d2-c7631c79c0b4/",
  },
  {
    title: "The Complete JavaScript Course",
    platform: "Udemy",
    author: "Jonas Schmedtmann",
    year: 2025,
    url: "https://www.udemy.com/certificate/UC-2d5bc09c-2ce4-4453-a2c6-ec9b052cf96d/",
  },
];

export const inProgress: CertificateType[] = [
  {
    title: "Exploring Courses on Skilljar",
    platform: "Skilljar",
    author: "Anthropic",
    year: 2026,
  },
];
