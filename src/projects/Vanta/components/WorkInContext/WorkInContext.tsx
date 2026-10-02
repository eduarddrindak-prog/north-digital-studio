import { useState } from "react";

import {
  type Scenario,
  type ScenarioStep,
  workInContextContent,
} from "./content";

import "./WorkInContext.css";

function StepIcon({
  type,
}: {
  type: ScenarioStep["icon"];
}) {
  if (type === "document") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7 3.5h7l4 4V20.5H7z" />
        <path d="M14 3.5v4h4" />
        <path d="M10 12h5" />
        <path d="M10 15h5" />
      </svg>
    );
  }

  if (type === "extract") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M8 4H5v3" />
        <path d="M16 4h3v3" />
        <path d="M8 20H5v-3" />
        <path d="M16 20h3v-3" />
        <rect
          x="8"
          y="8"
          width="8"
          height="8"
          rx="1"
        />
      </svg>
    );
  }

  if (type === "check") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 3.5l7 3v5.5c0 4.3-2.8 7.3-7 9-4.2-1.7-7-4.7-7-9V6.5z" />
        <path d="m8.7 12 2.2 2.2 4.4-4.4" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 4.5 20 19H4z" />
      <path d="M12 9v4" />
      <path d="M12 16.2v.1" />
    </svg>
  );
}

export default function WorkInContext() {
  const {
    eyebrow,
    title,
    description,
    navigationLabel,
    outcomeLabel,
    outcomeDataLabels,
    footer,
    scenarios,
  } = workInContextContent;

  const [activeScenarioId, setActiveScenarioId] =
    useState(scenarios[0].id);

  const [activeOutcomeId, setActiveOutcomeId] =
    useState(scenarios[0].outcome.id);

  const activeScenario =
    scenarios.find(
      (scenario) =>
        scenario.id === activeScenarioId
    ) ?? scenarios[0];

  const outcomes = [
    activeScenario.outcome,
    ...activeScenario.alternatives,
  ];

  const activeOutcome =
    outcomes.find(
      (outcome) =>
        outcome.id === activeOutcomeId
    ) ?? activeScenario.outcome;

  const selectScenario = (id: string) => {
    setActiveScenarioId(id);

    const scenario =
      scenarios.find(
        (item) => item.id === id
      ) ?? scenarios[0];

    setActiveOutcomeId(
      scenario.outcome.id
    );
  };

  return (
    <section
      className="vanta-context"
      id="use-cases"
      aria-labelledby="context-title"
    >
      <div className="vanta-context__grid" />

      <div className="vanta-context__container">
        <div className="vanta-context__intro">
          <div className="vanta-context__eyebrow">
            <span className="vanta-context__eyebrow-line" />

            <span>{eyebrow.number}</span>

            <span>{eyebrow.label}</span>
          </div>

          <h2 id="context-title">
            {title.lineOne}
            <br />
            <span>{title.lineTwo}</span>
          </h2>

          <p className="vanta-context__description">
            {description}
          </p>

          <nav
            className="vanta-context__scenarios"
            aria-label={navigationLabel}
          >
            {scenarios.map((scenario) => {
              const isActive =
                scenario.id ===
                activeScenario.id;

              return (
                <button
                  key={scenario.id}
                  type="button"
                  className={[
                    "vanta-context__scenario",
                    isActive ? "is-active" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() =>
                    selectScenario(
                      scenario.id
                    )
                  }
                  aria-pressed={isActive}
                >
                  <span className="vanta-context__scenario-number">
                    {scenario.number}
                  </span>

                  <span className="vanta-context__scenario-copy">
                    <strong>
                      {scenario.name}
                    </strong>

                    <small>
                      {scenario.description}
                    </small>
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="vanta-context__workspace">
          <div className="vanta-context__workspace-header">
            <div>
              <span className="vanta-context__scenario-label">
                SCENARIO {activeScenario.number}
              </span>

              <h3>{activeScenario.name}</h3>
            </div>

            <span className="vanta-context__category">
              {activeScenario.category}
            </span>
          </div>

          <div className="vanta-context__scenario-body">
            <div className="vanta-context__workflow">
              <div className="vanta-context__workflow-line" />

              {activeScenario.steps.map(
                (step, index) => (
                  <div
                    className={[
                      "vanta-context__step",
                      index ===
                      activeScenario.steps.length -
                        1
                        ? "is-final"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    key={step.label}
                  >
                    <div className="vanta-context__step-icon">
                      <StepIcon
                        type={step.icon}
                      />
                    </div>

                    <div className="vanta-context__step-copy">
                      <strong>
                        {step.label}
                      </strong>

                      <span>
                        {step.description}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="vanta-context__outcome-area">
              <div className="vanta-context__connector">
                <span />
              </div>

              <div className="vanta-context__outcome">
                <span className="vanta-context__outcome-label">
                  {outcomeLabel}
                </span>

                <div className="vanta-context__outcome-title">
                  <span className="vanta-context__outcome-arrow">
                    →
                  </span>

                  <div>
                    <strong>
                      {activeOutcome.title}
                    </strong>

                    <span>
                      {activeOutcome.detail}
                    </span>
                  </div>
                </div>

                <div className="vanta-context__outcome-divider" />

                <div className="vanta-context__outcome-data">
                  <div>
                    <span>
                      {outcomeDataLabels.value}
                    </span>

                    <strong>
                      {activeOutcome.amount}
                    </strong>
                  </div>

                  <div>
                    <span>
                      {outcomeDataLabels.reason}
                    </span>

                    <strong>
                      {activeOutcome.reason}
                    </strong>
                  </div>
                </div>
              </div>

              <div
                className="vanta-context__outcome-tabs"
                role="tablist"
                aria-label="Outcome states"
              >
                {outcomes.map((outcome) => {
                  const isActive =
                    outcome.id ===
                    activeOutcome.id;

                  return (
                    <button
                      key={outcome.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={[
                        "vanta-context__outcome-tab",
                        isActive
                          ? "is-active"
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() =>
                        setActiveOutcomeId(
                          outcome.id
                        )
                      }
                    >
                      <span className="vanta-context__tab-dot" />

                      {outcome.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="vanta-context__workspace-footer">
            <span>{footer.left}</span>

            <span className="vanta-context__footer-status">
              <i />
              {footer.right}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}