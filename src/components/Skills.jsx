import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiTailwindcss,
    SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPython,
    SiGit, SiGithub, SiDocker
} from "react-icons/si";

const categories = {
    "Frontend": [
        { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" }
    ],
    "Backend": [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Express", icon: SiExpress, color: "text-gray-400" },
        { name: "Python", icon: SiPython, color: "text-blue-700" }
    ],
    "Bases de Datos": [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "MySQL", icon: SiMysql, color: "text-orange-400" }
    ],
    "Herramientas": [
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        { name: "GitHub", icon: SiGithub, color: "text-gray-800 dark:text-gray-200" },
        { name: "Docker", icon: SiDocker, color: "text-blue-400" }
    ]
};

const Skills = () => {
    return (
        <div
            className="mx-auto max-w-6xl p-4 sm:p-10 text-orange-50 flex flex-col gap-10 sm:gap-8 items-center justify-center"
            id="skills"
        >
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-6xl flex items-center gap-3 text-orange-950 dark:text-gray-50"
            >
                <FaLaptopCode className="me-2" /> Habilidades
            </motion.h1>

            {Object.entries(categories).map(([category, skills], i) => (
                <motion.div
                    key={category}
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 * i }}
                    className="w-full"
                >
                    <h2 className="text-2xl font-semibold text-orange-900 dark:text-gray-200 mb-4">{category}</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {skills.map((skill, index) => (
                            <div key={index} className="flex flex-col items-center gap-3 p-4 bg-orange-50 dark:bg-blue-950/50 dark:hover:bg-blue-900/50 rounded-xl shadow-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
                                <div className={`text-4xl ${skill.color}`}>
                                    <skill.icon />
                                </div>
                                <span className="text-sm font-medium text-orange-950 dark:text-orange-50">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Skills;
