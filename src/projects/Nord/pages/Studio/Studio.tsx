import { Link } from "@/components/North Base/ui/Link";
import { Image } from "@/components/North Base/ui/Image";
import { Divider } from "@/components/North Base/ui/Divider";

import Reveal from "../../components/Reveal/Reveal";
import StudioPrinciple from "../../components/StudioPrincipl/StudioPrinciple";
import StudioProcess from "../../components/StudioProcess/StudioProcess";

import { principles, process } from "../../content/studio";

import "./Studio.css";

function Studio() {
  return (
    <main className="nord-studio">
      {/* ========================================
          HERO
      ======================================== */}

      <section className="nord-studio__hero section">
        <div className="container">
          <Reveal className="nord-studio__hero-content">
            <p className="eyebrow">The studio</p>

            <h1 className="display">
              Spaces with
              <br />
              a sense of place.
            </h1>

            <p className="subheading">
              NORD is an interior studio working across
              residential, commercial and hospitality spaces.
            </p>
          </Reveal>

          <Reveal className="nord-studio__hero-image" delay={0.1}>
            <Image
              src="/projects/nord/images/studio/hero.jpg"
              alt="NORD interior studio"
              aspectRatio="16 / 9"
              radius="none"
            />
          </Reveal>
        </div>
      </section>

      {/* ========================================
          INTRODUCTION
      ======================================== */}

      <section className="nord-studio__introduction section">
        <div className="container">
          <div className="nord-studio__section-label">
            <span>01</span>
            <span>The studio</span>
          </div>

          <div className="nord-studio__introduction-grid">
            <Reveal>
              <div className="nord-studio__statement">
                <h2>
                  We create interiors that feel
                  connected to their surroundings.
                </h2>

                <p>
                  Our work balances material, light and
                  everyday function to create spaces that
                  are calm, tactile and made to last.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="nord-studio__introduction-image">
                <Image
                  src="/projects/nord/images/studio/introduction.jpg"
                  alt="Architectural detail in a NORD interior"
                  aspectRatio="4 / 5"
                  radius="none"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================
    APPROACH
======================================== */}

<section className="nord-studio__approach section">
  <div className="container">
    <Reveal>
      <div className="nord-studio__approach-header">
        <div className="nord-studio__section-label">
          <span>02</span>
          <span>Our approach</span>
        </div>

        <h2>
          How we look
          <br />
          at a space.
        </h2>
      </div>
    </Reveal>

    <div className="nord-studio__approach-story">
      <Reveal className="nord-studio__approach-image">
        <Image
          src="/public/projects/nord/images/studio/approach.jpg"
          alt="Architectural interior detail"
          aspectRatio="4 / 5"
          radius="none"
        />
      </Reveal>

      <div className="nord-studio__approach-copy">
        <Reveal>
          <p className="nord-studio__approach-lead">
            A room is more than its objects. It is
            light, proportion, material, movement
            and time.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p>
            We begin with what is already there —
            the architecture, the proportions, the
            light and the rhythm of everyday life.
            Instead of imposing a style, we look for
            the qualities that make a place worth
            keeping.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p>
            From there, materials, furniture and
            details become part of the same
            conversation. Nothing needs to compete
            for attention. The goal is a space that
            feels natural from the beginning, yet
            reveals more of itself over time.
          </p>
        </Reveal>
      </div>
    </div>

    <Reveal className="nord-studio__approach-footer">
      <Divider />

      <div>
        <span>Place</span>
        <span>Material</span>
        <span>Light</span>
        <span>Everyday life</span>
      </div>
    </Reveal>
  </div>
</section>

      {/* ========================================
    MATERIAL
======================================== */}

<section className="nord-studio__material section">
  <div className="container">
    <div className="nord-studio__material-grid">
      <Reveal className="nord-studio__material-image">
        <Image
          src="/projects/nord/images/studio/material.jpg"
          alt="Natural stone, oak and textile material samples"
          aspectRatio="4 / 5"
          radius="none"
        />
      </Reveal>

      <div className="nord-studio__material-content">
        <Reveal>
          <div className="nord-studio__section-label">
            <span>03</span>
            <span>Material</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="nord-studio__material-intro">
            <h2>
              Materials we return
              to again and again.
            </h2>

            <p>
              We prefer materials that reveal their
              character slowly — through texture,
              light and everyday use.
            </p>
          </div>
        </Reveal>

        <div className="nord-studio__material-list">
          <Reveal>
            <div className="nord-studio__material-item">
              <span>01</span>
              <strong>Limestone</strong>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="nord-studio__material-item">
              <span>02</span>
              <strong>Oak</strong>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="nord-studio__material-item">
              <span>03</span>
              <strong>Linen</strong>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="nord-studio__material-item">
              <span>04</span>
              <strong>Plaster</strong>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="nord-studio__material-item">
              <span>05</span>
              <strong>Brushed metal</strong>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ========================================
          PROCESS
      ======================================== */}

      <section className="nord-studio__process section">
        <div className="container">
          <Reveal>
            <div className="nord-studio__section-heading">
              <div className="nord-studio__section-label">
                <span>04</span>
                <span>Process</span>
              </div>

              <h2>
                From first idea
                <br />
                to finished space.
              </h2>
            </div>
          </Reveal>

          <div className="nord-studio__process-list">
            {process.map((step) => (
              <StudioProcess
                key={step.number}
                {...step}
              />
            ))}
          </div>

          <Reveal className="nord-studio__process-image">
            <Image
              src="/projects/nord/images/studio/process.jpg"
              alt="Architectural materials and drawings"
              aspectRatio="16 / 9"
              radius="none"
            />
          </Reveal>
        </div>
      </section>

      {/* ========================================
          PARTNERS
      ======================================== */}

      <section className="nord-studio__collaboration section">
  <div className="container">
    <Reveal>
      <div className="nord-studio__section-heading">
        <div className="nord-studio__section-label">
          <span>05</span>
          <span>Collaboration</span>
        </div>

        <h2>
          A wider
          <br />
          conversation.
        </h2>
      </div>
    </Reveal>

    <Reveal delay={0.1}>
      <div className="nord-studio__network">
        <div className="nord-studio__network-lines" aria-hidden="true">
          <span className="line line--one" />
          <span className="line line--two" />
          <span className="line line--three" />
          <span className="line line--four" />
          <span className="line line--five" />
        </div>

        <div className="nord-studio__network-center">
          <span>NORD</span>
          <small>Interior Studio</small>
        </div>

        <div className="nord-studio__network-item network-item--architecture">
          <span>01</span>
          <strong>Architecture</strong>
          <small>Structure & context</small>
        </div>

        <div className="nord-studio__network-item network-item--craft">
          <span>02</span>
          <strong>Craft</strong>
          <small>Hands & detail</small>
        </div>

        <div className="nord-studio__network-item network-item--furniture">
          <span>03</span>
          <strong>Furniture</strong>
          <small>Objects & function</small>
        </div>

        <div className="nord-studio__network-item network-item--materials">
          <span>04</span>
          <strong>Materials</strong>
          <small>Texture & character</small>
        </div>

        <div className="nord-studio__network-item network-item--art">
          <span>05</span>
          <strong>Art</strong>
          <small>Culture & expression</small>
        </div>
      </div>
    </Reveal>

    <Reveal delay={0.2}>
      <div className="nord-studio__collaboration-footer">
        <p>
          Every project brings different disciplines into
          the same conversation. We believe that the
          character of a space emerges somewhere between
          them.
        </p>
      </div>
    </Reveal>
  </div>
</section>

      {/* ========================================
          STUDIO NOTE
      ======================================== */}

      <section className="nord-studio__note section">
        <div className="container">
          <Reveal>
            <div className="nord-studio__note-content">
              <p className="eyebrow">A studio note</p>

              <blockquote>
                We believe the best spaces
                <br />
                do not ask for attention.
                <br />
                They earn it slowly.
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================
          CTA
      ======================================== */}

      <section className="nord-studio__cta section">
        <div className="container">
          <Reveal>
            <div className="nord-studio__cta-content">
              <p className="eyebrow">Let’s work together</p>

              <h2>
                Have a project,
                <br />
                a space or simply an idea?
              </h2>

              <Link
                href="/portfolio/nord/contact"
                className="nord-studio__cta-link"
              >
                Start a conversation
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default Studio;