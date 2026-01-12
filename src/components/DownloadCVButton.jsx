import { FileDown } from "lucide-react";
import { motion } from "framer-motion";

const DownloadCVButton = ({ onClick, label }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="group flex items-center gap-2 px-6 py-2.5 text-sm bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 whitespace-nowrap"
  >
    <FileDown
      size={18}
      className="transition-transform duration-300 group-hover:translate-y-1"
    />
    {label}
  </motion.button>
);

export default DownloadCVButton;
