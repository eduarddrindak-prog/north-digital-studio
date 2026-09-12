import { useState } from "react";

import "./ConsultationSelector.css";

type Option = {
  id: string;
  label: string;
};

type ConsultationData = {
  title: string;
  description: string;
  bestFor: string;
  focus: string[];
  outcome: string;
  duration: string;
  format: string;
  project: string;
  projectMeta: string;
  image: string;
};

const projectTypes: Option[] = [
  {
    id: "residential",
    label: "Residential",
  },
  {
    id: "commercial",
    label: "Commercial",
  },
  {
    id: "hospitality",
    label: "Hospitality",
  },
];

const projectStages: Option[] = [
  {
    id: "idea",
    label: "Early idea",
  },
  {
    id: "existing",
    label: "Existing space",
  },
  {
    id: "ready",
    label: "Ready to build",
  },
];

const consultationData: Record<string, ConsultationData> = {
  residential: {
    title: "Residential",
    description:
      "A focused conversation around your home, the way you live and what the space could become.",
    bestFor:
      "Homes that need a clearer direction before renovation, furnishing or a larger spatial change.",
    focus: [
      "Layout & proportions",
      "Materials & atmosphere",
      "Furniture & lighting",
    ],
    outcome:
      "A clearer understanding of what to keep, what to change and where to begin.",
    duration: "60–90 min",
    format: "Copenhagen / Remote",
    project: "Østerbro Apartment",
    projectMeta: "Copenhagen · 2025 · 118 m²",
    image:
      "/projects/nord/images/osterbro-apartment/01.jpg",
  },

  commercial: {
    title: "Commercial",
    description:
      "A considered starting point for workplaces, studios and spaces shaped around people and purpose.",
    bestFor:
      "Offices, studios and retail environments where layout and identity need to work together.",
    focus: [
      "Spatial flow",
      "Working environment",
      "Material & brand expression",
    ],
    outcome:
      "A practical direction for creating a space that supports both people and the character of the business.",
    duration: "60–90 min",
    format: "Copenhagen / Remote",
    project: "Møller Studio",
    projectMeta: "Copenhagen · 2025 · 86 m²",
    image:
      "/projects/nord/images/moller-studio/02.jpg",
  },

  hospitality: {
    title: "Hospitality",
    description:
      "Early direction for hotels, retreats and spaces where atmosphere is part of the experience.",
    bestFor:
      "Hotels, guesthouses and retreats where spatial experience matters as much as function.",
    focus: [
      "Guest experience",
      "Atmosphere & identity",
      "Flow & materiality",
    ],
    outcome:
      "A stronger spatial concept with clear priorities for atmosphere, function and guest experience.",
    duration: "90 min",
    format: "Copenhagen / Remote",
    project: "Bornholm Guesthouse",
    projectMeta: "Bornholm · 2025 · 286 m²",
    image:
      "/projects/nord/images/bornholm-guesthouse/01.jpg",
  },
};

const stageData: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  idea: {
    title: "Early idea",
    description:
      "You have a direction, but need to understand what is possible before committing to a design.",
  },
  existing: {
    title: "Existing space",
    description:
      "The room already exists. We look at its proportions, light and qualities before deciding what should change.",
  },
  ready: {
    title: "Ready to build",
    description:
      "The direction is established and you need a final review of the important spatial and material decisions.",
  },
};

function ConsultationSelector() {
  const [type, setType] = useState("residential");
  const [stage, setStage] = useState("idea");

  const data = consultationData[type];
  const currentStage = stageData[stage];

  return (
    <div className="consultation-selector">
      <div className="consultation-selector__controls">
        <div className="consultation-selector__group">
          <span className="consultation-selector__label">
            Project type
          </span>

          <div className="consultation-selector__options">
            {projectTypes.map((option) => (
              <button
                key={option.id}
                type="button"
                className={
                  type === option.id
                    ? "consultation-selector__option consultation-selector__option--active"
                    : "consultation-selector__option"
                }
                onClick={() => setType(option.id)}
              >
                <span>{option.label}</span>

                {type === option.id && (
                  <span aria-hidden="true">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="consultation-selector__group">
          <span className="consultation-selector__label">
            Where are you now?
          </span>

          <div className="consultation-selector__options">
            {projectStages.map((option) => (
              <button
                key={option.id}
                type="button"
                className={
                  stage === option.id
                    ? "consultation-selector__option consultation-selector__option--active"
                    : "consultation-selector__option"
                }
                onClick={() => setStage(option.id)}
              >
                <span>{option.label}</span>

                {stage === option.id && (
                  <span aria-hidden="true">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="consultation-selector__result">
        <div className="consultation-selector__result-top">
          <span>Consultation</span>
          <span>01 / 06</span>
        </div>

        <div className="consultation-selector__result-main">
          <div className="consultation-selector__result-copy">
            <span className="consultation-selector__result-number">
              01
            </span>

            <h3>{data.title}</h3>

            <p className="consultation-selector__description">
              {data.description}
            </p>

            <div className="consultation-selector__best-for">
              <span>Best for</span>

              <p>{data.bestFor}</p>
            </div>
          </div>

          <div className="consultation-selector__project">
            <div className="consultation-selector__project-image">
              <img
                src={data.image}
                alt={data.project}
              />
            </div>

            <div className="consultation-selector__project-info">
              <span>Related project</span>

              <strong>{data.project}</strong>

              <small>{data.projectMeta}</small>
            </div>
          </div>
        </div>

        <div className="consultation-selector__details">
          <div>
            <span>We look at</span>

            <div className="consultation-selector__focus">
              {data.focus.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div>
            <span>You'll leave with</span>

            <p>{data.outcome}</p>
          </div>
        </div>

        <div className="consultation-selector__stage">
          <div>
            <span>Current stage</span>
            <strong>{currentStage.title}</strong>
          </div>

          <p>{currentStage.description}</p>
        </div>

        <div className="consultation-selector__result-footer">
          <span>{data.duration}</span>
          <span>{data.format}</span>
        </div>
      </div>
    </div>
  );
}

export default ConsultationSelector;