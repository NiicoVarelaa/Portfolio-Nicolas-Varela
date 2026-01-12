import { MousePointer2 } from "lucide-react";
import { motion } from "framer-motion";

const FloatingBadge = () => (
  <motion.div
    className="absolute bottom-4 -left-4 bg-white dark:bg-gray-900 p-3 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hidden sm:flex items-center gap-3"
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
  >
    <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600">
      <MousePointer2 size={20} />
    </div>
    <div>
      <p className="text-xs text-gray-500 dark:text-gray-400">Especialidad</p>
      <p className="text-sm font-bold text-gray-800 dark:text-gray-100">
        Frontend
      </p>
    </div>
  </motion.div>
);

export default FloatingBadge;
