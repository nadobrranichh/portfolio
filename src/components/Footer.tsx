import { Link } from "react-router";
import { contact } from "../lists/contact";
import { LuDownload } from "react-icons/lu";
import { motion } from "motion/react";
import { fade, viewPortValues } from "../motion/variants";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer
      id="contact"
      className="text-content text-center flex flex-col items-center gap-4 px-4"
    >
      <motion.h2
        variants={fade()}
        initial="hidden"
        whileInView="visible"
        viewport={viewPortValues}
        className="text-4xl font-semibold"
      >
        {t("contact.title")}
      </motion.h2>
      <motion.p
        variants={fade()}
        initial="hidden"
        whileInView="visible"
        viewport={viewPortValues}
        className="text-slate-300"
      >
        {t("contact.subtitle")}
      </motion.p>

      <motion.div
        variants={fade({ withStagger: true })}
        initial="hidden"
        whileInView="visible"
        className="flex justify-center gap-5"
      >
        {contact.map((item) => (
          <motion.div key={item.title} variants={fade()}>
            <Link
              target="_blank"
              key={item.title}
              to={item.url}
              className="group flex w-fit h-12 px-4 items-center overflow-hidden rounded-full border border-content"
            >
              <item.icon className="rotate-360 transition-all duration-400 group-hover:rotate-0 group-hover:mr-2" />
              <div className="grid grid-cols-[0fr] transition-all duration-400 group-hover:grid-cols-[1fr]">
                <p className="overflow-hidden text-nowrap">
                  {item.title}{" "}
                  <span className="text-slate-400 opacity-85">{item.user}</span>
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fade()} initial="hidden" whileInView="visible">
        <Link
          to=""
          className="rounded-xl flex items-center gap-2 px-3 py-2 border border-content transition-all hover:scale-105"
        >
          <LuDownload />
          {t("contact.downloadResume")}
        </Link>
      </motion.div>
      <p className="mt-30 mb-10 w-full opacity-85">
        &copy; {t("hero.title")}, {new Date().getFullYear()}
      </p>
    </footer>
  );
}
