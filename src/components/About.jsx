import { motion } from "framer-motion";
import { useMemo } from "react";
import ProfileImageAbout from "./ProfileImageAbout";
import nico2 from "../assets/nico2.webp";
import TimelineItem from "./TimelineItem";
import useLanguage from "../hooks/useLanguage";
import es from "../locales/es";
import en from "../locales/en";

const languages = { es, en };

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const AboutMe = () => {
  const { lang } = useLanguage();
  const t = useMemo(() => languages[lang].about, [lang]);

  const timeline = useMemo(
    () => [
      {
        icon: "user",
        description: t.intro,
      },
      {
        icon: "graduation",
        title: t.educationTitle,
        description: t.educationText,
      },
      {
        icon: "certificate",
        title: t.certificationTitle,
        certificates: [
          {
            name: t.certificates[0],
            image:
              "https://certs.rollingcodeschool.com//bmlpY292YXJlbGFhQGdtYWlsLmNvbQ==-1689275429296-1.png",
          },
        ],
      },
    ],
    [t]
  );

  return (
    <section
      id="sobremí"
      aria-label={t.sectionTitle}
      className="mx-auto w-full min-h-screen flex flex-col justify-center overflow-hidden px-4 py-10 sm:px-8 md:px-10 max-w-6xl"
      role="region"
    >
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headerVariants}
        className="mb-12 text-center"
      >
        <h2
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight tracking-tight"
          tabIndex={0}
        >
          {t.sectionTitle}
        </h2>
        <div className="flex justify-center mt-4" aria-hidden="true">
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 via-orange-500 to-transparent rounded-full"></div>
        </div>
      </motion.header>

      <div className="flex flex-col gap-10 items-center lg:flex-row-reverse lg:gap-16">
        <ProfileImageAbout
          src={nico2}
          alt="Nicolás Varela - Desarrollador Full Stack"
        />
        <ol className="w-full lg:w-1/2 space-y-8 sm:space-y-10" role="list">
          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              isLast={index === timeline.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default AboutMe;
