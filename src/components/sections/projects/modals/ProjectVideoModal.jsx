import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { X } from "lucide-react";
import useReducedMotion from "@hooks/useReducedMotion.js";

export function ProjectVideoModal({ video, lang, onClose }) {
  const reducedMotion = useReducedMotion();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.18 }}
        className="fixed inset-0 z-[75] flex items-center justify-center bg-black/95 p-4 sm:p-8"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={lang === "es" ? "Video demo del proyecto" : "Project demo video"}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-orange-500 transition-all duration-200 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          aria-label={lang === "es" ? "Cerrar video" : "Close video"}
        >
          <X size={24} strokeWidth={2.5} />
        </button>
        <motion.div
          initial={reducedMotion ? {} : { scale: 0.96, opacity: 0 }}
          animate={reducedMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }}
          exit={reducedMotion ? {} : { scale: 0.96, opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.2 }}
          className="relative w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full bg-black rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${video}?autoplay=1&rel=0`}
              title={lang === "es" ? "Video demo" : "Demo video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full aspect-video"
              loading="lazy"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

ProjectVideoModal.propTypes = {
  video: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectVideoModal;