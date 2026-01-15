import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { projects } from "../../../data/projects.js";
import useLanguage from "../../../hooks/useLanguage.js";
import es from "../../../locales/es.js";
import en from "../../../locales/en.js";
import ProjectModal from "../projects/modals/ProjectModal.jsx";
import ProjectsHeader from "./ProjectsHeader.jsx";
import ProjectsGrid from "./ProjectsGrid.jsx";

const languages = { es, en };

const Projects = () => {
  const { lang } = useLanguage();
  const t = languages[lang].projects;
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleSelectProject = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleCardLeave = useCallback(() => {
    setHoveredCard(null);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section
      id="proyectos"
      className="relative w-full min-h-screen py-16 sm:py-20 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center"
      aria-labelledby="projects-heading"
      role="region"
    >
      <div className="relative w-full">
        <ProjectsHeader title={t.sectionTitle} />

        <ProjectsGrid
          projects={projects}
          t={t}
          lang={lang}
          hoveredCard={hoveredCard}
          onSelectProject={handleSelectProject}
          onCardHover={setHoveredCard}
          onCardLeave={handleCardLeave}
        />
      </div>

      <AnimatePresence mode="wait">
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
