import { motion } from 'framer-motion';
// Usamos los mismos logos de marca que en Skills para consistencia visual
import { SiGithub, SiLinkedin } from 'react-icons/si'; 
// Solo importamos Heart, ya no necesitamos ArrowUp
import { Heart } from 'lucide-react'; 

import { useLanguage } from "../context/LanguageContext";
import es from "../locales/es";
import en from "../locales/en";

const languages = { es, en };

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { lang } = useLanguage();
    const t = languages[lang].footer; 

    return (
        <footer className="relative w-full border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    
                    {/* Copyright & Branding */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            {t.copyright.replace("{year}", currentYear)}
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500">
                            <span>Hecho con</span>
                            <motion.div 
                                animate={{ scale: [1, 1.2, 1] }} 
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <Heart size={12} className="text-orange-500 fill-orange-500" />
                            </motion.div>
                            <span>y React</span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        {[ 
                            { label: t.projects, href: '#proyectos' }, 
                            { label: t.aboutMe, href: '#sobremí' },
                            { label: 'Contacto', href: '#contacto' }
                        ].map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Socials - Ahora solo los iconos */}
                    <div className="flex items-center gap-5">
                        <SocialLink
                            href="https://github.com/NiicoVarelaa"
                            icon={<SiGithub />}
                            label="GitHub"
                        />
                        <SocialLink
                            href="https://www.linkedin.com/in/niicolasvarelaa/"
                            icon={<SiLinkedin />}
                            label="LinkedIn"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon, label }) => (
    <motion.a
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-gray-500 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors text-xl"
    >
        {icon}
    </motion.a>
);

export default Footer;