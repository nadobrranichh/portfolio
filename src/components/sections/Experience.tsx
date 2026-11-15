import { experience } from "../../lists/experience";
import { motion } from "motion/react";
import { fade } from "../../motion/variants";
import { useTranslation } from "react-i18next";
import ExperienceItem from "../ExperienceItem";

export default function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experience">
      <motion.h2
        variants={fade()}
        initial="hidden"
        animate="visible"
        className="text-4xl font-semibold tracking-tight text-content"
      >
        {t("experience.title")}
      </motion.h2>
      <div className="flex flex-col gap-2 border-t border-b border-slate-700 text-content mt-10">
        {experience.map((item) => (
          <ExperienceItem key={item.i18nKey} item={item} />
        ))}
      </div>
    </section>
  );
}
