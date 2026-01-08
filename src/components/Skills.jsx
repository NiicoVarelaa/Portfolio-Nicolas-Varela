import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  GitBranch,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import es from "../locales/es";
import en from "../locales/en";

const languages = { es, en };

const skillData = {
  frontend: {
    icon: Code2,
    skills: [
      {
        name: "JavaScript",
        level: "Avanzado",
        description: "ES6+, Async/Await",
        color: "from-yellow-400 to-yellow-500",
        textColor: "text-yellow-600 dark:text-yellow-400",
      },
      {
        name: "React",
        level: "Avanzado",
        description: "Hooks, Context, Performance",
        color: "from-cyan-400 to-blue-500",
        textColor: "text-cyan-600 dark:text-cyan-400",
      },
      {
        name: "Tailwind CSS",
        level: "Experto",
        description: "Responsive, Utility-first",
        color: "from-cyan-400 to-blue-600",
        textColor: "text-cyan-600 dark:text-cyan-400",
      },
    ],
  },
  backend: {
    icon: Database,
    skills: [
      {
        name: "Node.js",
        level: "Avanzado",
        description: "Runtime JavaScript",
        color: "from-green-400 to-emerald-500",
        textColor: "text-green-600 dark:text-green-400",
      },
      {
        name: "Express",
        level: "Avanzado",
        description: "REST APIs, Middleware",
        color: "from-gray-500 to-gray-700",
        textColor: "text-gray-600 dark:text-gray-400",
      },
      {
        name: "Java",
        level: "Intermedio",
        description: "OOP, Spring Framework",
        color: "from-orange-500 to-red-500",
        textColor: "text-orange-600 dark:text-orange-400",
      },
    ],
  },
  databases: {
    icon: Database,
    skills: [
      {
        name: "MongoDB",
        level: "Avanzado",
        description: "NoSQL, Aggregation",
        color: "from-green-500 to-emerald-600",
        textColor: "text-green-600 dark:text-green-400",
      },
      {
        name: "MySQL",
        level: "Avanzado",
        description: "SQL, Relational",
        color: "from-blue-500 to-cyan-600",
        textColor: "text-blue-600 dark:text-blue-400",
      },
      {
        name: "Supabase",
        level: "Avanzado",
        description: "PostgreSQL, Real-time",
        color: "from-green-400 to-emerald-500",
        textColor: "text-green-600 dark:text-green-400",
      },
    ],
  },
  tools: {
    icon: GitBranch,
    skills: [
      {
        name: "Git",
        level: "Experto",
        description: "Version Control",
        color: "from-orange-500 to-red-600",
        textColor: "text-orange-600 dark:text-orange-400",
      },
      {
        name: "GitHub",
        level: "Experto",
        description: "Collaboration, CI/CD",
        color: "from-gray-700 to-gray-900",
        textColor: "text-gray-700 dark:text-gray-300",
      },
      {
        name: "VS Code",
        level: "Experto",
        description: "Extensions, Debugging",
        color: "from-blue-500 to-cyan-600",
        textColor: "text-blue-600 dark:text-blue-400",
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

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={skillCardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      <div className="relative h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 p-6 flex flex-col items-center text-center">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>

        <motion.div
          animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
          className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 shadow-lg`}
        >
          <span className="text-3xl font-bold text-white">{skill.name.charAt(0)}</span>
        </motion.div>

        <div className="relative z-10 flex-grow flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300">
            {skill.name}
          </h3>

          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                    i < (skill.level === "Experto" ? 5 : skill.level === "Avanzado" ? 4 : 3)
                      ? "bg-orange-500"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                />
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{skill.level}</p>
          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
            {skill.description}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-1.5 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 w-full justify-center text-sm font-semibold text-orange-500 group-hover:text-orange-600"
        >
          Dominar <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { lang } = useLanguage();
  const t = languages[lang].skills;

  return (
    <section
      className="relative w-full min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden"
      id="skills"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full">
            <Sparkles size={18} className="text-orange-600 dark:text-orange-300" />
            <span className="text-sm font-semibold text-orange-600 dark:text-orange-300 uppercase tracking-wide">
              Competencias
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {t.sectionTitle}
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stack tecnológico completo con experiencia en desarrollo full-stack, especializado en crear aplicaciones modernas y escalables.
          </p>

          <div className="flex justify-center mt-8">
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 via-orange-500 to-transparent rounded-full"></div>
          </div>
        </motion.div>

        <div className="space-y-16">
          {Object.entries(skillData).map(([key, category], categoryIndex) => {
            const Icon = category.icon;
            const categoryName = {
              frontend: "Frontend",
              backend: "Backend",
              databases: "Bases de Datos",
              tools: "Herramientas",
            }[key];

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
                        {categoryName}
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
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {category.skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} index={index} />
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
              Actualmente explorando TypeScript, Next.js, y arquitecturas de microservicios.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
