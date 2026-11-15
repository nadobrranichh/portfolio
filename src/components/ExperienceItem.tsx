import { motion } from "motion/react";
import { fade, viewPortValues } from "../motion/variants";
import type { ExperienceItemType, ExperienceValues } from "../types";
import { useTranslation } from "react-i18next";

export default function ExperienceItem({ item }: { item: ExperienceItemType }) {
  const { t } = useTranslation();
  const values = t(item.i18nKey, { returnObjects: true }) as ExperienceValues;
  return (
    <motion.div
      variants={fade()}
      initial="hidden"
      whileInView="visible"
      viewport={viewPortValues}
      key={t(`${item.i18nKey}`)}
      className="grid grid-cols-2 lg:flex lg:items-center gap-5 lg:gap-10 p-6 lg:p-10 transition-all hover:bg-content/5"
    >
      <div className="text-slate-400 text-sm">
        {values.time.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </div>
      <div className="lg:w-60 text-end lg:text-start">
        <p className="font-semibold">{values.title}</p>
        <p className="text-slate-300 text-sm">
          {values.type} &bull; {item.company}
        </p>
      </div>
      <div className="col-span-2">
        {values.description.map((h) => (
          <p key={h}>&bull; {h}</p>
        ))}
      </div>
    </motion.div>
  );
}
