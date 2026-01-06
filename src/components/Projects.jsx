import { useState } from "react";
import { motion } from "framer-motion";
import { projectData } from "../projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import es from "../locales/es";
import en from "../locales/en";
import ProjectModal from "./ProjectModal";

const languages = { es, en };

const Projects = () => {
  const { lang } = useLanguage();
  const t = languages[lang].projects;

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      className="mx-auto max-w-6xl w-full min-h-screen py-20 px-4 sm:px-10 flex flex-col justify-center items-center"
      id="proyectos"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full mb-12"
      >
        <div className="flex justify-center">
          <h2 className="text-center text-4xl sm:text-5xl mb-4 font-bold text-gray-800 dark:text-white relative inline-block">
            {t.sectionTitle}
            <span className="block h-1 w-20 bg-orange-500 mx-auto mt-4 rounded-full"></span>
          </h2>
        </div>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t.sectionSubtitle ||
            "Una colección de mis proyectos más recientes y destacados."}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
      >
        {projectData.map((project, index) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 shadow-lg h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-orange-500/10"
          >
            <div
              onClick={() => handleOpenModal(project)}
              className="block overflow-hidden relative group cursor-pointer"
            >
              <motion.img
                src={project.image}
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                alt={`Project screenshot ${t.projectList[index].title}`}
              />
              <div className="absolute inset-0 bg-black/40 transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                <div className="bg-orange-500 text-white p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <FontAwesomeIcon icon={faPlus} className="text-lg" />
                </div>
              </div>
            </div>

            <div className="flex flex-col p-5 flex-grow">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {t.projectList[index].title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow line-clamp-3">
                {t.projectList[index].description}
              </p>

              <div className="flex gap-2 flex-wrap mb-5">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              <div className="flex gap-3 mt-auto">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors flex-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors flex-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {modalOpen && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Projects;
