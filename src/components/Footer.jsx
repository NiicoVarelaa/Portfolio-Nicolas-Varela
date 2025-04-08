import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-orange-50 dark:bg-blue-950/50 border-t border-gray-200 dark:border-gray-700 py-6"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-y-4">
                    <div className="order-1 md:order-none text-center md:text-left">
                        <p className="text-sm text-orange-950 dark:text-gray-300">
                            © {currentYear} Nicolás Varela.
                        </p>
                    </div>

                    <div className="order-3 md:order-none hidden md:block">
                        <nav className="flex space-x-4">
                            <motion.a 
                                whileHover={{ scale: 1.05 }}
                                href="#proyectos" 
                                className="text-sm text-orange-950 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
                            >
                                Proyectos
                            </motion.a>
                            <motion.a 
                                whileHover={{ scale: 1.05 }}
                                href="#sobremí" 
                                className="text-sm text-orange-950 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
                            >
                                Sobre mí
                            </motion.a>  
                        </nav>      
                    </div>
                    
                    <div className="order-2 md:order-none flex space-x-4">
                        <motion.a
                            whileHover={{ y: -2 }}
                            href="https://github.com/NiicoVarelaa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-950 hover:text-orange-500 dark:text-orange-50 dark:hover:text-orange-500 transition-colors"
                            aria-label="GitHub"
                        >
                            <FaGithub className="h-5 w-5" />
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -2 }}
                            href="https://www.linkedin.com/in/niicolasvarelaa/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-950 hover:text-orange-500 dark:text-orange-50 dark:hover:text-orange-500 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="h-5 w-5" />
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -2 }}
                            href="mailto:niicovarelaa@gmail.com"
                            className="text-orange-950 hover:text-orange-500 dark:text-orange-50 dark:hover:text-orange-500 transition-colors"
                            aria-label="Email"
                        >
                            <FaEnvelope className="h-5 w-5" />
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;