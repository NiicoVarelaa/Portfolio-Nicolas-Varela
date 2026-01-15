import { memo } from "react";
import { motion } from "framer-motion";

const SocialLink = ({ href, icon, label }) => (
  <motion.a
    whileHover={{ scale: 1.15, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit my ${label} profile`}
    className="text-gray-500 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors text-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-lg p-1"
  >
    {icon}
  </motion.a>
);

SocialLink.displayName = "SocialLink";

export default memo(SocialLink);
