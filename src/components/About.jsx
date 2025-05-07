import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaUser } from 'react-icons/fa';
import nico2 from "../../public/nico2.webp";
import { useLanguage } from "../context/LanguageContext";
import es from "../locales/es";
import en from "../locales/en";

const languages = { es, en };

const AboutMe = () => {
    const { lang } = useLanguage();
    const t = languages[lang].about;

    const timeline = [
        {
            icon: <FaUser />,
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
                    image: "https://certs.rollingcodeschool.com//bmlpY292YXJlbGFhQGdtYWlsLmNvbQ==-1689275429296-1.png"
                }
            ]
        }
    ];

    return (
        <section
            className="mx-auto max-w-6xl w-full min-h-screen py-20 px-4 sm:px-10 flex flex-col justify-center"
            id="sobremí"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full mb-8"
            >
                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-gray-100">
                    {t.sectionTitle}
                </h2>
            </motion.div>

            <div className="flex flex-col lg:flex-row-reverse gap-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden border-4 border-gray-300 dark:border-gray-700 shadow-lg">
                        <img
                            src={nico2}
                            alt="Nicolás Varela - Desarrollador Full Stack"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </motion.div>

                <div className="w-full lg:w-1/2 space-y-10">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex items-start gap-4"
                        >
                            <div className="text-orange-500 text-2xl mt-1">
                                {item.icon}
                            </div>
                            <div>
                                {item.title && (
                                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                                        {item.title}
                                    </h3>
                                )}
                                {item.description && (
                                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                                        {item.description}
                                    </p>
                                )}
                                {item.certificates && (
                                    <ul className="mt-3 space-y-3">
                                        {item.certificates.map((cert, i) => (
                                            <li
                                                key={i}
                                                className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-gray-600 dark:before:bg-gray-300"
                                            >
                                                <a
                                                    href={cert.image}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-gray-50"
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
