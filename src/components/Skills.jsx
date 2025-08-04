import { motion } from "framer-motion";
import {
    SiJavascript, SiReact, SiTailwindcss,
    SiNodedotjs, SiExpress, SiMongodb, SiMysql,
    SiGit, SiGithub
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import es from "../locales/es";
import en from "../locales/en";

const languages = { es, en };

const skillData = {
    frontend: [
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },        
        { name: "React", icon: SiReact, color: "text-cyan-400", url: "https://reactjs.org/" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500", url: "https://tailwindcss.com/" }
    ],
    backend: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", url: "https://nodejs.org/" },
        { name: "Express", icon: SiExpress, color: "text-gray-800 dark:text-gray-100", url: "https://expressjs.com/" },
        { name: "Java", icon: FaJava, color: "text-orange-600", url: "https://www.java.com/" }
    ],
    databases: [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600", url: "https://www.mongodb.com/" },
        { name: "MySQL", icon: SiMysql, color: "text-cyan-800 dark:text-gray-100", url: "https://www.mysql.com/" }
    ],
    tools: [
        { name: "Git", icon: SiGit, color: "text-orange-600", url: "https://git-scm.com/" },
        { name: "GitHub", icon: SiGithub, color: "text-gray-800 dark:text-gray-100", url: "https://github.com/" }
    ]
};

const Skills = () => {
    const { lang } = useLanguage();
    const t = languages[lang].skills;

    return (
        <section
            className="mx-auto max-w-6xl w-full py-20 px-4 sm:px-10 flex flex-col items-center"
            id="skills"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full mb-8 sm:mb-8"
            >
                <div className="flex justify-center">
                    <h2 className="text-center text-3xl sm:text-4xl mb-4 font-semibold text-gray-800 dark:text-gray-100 relative inline-block after:content-[''] after:block after:h-[3px] after:w-16 after:bg-orange-500 after:mx-auto after:mt-2">
                        {t.sectionTitle}
                    </h2>
                </div>
            </motion.div>

            <div className="w-full space-y-10">
                {Object.entries(skillData).map(([key, skills], i) => (
                    <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-200 text-start">
                            {t.categories[key]}
                        </h3>

                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                            {skills.map((skill, index) => (
                                <motion.a
                                    key={index}
                                    href={skill.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                                        <skill.icon className={`text-4xl sm:text-5xl ${skill.color}`} />
                                    </div>
                                    <span className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300">
                                        {skill.name}
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;