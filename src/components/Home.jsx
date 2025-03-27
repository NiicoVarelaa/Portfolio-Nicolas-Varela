import React from 'react';
import { motion } from 'framer-motion';
import nico from "../../public/nico.jpeg";
import Badge from './Badge';

const Home = () => {
    return (
        <div className='mx-auto max-w-6xl w-full min-h-screen p-4 md:p-8 lg:p-28 flex items-center justify-center' id="home">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='flex flex-col-reverse items-center justify-center md:flex-row gap-8 md:gap-16 lg:gap-24'
            >
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className='flex flex-col items-center md:items-start justify-center gap-3'
                >
                    <a
                        href="https://www.linkedin.com/in/niicolasvarelaa/"
                        target="_blank"
                        rel="noopener"
                        class="flex items-center transition md:justify-center md:hover:scale-105"
                    >
                        <Badge>Disponible para trabajar</Badge>
                    </a>

                    <h2 className='text-orange-950 dark:text-gray-50'>Hola! 👋 soy,</h2>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-semibold text-center md:text-left bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 text-transparent bg-clip-text'>Nicolas Varela</h1>

                    <h3 className='text-xl md:text-2xl lg:text-3xl font-light text-center md:text-left text-orange-950 dark:text-gray-50'>Desarrolar Full Stack</h3>
                </motion.div>

                <img src={nico} className='w-[300px] md:w-[400px] rounded-full hover:shadow-2xl hover:shadow-orange-800 hover:scale-105 transition-all duration-500' alt="Nicolas Varela" />
            </motion.div>
        </div>
    )
}

export default Home