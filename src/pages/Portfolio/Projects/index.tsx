import Reveal from "@/components/common/Reveal";
import SectionContainer from "@/components/ui/SectionContainer";

import ProjectCard from "./ProjectCard";
import { portfolioProjects } from "../projectData";

export default function Projects() {
  return (
    <section id="concept-projects" className="scroll-mt-24 bg-background py-20 md:py-24">
      <SectionContainer>
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] notranslate text-[#4F8EF7]">
                Concept projects
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-primary-text md:text-6xl">
                Three directions, one clear approach.
              </h2>
            </div>
            <p className="max-w-sm text-secondary-text md:text-right">
              These projects are visual concepts created to explore different businesses, audiences and digital experiences.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 md:mt-14">
          {portfolioProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

