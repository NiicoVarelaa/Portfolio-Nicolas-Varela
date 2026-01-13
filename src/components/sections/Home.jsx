import { motion } from "framer-motion";
import nico from "../../assets/nico.webp";
import cvPdf from "../../assets/cv.pdf";
import Badge from "../common/Badge";
import SocialButton from "../common/SocialButtons";
import ScrollToTop from "../layout/ScrollToTop";
import FloatingBadge from "../images/FloatingBadge";
import ProfileImageHome from "../images/ProfileImageHome";
import DownloadCVButton from "../images/DownloadCVButton";
import { useMemo, useCallback } from "react";
import useLanguage from "../../hooks/useLanguage";
import es from "../../locales/es.js";
import en from "../../locales/en.js";
import { SiLinkedin, SiGithub } from "react-icons/si";

const languages = { es, en };

const Home = () => {
  const { lang } = useLanguage();
  const t = useMemo(() => languages[lang].home, [lang]);

  const handleDownloadCV = useCallback(() => {
    const link = document.createElement("a");
    link.href = cvPdf;
    link.download = "CV_Nicolas_Varela.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
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
                {t.greeting} <span className="animate-wave">👋</span> {t.iAm}
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
              <DownloadCVButton
                onClick={handleDownloadCV}
                label={t.downloadCV}
              />
              <div className="flex items-center gap-3">
                <SocialButton href="https://www.linkedin.com/in/niicolasvarelaa/">
                  <SiLinkedin className="text-blue-600 dark:text-blue-400 text-lg" />
                  <span>LinkedIn</span>
                </SocialButton>
                <SocialButton href="https://github.com/NiicoVarelaa">
                  <SiGithub className="text-gray-900 dark:text-white text-lg" />
                  <span>GitHub</span>
                </SocialButton>
              </div>
            </div>
          </motion.div>
          <ProfileImageHome src={nico}>
            <FloatingBadge />
          </ProfileImageHome>
        </div>
      </div>

      <ScrollToTop />
    </section>
  );
};

export default Home;
