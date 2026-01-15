import { memo } from "react";
import { motion } from "framer-motion";
import { animationVariants } from "../../../constants/animations";

const SkillCard = memo(({ skill }) => {
  const IconComponent = skill.icon;
  return (
    <motion.div
      variants={animationVariants.skillCard}
      className="group relative h-full"
    >
      <div className="relative h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 p-6 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5 pointer-events-none" />
        <div
          className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-orange-500/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
        >
          <IconComponent className="text-4xl text-white" aria-hidden="true" />
        </div>
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300">
            {skill.name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
});

SkillCard.displayName = "SkillCard";
export default SkillCard;
