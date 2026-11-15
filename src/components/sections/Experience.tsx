import { experience } from "../../lists/experience";
import { motion } from "motion/react";
import { fade, viewPortValues } from "../../motion/variants";

export default function Experience() {
  return (
    <section id="experience">
      <motion.h2
        variants={fade()}
        initial="hidden"
        animate="visible"
        className="text-4xl font-semibold tracking-tight text-content"
      >
        Experience
      </motion.h2>
      <div className="flex flex-col gap-2 border-t border-b border-slate-700 text-content mt-10">
        {experience.map((exp) => (
          <motion.div
            variants={fade()}
            initial="hidden"
            whileInView="visible"
            viewport={viewPortValues}
            key={exp.period}
            className="grid grid-cols-2 lg:flex lg:items-center gap-5 lg:gap-10 p-6 lg:p-10 transition-all hover:bg-content/5"
          >
            <div className="text-slate-400 text-sm">
              {exp.period.includes(",") ? (
                exp.period.split(",").map((t) => <p key={t}>{t}</p>)
              ) : (
                <p>{exp.period}</p>
              )}
            </div>
            <div className="lg:w-60 text-end lg:text-start">
              <p className="font-semibold">{exp.role}</p>
              <p className="text-slate-300 text-sm">
                {exp.type} &bull; {exp.company}
              </p>
            </div>
            <div className="col-span-2">
              {exp.highlights.map((h) => (
                <p key={h}>&bull; {h}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
