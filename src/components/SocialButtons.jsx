const SocialButtons = ({ href, children, ...props }) => {
    return (
        <div className="flex flex-wrap gap-4">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                role="link"
                className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-50 border border-gray-800 rounded-full dark:bg-transparent dark:border-gray-200 dark:text-gray-200 focus-visible:ring-orange-500/80 text-md hover:bg-orange-500 hover:border-orange-500 hover:text-gray-50 dark:hover:bg-orange-500 dark:hover:border-orange-500 dark:hover:text-gray-50 group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2"
                {...props}
            >
                {children}
            </a>
        </div>
    );
};

export default SocialButtons;