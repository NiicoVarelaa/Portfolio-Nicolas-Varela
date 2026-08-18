import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const BUTTON_MOTION = {
  hover: { scale: 1.06, boxShadow: "0 6px 24px 0 rgba(0,0,0,0.12)" },
  tap: { scale: 0.98 },
  transition: { duration: 0.25, ease: "easeOut" },
};

const BASE_CLASSES =
  "flex items-center justify-center gap-2.5 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ease-out flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500";

export function ProjectActions({ project, t, lang, onOpenVideo }) {
  const hasVideo = Boolean(project.demoVideo && onOpenVideo);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex flex-col sm:flex-row gap-3 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700"
    >
      {project.githubLink && (
        <motion.a
          {...BUTTON_MOTION}
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          title={t.tooltips.code}
          aria-label={t.tooltips.code}
          className={`${BASE_CLASSES} text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 focus-visible:ring-gray-500`}
          tabIndex={0}
        >
          <FaGithub size={20} />
          <span>{t.code}</span>
        </motion.a>
      )}

      {hasVideo ? (
        <motion.button
          {...BUTTON_MOTION}
          onClick={onOpenVideo}
          title={t.tooltips.video}
          aria-label={t.tooltips.video}
          className={`${BASE_CLASSES} text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus-visible:ring-orange-500`}
          tabIndex={0}
        >
          <FaYoutube size={20} />
          <span>{t.demo}</span>
        </motion.button>
      ) : (
        <motion.a
          {...BUTTON_MOTION}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          title={t.tooltips.website}
          aria-label={t.tooltips.website}
          className={`${BASE_CLASSES} text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus-visible:ring-orange-500`}
          tabIndex={0}
        >
          <ExternalLink size={20} />
          <span>{t.demo}</span>
        </motion.a>
      )}

      {hasVideo && (
        <motion.a
          {...BUTTON_MOTION}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          title={t.tooltips.website}
          aria-label={t.tooltips.website}
          className={`${BASE_CLASSES} text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 focus-visible:ring-orange-500`}
          tabIndex={0}
        >
          <ExternalLink size={20} />
          <span>{t.website}</span>
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
    website: PropTypes.string.isRequired,
    tooltips: PropTypes.shape({
      code: PropTypes.string.isRequired,
      video: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  lang: PropTypes.string.isRequired,
  onOpenVideo: PropTypes.func,
};