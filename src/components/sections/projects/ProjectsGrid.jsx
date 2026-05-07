import { memo } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import { animationVariants, getSafeVariants } from "../../../constants/animations";
import useReducedMotion from "../../../hooks/useReducedMotion.js";

const ProjectsGrid = memo(
  ({
    projects,
    t,
    lang,
    hoveredCard,
    onSelectProject,
    onCardHover,
    onCardLeave,
  }) => {
    const reducedMotion = useReducedMotion();
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={getSafeVariants(reducedMotion, animationVariants.projectsGrid)}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full"
      role="list"
      aria-label={t.projectList ? "Lista de proyectos" : "Projects list"}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          t={t}
          lang={lang}
          index={index}
          isActive={hoveredCard === index}
          onSelect={onSelectProject}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelectProject(project);
            }
          }}
          onMouseEnter={() => onCardHover(index)}
          onMouseLeave={onCardLeave}
          role="listitem"
        />
      ))}
    </motion.div>
    );
  }
);

ProjectsGrid.displayName = "ProjectsGrid";

ProjectsGrid.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      githubLink: PropTypes.string,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      galleryImages: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  t: PropTypes.shape({
    projectList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      })
    ),
  }).isRequired,
  lang: PropTypes.string.isRequired,
  hoveredCard: PropTypes.number,
  onSelectProject: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onCardLeave: PropTypes.func.isRequired,
};

export default ProjectsGrid;
