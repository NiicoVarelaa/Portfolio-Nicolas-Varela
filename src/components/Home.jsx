import { motion } from "framer-motion";
import nico from "../assets/nico.webp";
import Badge from "./Badge";
import SocialButton from "./SocialButtons";
import ScrollToTop from "./ScrollToTop";

import { FileDown, MousePointer2 } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

import cvFile from "../assets/cv.pdf";
import { useLanguage } from "../context/LanguageContext";
import es from "../locales/es";
import en from "../locales/en";

const languages = { es, en };

const Home = () => {
  const { lang } = useLanguage();
  const t = languages[lang].home;

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "CV_Nicolas_Varela.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-24 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-20 w-full">
          {/* IMAGE (mobile first) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end w-full lg:w-1/2"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="
                relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80
                rounded-full p-1.5
                bg-gradient-to-br from-orange-500 to-blue-500
                shadow-2xl
              "
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                <img
                  src={nico}
                  alt="Nicolás Varela"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="
                  hidden sm:flex absolute bottom-4 -left-6
                  items-center gap-3
                  bg-white dark:bg-gray-900
                  px-4 py-3
                  rounded-2xl
                  shadow-xl
                  border border-gray-100 dark:border-gray-700
                "
              >
                <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600">
                  <MousePointer2 size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Especialidad
                  </p>
                  <p className="text-sm font-bold text-gray-800 dark:text-gray-100">
                    Frontend
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              flex flex-col items-center lg:items-start
              text-center lg:text-left
              space-y-6
              w-full lg:w-1/2
            "
          >
            <Badge>{t.availableForWork}</Badge>

            <div className="space-y-3">
              <h2 className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {t.greeting} <span className="animate-wave">👋</span> {t.iAm}
              </h2>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Nicolás Varela
                </span>
              </h1>

              <h3 className="text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-400">
                {t.fullStackDeveloper}
              </h3>
            </div>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
              {t.homeDescription}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="
    flex items-center gap-2
    px-6 py-2.5               
    text-sm font-semibold     
    bg-gradient-to-r from-orange-500 to-orange-600
    text-white
    rounded-full
    shadow-lg shadow-orange-500/25
    hover:shadow-orange-500/40
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
  "
              >
                <FileDown size={18} />{" "}
                {/* Reduje el icono ligeramente para balancear */}
                {t.downloadCV}
              </motion.button>

              <div className="flex items-center gap-3">
                <SocialButton
                  href="https://www.linkedin.com/in/niicolasvarelaa/"
                  label="LinkedIn"
                >
                  <SiLinkedin className="text-blue-600 dark:text-blue-400 text-lg" />
                  <span>LinkedIn</span>
                </SocialButton>

                <SocialButton
                  href="https://github.com/NiicoVarelaa"
                  label="GitHub"
                >
                  <SiGithub className="text-gray-900 dark:text-white text-lg" />
                  <span>GitHub</span>
                </SocialButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ScrollToTop />
    </section>
  );
};

export default Home;
