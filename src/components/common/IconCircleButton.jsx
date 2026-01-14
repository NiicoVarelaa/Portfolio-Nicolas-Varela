import { motion } from "framer-motion";

const IconCircleButton = ({
  href,
  label,
  icon: Icon,
  className = "",
  iconSize = 20,
  ...props
}) => {
  const MotionTag = href ? motion.a : motion.button;
  return (
    <MotionTag
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      type={!href ? "button" : undefined}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "tween",
        duration: 0.05,
        ease: "linear",
      }}
      className={`p-2.5 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 transition-all backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 flex items-center justify-center ${className}`}
      aria-label={label}
      tabIndex={0}
      {...props}
    >
      <Icon size={iconSize} className="text-gray-900 dark:text-white" />
    </MotionTag>
  );
};

export default IconCircleButton;
