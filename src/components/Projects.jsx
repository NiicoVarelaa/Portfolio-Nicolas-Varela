import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { projectData } from "../projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#proyectos') {
                const element = document.getElementById('proyectos');
                if (element) {
                    const offset = 100; // Ajuste visual
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <section
            className="mx-auto max-w-6xl w-full py-20 px-4 sm:px-10 flex flex-col items-center"
            id="proyectos"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full mb-12 sm:mb-16"
            >
                <h2 className="text-3xl md:text-4xl flex items-start justify-start gap-3 text-orange-950 dark:text-orange-50">
                    <span className="relative">
                        Proyectos                        
                    </span>
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full -mt-6"
            >
                {projectData.map((project) => (
                    <motion.div
                        key={project.id}
                        whileHover={{ y: -5 }}
                        className="flex flex-col rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-400/30 h-full"
                    >
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block overflow-hidden"
                        >
                            <motion.img
                                src={project.image}
                                className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 hover:scale-110"
                                alt={`Captura del proyecto ${project.title}`}
                                whileHover={{ scale: 1.05 }}
                            />
                        </a>
                        
                        <div className="flex flex-col bg-orange-50/50 dark:bg-blue-950/50 p-5 flex-grow border-t-4 border-orange-400 dark:border-orange-500">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-orange-950/90 dark:text-orange-50/90">
                                    {project.description}
                                </p>
                            </div>
                            
                            <div className="flex gap-2 flex-wrap mb-5">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-blue-900/80 dark:text-orange-200 rounded-full text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3 mt-auto">
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-orange-50 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors dark:bg-orange-600 dark:hover:bg-orange-700"
                                    >
                                        <FaGithub />
                                        <span>Código</span>
                                    </a>
                                )}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-orange-50 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors dark:bg-orange-600 dark:hover:bg-orange-700"
                                >
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    <span>Demo</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;