import { motion } from "framer-motion";
import { projectData } from "../projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import es from "../locales/es";
import en from "../locales/en";

const languages = { es, en };

const Projects = () => {
    const { lang } = useLanguage();
    const t = languages[lang].projects;

    return (
        <section
            className="mx-auto max-w-6xl w-full min-h-screen py-20 px-4 sm:px-10 flex flex-col justify-center items-center"
            id="proyectos"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full mb-8 sm:mb-8"
            >
                <div className="flex justify-center">
                    <h2 className="text-center text-3xl sm:text-4xl mb-8 font-semibold text-gray-800 dark:text-gray-100 relative inline-block after:content-[''] after:block after:h-[3px] after:w-20 after:bg-orange-500 after:mx-auto after:mt-2">
                        {t.sectionTitle}
                    </h2>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
            >
                {projectData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(251, 146, 60, 0.5), 0 10px 10px -5px rgba(251, 146, 60, 0.4)" }}
                        className="flex flex-col rounded-xl overflow-hidden transition-all duration-300 shadow-lg h-full"
                    >
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block overflow-hidden relative group"
                        >
                            <motion.img
                                src={project.image}
                                className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                alt={`Project screenshot ${t.projectList[index].title}`}
                            />
                            <div className="absolute inset-0 bg-orange-500/20 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-white text-3xl animate-pulse" />
                            </div>
                        </a>

                        <div className="flex flex-col bg-orange-50/50 dark:bg-blue-950/50 p-6 flex-grow border-t-4 border-orange-400 dark:border-orange-500">
                            <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                                {t.projectList[index].title}
                            </h3>
                            <p className="text-base text-orange-950/90 dark:text-orange-50/90 mb-4 flex-grow">
                                {t.projectList[index].description}
                            </p>

                            <div className="flex gap-2 flex-wrap mb-5 mt-auto">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-blue-900/80 dark:text-orange-200 rounded-full text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-orange-50 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors dark:bg-orange-600 dark:hover:bg-orange-700"
                                    >
                                        <FaGithub />
                                        <span>{t.code}</span>
                                    </a>
                                )}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-orange-50 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors dark:bg-orange-600 dark:hover:bg-orange-700"
                                >
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    <span>{t.demo}</span>
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