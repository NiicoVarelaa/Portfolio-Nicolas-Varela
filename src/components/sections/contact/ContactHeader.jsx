import { memo } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { animationVariants, getSafeVariants } from "../../../constants/animations";
import useReducedMotion from "../../../hooks/useReducedMotion.js";

const ContactHeader = memo(({ title }) => {
  const reducedMotion = useReducedMotion();
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={getSafeVariants(reducedMotion, animationVariants.header)}
    className="text-center mb-16"
  >
    <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
      {title}
    </h2>
    <div className="flex justify-center mt-8" aria-hidden="true">
      <div className="w-20 h-1 bg-gradient-to-r from-orange-500 via-orange-500 to-transparent rounded-full" />
    </div>
  </motion.header>
  );
});

ContactHeader.displayName = "ContactHeader";

ContactHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ContactHeader;
