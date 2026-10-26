import Reveal from "@/components/common/Reveal";
import SectionContainer from "@/components/ui/SectionContainer";

import PrincipleCard from "./PrincipleCard";
import { principles, sectionContent } from "./content";

export default function Principles() {
  return (
    <section className="bg-background py-24 md:py-28">
      <SectionContainer>
        <div className="mb-12 h-px bg-border/70 md:mb-16" />

        <Reveal>
  <div className="mx-auto max-w-3xl text-center">
    <p className="text-[11px] uppercase tracking-[0.28em] notranslate text-[#4F8EF7]">
      {sectionContent.badge}
    </p>

    <h2 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-primary-text md:text-6xl">
      {sectionContent.title}
    </h2>

    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-secondary-text">
      {sectionContent.description}
    </p>
  </div>
</Reveal>

        <div className="mt-20 grid gap-8 lg:grid-cols-2 md:mt-24">
          {principles.map((principle, index) => (
            <PrincipleCard
              key={principle.number}
              {...principle}
              offset={index % 2 === 1}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
