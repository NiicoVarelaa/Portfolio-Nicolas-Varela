import nico from "@assets/Nicolas-Varela.webp";
import cvPdf from "@assets/CV-José-Nicolás-Varela.pdf";
import ScrollToTop from "@components/layout/ScrollToTop.jsx";
import ProfileImageHome from "@components/ui/ProfileImageHome.jsx";
import useLanguage from "@hooks/useLanguage.js";
import useDownloadCV from "@hooks/useDownloadCV.js";
import BackgroundGradients from "./BackgroundGradients.jsx";
import HeroContent from "./HeroContent.jsx";
import es from "@locales/es.js";
import en from "@locales/en.js";

const languages = { es, en };

const Home = () => {
  const { lang } = useLanguage();
  const t = languages[lang].home;

  const handleDownloadCV = useDownloadCV(cvPdf, "CV-José-Nicolás-Varela.pdf");

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      id="home"
      aria-labelledby="home-title"
    >
      <BackgroundGradients />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 sm:pt-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <HeroContent t={t} onDownloadCV={handleDownloadCV} />

          <ProfileImageHome src={nico} />
        </div>
      </div>

      <ScrollToTop />
    </section>
  );
};

export default Home;
