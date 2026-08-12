import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Reveal from "@/components/common/Reveal";
import SectionContainer from "@/components/ui/SectionContainer";
import Label from "@/components/ui/Label";
import Button from "@/components/ui/Button";
import { contactSchema, type ContactFormData } from "@/lib/contactSchema";

import { contactFormContent } from "./content";

export default function ContactForm() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      website: "",
      projectType: "",
      timeline: "",
      budget: "",
      details: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
  try {
    const response = await fetch("https://formspree.io/f/xljrngjd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...data,
        _replyto: data.email,
      }),
    });

      const result: unknown = await response.json().catch(() => null);

      if (!response.ok) {
        const message =
          typeof result === "object" && result !== null && "error" in result &&
          typeof result.error === "string"
            ? result.error
            : "We couldn't send your request. Please try again.";
        setError("root", { message });
        return;
      }

      reset();
    } catch {
      setError("root", {
        message: "We couldn't reach the server. Please check your connection and try again.",
      });
    }
  }

  return (
    <section className="bg-background pb-32">
      <SectionContainer>
        <Reveal>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="mx-auto max-w-4xl rounded-3xl border border-border bg-white/[0.02] px-10 py-10 md:px-14 md:py-12"
          >

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

              {/* Name + Email */}
              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <Label htmlFor="name">{contactFormContent.fields.name}</Label>

                  <Input
                    id="name"
                    placeholder={contactFormContent.placeholders.name}
                    aria-invalid={Boolean(errors.name)}
                    {...register("name")}
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>}
                </div>

                <div>
                  <Label htmlFor="email">{contactFormContent.fields.email}</Label>

                  <Input
                    id="email"
                    type="email"
                    placeholder={contactFormContent.placeholders.email}
                    aria-invalid={Boolean(errors.email)}
                    {...register("email")}
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>}
                </div>

                {/* Company + Website */}
                <div>
                  <Label htmlFor="company">{contactFormContent.fields.company}</Label>

                  <Input
                    id="company"
                    placeholder={contactFormContent.placeholders.company}
                    aria-invalid={Boolean(errors.company)}
                    {...register("company")}
                  />
                  {errors.company && <p className="mt-2 text-sm text-red-400">{errors.company.message}</p>}
                </div>

                <div>
                  <Label htmlFor="website">{contactFormContent.fields.website}</Label>

                  <Input
                    id="website"
                    type="url"
                    placeholder={contactFormContent.placeholders.website}
                    aria-invalid={Boolean(errors.website)}
                    {...register("website")}
                  />
                  {errors.website && <p className="mt-2 text-sm text-red-400">{errors.website.message}</p>}
                </div>

                {/* Project Type + Timeline */}
                <div>
                  <Label>{contactFormContent.fields.projectType}</Label>

                  <Controller
                    control={control}
                    name="projectType"
                    render={({ field }) => (
                      <Select placeholder="Select project type" options={contactFormContent.options.projectType} value={field.value} onChange={field.onChange} />
                    )}
                  />
                  {errors.projectType && <p className="mt-2 text-sm text-red-400">{errors.projectType.message}</p>}
                </div>

                <div>
                  <Label>{contactFormContent.fields.timeline}</Label>

                  <Controller
                    control={control}
                    name="timeline"
                    render={({ field }) => (
                      <Select placeholder="Select timeline" options={contactFormContent.options.timeline} value={field.value} onChange={field.onChange} />
                    )}
                  />
                  {errors.timeline && <p className="mt-2 text-sm text-red-400">{errors.timeline.message}</p>}
                </div>

              </div>

              {/* Budget */}
              <div className="mt-6">
                <Label>{contactFormContent.fields.budget}</Label>

                <Controller
                  control={control}
                  name="budget"
                  render={({ field }) => (
                    <Select placeholder="Select budget" options={contactFormContent.options.budget} value={field.value} onChange={field.onChange} />
                  )}
                />
                {errors.budget && <p className="mt-2 text-sm text-red-400">{errors.budget.message}</p>}
              </div>

              {/* Project Details — в самом низу */}
              <div className="mt-8">
                <Label htmlFor="details">{contactFormContent.fields.details}</Label>

                <Textarea
                  id="details"
                  placeholder={contactFormContent.placeholders.details}
                  aria-invalid={Boolean(errors.details)}
                  {...register("details")}
                />
                {errors.details && <p className="mt-2 text-sm text-red-400">{errors.details.message}</p>}
              </div>

              {errors.root && <p role="alert" className="mt-6 text-sm text-red-400">{errors.root.message}</p>}
              {isSubmitSuccessful && <p role="status" className="mt-6 text-sm text-emerald-400">Thank you — your request has been sent.</p>}

              <Button type="submit" withArrow disabled={isSubmitting} className="mt-8 w-full justify-center">
                {isSubmitting ? "Sending..." : contactFormContent.button}
              </Button>
            </div>
          </form>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
