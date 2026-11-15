import EducationSection from "../components/sections/Education";
import ExperienceSection from "../components/sections/Experience";
import HeroSection from "../components/sections/Hero";
import ProjectsSection from "../components/sections/Projects";
import TechnologiesSection from "../components/sections/Technologies";

export default function HomePage() {
  return (
    <main className="w-9/10 px-3 sm:w-8/10 sm:px-15 lg:w-7.5/10 lg:px-25 self-center flex flex-col gap-40">
      <HeroSection />
      <TechnologiesSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
