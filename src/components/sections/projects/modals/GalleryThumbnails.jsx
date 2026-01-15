import { motion } from "framer-motion";

export function GalleryThumbnails({
  images,
  currentIndex,
  onThumbnailClick,
  lang,
}) {
  return (
    <div className="flex gap-2.5 overflow-x-auto pb-2 px-1 py-1 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-200 dark:scrollbar-track-gray-700">
      {images.map((img, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
            currentIndex === index
              ? "border-orange-500 shadow-lg ring-2 ring-orange-500"
              : "border-transparent hover:border-orange-300 dark:hover:border-orange-600 opacity-60 hover:opacity-100"
          }`}
          onClick={() => onThumbnailClick(index)}
          aria-label={
            lang === "es"
              ? `Ver imagen ${index + 1}`
              : `View image ${index + 1}`
          }
          tabIndex={0}
        >
          <img
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
            draggable={false}
          />
        </motion.button>
      ))}
    </div>
  );
}
