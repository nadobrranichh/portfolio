import { projects } from "../../lists/projects";
import ProjectCard from "../ProjectCard";
import { motion } from "motion/react";
import { fade, viewPortValues } from "../../motion/variants";
import useBreakpoints from "../../hooks/useBreakpoints";

export default function Projects() {
  const { isLg } = useBreakpoints();
  return (
    <section id="projects" className="text-content">
      <motion.h2
        variants={fade()}
        initial="hidden"
        whileInView="visible"
        className="text-4xl font-semibold"
      >
        Things I've built
      </motion.h2>
      <motion.div
        variants={fade({ withStagger: true })}
        initial="hidden"
        whileInView="visible"
        {...(isLg && { viewport: viewPortValues })}
        className="flex flex-col md:flex-row flex-wrap md:justify-between gap-4 md:gap-0 mt-10"
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} data={p} />
        ))}
      </motion.div>
    </section>
  );
}
