import { Code2, Database, Wrench } from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiGit,
  SiGithub,
} from "react-icons/si";

export const skillData = {
  frontend: {
    id: "frontend",
    icon: Code2,
    categoryName: "Frontend",
    skills: [
      {
        id: "react",
        name: "React",
        icon: SiReact,
        color: "from-cyan-400 to-blue-500",
      },
      {
        id: "javascript",
        name: "JavaScript",
        icon: SiJavascript,
        color: "from-yellow-400 to-yellow-500",
      },
      {
        id: "typescript",
        name: "TypeScript",
        icon: SiTypescript,
        color: "from-blue-500 to-blue-700",
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "from-cyan-400 to-blue-600",
      },
    ],
  },
  backend: {
    id: "backend",
    icon: Database,
    categoryName: "Backend",
    skills: [
      {
        id: "nodejs",
        name: "Node.js",
        icon: SiNodedotjs,
        color: "from-green-400 to-emerald-500",
      },
      {
        id: "express",
        name: "Express",
        icon: SiExpress,
        color: "from-gray-500 to-gray-700",
      },
    ],
  },
  databases: {
    id: "databases",
    icon: Database,
    categoryName: "Bases de Datos",
    skills: [
      {
        id: "mysql",
        name: "MySQL",
        icon: SiMysql,
        color: "from-blue-500 to-cyan-600",
      },
      {
        id: "postgresql",
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "from-indigo-500 to-blue-600",
      },
      {
        id: "mongodb",
        name: "MongoDB",
        icon: SiMongodb,
        color: "from-green-500 to-emerald-600",
      },
    ],
  },
  tools: {
    id: "tools",
    icon: Wrench,
    categoryName: "Tools",
    skills: [
      {
        id: "git",
        name: "Git",
        icon: SiGit,
        color: "from-orange-500 to-red-600",
      },
      {
        id: "github",
        name: "GitHub",
        icon: SiGithub,
        color: "from-gray-600 to-gray-900",
      },
      {
        id: "prisma",
        name: "Prisma",
        icon: SiPrisma,
        color: "from-gray-600 to-gray-800",
      },
      {
        id: "supabase",
        name: "Supabase",
        icon: SiSupabase,
        color: "from-emerald-500 to-green-600",
      },
    ],
  },
};
