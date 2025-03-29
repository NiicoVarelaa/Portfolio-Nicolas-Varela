import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiRedux,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiPython,
    SiGit,
    SiGithub,
    SiDocker
} from "react-icons/si";

const Skills = () => {
    const skills = [
        { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "Redux", icon: SiRedux, color: "text-purple-500" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800 dark:text-gray-100" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Express", icon: SiExpress, color: "text-gray-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "Python", icon: SiPython, color: "text-blue-700" },
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        { name: "GitHub", icon: SiGithub, color: "text-gray-800 dark:text-gray-200" },
        { name: "Docker", icon: SiDocker, color: "text-blue-400" },
    ];

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
                <FaCode /> Habilidades
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full"
            >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col items-center gap-3 p-4 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all"
                        >
                            <div className={`text-4xl ${skill.color}`}>
                                <skill.icon />
                            </div>
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-200">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Skills;