import useLanguage from "@hooks/useLanguage.js";
import { useAboutTimeline } from "@hooks/useAboutTimeline.js";
import AboutHeader from "./AboutHeader.jsx";
import AboutTimeline from "./AboutTimeline.jsx";
import es from "@locales/es.js";
import en from "@locales/en.js";

const languages = { es, en };

const AboutMe = () => {
  const { lang } = useLanguage();
  const t = languages[lang].about;

  const timeline = useAboutTimeline(t);

  return (
    <section
      id="sobremí"
      aria-label={t.sectionTitle}
      className="mx-auto w-full min-h-screen flex flex-col justify-center overflow-hidden px-4 py-10 sm:py-14 md:py-16 sm:px-6 lg:px-8 max-w-6xl"
      role="region"
    >
      <AboutHeader title={t.sectionTitle} />

      <div className="w-full flex flex-col items-center">
        <AboutTimeline timeline={timeline} />
      </div>
    </section>
  );
};

export default AboutMe;
