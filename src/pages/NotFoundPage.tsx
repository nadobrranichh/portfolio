import { motion } from "motion/react";
import { fade } from "../motion/variants";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <motion.main
      variants={fade({ withStagger: true })}
      initial="hidden"
      whileInView="visible"
      className="w-9/10 self-center flex flex-col items-center gap-3 text-content pt-30 pb-50"
    >
      <motion.h2
        variants={fade()}
        className="text-4xl font-semibold text-center"
      >
        {t("notFound.title")}
      </motion.h2>
      <motion.div variants={fade()}>
        <Link
          to="/"
          className="rounded-xl flex items-center gap-2 px-3 py-2 border border-content transition-all hover:scale-105"
        >
          {t("notFound.btnText")}
        </Link>
      </motion.div>
    </motion.main>
  );
}
