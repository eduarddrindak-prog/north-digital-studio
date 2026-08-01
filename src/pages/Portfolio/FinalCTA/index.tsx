import Button from "@/components/ui/Button";
import Reveal from "@/components/common/Reveal";
import SectionContainer from "@/components/ui/SectionContainer";

import { ctaContent } from "./content";

export default function FinalCTA() {
  return (
    <section className="py-40 bg-background">
      <SectionContainer>
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#4F8EF7]">
              Start your project
            </p>

            <h2 className="mt-8 text-5xl font-semibold leading-[1.1] tracking-tight text-primary-text md:text-7xl">
              {ctaContent.title}
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-secondary-text">
              {ctaContent.description}
            </p>

            <div className="mt-14">
              <Button
                href={ctaContent.button.href}
                withArrow
              >
                {ctaContent.button.label}
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-24 flex items-center">
            <div className="h-px flex-1 bg-border" />

            <span className="px-6 text-xs uppercase tracking-[0.28em] text-secondary-text">
              North Digital Studio
            </span>

            <div className="h-px flex-1 bg-border" />
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}