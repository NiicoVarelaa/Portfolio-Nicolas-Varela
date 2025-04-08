import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import nico2 from "../../public/nico2.webp";

const AboutMe = () => {
    return (
        <div className="mx-auto max-w-6xl p-4 sm:p-10" id="sobremí">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-center items-center gap-3 text-orange-950 dark:text-orange-50 mb-10"
            >
                <h1 className="text-4xl sm:text-6xl">Sobre Mí</h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col lg:flex-row gap-10 lg:items-start items-center"
            >
                <div className="w-full lg:w-1/2 flex flex-col h-full">
                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-lg text-orange-900 dark:text-orange-50"
                        >
                            Hola, soy <strong className="text-orange-800 dark:text-orange-300">Nicolás Varela</strong>, <strong className="text-orange-800 dark:text-orange-300">Desarrollador Full Stack</strong> con experiencia en la creación de <strong className="text-orange-800 dark:text-orange-300">aplicaciones web modernas</strong> y <strong className="text-orange-800 dark:text-orange-300">escalables</strong>.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg text-orange-900 dark:text-orange-50"
                        >
                            Mi ingreso al mundo del <strong className="text-orange-800 dark:text-orange-300">desarrollo web</strong> comenzó hace más de <strong className="text-orange-800 dark:text-orange-300">3 años</strong>. Desde entonces, he adquirido experiencia trabajando con diversas <strong className="text-orange-800 dark:text-orange-300">tecnologías</strong> tanto en el <strong className="text-orange-800 dark:text-orange-300">frontend</strong> como en el <strong className="text-orange-800 dark:text-orange-300">backend</strong>, siempre enfocado en el <strong className="text-orange-800 dark:text-orange-300">aprendizaje continuo</strong> y la mejora de mis habilidades.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-orange-900 dark:text-orange-50"
                        >
                            Mi ingreso al mundo del <strong className="text-orange-800 dark:text-orange-300">desarrollo web</strong> comenzó hace más de <strong className="text-orange-800 dark:text-orange-300">3 años</strong>.
                        </motion.p>
                    </div>
                    
                    <div className="mt-auto flex justify-center lg:justify-start pt-10"> 
                        <a 
                            href="/cv.pdf" 
                            download 
                            className="flex items-center gap-2 bg-orange-500 text-orange-50 px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition"
                        >
                            <FaDownload /> Descargar CV
                        </a>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 flex flex-col items-center"
                >
                    <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden border-4 border-orange-300 dark:border-orange-300 shadow-lg">
                        <img
                            src={nico2}
                            alt="Nicolás Varela - Desarrollador Full Stack"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutMe;