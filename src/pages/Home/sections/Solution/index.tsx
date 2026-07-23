import { motion } from "framer-motion";
import SectionContainer from "@/components/ui/SectionContainer";
import SolutionVisualization from "./SolutionVisualization";
import SolutionPrinciple from "./SolutionPrinciple";
import { solutionPrinciples } from "./content";

export default function Solution() {
  return (
    <section className="py-section bg-background text-primary-text">

      <SectionContainer className="flex flex-col gap-16 lg:gap-20">

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >

          <h2 className="text-4xl font-semibold">
            Websites designed around your business.
          </h2>

          <p className="mt-6 text-lg text-secondary-text leading-relaxed">
            We transform confusing digital experiences into clear,
            professional websites that help customers understand,
            trust and contact your business.
          </p>

        </motion.header>


        <SolutionVisualization />


        <div className="grid md:grid-cols-3 gap-10">

          {solutionPrinciples.map((item, index) => (
            <SolutionPrinciple
              key={item.title}
              {...item}
              index={index}
            />
          ))}

        </div>


      </SectionContainer>

    </section>
  );
}