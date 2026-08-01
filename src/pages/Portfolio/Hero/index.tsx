import Button from "@/components/ui/Button";
import Reveal from "@/components/common/Reveal";
import SectionContainer from "@/components/ui/SectionContainer";

import { heroContent } from "./content";

export default function Hero() {
  return (
    <section className="bg-background pt-28 pb-24">
      <SectionContainer>
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#4F8EF7]">
              {heroContent.badge}
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-primary-text md:text-7xl">
              {heroContent.title}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-secondary-text">
              {heroContent.description}
            </p>

            <Button
              href={heroContent.primaryButton.href}
              withArrow
              className="mt-10"
            >
              {heroContent.primaryButton.label}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-20 max-w-5xl">
            <div className="h-px bg-border" />

            <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8">
              {heroContent.statement.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-6"
                >
                  <span className="text-3xl font-medium tracking-tight text-secondary-text md:text-4xl">
                    {item}
                  </span>

                  {index !== heroContent.statement.length - 1 && (
                    <div className="h-1.5 w-1.5 rounded-full bg-[#4F8EF7]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}