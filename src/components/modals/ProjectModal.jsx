import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import useLanguage from "../../hooks/useLanguage";
import es from "../../locales/es.js";
import en from "../../locales/en.js";
import { useState, useEffect, useCallback, useRef } from "react";
import { Gallery } from "./Gallery";
import { GalleryThumbnails } from "./GalleryThumbnails";
import { ProjectInfo } from "./ProjectInfo";
import { ProjectActions } from "./ProjectActions";

const languages = { es, en };

const ProjectModal = ({ project, onClose }) => {
  const { lang } = useLanguage();
  const t = languages[lang].projects;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const closeBtnRef = useRef(null);

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
    closeBtnRef.current?.focus();
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
        transition={{ duration: 0.18 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
      >
        <motion.div
          initial={{ scale: 0.97, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.97, opacity: 0, y: 16 }}
          transition={{ type: "spring", damping: 28, stiffness: 260 }}
          className="relative w-full max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-6xl max-h-[96vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 shadow-lg hover:shadow-xl transition-all duration-150 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            aria-label={lang === "es" ? "Cerrar modal" : "Close modal"}
          >
            <X size={22} strokeWidth={2.5} />
          </button>

          <div className="w-full lg:w-3/5 flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-3 sm:p-6">
            <Gallery
              images={project.galleryImages}
              currentIndex={currentIndex}
              direction={direction}
              isImageLoading={isImageLoading}
              onPrev={handlePrev}
              onNext={handleNext}
              onImageLoad={() => setIsImageLoading(false)}
              lang={lang}
            />
            {project.galleryImages.length > 1 && (
              <GalleryThumbnails
                images={project.galleryImages}
                currentIndex={currentIndex}
                onThumbnailClick={handleThumbnailClick}
                lang={lang}
              />
            )}
          </div>

          <div className="w-full lg:w-2/5 p-4 sm:p-6 bg-white dark:bg-gray-900 flex flex-col overflow-y-auto">
            <div className="flex-1">
              <ProjectInfo project={project} t={t} />
            </div>
            <ProjectActions project={project} t={t} lang={lang} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;