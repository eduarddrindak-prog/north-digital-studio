import { motion } from "framer-motion";
import SectionContainer from "@/components/ui/SectionContainer";

import PortfolioVisual from "./PortfolioVisual";
import PortfolioCard from "./PortfolioCard";

import {
  portfolioIntro,
  portfolioProjects,
} from "./content";


export default function Portfolio() {

  return (
    <section 
    id="portfolio"
    className="py-section bg-background text-primary-text">

      <SectionContainer className="flex flex-col gap-16 lg:gap-20">


        {/* Introduction */}

        <motion.header

          initial={{
            opacity:0,
            y:20,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          viewport={{
            once:true,
            margin:"-80px",
          }}

          transition={{
            duration:0.5,
          }}

          className="max-w-2xl"

        >

          <h2 className="
            text-4xl
            font-semibold
            leading-tight
          ">
            {portfolioIntro.heading}
          </h2>


          <p className="
            mt-6
            text-lg
            text-secondary-text
            leading-relaxed
          ">
            {portfolioIntro.description}
          </p>


        </motion.header>



        {/* Main visual */}

        <PortfolioVisual />



        {/* Projects */}

        <div className="
          grid
          md:grid-cols-3
          gap-10
        ">


          {portfolioProjects.map((project,index)=>(

            <PortfolioCard

              key={project.title}

              {...project}

              index={index}

            />

          ))}


        </div>


      </SectionContainer>


    </section>
  );
}