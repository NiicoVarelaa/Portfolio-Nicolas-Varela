import PropTypes from "prop-types";

const SocialButton = ({ href, children, ...props }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
                inline-flex items-center gap-2 px-5 py-2.5 
                text-sm font-medium text-gray-700 dark:text-gray-200 
                bg-white dark:bg-gray-800 
                border border-gray-200 dark:border-gray-700 
                rounded-full shadow-sm 
                hover:border-orange-500 hover:text-orange-600 
                dark:hover:border-orange-500 dark:hover:text-orange-400 
                hover:shadow-md hover:shadow-orange-500/10 
                transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 active:scale-95
            "
            {...props}
        >
            {children}
        </a>
    );
};

SocialButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SocialButton;