import React from 'react';
import { motion } from 'framer-motion';
import nico from "../../public/nico.jpeg";
import Badge from './Badge';
import SocialButtons from './SocialButtons';
import { FaLinkedinIn, FaFileDownload } from 'react-icons/fa';
import cvFile from "../../public/cv.pdf";

const Home = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = 'CV_Nicolas_Varela.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section 
            className="w-full min-h-[100vh] flex items-center justify-center py-10" 
            id="home"
        >
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col items-center md:items-start gap-6 w-full md:w-1/2 text-center md:text-left"
                    >
                        <div className="w-full flex justify-center md:justify-start">
                            <Badge>Disponible para trabajar</Badge>
                        </div>

                        <div className="space-y-2 w-full">
                            <h2 className="text-orange-950 dark:text-gray-200 text-2xl md:text-3xl">Hola! 👋 Soy</h2>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-orange-500 leading-tight">
                                Nicolas Varela
                            </h1>
                            <h3 className="text-xl md:text-2xl text-orange-800 dark:text-gray-300">
                                Desarrollador Full Stack
                            </h3>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 max-w-md">
                            Creo soluciones digitales con tecnologías modernas y diseño intuitivo.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            <button 
                                onClick={handleDownloadCV}
                                className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors"
                            >
                                <FaFileDownload className="size-4" />
                                Descargar CV
                            </button>
                            <SocialButtons href="https://www.linkedin.com/in/niicolasvarelaa/">
                                <FaLinkedinIn className="size-4" />
                                LinkedIn
                            </SocialButtons>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-[250px] md:w-[350px] aspect-square rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-400"
                    >
                        <img
                            src={nico}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            alt="Nicolas Varela"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;