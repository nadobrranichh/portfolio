import type { ContactItem } from "../types";
import { FaLinkedin, FaGithub, FaTelegram, FaEnvelope } from "react-icons/fa";

export const contact: ContactItem[] = [
  {
    title: "LinkedIn",
    user: "in/nazar-shchepaniak-14906635a",
    url: "https://www.linkedin.com/in/nazar-shchepaniak-14906635a",
    icon: FaLinkedin,
  },
  {
    title: "GitHub",
    user: "nadobrranichh",
    url: "https://github.com/nadobrranichh",
    icon: FaGithub,
  },
  {
    title: "Telegram",
    user: "@nadobrranichh",
    url: "https://t.me/nadobrranichh",
    icon: FaTelegram,
  },
  {
    title: "E-Mail",
    user: "nazar.shchepaniak.work@gmail.com",
    url: "mailto:nazar.shchepaniak.work@gmail.com",
    icon: FaEnvelope,
  },
];
