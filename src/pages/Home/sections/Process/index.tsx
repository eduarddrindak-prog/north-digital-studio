import { motion } from "framer-motion";
import SectionContainer from "@/components/ui/SectionContainer";

import ProcessVisualization from "./ProcessVisualization";
import ProcessStep from "./ProcessStep";

import { processIntro, processSteps } from "./content";


export default function Process() {
  return (
    <section 
    id="process"
    className="py-section bg-background text-primary-text">

      <SectionContainer className="flex flex-col gap-16 lg:gap-20">


        {/* Introduction */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.5,
          }}
          className="max-w-2xl"
        >

          <h2 className="
            text-4xl
            font-semibold
            leading-tight
          ">
            {processIntro.heading}
          </h2>


          <p className="
            mt-6
            text-lg
            text-secondary-text
            leading-relaxed
          ">
            {processIntro.description}
          </p>

        </motion.header>



        {/* Process visualization */}
        <ProcessVisualization />



        {/* Steps */}
        <div
  className="
    grid
    md:grid-cols-2
    lg:grid-cols-4
    gap-16
    relative
  "
>

          {processSteps.map((step, index) => (

            <ProcessStep
              key={step.number}
              {...step}
              index={index}
            />

          ))}

        </div>


      </SectionContainer>

    </section>
  );
}