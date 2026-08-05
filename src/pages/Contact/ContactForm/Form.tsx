
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
          <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card px-10 py-10 md:px-14 md:py-12">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#4F8EF7]">
              {contactFormContent.badge}
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-primary-text">
              {contactFormContent.title}
            </h2>

            <p className="mt-5 max-w-xl text-secondary-text leading-7">
              {contactFormContent.description}
            </p>

            <div className="mt-12">
  <div className="grid gap-6 md:grid-cols-2">

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

</div>

  <div className="mt-8">
    <Label>{contactFormContent.fields.details}</Label>

    <Textarea
      placeholder={contactFormContent.placeholders.details}
    />
  </div>
</div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}