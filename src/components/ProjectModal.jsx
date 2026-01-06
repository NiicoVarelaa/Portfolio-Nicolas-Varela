import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import es from "../locales/es";
import en from "../locales/en";
import { useState, useEffect } from "react";

const languages = { es, en };

const ProjectModal = ({ project, onClose }) => {
    const { lang } = useLanguage();
    const t = languages[lang].projects;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % project.galleryImages.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + project.galleryImages.length) % project.galleryImages.length);
    };

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
    };

    // Cerrar modal con la tecla Escape
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.keyCode === 27) onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative bg-white dark:bg-gray-900 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-orange-500 dark:hover:text-orange-400 text-2xl z-10 bg-white dark:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
                        aria-label="Close modal"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    
                    {/* Sección izquierda - Imágenes */}
                    <div className="lg:w-1/2 p-6 flex flex-col">
                        <div className="relative mb-4 rounded-lg overflow-hidden">
                            <img 
                                src={project.galleryImages[currentIndex]} 
                                alt={`${project.title} screenshot ${currentIndex + 1}`} 
                                className="w-full h-72 object-cover rounded-lg"
                            />
                            {project.galleryImages.length > 1 && (
                                <>
                                    <button
                                        onClick={handlePrev}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-orange-500 transition-all duration-300 shadow-lg"
                                    >
                                        &#8592;
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-orange-500 transition-all duration-300 shadow-lg"
                                    >
                                        &#8594;
                                    </button>
                                </>
                            )}
                            <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                                <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                                    {currentIndex + 1} / {project.galleryImages.length}
                                </span>
                            </div>
                        </div>

                        {/* Miniaturas */}
                        {project.galleryImages.length > 1 && (
                            <div className="flex gap-2 overflow-x-auto pb-2">
                                {project.galleryImages.map((img, index) => (
                                    <div 
                                        key={index}
                                        className={`w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 transition-all duration-200 ${currentIndex === index ? 'border-orange-500' : 'border-transparent'}`}
                                        onClick={() => handleThumbnailClick(index)}
                                    >
                                        <img 
                                            src={img} 
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Sección derecha - Detalles del proyecto */}
                    <div className="lg:w-1/2 p-6 bg-gray-50 dark:bg-gray-800 flex flex-col h-full">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-3">
                            {t.projectList[project.id - 1].title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            {t.projectList[project.id - 1].description}
                        </p>
                        
                        <div className="mb-6">
                            <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-3">
                                {t.technologiesTitle}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 rounded-full text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto flex flex-col sm:flex-row gap-3">
                            {project.githubLink && (
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg transition-colors flex-1"
                                >
                                    <FaGithub className="text-lg" />
                                    <span>{t.code}</span>
                                </a>
                            )}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors flex-1 shadow-md hover:shadow-orange-500/20"
                            >
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                <span>{t.demo}</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;