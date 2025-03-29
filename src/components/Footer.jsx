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
            className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Derechos de autor */}
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            © {currentYear} Nicolás Varela. Todos los derechos reservados.
                        </p>
                    </div>

                    {/* Enlaces sociales */}
                    <div className="flex space-x-4">
                        <motion.a
                            whileHover={{ y: -2 }}
                            href="https://github.com/tuusuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                            aria-label="GitHub"
                        >
                            <FaGithub className="h-5 w-5" />
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -2 }}
                            href="https://linkedin.com/in/tuusuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="h-5 w-5" />
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -2 }}
                            href="mailto:niicovarelaa@gmail.com"
                            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                            aria-label="Email"
                        >
                            <FaEnvelope className="h-5 w-5" />
                        </motion.a>
                    </div>
                </div>

                {/* Mensaje adicional sutil */}
                <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Hecho con ❤️ y React
                    </p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;