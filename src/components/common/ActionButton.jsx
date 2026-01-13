import { motion } from "framer-motion";

const ActionButton = ({
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
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.13 }}
    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 transition-all shadow-sm hover:shadow-md ${className}`}
    aria-label={label}
    tabIndex={0}
    {...props}
  >
    <Icon size={16} />
    <span className="text-sm">{label}</span>
  </motion.a>
);

export default ActionButton;
