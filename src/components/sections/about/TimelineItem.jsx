import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaUser } from "react-icons/fa";

const iconMap = {
  user: <FaUser />,
  graduation: <FaGraduationCap />,
  certificate: <FaCertificate />,
};

const TimelineItem = ({ item, isLast }) => (
  <motion.li
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group flex items-start gap-4 sm:gap-6 outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
    tabIndex={0}
    aria-label={item.title ? item.title : undefined}
  >
    <div className="relative flex-shrink-0">
      <div
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300 text-xl outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        tabIndex={-1}
        aria-hidden="true"
      >
        {iconMap[item.icon]}
      </div>
      {!isLast && (
        <div
          className="absolute top-10 sm:top-12 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-800 -z-10 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors"
          aria-hidden="true"
        ></div>
      )}
    </div>
    <div className="pt-0.5 w-full">
      {item.title && (
        <h3
          className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orange-500 group-focus-within:text-orange-500 transition-colors"
          tabIndex={-1}
        >
          {item.title}
        </h3>
      )}
      {item.description && (
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
          {item.description}
        </p>
      )}
      {item.certificates && (
        <ul className="mt-3 space-y-2" role="list">
          {item.certificates.map((cert, i) => (
            <li key={i} className="flex items-center gap-2 sm:gap-3">
              <span
                className="w-1.5 h-1.5 rounded-full bg-orange-500"
                aria-hidden="true"
              ></span>
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 font-medium underline-offset-4 hover:underline hover:text-orange-600 dark:hover:text-orange-400 focus-visible:underline focus-visible:text-orange-600 dark:focus-visible:text-orange-400 transition-all outline-none"
                tabIndex={0}
                aria-label={cert.name}
              >
                {cert.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  </motion.li>
);

export default TimelineItem;
