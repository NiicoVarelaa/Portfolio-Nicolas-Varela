import { memo } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { animationVariants, getSafeVariants } from "../../../constants/animations";
import useReducedMotion from "../../../hooks/useReducedMotion.js";

const ProjectsHeader = memo(({ title }) => {
  const reducedMotion = useReducedMotion();
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={getSafeVariants(reducedMotion, animationVariants.header)}
    className="text-center mb-8 sm:mb-12 md:mb-16 px-4"
  >
    <h2
      id="projects-heading"
      className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
      tabIndex={-1}
    >
      {title}
    </h2>
    <div
      className="flex justify-center mt-4 sm:mt-6 md:mt-8"
      aria-hidden="true"
    >
      <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-500 via-orange-500 to-transparent rounded-full" />
    </div>
  </motion.header>
  );
});

ProjectsHeader.displayName = "ProjectsHeader";

ProjectsHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProjectsHeader;
