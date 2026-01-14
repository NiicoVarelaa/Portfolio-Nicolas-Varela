import { motion } from "framer-motion";
import { ExternalLink, Eye, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import TechBadge from "../common/TechBadge";
import ActionButton from "../common/ActionButton";
import IconCircleButton from "../common/IconCircleButton";

const ProjectCard = ({
  project,
  t,
  lang,
  onSelect,
  onKeyDown,
  isActive,
  index,
  onMouseEnter,
  onMouseLeave,
}) => (
  <motion.div
    key={project.id}
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    }}
    className="group h-full focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-offset-gray-900 rounded-2xl cursor-pointer outline-none"
    tabIndex={0}
    role="button"
    aria-label={t.projectList[index]?.title || project.title}
    onClick={() => onSelect(project)}
    onKeyDown={onKeyDown}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="relative h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 pointer-events-none"></div>
      <div className="relative h-48 xs:h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <img
          src={project.image}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-focus-within:scale-110"
          alt={project.title}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex items-center gap-2 text-white text-md pointer-events-auto select-none bg-transparent"
            aria-hidden="true"
            style={{ pointerEvents: "auto" }}
          >
            <Eye size={24} />
            <span>{lang === "es" ? "Ver detalles" : "See details"}</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1 group-focus-within:translate-x-1">
              <ArrowRight size={24} />
            </span>
          </motion.div>
        </div>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 z-10 flex gap-2">
          {project.githubLink && (
            <IconCircleButton
              href={project.githubLink}
              label="GitHub"
              icon={FaGithub}
              onClick={(e) => e.stopPropagation()}
            />
          )}
          <IconCircleButton
            href={project.link}
            label={lang === "es" ? "Ver demo" : "View demo"}
            icon={ExternalLink}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
      <div className="flex flex-col flex-grow p-4 xs:p-5 sm:p-6">
        <div className="mb-2 xs:mb-3">
          <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 group-focus-within:text-orange-500 dark:group-focus-within:text-orange-400 transition-colors duration-300 line-clamp-2">
            {t.projectList[index]?.title || project.title}
          </h3>
        </div>
        <p className="text-sm xs:text-base text-gray-700 dark:text-gray-300 mb-3 xs:mb-4 flex-grow line-clamp-2 leading-relaxed">
          {t.projectList[index]?.description || project.description}
        </p>
        <div className="mb-3 xs:mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <TechBadge key={i} tech={tech} />
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-semibold border border-gray-200 dark:border-gray-700">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-2.5 mt-auto pt-3 xs:pt-4 border-t border-gray-200 dark:border-gray-800">
          {project.githubLink && (
            <ActionButton
              href={project.githubLink}
              label={lang === "es" ? "Código" : "Code"}
              icon={FaGithub}
              onClick={(e) => e.stopPropagation()}
            />
          )}
          <ActionButton
            href={project.link}
            label={lang === "es" ? "Ver Demo" : "View Demo"}
            icon={ExternalLink}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 "
          />
        </div>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
