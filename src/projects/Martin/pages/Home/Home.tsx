import { useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/North Base/ui/Button";
import { Field, Input, Textarea } from "@/components/North Base/ui/Field";
import { Link } from "@/components/North Base/ui/Link";
import { Select } from "@/components/North Base/ui/Select";

import "./Home.css";

const services = [
  { number: "01", title: "Small repairs", text: "Handles to replace, doors to adjust, shelves to fix and everyday problems to sort out." },
  { number: "02", title: "Furniture assembly", text: "Furniture assembly, storage installation and adjustments after a move." },
  { number: "03", title: "Home maintenance", text: "Small jobs that keep your home practical, functional and well maintained." },
];

const steps = [
  ["01", "You describe the job", "A few words about the problem, the home and what needs doing. A photo can help us understand."],
  ["02", "We clarify the details", "We discuss the task, the constraints and the information needed to assess the work."],
  ["03", "We agree the scope", "The scope, price and practical details are confirmed before any work starts."],
  ["04", "The work gets done", "Once the appointment is agreed, the job is completed within the defined scope."],
] as const;

const serviceOptions = services.map((service) => ({ value: service.title, label: service.title })).concat({ value: "Other request", label: "Other request" });

export default function MartinHome() {
  const [service, setService] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Record<string, string> = {};
    if (!String(form.get("name") ?? "").trim()) nextErrors.name = "Please enter your name.";
    if (!String(form.get("email") ?? "").match(/^\S+@\S+\.\S+$/)) nextErrors.email = "Please enter a valid email address.";
    if (!service) nextErrors.service = "Choose a service category.";
    if (!String(form.get("message") ?? "").trim()) nextErrors.message = "Please describe the job.";
    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  };

  return (
    <>
      <section className="martin-hero" aria-labelledby="martin-hero-title">
        <div className="martin-hero__inner">
          <div className="martin-hero__copy">
            <p className="eyebrow">INDEPENDENT HANDYMAN · PARIS</p>
            <h1 id="martin-hero-title">Small repairs,<br />done properly.</h1>
            <p className="martin-lead">Small repairs, furniture assembly and home maintenance in Paris. One clear point of contact and a price agreed before the work begins.</p>
            <div className="martin-hero__actions">
              <Button href="#contact" variant="primary" size="lg" withArrow>Request a visit</Button>
              <Link href="#services" variant="default" size="md">See the services <ArrowDown size={16} aria-hidden="true" /></Link>
            </div>
            <p className="martin-hero__note"><Check size={15} aria-hidden="true" /> Direct communication. Clear scope. No surprises.</p>
          </div>
          <div className="martin-photo martin-photo--hero" role="img" aria-label="Artisan au travail dans un appartement parisien.">
            <span>ATELIER MARTIN · PARIS</span>
            <strong>WORK<br />IN<br />PROGRESS</strong>
          </div>
        </div>
      </section>

      <section className="martin-services martin-section" id="services" aria-labelledby="services-title">
        <div className="martin-section__intro">
          <p className="eyebrow">THE SERVICES</p>
          <h2 id="services-title">The everyday jobs.</h2>
          <p>A repair to make, a piece of furniture to assemble or a few adjustments to sort out? Tell us what you need and we will work out what is possible.</p>
          <Link href="#contact" variant="accent" size="md" withArrow>Talk about my project</Link>
        </div>
        <div className="martin-service-list">
          {services.map((item) => <a className="martin-service-row" href="#contact" key={item.number} onClick={() => setService(item.title)}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowRight size={20} aria-hidden="true" /></a>)}
        </div>
      </section>

      <section className="martin-process" id="process" aria-labelledby="process-title">
        <div className="martin-process__intro">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2 id="process-title">Simple from the first message to the last screw.</h2>
          <p>You describe the job, we clarify the details and agree the scope before any work begins.</p>
        </div>
        <div className="martin-process__grid">{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="martin-process__cta"><span>A question before you get started?</span><Button href="#contact" variant="secondary" size="md" withArrow>Describe my job</Button></div>
      </section>

      <section className="martin-about" id="about" aria-labelledby="about-title">
        <div className="martin-about__copy"><p className="eyebrow">ABOUT THE PERSON</p><h2 id="about-title">One point of contact, from start to finish.</h2><p>I’m Thomas, an independent handyman focused on the small jobs that keep a home working well.</p><p>My approach is simple: understand what you need, explain what is possible and agree clearly on the work before it starts.</p><p>No complicated process and no vague promises. You speak directly with the person handling your request.</p><div className="martin-about__signature"><strong>Thomas Martin</strong><span>Independent handyman · Paris</span></div><Link href="#contact" variant="default" size="md" withArrow>Talk about my job</Link></div>
        <div className="martin-photo martin-photo--about" role="img" aria-label="Documentary portrait of a handyman in his workspace."><span>THOMAS MARTIN</span></div>
      </section>

      <section className="martin-contact" id="contact" aria-labelledby="contact-title">
        <div className="martin-contact__intro"><p className="eyebrow">YOUR REQUEST</p><h2 id="contact-title">A small job to do? Let’s talk.</h2><p>Tell us what you need. A few details are enough to get started and work out the next step together.</p><p className="martin-contact__small">Not sure how to describe the problem? Explain it in your own words.</p></div>
        <form className="martin-form" onSubmit={handleSubmit} noValidate>
          {submitted ? <div className="martin-form__success"><Check size={22} aria-hidden="true" /><h3>Thank you for exploring this project.</h3><p>We hope you enjoyed discovering Atelier Martin. You can return to the main site or explore more work from North Digital Studio.</p><div className="martin-form__success-actions"><Button href="/" variant="primary" size="md" withArrow>Back to the main site</Button><Link href="/portfolio" variant="default" size="md" withArrow>View the portfolio</Link></div></div> : <>
            <h3>Describe your job</h3>
            <div className="martin-form__grid"><Field label="Name" required error={errors.name}><Input name="name" autoComplete="name" placeholder="Your name" /></Field><Field label="Email" required error={errors.email}><Input name="email" type="email" autoComplete="email" placeholder="you@example.com" /></Field></div>
            <Field label="Service category" required error={errors.service}><Select name="service" value={service} onValueChange={setService} options={serviceOptions} placeholder="Choose a category" /></Field>
            <Field label="Postcode"><Input name="postcode" inputMode="numeric" placeholder="75000" /></Field>
            <Field label="Describe your job" required error={errors.message}><Textarea name="message" placeholder="What needs repairing, assembling or adjusting?" rows={5} /></Field>
            <Button type="submit" variant="primary" size="lg" withArrow>Send my request</Button>
            <small>Your request is not binding. The practical details of the work will be agreed together.</small>
          </>}
        </form>
      </section>
    </>
  );
}
