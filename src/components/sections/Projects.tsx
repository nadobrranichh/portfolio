import { projects } from "../../lists/projects";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="text-content">
      <h2 className="text-4xl font-semibold">Things I've built</h2>
      <div className="flex flex-col md:flex-row flex-wrap md:justify-between gap-4 md:gap-0 mt-10">
        {projects.map((p) => (
          <ProjectCard key={p.title} data={p} />
        ))}
      </div>
    </section>
  );
}
