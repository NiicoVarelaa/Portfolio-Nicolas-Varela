import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

export function ProjectActions({ project, t, lang }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex flex-col sm:flex-row gap-3 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700"
    >
      {project.githubLink && (
        <motion.a
          whileHover={{
            scale: 1.06,
            boxShadow: "0 6px 24px 0 rgba(0,0,0,0.12)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 px-4 py-3 text-sm font-semibold text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-xl transition-all duration-300 ease-out flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
          aria-label={
            lang === "es" ? "Ver código en GitHub" : "View code on GitHub"
          }
          tabIndex={0}
        >
          <FaGithub size={20} />
          <span>{t.code}</span>
        </motion.a>
      )}
      <motion.a
        whileHover={{ scale: 1.06, boxShadow: "0 6px 24px 0 rgba(0,0,0,0.12)" }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl transition-all duration-300 ease-out flex-1  focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        aria-label={lang === "es" ? "Ver demo" : "View demo"}
        tabIndex={0}
      >
        <ExternalLink size={20} />
        <span>{t.demo}</span>
      </motion.a>
    </motion.div>
  );
}
