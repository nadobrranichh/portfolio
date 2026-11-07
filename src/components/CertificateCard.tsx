import { Link, type To } from "react-router";
import type { CertificateType } from "../types";
import { motion } from "motion/react";
import { fade } from "../motion/variants";
import useBreakpoints from "../hooks/useBreakpoints";

export default function CertificateCard({ item }: { item: CertificateType }) {
  const { isLg } = useBreakpoints();

  return (
    <motion.li
      variants={fade()}
      {...(!isLg && {
        initial: "hidden",
        whileInView: "visible",
        viewport: { amount: 0.5, once: true },
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
          <p className="mt-1 text-sm text-slate-400">by: {item.author}</p>
        )}
        {item.url && (
          <span className="mt-3 inline-block text-sm text-completion underline-offset-4 group-hover:underline">
            See certificate
          </span>
        )}
      </Link>
    </motion.li>
  );
}
