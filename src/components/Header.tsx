import { Link } from "react-router";
import useBreakpoints from "../hooks/useBreakpoints";
import { useState } from "react";
import { containerStyle } from "../constants";
import { FaBars, FaMusic } from "react-icons/fa";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { fade } from "../motion/variants";
import { useTranslation } from "react-i18next";
import UkraineFlagImg from "../assets/flags/flag-uk.webp";
import UKFlagImg from "../assets/flags/flag-en.webp";

export default function Header() {
  const { i18n } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isMd } = useBreakpoints();

  const links = [
    { label: "About", url: "/" },
    { label: "Education", url: "/#education" },
    { label: "Projects", url: "/#projects" },
    { label: "Blog", url: "/blog" },
    { label: "Contact", url: "/#contact" },
  ];

  const flagUrl = i18n.language === "en" ? UKFlagImg : UkraineFlagImg;

  function toggleLanguage() {
    const newLang = i18n.language === "en" ? "uk" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  }

  function toggleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }
  return (
    <header className="my-5 lg:mb-8 px-4 flex justify-between lg:justify-center sticky top-5 flex-wrap gap-5 z-100">
      {isMd && (
        <div className={containerStyle}>
          {links.map(({ label, url }) => (
            <Link key={label} to={url}>
              {label}
            </Link>
          ))}
        </div>
      )}
      <div className="flex gap-5">
        <button className={containerStyle} onClick={toggleLanguage}>
          <img src={flagUrl} className="rounded-full size-6" />
        </button>
        <button className={containerStyle}>
          <FaMusic className="my-auto" />
        </button>
      </div>
      {!isMd && (
        <button className={containerStyle} onClick={toggleSidebar}>
          <FaBars className="my-auto" />
        </button>
      )}

      <AnimatePresence>
        {isSidebarOpen && !isMd && (
          <motion.div
            variants={fade()}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`${containerStyle} flex-col ml-auto absolute right-4 top-18`}
          >
            {links.map(({ label, url }) => (
              <Link
                className="block text-end"
                onClick={toggleSidebar}
                key={label}
                to={url}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
