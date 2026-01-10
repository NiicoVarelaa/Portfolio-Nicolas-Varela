import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCertificate,
  FaUser as FaUserTimeline,
} from "react-icons/fa";
import nico2 from "../assets/nico2.webp";
import { useLanguage } from "../context/LanguageContext";
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
  const t = languages[lang].about;

  const timeline = [
    {
      icon: <FaUserTimeline />,
      description: t.intro,
    },
    {
      icon: <FaGraduationCap />,
      title: t.educationTitle,
      description: t.educationText,
    },
    {
      icon: <FaCertificate />,
      title: t.certificationTitle,
      certificates: [
        {
          name: t.certificates[0],
          image:
            "https://certs.rollingcodeschool.com//bmlpY292YXJlbGFhQGdtYWlsLmNvbQ==-1689275429296-1.png",
        },
      ],
    },
  ];

  return (
    <section
      className="mx-auto max-w-6xl w-full min-h-screen py-24 px-4 sm:px-10 flex flex-col justify-center overflow-hidden"
      id="sobremí"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headerVariants}
        className="text-center mb-20"
      >
        <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          {t.sectionTitle}
        </h2>

        <div className="flex justify-center">
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 via-orange-500 to-transparent rounded-full"></div>
        </div>
      </motion.div>

      <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
            <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay z-10"></div>
            <img
              src={nico2}
              alt="Nicolás Varela - Desarrollador Full Stack"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
            />
          </div>
        </motion.div>

        <div className="w-full lg:w-1/2 space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group flex items-start gap-6"
            >
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300 text-xl">
                  {item.icon}
                </div>
                {index !== timeline.length - 1 && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-800 -z-10 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors"></div>
                )}
              </div>

              <div className="pt-1">
                {item.title && (
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                )}
                {item.description && (
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {item.description}
                  </p>
                )}
                {item.certificates && (
                  <ul className="mt-4 space-y-3">
                    {item.certificates.map((cert, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                        <a
                          href={cert.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 font-medium hover:text-orange-600 dark:hover:text-orange-400 underline-offset-4 hover:underline transition-all"
                        >
                          {cert.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
