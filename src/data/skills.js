import { Code2, Database } from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const skillData = {
  frontend: {
    id: "frontend",
    icon: Code2,
    categoryName: "Frontend",
    skills: [
      {
        id: "javascript",
        name: "JavaScript",
        icon: SiJavascript,
        color: "from-yellow-400 to-yellow-500",
      },
      {
        id: "react",
        name: "React",
        icon: SiReact,
        color: "from-cyan-400 to-blue-500",
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
      {
        id: "java",
        name: "Java",
        icon: FaJava,
        color: "from-orange-500 to-red-500",
      },
    ],
  },
  databases: {
    id: "databases",
    icon: Database,
    categoryName: "Bases de Datos",
    skills: [
      {
        id: "mongodb",
        name: "MongoDB",
        icon: SiMongodb,
        color: "from-green-500 to-emerald-600",
      },
      {
        id: "mysql",
        name: "MySQL",
        icon: SiMysql,
        color: "from-blue-500 to-cyan-600",
      },
    ],
  },
};
