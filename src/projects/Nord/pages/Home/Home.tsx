import { Link } from "@/components/North Base/ui/Link";
import { Image } from "@/components/North Base/ui/Image";

import { projects } from "../../content/projects";
import { services } from "../../content/services";
import { journal } from "../../content/journal";
import Reveal from "../../components/Reveal/Reveal";

import "./Home.css";

function Home() {
  const featuredProject = projects[0];
  const selectedProjects = projects.slice(1, 5);
  const selectedServices = services.slice(0, 4);
  const latestArticles = journal.slice(0, 3);

  return (
    <main className="nord-home">

      {/* ========================================
          HERO
      ======================================== */}
      <Reveal>
      <section className="nord-home__hero section">
        <div className="container">
          <div className="nord-home__hero-content">

            <p className="eyebrow">
              NORD — Interior Studio
            </p>

            <h1 className="display">
              Spaces with clarity,
              <br />
              warmth and purpose.
            </h1>

            <div className="nord-home__hero-bottom">

              <p className="subheading">
                NORD creates calm, considered interiors shaped by
                architecture, material and everyday life.
              </p>

              <Link
                href="/portfolio/nord/projects"
                variant="accent"
                withArrow
              >
                Explore projects
              </Link>

            </div>

          </div>
        </div>
      </section>
      </Reveal>


      {/* ========================================
          ABOUT
      ======================================== */}
      <Reveal>
      <section className="nord-home__about section">
        <div className="container">

          <div className="nord-home__section-header">
            <p className="eyebrow">About NORD</p>

            <span className="nord-home__section-number">
              01
            </span>
          </div>

          <div className="nord-home__about-main">

            <h2>
              We create interiors that feel considered
              rather than designed.
            </h2>

            <div className="nord-home__about-copy">

              <p>
                NORD is an interior studio working across
                residential, commercial and hospitality spaces.
                Our work begins with understanding how a place
                should feel, function and evolve over time.
              </p>

              <p>
                We work with existing architecture, natural
                materials and carefully selected objects to create
                spaces that are quiet, useful and personal.
              </p>

              <Link
                href="/portfolio/nord/studio"
                variant="accent"
                withArrow
              >
                About the studio
              </Link>

            </div>

          </div>

          <div className="nord-home__about-principles">

            <div>
              <span>01</span>

              <strong>Architecture</strong>

              <p>
                Working with the character, proportions and
                constraints of each space.
              </p>
            </div>

            <div>
              <span>02</span>

              <strong>Material</strong>

              <p>
                Natural textures chosen for how they feel,
                perform and age over time.
              </p>
            </div>

            <div>
              <span>03</span>

              <strong>Everyday life</strong>

              <p>
                Designing around the people, routines and
                rituals that inhabit a space.
              </p>
            </div>

          </div>

        </div>
      </section>
      </Reveal>


      {/* ========================================
          FEATURED PROJECT
      ======================================== */}
      <Reveal>
      <section className="nord-home__featured section">
        <div className="container">

          <div className="nord-home__section-header">
            <p className="eyebrow">
              Featured project
            </p>

            <span className="nord-home__section-number">
              {featuredProject.number}
            </span>
          </div>

          <div className="nord-home__featured-layout">

            <Link
              href="/portfolio/nord/projects"
              className="nord-home__featured-image"
            >
              <Image
                src={featuredProject.images[0]}
                alt={featuredProject.title}
                aspectRatio="4 / 3"
                radius="none"
              />
            </Link>

            <div className="nord-home__featured-content">

              <div>
                <span className="nord-home__project-category">
                  {featuredProject.category}
                </span>

                <h2>
                  {featuredProject.title}
                </h2>

                <p>
                  {featuredProject.description}
                </p>
              </div>

              <div className="nord-home__featured-details">

                <div>
                  <span>Location</span>
                  <strong>{featuredProject.location}</strong>
                </div>

                <div>
                  <span>Year</span>
                  <strong>{featuredProject.year}</strong>
                </div>

                <div>
                  <span>Area</span>
                  <strong>{featuredProject.area}</strong>
                </div>

              </div>

              <Link
                href="/portfolio/nord/projects"
                variant="accent"
                withArrow
              >
                View project
              </Link>

            </div>

          </div>

        </div>
      </section>
      </Reveal>


      {/* ========================================
          SELECTED WORK
      ======================================== */}
      <Reveal>
      <section className="nord-home__work section">
        <div className="container">

          <div className="nord-home__section-header">

            <p className="eyebrow">
              Selected work
            </p>

            <Link
              href="/portfolio/nord/projects"
              variant="accent"
              withArrow
            >
              All projects
            </Link>

          </div>

          <div className="nord-home__work-grid">

            {selectedProjects.map((project, index) => (
              <Link
                key={project.slug}
                href="/portfolio/nord/projects"
                className={`nord-home__work-card nord-home__work-card--${index + 1}`}
              >

                <div className="nord-home__work-image">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    aspectRatio={
                      index === 0
                        ? "4 / 3"
                        : "3 / 4"
                    }
                    radius="none"
                  />
                </div>

                <div className="nord-home__work-info">

                  <div>
                    <span>{project.number}</span>

                    <h3>{project.title}</h3>
                  </div>

                  <div>
                    <p>{project.category}</p>
                    <p>{project.location}</p>
                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>
      </Reveal>


      {/* ========================================
          SERVICES
      ======================================== */}
      <Reveal>
      <section className="nord-home__services section">
        <div className="container">

          <div className="nord-home__section-header">

            <p className="eyebrow">
              Services
            </p>

            <Link
              href="/portfolio/nord/services"
              variant="accent"
              withArrow
            >
              View services
            </Link>

          </div>

          <div className="nord-home__services-intro">

            <h2>
              From first ideas to the final layer
              of detail.
            </h2>

            <p>
              NORD can support a project from early direction
              through spatial planning, material selection,
              furniture and final styling.
            </p>

          </div>

          <div className="nord-home__services-grid">

            {selectedServices.map((service, index) => (
              <div
                key={service.title}
                className="nord-home__service"
              >

                <div className="nord-home__service-top">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>
                    {service.timeline}
                  </span>

                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <div className="nord-home__service-scope">

                  {service.scope.slice(0, 3).map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
      </Reveal>


      {/* ========================================
          PROCESS
      ======================================== */}
      <Reveal>
      <section className="nord-home__process section">
        <div className="container">

          <div className="nord-home__section-header">

            <p className="eyebrow">
              Process
            </p>

            <span className="nord-home__section-number">
              05
            </span>

          </div>

          <div className="nord-home__process-intro">

            <h2>
              A clear process from
              <br />
              first conversation to final detail.
            </h2>

            <p>
              Every project is different, but our way of working
              remains deliberately clear. We establish direction
              early, develop ideas carefully and refine the details
              that make a space feel complete.
            </p>

          </div>

          <div className="nord-home__process-list">

            <div>
              <span>01</span>

              <div>
                <h3>Understand</h3>

                <p>
                  We look at the architecture, context, needs
                  and everyday routines behind the project.
                </p>
              </div>
            </div>

            <div>
              <span>02</span>

              <div>
                <h3>Define</h3>

                <p>
                  We establish the spatial direction, atmosphere,
                  materials and priorities.
                </p>
              </div>
            </div>

            <div>
              <span>03</span>

              <div>
                <h3>Develop</h3>

                <p>
                  Layouts, furniture, lighting and material choices
                  are developed into a coherent whole.
                </p>
              </div>
            </div>

            <div>
              <span>04</span>

              <div>
                <h3>Refine</h3>

                <p>
                  The final layer is about proportion, texture,
                  objects and the details people notice over time.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
      </Reveal>


      {/* ========================================
          MATERIAL / APPROACH
      ======================================== */}
      <Reveal>
      <section className="nord-home__material section">
        <div className="container">

          <div className="nord-home__section-header">

            <p className="eyebrow">
              Material & approach
            </p>

            <span className="nord-home__section-number">
              06
            </span>

          </div>

          <div className="nord-home__material-grid">

            <div className="nord-home__material-statement">

              <h2>
                Quiet materials.
                <br />
                Honest details.
              </h2>

              <p>
                We are drawn to materials that develop character
                rather than compete for attention. Oak, limestone,
                plaster, linen and aged metals give spaces a tactile
                quality that becomes richer with time.
              </p>

            </div>

            <div className="nord-home__material-list">

              <div>
                <span>01</span>
                <strong>Oak</strong>
                <p>Warm, tactile and naturally understated.</p>
              </div>

              <div>
                <span>02</span>
                <strong>Limestone</strong>
                <p>Soft variation, texture and a sense of permanence.</p>
              </div>

              <div>
                <span>03</span>
                <strong>Plaster</strong>
                <p>Quiet surfaces with subtle depth and movement.</p>
              </div>

              <div>
                <span>04</span>
                <strong>Linen</strong>
                <p>Lightness, softness and natural irregularity.</p>
              </div>

            </div>

          </div>

        </div>
      </section>
      </Reveal>


      {/* ========================================
          JOURNAL
      ======================================== */}
      <Reveal>
      <section className="nord-home__journal section">
        <div className="container">

          <div className="nord-home__section-header">

            <p className="eyebrow">
              Journal
            </p>

            <Link
              href="/portfolio/nord/journal"
              variant="accent"
              withArrow
            >
              Read all
            </Link>

          </div>

          <div className="nord-home__journal-list">

            {latestArticles.map((article, index) => {
              const relatedProject = projects.find(
                (project) =>
                  project.slug === article.relatedProjects?.[0]
              );

              const articleImage =
                relatedProject?.images[0];

              return (
  <article
    key={article.slug}
    className="nord-home__article"
  >
  <div className="nord-home__article-number">
    {String(index + 1).padStart(2, "0")}
  </div>

  <div className="nord-home__article-image">
    {articleImage && (
      <Image
        src={articleImage}
        alt={article.title}
        aspectRatio="4 / 3"
        radius="none"
      />
    )}
  </div>

  <div className="nord-home__article-info">
    <div className="nord-home__article-meta">
      <span>{article.category}</span>
      <span>{article.date}</span>
    </div>

    <h3>
      {article.title}
    </h3>

    <p>
      {article.excerpt}
    </p>

    <Link
      href="/portfolio/nord/journal"
      variant="accent"
      withArrow
      className="nord-home__article-link"
    >
      Read article
    </Link>
  </div>
</article>
);
            })}

          </div>

        </div>
      </section>
      </Reveal>


      {/* ========================================
          CTA
      ======================================== */}
      <Reveal>
      <section className="nord-home__cta section">
        <div className="container">

          <div className="nord-home__cta-inner">

            <div className="nord-home__cta-number">
              07
            </div>

            <div className="nord-home__cta-content">

              <p className="eyebrow">
                Start a project
              </p>

              <h2>
                Have a space
                <br />
                in mind?
              </h2>

              <p>
                Tell us about the place, what you need and
                where you want to take it.
              </p>

              <Link
                href="/portfolio/nord/contact"
                variant="accent"
                withArrow
              >
                Get in touch
              </Link>

            </div>

          </div>

        </div>
      </section>
      </Reveal>

    </main>
  );
}

export default Home;