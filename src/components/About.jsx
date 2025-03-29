import React from 'react';
import { motion } from 'framer-motion';
import nico from "../../public/nico.jpeg";

const AboutMe = () => {
    return (
        <div className="mx-auto max-w-6xl p-4 sm:p-10 text-white" id="sobre-mi">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-6xl text-orange-950 dark:text-gray-50 mb-10"
            >
                Sobre Mí
            </motion.h1>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col lg:flex-row gap-10 items-center"
            >
                {/* Texto - Izquierda (arriba en móvil) */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-lg text-gray-700 dark:text-gray-300"
                    >
                        ¡Hola! Soy Nicolás Varela, un apasionado Desarrollador Full Stack con experiencia en la creación de aplicaciones web modernas y escalables.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-gray-700 dark:text-gray-300"
                    >
                        Mi viaje en el desarrollo web comenzó hace más de X años, y desde entonces he trabajado con diversas tecnologías tanto en el frontend como en el backend, siempre buscando aprender y mejorar mis habilidades.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-gray-700 dark:text-gray-300"
                    >
                        Cuando no estoy codificando, me gusta [tus hobbies/intereses]. Creo en la importancia de [tus valores o filosofía de trabajo].
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="pt-4"
                    >
                        <h3 className="text-xl font-semibold text-orange-950 dark:text-gray-100 mb-3">Tecnologías que uso:</h3>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Node.js', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Express'].map((tech, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.1 * index }}
                                    className="px-3 py-1 bg-orange-100 dark:bg-gray-700 text-orange-800 dark:text-orange-300 rounded-full text-sm"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Imagen - Derecha (abajo en móvil) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden border-4 border-orange-500 dark:border-orange-400 shadow-lg">
                        <img
                            src={nico}
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