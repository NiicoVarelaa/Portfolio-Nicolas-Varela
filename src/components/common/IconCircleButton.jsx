import { motion } from "framer-motion";

const IconCircleButton = ({
  href,
  label,
  icon: Icon,
  className = "",
  ...props
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 20, duration: 0.15 }}
    className={`p-2.5 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 transition-all backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 flex items-center justify-center ${className}`}
    aria-label={label}
    tabIndex={0}
    {...props}
  >
    <Icon size={20} className="text-gray-900 dark:text-white" />
  </motion.a>
);

export default IconCircleButton;
