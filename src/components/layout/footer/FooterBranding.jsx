import { memo } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import PropTypes from "prop-types";

const FooterBranding = ({ copyrightText, year, madeWith, andReact }) => (
  <div className="flex flex-col items-center md:items-start gap-2">
    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
      {copyrightText.replace("{year}", year)}
    </p>
    <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500">
      <span>{madeWith}</span>
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
        <Heart size={12} className="text-orange-600 fill-orange-600" />
      </motion.div>
      <span>{andReact}</span>
    </div>
  </div>
);

FooterBranding.displayName = "FooterBranding";

FooterBranding.propTypes = {
  copyrightText: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  madeWith: PropTypes.string.isRequired,
  andReact: PropTypes.string.isRequired,
};

export default memo(FooterBranding);
