import { projects } from "../../lists/projects";
import ProjectCard from "../ProjectCard";
import { motion } from "motion/react";
import { fade, viewPortValues } from "../../motion/variants";
import useBreakpoints from "../../hooks/useBreakpoints";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { isLg } = useBreakpoints();
  const { t } = useTranslation();
  return (
    <section id="projects" className="text-content">
      <motion.h2
        variants={fade()}
        initial="hidden"
        whileInView="visible"
        className="text-4xl font-semibold"
      >
        {t("projects.title")}
      </motion.h2>
      <motion.div
        variants={fade({ withStagger: true })}
        initial="hidden"
        whileInView="visible"
        {...(isLg && { viewport: viewPortValues })}
        className="flex flex-col items-center md:flex-row flex-wrap md:justify-center gap-4 mt-10"
      >
        {projects.map((p) => (
          <ProjectCard key={p.i18nKey} data={p} />
        ))}
      </motion.div>
    </section>
  );
}
