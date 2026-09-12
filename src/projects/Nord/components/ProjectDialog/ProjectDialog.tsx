import { useEffect } from "react";

import type { Project } from "../../content/projects";

import { Dialog } from "@/components/North Base/ui/Dialog";
import { Badge } from "@/components/North Base/ui/Badge";
import { Image } from "@/components/North Base/ui/Image";
import { Divider } from "@/components/North Base/ui/Divider";

import "./ProjectDialog.css";

type ProjectDialogProps = {
  project: Project | null;
  open: boolean;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  previousProject?: Project | null;
  nextProject?: Project | null;
};

function ProjectDialog({
  project,
  open,
  onClose,
  onPrevious,
  onNext,
  previousProject,
  nextProject,
}: ProjectDialogProps) {
  useEffect(() => {
    if (!open || !project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        onPrevious?.();
      }

      if (event.key === "ArrowRight") {
        onNext?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, project, onPrevious, onNext]);

  if (!project) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={project.title}
      description={`${project.category} · ${project.location}`}
      size="xl"
    >
      <div className="nord-project-dialog">
        <div className="nord-project-dialog__hero">
          <Image
            src={project.images[0]}
            alt={project.title}
            aspectRatio="16 / 9"
            radius="none"
          />
        </div>

        <div className="nord-project-dialog__intro">
          <div className="nord-project-dialog__intro-main">
            <div className="nord-project-dialog__eyebrow">
              <span>{project.number}</span>
              <span>{project.category}</span>
            </div>

            <p>{project.description}</p>
          </div>

          <Badge variant="subtle">
            {project.status}
          </Badge>
        </div>

        <div className="nord-project-dialog__meta">
          <div>
            <span>Category</span>
            <strong>{project.category}</strong>
          </div>

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

        <Divider />

        <div className="nord-project-dialog__text">
          <div>
            <span className="nord-project-dialog__label">
              Overview
            </span>

            <p>{project.overview}</p>
          </div>

          <div>
            <span className="nord-project-dialog__label">
              Approach
            </span>

            <p>{project.approach}</p>
          </div>
        </div>

        <div className="nord-project-dialog__materials">
          <span className="nord-project-dialog__label">
            Materials
          </span>

          <div>
            {project.materials.map((material) => (
              <span key={material}>
                {material}
              </span>
            ))}
          </div>
        </div>

        <div className="nord-project-dialog__gallery">
          {project.images.slice(1).map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`${project.title} — image ${index + 2}`}
              aspectRatio="4 / 3"
              radius="none"
            />
          ))}
        </div>

        <div className="nord-project-dialog__navigation">
          <button
            type="button"
            onClick={onPrevious}
            disabled={!onPrevious}
            className="nord-project-dialog__nav nord-project-dialog__nav--previous"
          >
            <span className="nord-project-dialog__nav-arrow">
              ←
            </span>

            <span>
              <small>Previous project</small>
              <strong>
                {previousProject?.title ?? "Previous project"}
              </strong>
            </span>
          </button>

          <button
            type="button"
            onClick={onNext}
            disabled={!onNext}
            className="nord-project-dialog__nav nord-project-dialog__nav--next"
          >
            <span>
              <small>Next project</small>
              <strong>
                {nextProject?.title ?? "Next project"}
              </strong>
            </span>

            <span className="nord-project-dialog__nav-arrow">
              →
            </span>
          </button>
        </div>
      </div>
    </Dialog>
  );
}

export default ProjectDialog;