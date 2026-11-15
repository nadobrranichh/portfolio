import { motion } from "motion/react";
import { fade } from "../../motion/variants";
import SelfieImg from "../../assets/selfie.jpg";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section id="hero">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <motion.div
          variants={fade({ withStagger: true, xStart: -40, yStart: 0 })}
          initial="hidden"
          animate="visible"
          className="text-content font-bold my-auto text-center md:text-start flex flex-col gap-3"
        >
          <motion.p variants={fade({ xStart: -40, yStart: 0 })}>
            {t("hero.subtitle1")}
          </motion.p>
          <motion.h2
            variants={fade({ xStart: -40, yStart: 0 })}
            className="text-5xl"
          >
            {t("hero.title")}
          </motion.h2>
          <motion.p
            variants={fade({ xStart: -40, yStart: 0 })}
            className="text-xl"
          >
            {t("hero.subtitle2")}
          </motion.p>
        </motion.div>

        <motion.img
          variants={fade({ xStart: 40, yStart: 0 })}
          initial="hidden"
          animate="visible"
          src={SelfieImg}
          className="object-cover rounded-full size-60"
        />
      </div>

      <p className="text-content text-center mt-10">{t("hero.description")}</p>
    </section>
  );
}
