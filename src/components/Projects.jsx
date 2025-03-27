import React from 'react';
import { motion } from 'framer-motion';
import { projectData } from '../projectData';

const Projects = () => {
    return (
        <div className='mx-auto max-w-6xl p-4 sm:p-10 text-white flex flex-col gap-10 sm:gap-16 items-center justify-center' id='projects'>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='text-4xl sm:text-6xl'
            >Proyectos</motion.h1>

            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {projectData.map((project) => (
                    <a href={project.link} key={project.id} target='_blank' className='flex flex-col rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-800'>
                        <img src={project.image} className='hover:scale-105 transition-transform duration-300' alt={project.title} />
                        <div className='flex flex-col gap-3 bg-gray-900 p-5 transition-colors duration-300 hover:bg-gray-800 flex-grow'>
                            <h3 className='text-xl font-semibold'>{project.title}</h3>
                            <p className='text-sm text-slate-400'>{project.description}</p>
                            <div className='flex gap-3 flex-wrap mx-auto'>
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className='px-2 py-1 bg-indigo-900 rounded-xl text-sm'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}

            </motion.div>
        </div>
    )
}

export default Projects