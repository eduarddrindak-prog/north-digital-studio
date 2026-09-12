import { Badge } from "@/components/North Base/ui/Badge";
import { Image } from "@/components/North Base/ui/Image";
import { Link } from "@/components/North Base/ui/Link";

import Reveal from "../Reveal/Reveal";

import "./ServiceInPractice.css";

const services = [
  {
    number: "01",
    title: "Interior Design",
    intro:
      "We shape the space before we fill it — working with proportion, circulation, light and the character of the existing architecture.",
    whatWeDo: [
      "Spatial planning",
      "Material direction",
      "Lighting strategy",
      "Furniture layout",
    ],
    project: "Østerbro Apartment",
    projectMeta: "Copenhagen · 2025 · 118 m²",
    projectCategory: "Residential",
    focus:
      "The focus was on creating a calmer relationship between the main living spaces while keeping the original character of the apartment intact.",
    inPractice:
      "The apartment was reorganised around a quieter circulation and a stronger relationship between the living spaces. Materials, lighting and furniture were then developed as one continuous interior language.",
    direction:
      "Warm oak, limestone and soft mineral tones were used to create a restrained material palette. The furniture was kept deliberately simple so that proportion and natural light could remain the strongest elements in the room.",
    result:
      "The result is an interior that feels considered without feeling overly designed — a home where the architecture, furniture and everyday routines work naturally together.",
    image:
      "/projects/nord/images/osterbro-apartment/01.jpg",
  },

  {
    number: "02",
    title: "Renovation",
    intro:
      "We work with what is already there, preserving the qualities of a space while carefully transforming what no longer serves it.",
    whatWeDo: [
      "Existing-condition review",
      "Layout changes",
      "Surface renewal",
      "Built-in elements",
    ],
    project: "Bornholm Guesthouse",
    projectMeta: "Bornholm · 2025 · 286 m²",
    projectCategory: "Hospitality",
    focus:
      "The renovation centred on improving the relationship between the guest rooms, shared spaces and surrounding landscape.",
    inPractice:
      "The existing structure became the starting point for a quieter guesthouse. New interventions were kept deliberately restrained, allowing the original architecture and surrounding landscape to remain present.",
    direction:
      "Rather than replacing everything, we identified the elements worth keeping and built the new design around them. Natural timber, stone and muted textiles helped connect the renovated interiors to the landscape outside.",
    result:
      "The finished spaces feel renewed while still belonging to the original building — familiar, tactile and designed for a slower rhythm of everyday use.",
    image:
      "/projects/nord/images/bornholm-guesthouse/01.jpg",
  },

  {
    number: "03",
    title: "Furniture & Styling",
    intro:
      "The final layers of an interior are considered from the beginning — furniture, lighting and objects are selected to belong to the architecture.",
    whatWeDo: [
      "Furniture selection",
      "Lighting & objects",
      "Textiles",
      "Final styling",
    ],
    project: "Møller Studio",
    projectMeta: "Copenhagen · 2025 · 86 m²",
    projectCategory: "Commercial",
    focus:
      "The aim was to create a working environment with enough character to feel personal, while remaining calm enough for focused work.",
    inPractice:
      "A restrained collection of furniture and objects gave the studio a more tactile character without making the working environment feel staged. Lighting and smaller details completed the atmosphere.",
    direction:
      "Furniture was selected around scale and proportion first. Softer textiles, warm lighting and a small number of objects introduced contrast without turning the studio into a decorative environment.",
    result:
      "The final space feels complete but not finished in a rigid sense — it leaves room for the people using it to add their own layer over time.",
    image:
      "/projects/nord/images/moller-studio/02.jpg",
  },
];

function ServiceInPractice() {
  return (
    <div className="service-practice">
      {services.map((service, index) => (
        <Reveal
          key={service.number}
          delay={index * 0.08}
          className="service-practice__reveal"
        >
          <article className="service-practice__service">

            {/* SERVICE HEADER */}

            <div className="service-practice__service-top">
              <span className="service-practice__number">
                {service.number}
              </span>

              <div className="service-practice__title-wrap">
                <h3>{service.title}</h3>

                <p className="service-practice__intro">
                  {service.intro}
                </p>
              </div>
            </div>


            {/* PROJECT */}

            <div className="service-practice__project-layout">

              {/* LEFT */}

              <div className="service-practice__project-left">

                <div className="service-practice__project-heading">
                  <Badge variant="subtle">
                    {service.projectCategory}
                  </Badge>

                  <h4>{service.project}</h4>

                  <span>
                    {service.projectMeta}
                  </span>

                  <Link
                    href="/portfolio/nord/projects"
                    className="service-practice__link"
                  >
                    View project
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>

                <div className="service-practice__what-we-do">
                  <span className="service-practice__label">
                    What we do
                  </span>

                  <div className="service-practice__service-list">
                    {service.whatWeDo.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>

                <div className="service-practice__focus">
                  <span className="service-practice__label">
                    Project focus
                  </span>

                  <p>{service.focus}</p>
                </div>

              </div>


              {/* RIGHT IMAGE */}

              <div className="service-practice__project-image">
                <Image
                  src={service.image}
                  alt={service.project}
                  aspectRatio="4 / 3"
                  radius="none"
                />
              </div>

            </div>


            {/* DETAILS */}

            <div className="service-practice__details">

              <div className="service-practice__detail">
                <span className="service-practice__label">
                  In practice
                </span>

                <p>{service.inPractice}</p>
              </div>

              <div className="service-practice__detail">
                <span className="service-practice__label">
                  Design direction
                </span>

                <p>{service.direction}</p>
              </div>

              <div className="service-practice__detail">
                <span className="service-practice__label">
                  Result
                </span>

                <p>{service.result}</p>
              </div>

            </div>

          </article>
        </Reveal>
      ))}
    </div>
  );
}

export default ServiceInPractice;