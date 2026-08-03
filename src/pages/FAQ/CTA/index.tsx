import Reveal from "@/components/common/Reveal";
import SectionContainer from "@/components/ui/SectionContainer";
import Button from "@/components/ui/Button";

import ctaContent from "./content";

export default function CTA() {
  return (
    <section className="bg-background py-24">
      <SectionContainer>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-5xl font-semibold tracking-tight text-primary-text md:text-6xl">
              {ctaContent.title}
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-secondary-text">
              {ctaContent.description}
            </p>

            <Button
              href={ctaContent.button.href}
              withArrow
              className="mt-10"
            >
              {ctaContent.button.label}
            </Button>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}