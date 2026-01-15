import { memo } from "react";
import { motion } from "framer-motion";

const LearningBanner = memo(({ title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-blue-500/10 border border-orange-200 dark:border-orange-900/50"
  >
    <div className="text-center">
      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h4>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </motion.div>
));

LearningBanner.displayName = "LearningBanner";
export default LearningBanner;
