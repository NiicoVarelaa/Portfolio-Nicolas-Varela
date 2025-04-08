import React from 'react';
import { motion } from 'framer-motion';
import nico from "../../public/nico.jpeg";
import Badge from './Badge';
import SocialButtons from './SocialButtons';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Home = () => {
    return (
        <div 
            className="mx-auto max-w-7xl w-full min-h-screen py-10 px-6 lg:px-32 flex items-center justify-center" 
            id="home"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full"
            >
                {/* Contenedor de texto y botones */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/2"
                >
                    {/* Badge - Centrado en móvil, alineado a la izquierda en desktop */}
                    <div className="w-full text-center md:text-left">
                        <a
                            href="https://www.linkedin.com/in/niicolasvarelaa/"
                            target="_blank"
                            rel="noopener"
                            className="inline-block hover:scale-105 transition-transform"
                        >
                            <Badge>Disponible para trabajar</Badge>
                        </a>
                    </div>

                    {/* Títulos */}
                    <h2 className="text-orange-950 dark:text-gray-50 text-xl md:text-2xl text-center md:text-left">
                        Hola! 👋 soy,
                    </h2>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-center md:text-left bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 text-transparent bg-clip-text">
                        Nicolas Varela
                    </h1>

                    <h3 className="text-xl md:text-2xl text-center md:text-left text-orange-950 dark:text-gray-50">
                        Desarrollador Full Stack
                    </h3>

                    {/* Botones */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 ">
                        <SocialButtons href="mailto:niicovarelaa@gmail.com">
                            <FaEnvelope className="size-4" />
                            Contáctame
                        </SocialButtons>
                        <SocialButtons href="https://www.linkedin.com/in/niicolasvarelaa/">
                            <FaLinkedinIn className="size-4" />
                            LinkedIn
                        </SocialButtons>
                    </div>
                </motion.div>

                {/* Imagen - Centrada en ambos casos */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-[250px] md:w-[350px] aspect-square rounded-full overflow-hidden border-2 dark:border-gray-50"
                >
                    <img
                        src={nico}
                        className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                        alt="Nicolas Varela"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;