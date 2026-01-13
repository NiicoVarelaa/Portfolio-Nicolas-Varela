import { motion } from "framer-motion";

const TechBadge = ({ tech }) => (
  <motion.span
    whileHover={{ y: -2 }}
    transition={{ duration: 0.13 }}
    className="px-3 py-1.5 bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/40 dark:to-orange-900/20 text-orange-700 dark:text-orange-300 rounded-lg text-xs font-semibold border border-orange-200 dark:border-orange-800/50 transition-all"
  >
    {tech}
  </motion.span>
);

export default TechBadge;
