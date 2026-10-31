import { motion } from "framer-motion";
import SectionContainer from "@/components/ui/SectionContainer";

import ProjectCard from "@/pages/Portfolio/Projects/ProjectCard";

import { portfolioIntro, portfolioProjects } from "./content";


export default function Portfolio() {

  return (
    <section 
    id="portfolio"
    className="py-section bg-background text-primary-text">

      <SectionContainer className="flex flex-col gap-8 md:gap-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#7eacff]">
            Portfolio
          </p>
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            {portfolioIntro.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-secondary-text md:text-lg">
            {portfolioIntro.description}
          </p>
        </motion.header>

        <div className="
          grid
          md:grid-cols-3
          gap-6
        ">


          {portfolioProjects.map((project,index)=>(

            <ProjectCard

              key={project.title}

              project={project}
              index={index}
            />

          ))}


        </div>


      </SectionContainer>


    </section>
  );
}
