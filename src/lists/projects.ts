import ApolloniaImg from "../assets/apollonia.png";
import ScribbbleImg from "../assets/scribbble.png";
import DriftBoardImg from "../assets/driftboard.png";
import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Apollonia",
    description:
      "A web application for a teeth whitening business with an online shop and checkout functionality.",
    url: "https://apollonia-new-ui.netlify.app",
    githubUrl: "https://github.com/nadobrranichh/apollonia",
    image: ApolloniaImg,
  },
  {
    title: "DriftBoard",
    description:
      "A Trello-inspired task management application with team collaboration and real-time updates.",
    url: "https://driftboard-v1.vercel.app",
    githubUrl: "https://github.com/nadobrranichh/driftboard",
    image: DriftBoardImg,
  },
  {
    title: "Scribbble",
    description:
      "A Paint-inspired drawing web application that allows multiple users to draw together on a shared canvas.",
    url: "https://scribbble-draw.netlify.app",
    githubUrl: "https://github.com/nadobrranichh/scribbble",
    image: ScribbbleImg,
  },
];
