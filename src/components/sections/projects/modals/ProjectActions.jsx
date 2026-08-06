import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

export function ProjectActions({ project, t, lang, onOpenVideo }) {
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
      {project.demoVideo && onOpenVideo ? (
        <motion.button
          whileHover={{
            scale: 1.06,
            boxShadow: "0 6px 24px 0 rgba(0,0,0,0.12)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={onOpenVideo}
          className="flex items-center justify-center gap-2.5 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl transition-all duration-300 ease-out flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          aria-label={lang === "es" ? "Ver video demo" : "View demo video"}
          tabIndex={0}
        >
          <FaYoutube size={20} />
          <span>{t.demo}</span>
        </motion.button>
      ) : (
        <motion.a
          whileHover={{
            scale: 1.06,
            boxShadow: "0 6px 24px 0 rgba(0,0,0,0.12)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl transition-all duration-300 ease-out flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          aria-label={lang === "es" ? "Ver demo" : "View demo"}
          tabIndex={0}
        >
          <ExternalLink size={20} />
          <span>{t.demo}</span>
        </motion.a>
      )}
      {project.demoVideo && (
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 flex-shrink-0 text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-orange-500 hover:text-white rounded-xl transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          aria-label={lang === "es" ? "Visitar sitio en vivo" : "Visit live site"}
          tabIndex={0}
        >
          <ExternalLink size={20} />
        </motion.a>
      )}
    </motion.div>
  );
}

ProjectActions.propTypes = {
  project: PropTypes.shape({
    githubLink: PropTypes.string,
    link: PropTypes.string.isRequired,
    demoVideo: PropTypes.string,
  }).isRequired,
  t: PropTypes.shape({
    code: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
  }).isRequired,
  lang: PropTypes.string.isRequired,
  onOpenVideo: PropTypes.func,
};