import ApolloniaImg from "../assets/apollonia.png";
import ScribbbleImg from "../assets/scribbble.png";
import DriftBoardImg from "../assets/driftboard.png";
import type { Project } from "../types";

export const projects: Project[] = [
  {
    i18nKey: "projects.items.0",
    url: "https://apollonia-new-ui.netlify.app",
    githubUrl: "https://github.com/nadobrranichh/apollonia",
    image: ApolloniaImg,
  },
  {
    i18nKey: "projects.items.1",
    url: "https://driftboard-v1.vercel.app",
    githubUrl: "https://github.com/nadobrranichh/driftboard",
    image: DriftBoardImg,
  },
  {
    i18nKey: "projects.items.2",
    url: "https://scribbble-draw.netlify.app",
    githubUrl: "https://github.com/nadobrranichh/scribbble",
    image: ScribbbleImg,
  },
];
