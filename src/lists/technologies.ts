import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiTailwindcss,
  SiMui,
  SiSocketdotio,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiGraphql,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiClaude,
  SiVite,
  SiNpm,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApi, TbSql } from "react-icons/tb";
import { type TechnologyGroup } from "../types";

export const technologies: TechnologyGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Java", icon: FaJava, color: "#F89820" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Material UI", icon: SiMui, color: "#3399FF" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#E2E8F0" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#8B58BB" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: "#E2E8F0" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "REST API", icon: TbApi, color: "#0EA5E9" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "SQL", icon: TbSql, color: "#F59E0B" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#5F95BE" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#E2E8F0" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Claude", icon: SiClaude, color: "#D97757" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "npm", icon: SiNpm, color: "#CB3837" },
    ],
  },
];
