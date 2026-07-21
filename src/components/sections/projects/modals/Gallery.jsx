import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import useReducedMotion from "@hooks/useReducedMotion.js";

export function Gallery({
  images,
  currentIndex,
  direction,
  isImageLoading,
  onPrev,
  onNext,
  onImageLoad,
  onExpand,
  lang,
}) {
  const reducedMotion = useReducedMotion();
  const imageVariants = reducedMotion
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
    enter: (direction) => ({
      x: direction > 0 ? 320 : -320,
      opacity: 0,
      scale: 0.96,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction) => ({
      x: direction < 0 ? 320 : -320,
      opacity: 0,
      scale: 0.96,
    }),
  };
  return (
    <div
      className="group relative mb-3 sm:mb-4 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-xl cursor-pointer"
      style={{ aspectRatio: "16/10" }}
      onClick={onExpand}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.img
          key={currentIndex}
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={
            reducedMotion
              ? { duration: 0 }
              : {
                  x: { type: "spring", stiffness: 260, damping: 28 },
                  opacity: { duration: 0.18 },
                }
          }
          src={images[currentIndex]}
          alt={`Screenshot ${currentIndex + 1}`}
          className="w-full h-full object-cover pointer-events-none"
          onLoad={onImageLoad}
          loading="lazy"
          draggable={false}
          width={1600}
          height={1000}
        />
      </AnimatePresence>
      <button
        onClick={(e) => { e.stopPropagation(); onExpand(); }}
        className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 hover:bg-orange-500 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        aria-label={lang === "es" ? "Expandir imagen" : "Expand image"}
      >
        <Maximize2 size={16} strokeWidth={2.2} />
      </button>
      {isImageLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
          <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white p-2.5 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-label={lang === "es" ? "Imagen anterior" : "Previous image"}
          >
            <ChevronLeft size={22} strokeWidth={2.2} />
          </button>
          <button
            onClick={onNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white p-2.5 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-label={lang === "es" ? "Imagen siguiente" : "Next image"}
          >
            <ChevronRight size={22} strokeWidth={2.2} />
          </button>
        </>
      )}
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reducedMotion ? { duration: 0 } : {}}
        className="absolute bottom-2 left-0 right-0 flex justify-center"
      >
        <span className="bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
          {currentIndex + 1} / {images.length}
        </span>
      </motion.div>
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
  direction: PropTypes.number.isRequired,
  isImageLoading: PropTypes.bool.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onImageLoad: PropTypes.func.isRequired,
  onExpand: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
};
