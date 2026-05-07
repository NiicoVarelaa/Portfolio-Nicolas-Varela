import { memo } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { animationVariants, getSafeVariants } from "@constants/animations";
import useReducedMotion from "@hooks/useReducedMotion.js";

const SkillCard = memo(({ skill }) => {
  const IconComponent = skill.icon;
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      variants={getSafeVariants(reducedMotion, animationVariants.skillCard)}
      className="group w-full"
    >
      <div
        className="w-full rounded-xl bg-white dark:bg-gray-900/70 border border-gray-100 dark:border-gray-800/50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 p-4 flex items-center gap-3"
      >
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}
        >
          <IconComponent className="text-lg text-white" aria-hidden="true" />
        </div>
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
          {skill.name}
        </h3>
      </div>
    </motion.div>
  );
});

SkillCard.displayName = "SkillCard";

SkillCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default SkillCard;
