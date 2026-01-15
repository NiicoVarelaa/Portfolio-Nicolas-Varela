import { memo } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FooterBranding = ({ copyrightText, year }) => (
  <div className="flex flex-col items-center md:items-start gap-2">
    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
      {copyrightText.replace("{year}", year)}
    </p>
    <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500">
      <span>Hecho con</span>
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
          repeatDelay: 0.5,
        }}
        aria-hidden="true"
      >
        <Heart size={12} className="text-orange-500 fill-orange-500" />
      </motion.div>
      <span>y React</span>
    </div>
  </div>
);

FooterBranding.displayName = "FooterBranding";

export default memo(FooterBranding);
