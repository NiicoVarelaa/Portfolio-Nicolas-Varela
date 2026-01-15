import { useMemo } from "react";
import { motion } from "framer-motion";
import useLanguage from "../../../hooks/useLanguage.js";
import es from "../../../locales/es.js";
import en from "../../../locales/en.js";
import { skillData } from "../../../data/skills.js";
import SkillCard from "./SkillCard.jsx";
import CategoryHeader from "./CategoryHeader.jsx";
import SectionHeader from "./SectionHeader.jsx";
import LearningBanner from "./LearningBanner.jsx";

const languages = { es, en };

const animationVariants = {
  container: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  },
};

const Skills = () => {
  const { lang } = useLanguage();
  const t = languages[lang].skills;

  const skillCategories = useMemo(() => Object.entries(skillData), []);

  return (
    <section
      className="relative w-full min-h-screen max-w-6xl py-24 mx-auto px-4 sm:px-10 flex flex-col justify-center items-center overflow-hidden"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="relative w-full max-w-6xl">
        <SectionHeader title={t.sectionTitle} />

        <div className="space-y-16">
          {skillCategories.map(([key, category], categoryIndex) => (
            <motion.div
              key={category.id || key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-8"
            >
              <CategoryHeader
                icon={category.icon}
                title={category.categoryName}
                skillsCount={category.skills.length}
                technologiesLabel={t.technologiesCount}
              />

              <motion.div
                variants={animationVariants.container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {category.skills.map((skill) => (
                  <SkillCard key={skill.id || skill.name} skill={skill} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <LearningBanner
          title={t.alwaysLearning}
          description={t.currentlyExploring}
        />
      </div>
    </section>
  );
};

export default Skills;
