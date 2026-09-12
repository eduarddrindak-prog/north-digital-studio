import { useMemo, useState } from "react";

import { projects, type ProjectCategory } from "../../content/projects";

import { Badge } from "@/components/North Base/ui/Badge";
import { Image } from "@/components/North Base/ui/Image";
import { Link } from "@/components/North Base/ui/Link";

import ProjectDialog from "../../components/ProjectDialog/ProjectDialog";

import Reveal from "../../components/Reveal/Reveal";

import "./Projects.css";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = [
  "All",
  "Residential",
  "Commercial",
  "Hospitality",
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  const selectedProjectIndex = selectedProject
    ? filteredProjects.findIndex(
        (project) => project.slug === selectedProject.slug
      )
    : -1;

  const previousProject =
    selectedProjectIndex > 0
      ? filteredProjects[selectedProjectIndex - 1]
      : null;

  const nextProject =
    selectedProjectIndex >= 0 &&
    selectedProjectIndex < filteredProjects.length - 1
      ? filteredProjects[selectedProjectIndex + 1]
      : null;

  return (
    <main className="nord-projects">
      <section className="section nord-projects__intro">
        <div className="container">
          <p className="eyebrow">Selected work</p>

          <h1 className="display">
            Projects shaped by place, material and everyday life.
          </h1>

          <p className="subheading">
            A selection of residential, commercial and hospitality
            projects developed by NORD.
          </p>
        </div>
      </section>

      <section className="nord-projects__list">
        <div className="container">
          <div
            className="nord-projects__filters"
            aria-label="Project categories"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={[
                  "nord-projects__filter",
                  activeFilter === filter &&
                    "nord-projects__filter--active",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="nord-projects__items">
            {filteredProjects.map((project, index) => (
  <article
    key={project.slug}
    className="nord-project"
  >
    <Reveal
      delay={index * 0.08}
      className="nord-project__image-reveal"
    >
      <div className="nord-project__image">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    aspectRatio="4 / 3"
                    radius="none"
                  />
                </div>

                </Reveal>

                <Reveal
  delay={index * 0.08 + 0.08}
  className="nord-project__content-reveal"
>
  <div className="nord-project__content">
                  <div className="nord-project__top">
                    <span className="nord-project__number">
                      {project.number}
                    </span>

                    <Badge variant="subtle">
                      {project.status}
                    </Badge>
                  </div>

                  <div className="nord-project__main">
                    <p className="nord-project__category">
                      {project.category}
                    </p>

                    <h2 className="nord-project__title">
                      {project.title}
                    </h2>

                    <p className="nord-project__description">
                      {project.description}
                    </p>
                  </div>

                  <div className="nord-project__meta">
                    <div>
                      <span>Location</span>
                      <strong>{project.location}</strong>
                    </div>

                    <div>
                      <span>Year</span>
                      <strong>{project.year}</strong>
                    </div>

                    <div>
                      <span>Area</span>
                      <strong>{project.area}</strong>
                    </div>
                  </div>

                  <div className="nord-project__action">
                    <button
                      type="button"
                      className="nord-project__view"
                      onClick={() => setSelectedProject(project)}
                    >
                      View project
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
</Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

        <Reveal>
  <section className="nord-projects__cta">
    <div className="nord-projects__cta-inner">
      <p className="eyebrow">Start a project</p>

      <h2>
        Have a space in mind?
        <br />
        Let’s talk about what it could become.
      </h2>

      <Link
        href="/portfolio/nord/contact"
        className="nord-projects__cta-link"
      >
        Start a conversation
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  </section>
</Reveal>

      <ProjectDialog
        project={selectedProject}
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        onPrevious={
          previousProject
            ? () => setSelectedProject(previousProject)
            : undefined
        }
        onNext={
          nextProject
            ? () => setSelectedProject(nextProject)
            : undefined
        }
        previousProject={previousProject}
        nextProject={nextProject}
      />
    </main>
  );
}

export default Projects;