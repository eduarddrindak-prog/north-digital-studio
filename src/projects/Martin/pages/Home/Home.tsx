import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check, ChevronDown } from "lucide-react";

import { Button } from "@/components/North Base/ui/Button";
import { Field, Input, Textarea } from "@/components/North Base/ui/Field";
import { Link } from "@/components/North Base/ui/Link";
import { Select } from "@/components/North Base/ui/Select";
import mapImage from "@/projects/Martin/assets/Карта города с выделенным районом 75000.png";
import workshopImage from "@/projects/Martin/assets/Солнечная мастерская у окна.jpg";
import shelfImage from "@/projects/Martin/assets/Установка деревянной полки с уровнем.jpg";

import "./Home.css";

const services = [
  { number: "01", title: "Small repairs", text: "Handles to replace, doors to adjust, shelves to fix and everyday problems to sort out." },
  { number: "02", title: "Furniture assembly", text: "Furniture assembly, storage installation and adjustments after a move." },
  { number: "03", title: "Home maintenance", text: "Small jobs that keep your home practical, functional and well maintained." },
];

const typicalJobs = [
  ["01", "Handles and doors", "Replace a handle or adjust a door that does not close properly."],
  ["02", "Shelves and fixtures", "Install a shelf or secure an item suited to the surface."],
  ["03", "Furniture assembly", "Assemble a piece of furniture and adjust its installation."],
  ["04", "Small adjustments", "Solve a small everyday problem in the home."],
] as const;

const steps = [
  ["01", "You describe the job", "A few words about the problem, the home and what needs doing. A photo can help us understand."],
  ["02", "We clarify the details", "We discuss the task, the constraints and the information needed to assess the work."],
  ["03", "We agree the scope", "The scope, price and practical details are confirmed before any work starts."],
  ["04", "The work gets done", "Once the appointment is agreed, the job is completed within the defined scope."],
] as const;

const pricingPrinciples = [
  ["01", "Describe the job", "Explain the task, the home and any details useful for assessing it."],
  ["02", "Clarify the conditions", "Check the scope and any practical constraints of the work."],
  ["03", "Agree before starting", "The price and practical details are confirmed before work begins."],
] as const;

const faqItems = [
  ["What kind of work can I request?", "You can describe a small repair, furniture assembly or a home adjustment. We will confirm what is possible after reviewing your request."],
  ["Do I need to send a photo?", "It is not required, but a photo can help us understand the job and clarify the details."],
  ["How is the price decided?", "The work and practical details are clarified before we agree the price and begin."],
  ["Can I request several small jobs?", "You can describe several tasks in the same message. We will clarify their scope before agreeing the work."],
  ["How do I know if my home is in the service area?", "Include your postcode in the request so we can check whether the work is possible."],
  ["Can I request specialist work?", "Describe what you need. Work requiring specific qualifications will only be offered when the necessary skills and permissions are confirmed."],
] as const;

const serviceOptions = services.map((service) => ({ value: service.title, label: service.title })).concat({ value: "Other request", label: "Other request" });

export default function MartinHome() {
  const [service, setService] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const thankYouHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (submitted) {
      thankYouHeadingRef.current?.focus();
    }
  }, [submitted]);

  const focusPostcode = () => {
    requestAnimationFrame(() => {
      document.querySelector<HTMLInputElement>('.martin-form input[name="postcode"]')?.focus();
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Record<string, string> = {};

    if (!String(form.get("name") ?? "").trim()) nextErrors.name = "Please enter your name.";
    if (!String(form.get("email") ?? "").match(/^\S+@\S+\.\S+$/)) nextErrors.email = "Please enter a valid email address.";
    if (!service) nextErrors.service = "Choose a category.";
    if (!String(form.get("message") ?? "").trim()) nextErrors.message = "Describe your job.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
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
              <Link href="#services" variant="default" size="md">See the services <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
            <p className="martin-hero__note"><Check size={15} aria-hidden="true" /> Direct communication. Clear scope. No surprises.</p>
          </div>
          <div className="martin-photo martin-photo--hero" role="img" aria-label="A handyman’s workspace in a Paris apartment.">
            <img className="martin-photo__image" src={shelfImage} alt="" />
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

      <section className="martin-jobs" id="typical-jobs" aria-labelledby="jobs-title">
        <div className="martin-jobs__header">
          <div><p className="eyebrow">EXAMPLES OF WORK</p><h2 id="jobs-title">Small jobs, made concrete.</h2></div>
          <p>Practical jobs for the needs that come up every day.</p>
        </div>
        <div className="martin-jobs__grid">
          {typicalJobs.map(([number, title, text]) => <a className="martin-job" href="#contact" key={number} onClick={() => setService(title === "Furniture assembly" ? "Furniture assembly" : title === "Small adjustments" ? "Home maintenance" : "Small repairs")}><span>{number}</span><h3>{title}</h3><p>{text}</p><ArrowRight size={18} aria-hidden="true" /></a>)}
        </div>
        <Link href="#contact" variant="default" size="md" withArrow>Describe my job</Link>
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

      <section className="martin-pricing" id="pricing" aria-labelledby="pricing-title">
        <div className="martin-pricing__heading"><p className="eyebrow">BEFORE THE VISIT</p><h2 id="pricing-title">A clear scope before we start.</h2><p>Every request is different. We clarify the details before agreeing the scope of the work.</p></div>
        <div className="martin-pricing__sequence">{pricingPrinciples.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="martin-about" id="about" aria-labelledby="about-title">
        <div className="martin-about__copy"><p className="eyebrow">ABOUT THE PERSON</p><h2 id="about-title">One point of contact, from start to finish.</h2><p>I’m Thomas, an independent handyman focused on the small jobs that keep a home working well.</p><p>I care about practical solutions, careful finishing and the small details that make a home feel right.</p><p>You speak directly with the person handling your request, without a complicated process or vague promises.</p><div className="martin-about__signature"><strong>Thomas Martin</strong><span>Independent handyman · Paris</span></div><Link href="#contact" variant="default" size="md" withArrow>Talk about my job</Link></div>
        <div className="martin-photo martin-photo--about" role="img" aria-label="Documentary portrait of a handyman in his workspace."><img className="martin-photo__image" src={workshopImage} alt="" /></div>
      </section>

      <section className="martin-area" id="area" aria-labelledby="area-title">
        <div className="martin-area__visual" aria-hidden="true"><img className="martin-area__image" src={mapImage} alt="" /></div>
        <div className="martin-area__copy"><p className="eyebrow">SERVICE AREA</p><h2 id="area-title">Is your home within reach?</h2><p>Availability depends on the location and the type of job. Enter your postcode in the request so we can review whether the location is within reach before arranging a visit.</p><p className="martin-area__support">A postcode is enough at this stage; you do not need to share your full address.</p><Link href="#contact" variant="accent" size="md" withArrow onClick={focusPostcode}>Enter your postcode</Link></div>
      </section>

      <section className="martin-faq" id="faq" aria-labelledby="faq-title">
        <div className="martin-faq__intro"><p className="eyebrow">FREQUENT QUESTIONS</p><h2 id="faq-title">Before you write.</h2><p>A few answers to help you describe your request.</p></div>
        <div className="martin-faq__list">{faqItems.map(([question, answer], index) => { const isOpen = openFaq === index; const answerId = `martin-faq-answer-${index}`; return <article className={`martin-faq__item ${isOpen ? "is-open" : ""}`} key={question}><h3><button type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenFaq(isOpen ? -1 : index)}>{question}<ChevronDown size={18} aria-hidden="true" /></button></h3><div id={answerId} role="region" aria-hidden={!isOpen} className="martin-faq__answer"><p>{answer}</p></div></article>; })}</div>
      </section>

      <section className="martin-contact" id="contact" aria-labelledby="contact-title">
        <div className="martin-contact__intro"><p className="eyebrow">YOUR REQUEST</p><h2 id="contact-title">A small job to do? Let’s talk.</h2><p>Tell us what you need. A few details are enough to get started and work out the next step together.</p><p className="martin-contact__small">Not sure how to describe the problem? Explain it in your own words.</p></div>
        {submitted ? <div className="martin-form martin-form__success" role="status" aria-labelledby="martin-thank-you-title">
          <Check size={24} aria-hidden="true" />
          <p className="eyebrow">THANK YOU FOR EXPLORING</p>
          <h3 id="martin-thank-you-title" ref={thankYouHeadingRef} tabIndex={-1}>That’s the end of the demo.</h3>
          <p>This form is part of a portfolio concept, so no request has been sent. Thanks for taking a closer look at <span className="notranslate">Atelier Martin</span>.</p>
          <div className="martin-form__success-actions">
            <Button href="/portfolio" variant="primary" size="md" withArrow>Explore the <span className="notranslate">pilaruStudio</span> portfolio</Button>
            <Link href="/" variant="default" size="md" withArrow>Back to the homepage</Link>
          </div>
        </div> : <form className="martin-form" onSubmit={handleSubmit} noValidate>
          <h3>Describe your job</h3>
          <div className="martin-form__grid"><Field label="Name" required error={errors.name}><Input name="name" autoComplete="name" placeholder="Your name" /></Field><Field label="Email address" required error={errors.email}><Input name="email" type="email" autoComplete="email" placeholder="you@example.com" /></Field></div>
          <Field label="Service type" required error={errors.service}><Select name="service" value={service} onValueChange={setService} options={serviceOptions} placeholder="Choose a category" /></Field>
          <Field label="Home postcode"><Input name="postcode" inputMode="numeric" placeholder="75000" /></Field>
          <Field label="Describe your job" required error={errors.message}><Textarea name="message" placeholder="What needs repairing, assembling or adjusting?" rows={5} /></Field>
          <Button type="submit" variant="primary" size="lg" withArrow>Send my request</Button>
          <small>Your request is not binding. The practical details of the work will be agreed together.</small>
        </form>}
      </section>
    </>
  );
}

