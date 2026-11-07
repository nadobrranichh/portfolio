import { Link } from "react-router";
import { contact } from "../lists/contact";
import { LuDownload } from "react-icons/lu";
import { motion } from "motion/react";
import { fade } from "../motion/variants";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="text-content text-center flex flex-col items-center gap-4 px-4"
    >
      <motion.h2
        variants={fade()}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        className="text-4xl font-semibold"
      >
        Let's get to know each other
      </motion.h2>
      <motion.p
        variants={fade()}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        className="text-slate-300"
      >
        I'm looking for my next role, remote or on-site in Lviv, Ukraine.
        <br />
        Whether it’s an open position, a project, or just a question, my inbox
        is open.
      </motion.p>

      <motion.div
        variants={fade({ withStagger: true })}
        initial="hidden"
        whileInView="visible"
        className="flex justify-center gap-5"
      >
        {contact.map((item) => (
          <motion.div variants={fade()}>
            <Link
              target="_blank"
              key={item.title}
              to={item.url}
              className="group flex w-fit h-12 px-4 items-center overflow-hidden rounded-full border border-content"
            >
              <item.icon className="rotate-360 transition-all duration-400 group-hover:rotate-0 group-hover:mr-2" />
              <div className="grid grid-cols-[0fr] transition-all duration-400 group-hover:grid-cols-[1fr]">
                <p className="overflow-hidden text-nowrap">
                  {item.title}
                  <span className="text-slate-400 opacity-85">
                    {" "}
                    {item.user}
                  </span>
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
          Download resume
        </Link>
      </motion.div>
      <p className="mt-30 mb-10 w-full opacity-85">
        @ Nazar Shchepaniak, {new Date().getFullYear()}
      </p>
    </footer>
  );
}
