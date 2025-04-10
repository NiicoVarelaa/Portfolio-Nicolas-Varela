import React from "react";
import { motion } from "framer-motion";
import {
    SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiNextdotjs,
    SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPython,
    SiGit, SiGithub, SiDocker
} from "react-icons/si";

const categories = {
    "Frontend": [
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", url: "https://www.typescriptlang.org/" },
        { name: "React", icon: SiReact, color: "text-cyan-400", url: "https://reactjs.org/" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800 dark:text-gray-100", url: "https://nextjs.org/" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500", url: "https://tailwindcss.com/" }
    ],
    "Backend": [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", url: "https://nodejs.org/" },
        { name: "Express", icon: SiExpress, color: "text-gray-800 dark:text-gray-100", url: "https://expressjs.com/" },
        { name: "Python", icon: SiPython, color: "text-blue-700", url: "https://www.python.org/" }
    ],
    "Bases de Datos": [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600", url: "https://www.mongodb.com/" },
        { name: "MySQL", icon: SiMysql, color: "text-cyan-800 dark:text-gray-100", url: "https://www.mysql.com/" }
    ],
    "Herramientas": [
        { name: "Git", icon: SiGit, color: "text-orange-600", url: "https://git-scm.com/" },
        { name: "GitHub", icon: SiGithub, color: "text-gray-800 dark:text-gray-100", url: "https://github.com/" },
        { name: "Docker", icon: SiDocker, color: "text-blue-400", url: "https://www.docker.com/" }
    ]
};

const Skills = () => {
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
                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-gray-100">
                    Habilidades
                </h2>
            </motion.div>

            <div className="w-full space-y-10">
                {Object.entries(categories).map(([category, skills], i) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-200 text-start">
                            {category}
                        </h3>

                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                            {skills.map((skill, index) => (
                                <motion.a
                                    key={index}
                                    href={skill.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition-all duration-300 "
                                >
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                                        <skill.icon className={`text-4xl sm:text-5xl ${skill.color} transition-colors`} />
                                    </div>
                                    <span className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300 text-start">
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