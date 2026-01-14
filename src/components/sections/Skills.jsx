import { useState } from "react";
import { motion } from "framer-motion";
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

import useLanguage from "../../hooks/useLanguage";
import es from "../../locales/es.js";
import en from "../../locales/en.js";

const languages = { es, en };

const skillData = {
  frontend: {
    icon: Code2,
    categoryName: "Frontend",
    skills: [
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "from-yellow-400 to-yellow-500",
      },
      {
        name: "React",
        icon: SiReact,
        color: "from-cyan-400 to-blue-500",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "from-cyan-400 to-blue-600",
      },
    ],
  },
  backend: {
    icon: Database,
    categoryName: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "from-green-400 to-emerald-500",
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "from-gray-500 to-gray-700",
      },
      {
        name: "Java",
        icon: FaJava,
        color: "from-orange-500 to-red-500",
      },
    ],
  },
  databases: {
    icon: Database,
    categoryName: "Bases de Datos",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "from-green-500 to-emerald-600",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "from-blue-500 to-cyan-600",
      },
    ],
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const skillCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const SkillCard = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = skill.icon;

  return (
    <motion.div
      variants={skillCardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      <div className="relative h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 p-6 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
        <motion.div
          animate={
            isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }
          }
          transition={{ duration: 0.3 }}
          className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-orange-500/20`}
        >
          <IconComponent className="text-4xl text-white" />
        </motion.div>
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300">
            {skill.name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { lang } = useLanguage();
  const t = languages[lang].skills;

  return (
    <section
      className="relative w-full min-h-screen max-w-6xl py-24 mx-auto px-4 sm:px-10 flex flex-col justify-center items-center overflow-hidden"
      id="skills"
    >
      <div className="relative w-full max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {t.sectionTitle}
          </h2>

          <div className="flex justify-center mt-8">
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 via-orange-500 to-transparent rounded-full"></div>
          </div>
        </motion.div>

        <div className="space-y-16">
          {Object.entries(skillData).map(([key, category], categoryIndex) => {
            const Icon = category.icon;
            const title = category.categoryName;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                        {title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {category.skills.length} tecnologías
                      </p>
                    </div>
                  </div>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                  {category.skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-blue-500/10 border border-orange-200 dark:border-orange-900/50"
        >
          <div className="text-center">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Siempre Aprendiendo
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Actualmente explorando TypeScript y Next.js
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
