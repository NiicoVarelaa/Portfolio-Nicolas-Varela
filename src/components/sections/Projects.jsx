import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";
import useLanguage from "../../hooks/useLanguage";
import es from "../../locales/es.js";
import en from "../../locales/en.js";
import ProjectModal from "../modals/ProjectModal";
import ProjectCard from "../common/ProjectCard";

const languages = { es, en };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
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

const Projects = () => {
  const { lang } = useLanguage();
  const t = languages[lang].projects;
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleSelectProject = useCallback(
    (project) => setSelectedProject(project),
    []
  );

  return (
    <section
      id="proyectos"
      className="relative w-full min-h-screen max-w-6xl mx-auto px-3 sm:px-6 flex flex-col justify-center items-center overflow-hidden"
      aria-labelledby="projects-heading"
      role="region"
    >
      <div className="relative w-full max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="text-center mb-10 sm:mb-16"
        >
          <h2
            id="projects-heading"
            className="text-3xl xs:text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-3 leading-tight tracking-tight"
            tabIndex={-1}
          >
            {t.sectionTitle}
          </h2>
          <p className="text-base xs:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.sectionSubtitle ||
              "Una colección de mis proyectos más recientes y destacados, donde la creatividad y la tecnología se unen para crear experiencias excepcionales."}
          </p>
          <div className="flex justify-center mt-6 sm:mt-8" aria-hidden="true">
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 via-orange-500 to-transparent rounded-full"></div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 w-full"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              t={t}
              lang={lang}
              index={index}
              isActive={hoveredCard === index}
              onSelect={handleSelectProject}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleSelectProject(project);
                }
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
