import { memo } from "react";
import { motion } from "framer-motion";
import Badge from "../../common/Badge";
import SocialButton from "../../common/SocialButtons";
import DownloadCVButton from "../../ui/DownloadCVButton";
import { SiLinkedin, SiGithub } from "react-icons/si";

const HeroContent = memo(({ t, onDownloadCV }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:w-1/2"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <Badge>{t.availableForWork}</Badge>
    </motion.div>

    <div className="space-y-2">
      <h2 className="text-2xl font-medium text-gray-600 dark:text-gray-300 flex items-center gap-2 justify-center lg:justify-start">
        {t.greeting}{" "}
        <span className="animate-wave" role="img" aria-label="waving hand">
          👋
        </span>{" "}
        {t.iAm}
      </h2>

      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          Nicolás Varela
        </span>
      </h1>

      <h3 className="text-xl sm:text-2xl font-medium text-gray-500 dark:text-gray-400">
        {t.fullStackDeveloper}
      </h3>
    </div>

    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
      {t.homeDescription}
    </p>

    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
      <DownloadCVButton onClick={onDownloadCV} label={t.downloadCV} />
      <div className="flex items-center gap-3">
        <SocialButton
          href="https://www.linkedin.com/in/niicolasvarelaa/"
          aria-label="Visitar perfil de LinkedIn"
        >
          <SiLinkedin className="text-blue-600 dark:text-blue-400 text-lg" />
          <span>LinkedIn</span>
        </SocialButton>
        <SocialButton
          href="https://github.com/NiicoVarelaa"
          aria-label="Visitar perfil de GitHub"
        >
          <SiGithub className="text-gray-900 dark:text-white text-lg" />
          <span>GitHub</span>
        </SocialButton>
      </div>
    </div>
  </motion.div>
));

HeroContent.displayName = "HeroContent";

export default HeroContent;
