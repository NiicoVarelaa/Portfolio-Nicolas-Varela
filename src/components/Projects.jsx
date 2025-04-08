import React from "react";
import { motion } from "framer-motion";
import { projectData } from "../projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <div
            className="mx-auto max-w-6xl p-4 sm:p-10 flex flex-col gap-10 sm:gap-8 items-center justify-center"
            id="proyectos"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-6xl flex items-center gap-3 text-orange-950 dark:text-orange-50"
            >
                <FontAwesomeIcon icon={faCode} className="me-4" /> Proyectos
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
            >
                {projectData.map((project) => (
                    <div
                        key={project.id}
                        className="flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-400 h-full shadow-lg"
                    >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img
                                src={project.image}
                                className="w-full hover:scale-105 transition-transform duration-300"
                                alt={project.title}
                            />
                        </a>
                        <div className="flex flex-col bg-orange-50 hover:bg-orange-100 dark:bg-blue-950/50 dark:hover:bg-blue-900/50 p-5 transition-colors duration-300 flex-grow">
                            <h3 className="text-xl font-semibold text-orange-500">{project.title}</h3>
                            <p className="text-sm text-orange-950 dark:text-orange-50 mb-4">{project.description}</p>
                            <div className="flex gap-3 flex-wrap mx-auto mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 bg-orange-200 text-orange-950 border-orange-500 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-auto">
                                <a
                                    href={project.githubLink || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 text-sm text-orange-50 transition bg-orange-500 hover:bg-orange-600 rounded-xl dark:bg-orange-500 dark:text-gray-50 hover:text-gray-50 dark:hover:bg-orange-600 dark:hover:text-gray-50 w-full sm:w-auto"
                                >
                                    <FaGithub className="text-sm md:text-base" />
                                    <span>Código</span>
                                </a>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 text-sm text-orange-50 transition bg-orange-500 hover:bg-orange-600 rounded-xl dark:bg-orange-500 dark:text-gray-50 hover:text-gray-50 dark:hover:bg-orange-600 dark:hover:text-gray-50 w-full sm:w-auto"
                                >
                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm md:text-base" />
                                    <span>Link</span>
                                </a>
                            </div>

                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Projects;