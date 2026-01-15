import ProfileImageAbout from "../../ui/ProfileImageAbout.jsx";
import nico2 from "../../../assets/nico2.webp";
import useLanguage from "../../../hooks/useLanguage.js";
import { useAboutTimeline } from "../../../hooks/useAboutTimeline.js";
import AboutHeader from "./AboutHeader.jsx";
import AboutTimeline from "./AboutTimeline.jsx";
import es from "../../../locales/es.js";
import en from "../../../locales/en.js";

const languages = { es, en };

const AboutMe = () => {
  const { lang } = useLanguage();
  const t = languages[lang].about;

  const timeline = useAboutTimeline(t);

  return (
    <section
      id="sobremí"
      aria-label={t.sectionTitle}
      className="mx-auto w-full min-h-screen flex flex-col justify-center overflow-hidden px-4 py-10 sm:px-8 md:px-10 max-w-6xl"
      role="region"
    >
      <AboutHeader title={t.sectionTitle} />

      <div className="flex flex-col gap-10 items-center lg:flex-row-reverse lg:gap-16">
        <ProfileImageAbout
          src={nico2}
          alt="Nicolás Varela - Desarrollador Full Stack"
        />
        <AboutTimeline timeline={timeline} />
      </div>
    </section>
  );
};

export default AboutMe;
