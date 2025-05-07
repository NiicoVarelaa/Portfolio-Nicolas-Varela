import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from "../context/LanguageContext";
import es from "../locales/es";
import en from "../locales/en";

const languages = { es, en };

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { lang } = useLanguage();
    const t = languages[lang].footer; 

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-orange-100/40 dark:bg-blue-950/60 border-t border-orange-200 dark:border-blue-900/60 py-6"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    <p className="text-sm text-center md:text-left text-orange-800 dark:text-gray-300 font-light tracking-wide">
                        {t.copyright.replace("{year}", currentYear)}
                    </p>

                    <nav className="hidden md:flex space-x-6 text-sm">
                        {[ 
                            { label: t.projects, href: '#proyectos' }, 
                            { label: t.aboutMe, href: '#sobremí' }
                        ].map((link, index) => (
                            <motion.a
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                href={link.href}
                                className="text-orange-800 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-medium"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </nav>

                    <div className="flex space-x-4">
                        <SocialLink
                            href="https://github.com/NiicoVarelaa"
                            icon={<FaGithub />}
                            label="GitHub"
                        />
                        <SocialLink
                            href="https://www.linkedin.com/in/niicolasvarelaa/"
                            icon={<FaLinkedin />}
                            label="LinkedIn"
                        />
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

const SocialLink = ({ href, icon, label }) => (
    <motion.a
        whileHover={{ y: -2 }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-orange-800 hover:text-orange-500 dark:text-orange-50 dark:hover:text-orange-400 transition-colors"
    >
        <span className="sr-only">{label}</span>
        <div className="h-5 w-5">{icon}</div>
    </motion.a>
);

export default Footer;