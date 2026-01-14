import { motion } from "framer-motion";

export function ProjectInfo({ project, t }) {
  return (
    <>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        id="project-title"
        className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight"
      >
        {t.projectList[project.id - 1].title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="text-gray-600 dark:text-gray-300 mb-5 sm:mb-8 leading-relaxed text-base"
      >
        {t.projectList[project.id - 1].description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6 sm:mb-8"
      >
        <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
          {t.technologiesTitle}
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 + i * 0.05 }}
              className="px-3 py-1.5 bg-gradient-to-br from-orange-50 to-orange-100 text-orange-800 dark:from-orange-900/40 dark:to-orange-900/60 dark:text-orange-200 rounded-lg text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-all"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </>
  );
}