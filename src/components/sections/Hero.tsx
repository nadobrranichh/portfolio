import { motion } from "motion/react";
import { fade } from "../../motion/variants";
import SelfieImg from "../../assets/selfie.jpg";

export default function Hero() {
  return (
    <section id="hero" className="">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <motion.div
          variants={fade({ withStagger: true, xStart: -40, yStart: 0 })}
          initial="hidden"
          animate="visible"
          className="text-content font-bold my-auto text-center md:text-start flex flex-col gap-3"
        >
          <motion.p variants={fade({ xStart: -40, yStart: 0 })}>
            Hello, I'm
          </motion.p>
          <motion.h2
            variants={fade({ xStart: -40, yStart: 0 })}
            className="text-5xl"
          >
            Nazar Shchepaniak
          </motion.h2>
          <motion.p
            variants={fade({ xStart: -40, yStart: 0 })}
            className="text-xl"
          >
            Full-Stack Developer
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

      <p className="text-content text-center mt-10">
        I'm a Junior Full-Stack Developer who builds web applications from the
        ground up. I enjoy working across the entire development process, from
        creating interfaces to designing APIs and integrating databases. I
        constantly work on improving my skills, explore new technologies and
        build practical projects to strengthen my understanding. I care about
        writing readable, type-safe code, providing good UX, and creating
        reliable systems.
      </p>
    </section>
  );
}
