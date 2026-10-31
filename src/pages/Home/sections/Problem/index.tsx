import { motion, useReducedMotion } from "framer-motion";
import SectionContainer from "@/components/ui/SectionContainer";
import { problemIntro, problemItems } from "./content";
import ProblemItem from "./ProblemItem";
import ProblemVisualization from "./ProblemVisualization";

export default function Problem() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-background text-primary-text py-section">
      <SectionContainer className="flex flex-col gap-10 md:gap-16 lg:gap-20">
        <motion.header
          className="max-w-2xl"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] notranslate text-[#4F8EF7]">
  Problem
</p>
          <h2 className="text-2xl font-semibold md:text-3xl">{problemIntro.heading}</h2>

          <p className="mt-3 text-base leading-relaxed text-secondary-text md:mt-4 md:text-lg">
            {problemIntro.description}
          </p>
        </motion.header>

        <ProblemVisualization />

        <ol className="grid list-none gap-6 md:grid-cols-3 md:gap-component">
          {problemItems.map((item, index) => (
            <ProblemItem
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
              isLast={index === problemItems.length - 1}
            />
          ))}
        </ol>
      </SectionContainer>
    </section>
  );
}
