import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  X,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import useLanguage from "../../hooks/useLanguage";
import es from "../../locales/es.js";
import en from "../../locales/en.js";
import { useState, useEffect, useCallback } from "react";

const languages = { es, en };

const imageVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9,
  }),
};

const ProjectModal = ({ project, onClose }) => {
  const { lang } = useLanguage();
  const t = languages[lang].projects;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleNext = useCallback(() => {
    if (!project.galleryImages || project.galleryImages.length <= 1) return;
    setDirection(1);
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % project.galleryImages.length
    );
    setIsImageLoading(true);
  }, [project.galleryImages]);

  const handlePrev = useCallback(() => {
    if (!project.galleryImages || project.galleryImages.length <= 1) return;
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.galleryImages.length) %
        project.galleryImages.length
    );
    setIsImageLoading(true);
  }, [project.galleryImages]);

  const handleThumbnailClick = useCallback(
    (index) => {
      if (index === currentIndex) return;
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      setIsImageLoading(true);
    },
    [currentIndex]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, handlePrev, handleNext]);

  if (!project) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-50 p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-7xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full w-11 h-11 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            aria-label="Close modal"
          >
            <X size={22} strokeWidth={2.5} />
          </button>

          <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
            <div
              className="relative mb-4 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-xl"
              style={{ aspectRatio: "16/10" }}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={currentIndex}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  src={project.galleryImages[currentIndex]}
                  alt={`${project.title} screenshot ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                  onLoad={() => setIsImageLoading(false)}
                  loading="lazy"
                />
              </AnimatePresence>

              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                  <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              {project.galleryImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-800 dark:text-white p-2.5 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} strokeWidth={2.5} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-800 dark:text-white p-2.5 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} strokeWidth={2.5} />
                  </button>
                </>
              )}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-3 left-0 right-0 flex justify-center"
              >
                <span className="bg-black/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                  {currentIndex + 1} / {project.galleryImages.length}
                </span>
              </motion.div>
            </div>

            {project.galleryImages.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-2 px-1 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-200 dark:scrollbar-track-gray-700">
                {project.galleryImages.map((img, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                      currentIndex === index
                        ? "border-orange-500 shadow-lg ring-2 ring-orange-500"
                        : "border-transparent hover:border-orange-300 dark:hover:border-orange-600 opacity-60 hover:opacity-100"
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:w-2/5 p-6 lg:p-8 bg-white dark:bg-gray-900 flex flex-col overflow-y-auto">
            <div className="flex-1">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                id="project-title"
                className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
              >
                {t.projectList[project.id - 1].title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-base"
              >
                {t.projectList[project.id - 1].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                  {t.technologiesTitle}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.25 + i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-br from-orange-50 to-orange-100 text-orange-800 dark:from-orange-900/40 dark:to-orange-900/60 dark:text-orange-200 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200 dark:border-gray-700"
            >
              {project.githubLink && (
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-semibold text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-xl transition-all flex-1 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  <Github size={20} />
                  <span>{t.code}</span>
                </motion.a>
              )}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl transition-all flex-1 shadow-lg hover:shadow-xl hover:shadow-orange-500/30 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <ExternalLink size={20} />
                <span>{t.demo}</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
