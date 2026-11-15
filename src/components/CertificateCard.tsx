import { Link, type To } from "react-router";
import type { CertificateType } from "../types";
import { motion } from "motion/react";
import { fade, viewPortValues } from "../motion/variants";
import useBreakpoints from "../hooks/useBreakpoints";
import { useTranslation } from "react-i18next";

export default function CertificateCard({ item }: { item: CertificateType }) {
  const { isLg } = useBreakpoints();
  const { t } = useTranslation();

  return (
    <motion.li
      variants={fade()}
      {...(!isLg && {
        initial: "hidden",
        whileInView: "visible",
        viewport: viewPortValues,
      })}
    >
      <Link
        to={(item.url as To) || ""}
        target="_blank"
        className={`group block h-full rounded-lg border border-slate-700 p-4 focus-visible:outline-2 focus-visible:outline-offset-2 transition-all hover:scale-102 ${item.url ? "hover:border-completion" : "hover:border-accent"} hover:bg-content/5`}
      >
        <h4
          className={`font-medium text-content ${item.url ? "group-hover:text-completion" : "group-hover:text-accent"}`}
        >
          {item.title}
        </h4>
        <p className="mt-1 text-sm text-slate-400">
          {item.platform}
          {item.year && `, ${item.year}`}
        </p>
        {item.author && (
          <p className="mt-1 text-sm text-slate-400">
            {t("education.courses.by")}: {item.author}
          </p>
        )}
        {item.url && (
          <span className="mt-3 inline-block text-sm text-completion underline-offset-4 group-hover:underline">
            {t("education.courses.done.see")}
          </span>
        )}
      </Link>
    </motion.li>
  );
}
