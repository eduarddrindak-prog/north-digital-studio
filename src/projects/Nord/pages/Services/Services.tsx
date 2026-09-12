import { Link } from "@/components/North Base/ui/Link";
import Reveal from "../../components/Reveal/Reveal";
import BeforeAfter from "../../components/BeforeAfter/BeforeAfter";

import "./Services.css";
import ServiceCuration from "../../components/ServiceCuration/ServiceCuration";
import ConsultationSelector from "../../components/ConsultationSelector/ConsultationSelector";
import ServiceInPractice from "../../components/ServiceInPractice/ServiceInPractice";

function Services() {
  return (
    <main className="nord-services">
      {/* ========================================
          HERO
      ======================================== */}

      <section className="nord-services__hero">
  <div className="nord-services__hero-image">
    <img
      src="/projects/nord/images/services/hero.jpg"
      alt="Sunlit Scandinavian interior with natural stone and oak"
    />
  </div>

  <div className="nord-services__hero-overlay">
    <Reveal>
      <div className="nord-services__hero-eyebrow">
        <span>/</span>
        <span>Services</span>
      </div>
    </Reveal>

    <Reveal delay={0.08}>
      <h1>
        From first idea
        <br />
        to finished space.
      </h1>
    </Reveal>

    <Reveal delay={0.16}>
      <p className="nord-services__hero-description">
        Interior design, renovation and objects
        for considered everyday spaces.
      </p>
    </Reveal>

    <Reveal delay={0.24}>
      <Link
  href="#services-project"
  className="nord-services__hero-link"
>
  <span>Explore our services</span>
  <span aria-hidden="true">→</span>
</Link>
    </Reveal>

    <div className="nord-services__hero-meta">
      <span>01 / 08</span>
      <span className="nord-services__hero-meta-line" />
      <span>NORD / COPENHAGEN</span>
    </div>
  </div>
</section>

      {/* ========================================
          PROJECTS
      ======================================== */}

      <section
  id="services-project"
  className="nord-services__project section"
>
  <div className="container">
    <Reveal>
      <div className="nord-services__project-heading">
        <div className="nord-services__section-label">
          <span>02</span>
          <span>The project</span>
        </div>

        <p>
          From an initial conversation to the moment
          a space is ready to live in, we stay involved
          throughout the process.
        </p>
      </div>
    </Reveal>

    <Reveal delay={0.1}>
      <div className="nord-services__timeline">
        <div
          className="nord-services__timeline-track"
          aria-hidden="true"
        >
          <span className="nord-services__timeline-progress" />
        </div>

        <article className="nord-services__timeline-item">
          <div className="nord-services__timeline-marker">
            <span>01</span>
          </div>

          <div className="nord-services__timeline-content">
            <span className="nord-services__timeline-label">
              Define
            </span>

            <h3>
              Understand the place
              <br />
              before changing it.
            </h3>

            <p>
              We begin with the brief, the architecture
              and the way the space needs to work.
            </p>
          </div>
        </article>

        <article className="nord-services__timeline-item">
          <div className="nord-services__timeline-marker">
            <span>02</span>
          </div>

          <div className="nord-services__timeline-content">
            <span className="nord-services__timeline-label">
              Develop
            </span>

            <h3>
              Turn direction
              <br />
              into a spatial idea.
            </h3>

            <p>
              Plans, proportions, materials and furniture
              begin to form one coherent direction.
            </p>
          </div>
        </article>

        <article className="nord-services__timeline-item">
          <div className="nord-services__timeline-marker">
            <span>03</span>
          </div>

          <div className="nord-services__timeline-content">
            <span className="nord-services__timeline-label">
              Detail
            </span>

            <h3>
              Make every decision
              <br />
              feel intentional.
            </h3>

            <p>
              We resolve materials, lighting, furniture,
              joinery and the smaller details that give
              a space its character.
            </p>
          </div>
        </article>

        <article className="nord-services__timeline-item">
          <div className="nord-services__timeline-marker">
            <span>04</span>
          </div>

          <div className="nord-services__timeline-content">
            <span className="nord-services__timeline-label">
              Realise
            </span>

            <h3>
              Bring the idea
              <br />
              into everyday life.
            </h3>

            <p>
              From installation to final styling, we
              carry the original idea through to the
              finished space.
            </p>
          </div>
        </article>
      </div>
    </Reveal>

    <Reveal delay={0.2}>
      <div className="nord-services__project-footer">
        <span>One continuous process</span>

        <span>
          Brief&nbsp;&nbsp;—&nbsp;&nbsp;Design&nbsp;&nbsp;—&nbsp;&nbsp;Build
        </span>
      </div>
    </Reveal>
  </div>
</section>

{/* ========================================
    INTERIOR DESIGN
======================================== */}

<section className="nord-services__interior section">
  <div className="container">
    <Reveal>
      <div className="nord-services__interior-header">
        <div className="nord-services__section-label">
          <span>03</span>
          <span>Interior Design</span>
        </div>

        <p>
          Spaces shaped around architecture, light
          and the way they are actually lived in.
        </p>
      </div>
    </Reveal>

    <div className="nord-services__interior-gallery">
      <Reveal className="nord-services__interior-main">
        <img
          src="/projects/nord/images/nordhavn-house/01.jpg"
          alt="Nordhavn House interior"
        />
      </Reveal>

      <Reveal
        delay={0.08}
        className="nord-services__interior-detail nord-services__interior-detail--top"
      >
        <img
          src="/projects/nord/images/nordhavn-house/02.jpg"
          alt="Nordhavn House interior detail"
        />
      </Reveal>

      <Reveal
        delay={0.16}
        className="nord-services__interior-detail nord-services__interior-detail--bottom"
      >
        <img
          src="/projects/nord/images/nordhavn-house/03.jpg"
          alt="Nordhavn House material detail"
        />
      </Reveal>
    </div>

    <Reveal delay={0.2}>
      <div className="nord-services__interior-caption">
        <div>
          <span>Nordhavn House</span>
            <span>Copenhagen · 2024</span>
        </div>

        <p>
          We develop complete interiors from the first
          spatial idea through to furniture, lighting
          and final styling. The aim is not to fill a
          room, but to establish a clear relationship
          between everything within it.
        </p>
      </div>
    </Reveal>

    <Reveal delay={0.24}>
      <div className="nord-services__interior-scope">
        <span>Interior Design</span>

        <p>
          Spatial planning&nbsp;&nbsp;·&nbsp;&nbsp;
          Material direction&nbsp;&nbsp;·&nbsp;&nbsp;
          Lighting&nbsp;&nbsp;·&nbsp;&nbsp;
          Furniture&nbsp;&nbsp;·&nbsp;&nbsp;
          Styling
        </p>
      </div>
    </Reveal>
  </div>
</section>

{/* ========================================
    RENOVATION
======================================== */}

<section className="nord-services__renovation section">
  <div className="container">
    <Reveal>
      <div className="nord-services__renovation-header">
        <div className="nord-services__section-label">
          <span>04</span>
          <span>Renovation</span>
        </div>

        <h2>
          Keep what matters.
          <br />
          Change what doesn't.
        </h2>
      </div>
    </Reveal>

    <Reveal delay={0.1}>
      <div className="nord-services__renovation-intro">
        <p>
          Existing architecture is rarely a blank canvas.
          We look for what already gives a place its
          character, then build from there.
        </p>
      </div>
    </Reveal>

    <Reveal delay={0.15}>
      <div className="nord-services__renovation-compare">
        <BeforeAfter
  before="/projects/nord/images/services/renovation-before.jpg"
  after="/projects/nord/images/services/renovation-after.jpg"
  beforeAlt="Interior before renovation"
  afterAlt="Interior after renovation"
/>
      </div>
    </Reveal>

    <Reveal delay={0.2}>
      <div className="nord-services__renovation-footer">
        <div>
          <span>Renovation</span>
          <span>Architecture · Materials · Detail</span>
        </div>

        <p>
          From structural changes and new layouts to
          surfaces, lighting and built-in elements, every
          intervention is considered in relation to what
          was already there.
        </p>
      </div>
    </Reveal>
  </div>
</section>

{/* ========================================
    FURNITURE & STYLING
======================================== */}

<section className="nord-services__furniture section">
  <div className="container">
    <Reveal>
      <div className="nord-services__furniture-header">
        <div className="nord-services__section-label">
          <span>05</span>
          <span>Furniture & Styling</span>
        </div>

        <h2>
          The room is built
          <br />
          in layers.
        </h2>
      </div>
    </Reveal>

    <Reveal delay={0.1}>
      <p className="nord-services__furniture-intro">
        Furniture, lighting and objects are not the
        finishing touches. They are part of the
        architecture of everyday life.
      </p>
    </Reveal>

    <Reveal delay={0.15}>
      <ServiceCuration />
    </Reveal>
  </div>
</section>
{/* ========================================
    CONSULTATION
======================================== */}

<section className="nord-services__consultation section">
  <div className="container">
    <Reveal>
      <div className="nord-services__consultation-header">
        <div className="nord-services__section-label">
          <span>06</span>
          <span>Consultation</span>
        </div>

        <h2>
          Start with
          <br />
          a conversation.
        </h2>
      </div>
    </Reveal>

    <Reveal delay={0.1}>
      <p className="nord-services__consultation-intro">
        Not every project begins with a complete brief.
        Sometimes the most useful first step is simply
        understanding what is possible.
      </p>
    </Reveal>

    <Reveal delay={0.15}>
      <ConsultationSelector />
    </Reveal>
  </div>
</section>

{/* ========================================
    SERVICE IN PRACTICE
======================================== */}

<section className="nord-services__practice section">
  <div className="container">
    <Reveal>
      <div className="nord-services__practice-header">
        <div className="nord-services__section-label">
          <span>07</span>
          <span>Service in practice</span>
        </div>

        <h2>
          Different spaces,
          <br />
          different decisions.
        </h2>
      </div>
    </Reveal>

    <Reveal delay={0.1}>
      <p className="nord-services__practice-intro">
        Every project asks for a different combination
        of ideas, disciplines and attention. Here is how
        our services come together in practice.
      </p>
    </Reveal>

    <ServiceInPractice />
  </div>
</section>
    </main>
  );
}

export default Services;