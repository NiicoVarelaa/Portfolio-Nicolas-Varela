import { memo } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { animationVariants } from "../../../constants/animations";

const ProjectsGrid = memo(
  ({
    projects,
    t,
    lang,
    hoveredCard,
    onSelectProject,
    onCardHover,
    onCardLeave,
  }) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={animationVariants.projectsGrid}
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
  )
);

ProjectsGrid.displayName = "ProjectsGrid";

export default ProjectsGrid;
