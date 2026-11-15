import { FaGithub } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { containerStyle } from "../constants";
import type { Project } from "../types";
import { Link } from "react-router";
import { motion } from "motion/react";
import { fade, viewPortValues } from "../motion/variants";
import useBreakpoints from "../hooks/useBreakpoints";
import { useTranslation } from "react-i18next";

export default function ProjectCard({ data }: { data: Project }) {
  const { isLg } = useBreakpoints();
  const { t } = useTranslation();
  const translations = t(data.i18nKey, { returnObjects: true }) as {
    title: string;
    description: string;
  };
  return (
    <motion.div
      variants={fade()}
      {...(!isLg && {
        initial: "hidden",
        whileInView: "visible",
        viewport: viewPortValues,
      })}
      className={`border-content/15 bg-content/10 rounded-4xl overflow-hidden flex flex-col transition hover:scale-102 max-w-105`}
    >
      <img src={data.image} className="self-center h-60 object-cover" />
      <div className="py-4 px-6 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight mb-2">
            {translations.title}
          </h2>
          <p className="text-content/70 leading-relaxed md:line-clamp-3">
            {translations.description}
          </p>
        </div>

        <div className="flex gap-3 mt-4">
          <Link
            to={data.url}
            target="_blank"
            className={`${containerStyle} group px-4! py-2! gap-1.5! transition hover:scale-105 text-content! bg-transparent!`}
          >
            {t("projects.open")}
            <LuArrowUpRight className="size-4 self-center transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            to={data.githubUrl}
            target="_blank"
            className={`${containerStyle} px-4! py-2! gap-1.5! transition bg-content/5! hover:scale-105 text-content!`}
          >
            <FaGithub className="size-4 self-center" />
            GitHub
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
