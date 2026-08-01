import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Reveal from "@/components/common/Reveal";
import SectionContainer from "@/components/ui/SectionContainer";
import Label from "@/components/ui/Label";

import { contactFormContent } from "./content";

export default function ContactForm() {
  return (
    <section className="bg-background pb-32">
      <SectionContainer>
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-[32px] border border-border bg-card px-10 py-10 md:px-12 md:py-12">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#4F8EF7]">
              {contactFormContent.badge}
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-primary-text">
              {contactFormContent.title}
            </h2>

            <p className="mt-5 max-w-xl text-secondary-text leading-7">
              {contactFormContent.description}
            </p>

            <div className="mt-12 space-y-8">
  <div>
    <Label>{contactFormContent.fields.name}</Label>

    <Input
      placeholder={contactFormContent.placeholders.name}
    />
  </div>

  <div>
    <Label>{contactFormContent.fields.email}</Label>

    <Input
      type="email"
      placeholder={contactFormContent.placeholders.email}
    />
  </div>

  <div>
    <Label>{contactFormContent.fields.company}</Label>

    <Input
      placeholder={contactFormContent.placeholders.company}
    />
  </div>

  <div>
    <Label>{contactFormContent.fields.budget}</Label>

    <Input
      placeholder={contactFormContent.placeholders.budget}
    />
  </div>

  <div>
    <Label>{contactFormContent.fields.details}</Label>

    <Textarea
      placeholder={contactFormContent.placeholders.details}
    />
  </div>

  <Button withArrow>
    {contactFormContent.button}
  </Button>
</div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}