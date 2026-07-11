import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import useTranslation, { useLang } from "@hooks/useTranslation.js";
import useReducedMotion from "@hooks/useReducedMotion.js";
import { useState, useEffect, useCallback, useRef } from "react";
import { Gallery } from "./Gallery.jsx";
import { GalleryThumbnails } from "./GalleryThumbnails.jsx";
import { ProjectInfo } from "./ProjectInfo.jsx";
import { ProjectActions } from "./ProjectActions.jsx";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const ProjectModal = ({ project, onClose }) => {
  const t = useTranslation().projects;
  const lang = useLang();
  const reducedMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [previewOpen, setPreviewOpen] = useState(false);
  const closeBtnRef = useRef(null);
  const modalRef = useRef(null);

  const images = project.galleryImages || [];

  const handleNext = useCallback(() => {
    if (!images || images.length <= 1) return;
    setDirection(1);
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % images.length
    );
    setIsImageLoading(true);
  }, [images]);

  const handlePrev = useCallback(() => {
    if (!images || images.length <= 1) return;
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + images.length) %
        images.length
    );
    setIsImageLoading(true);
  }, [images]);

  const handleThumbnailClick = useCallback(
    (index) => {
      if (index === currentIndex) return;
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      setIsImageLoading(true);
    },
    [currentIndex]
  );

  const openPreview = useCallback(() => setPreviewOpen(true), []);
  const closePreview = useCallback(() => setPreviewOpen(false), []);

  const handlePrevPreview = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images]);

  const handleNextPreview = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (previewOpen) {
        if (e.key === "Escape") closePreview();
        if (e.key === "ArrowLeft") handlePrevPreview();
        if (e.key === "ArrowRight") handleNextPreview();
        return;
      }
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();

      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(FOCUSABLE_SELECTOR);
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, handlePrev, handleNext, previewOpen, closePreview, handlePrevPreview, handleNextPreview]);

  if (!project) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.18 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
      >
        <motion.div
          ref={modalRef}
          initial={reducedMotion ? {} : { scale: 0.97, opacity: 0, y: 16 }}
          animate={reducedMotion ? {} : { scale: 1, opacity: 1, y: 0 }}
          exit={reducedMotion ? {} : { scale: 0.97, opacity: 0, y: 16 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { type: "spring", damping: 28, stiffness: 260 }
          }
          className="relative w-full max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-6xl max-h-[96vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 shadow-lg hover:shadow-xl transition-all duration-150 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            aria-label={lang === "es" ? "Cerrar modal" : "Close modal"}
            style={{ zIndex: 60 }}
          >
            <X size={22} strokeWidth={2.5} />
          </button>

          <div className="w-full lg:w-3/5 flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-3 sm:p-6">
            <Gallery
              images={images}
              currentIndex={currentIndex}
              direction={direction}
              isImageLoading={isImageLoading}
              onPrev={handlePrev}
              onNext={handleNext}
              onImageLoad={() => setIsImageLoading(false)}
              onExpand={openPreview}
              lang={lang}
            />
            {images.length > 1 && (
              <GalleryThumbnails
                images={images}
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

        {previewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95"
            onClick={closePreview}
          >
            <button
              onClick={closePreview}
              className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-orange-500 transition-all duration-200 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              aria-label={lang === "es" ? "Cerrar" : "Close"}
            >
              <X size={24} strokeWidth={2.5} />
            </button>

            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium z-10">
              {currentIndex + 1} / {images.length}
            </span>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrevPreview(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-orange-500 transition-all duration-200 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  aria-label={lang === "es" ? "Anterior" : "Previous"}
                >
                  <ChevronLeft size={28} strokeWidth={2.2} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleNextPreview(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-orange-500 transition-all duration-200 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  aria-label={lang === "es" ? "Siguiente" : "Next"}
                >
                  <ChevronRight size={28} strokeWidth={2.2} />
                </button>
              </>
            )}

            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Screenshot ${currentIndex + 1}`}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-[92vw] max-h-[92vh] object-contain"
              onClick={(e) => e.stopPropagation()}
              draggable={false}
            />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    githubLink: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    galleryImages: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
