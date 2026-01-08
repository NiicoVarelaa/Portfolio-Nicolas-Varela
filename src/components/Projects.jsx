import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectData } from "../projectData";
import { Github, ExternalLink, Eye, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import es from "../locales/es";
import en from "../locales/en";
import ProjectModal from "./ProjectModal";

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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
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

  return (
    <section
      className="relative w-full min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center overflow-hidden"
      id="proyectos"
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
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 rounded-full text-sm font-semibold tracking-wide uppercase">
              Portafolio
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {t.sectionTitle}
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.sectionSubtitle ||
              "Una colección de mis proyectos más recientes y destacados, donde la creatividad y la tecnología se unen para crear experiencias excepcionales."}
          </p>

          <div className="flex justify-center mt-8">
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 via-orange-500 to-transparent rounded-full"></div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group h-full cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>

                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                  <img
                    src={project.image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={project.title}
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      animate={hoveredCard === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 text-white text-sm font-semibold"
                    >
                      <Eye size={18} />
                      Ver detalles
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-2">
                      {project.githubLink && (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2.5 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all backdrop-blur-sm bg-white/90 dark:bg-gray-900/90"
                        >
                          <Github size={20} className="text-gray-900 dark:text-white" />
                        </motion.a>
                      )}
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all backdrop-blur-sm bg-white/90 dark:bg-gray-900/90"
                      >
                        <ExternalLink size={20} className="text-gray-900 dark:text-white" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-grow p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
                      {t.projectList[index]?.title || project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-2 leading-relaxed">
                    {t.projectList[index]?.description || project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ y: -2 }}
                          className="px-3 py-1.5 bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/40 dark:to-orange-900/20 text-orange-700 dark:text-orange-300 rounded-lg text-xs font-semibold border border-orange-200 dark:border-orange-800/50 transition-all"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-semibold border border-gray-200 dark:border-gray-700">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2.5 mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all shadow-sm hover:shadow-md"
                      >
                        <Github size={16} />
                        <span className="text-sm">Código</span>
                      </motion.a>
                    )}
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg hover:shadow-orange-500/30"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Ver Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
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
