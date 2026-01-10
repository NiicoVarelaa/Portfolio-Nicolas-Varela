import { motion } from "framer-motion";

const SocialButton = ({ href, children, ...props }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="
                inline-flex items-center gap-2 px-5 py-2.5 
                text-sm font-medium text-gray-700 dark:text-gray-200 
                bg-white dark:bg-gray-800 
                border border-gray-200 dark:border-gray-700 
                rounded-full shadow-sm 
                hover:border-orange-500 hover:text-orange-600 
                dark:hover:border-orange-500 dark:hover:text-orange-400 
                hover:shadow-md hover:shadow-orange-500/10 
                transition-all duration-300
            "
            {...props}
        >
            {children}
        </motion.a>
    );
};

export default SocialButton;