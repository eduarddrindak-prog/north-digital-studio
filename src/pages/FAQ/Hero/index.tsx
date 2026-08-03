import Reveal from "@/components/common/Reveal";
import SectionContainer from "@/components/ui/SectionContainer";

import heroContent from "./content";

export default function Hero() {
  return (
    <section className="bg-background pt-20 pb-10">
      <SectionContainer>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#4F8EF7]">
              {heroContent.badge}
            </p>

            <h1 className="mx-auto mt-6 max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight text-primary-text md:text-7xl">
              {heroContent.title}
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-secondary-text">
              {heroContent.description}
            </p>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}