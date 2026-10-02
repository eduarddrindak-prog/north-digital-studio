import { useState } from "react";

import { howItWorksContent } from "./content";

import "./HowItWorks.css";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      className="vanta-how"
      id="how-it-works"
    >
      <div className="vanta-how__grid" />

      <div className="vanta-how__container">
        {/* LEFT */}
        <div className="vanta-how__content">
          <div className="vanta-how__eyebrow">
            <span className="vanta-how__eyebrow-line" />

            <span>
              {howItWorksContent.eyebrow.number}
            </span>

            <span>
              {howItWorksContent.eyebrow.label}
            </span>
          </div>

          <h2 className="vanta-how__title">
            {howItWorksContent.title}
          </h2>

          <p className="vanta-how__description">
            {howItWorksContent.description}
          </p>

          <div className="vanta-how__steps">
            {howItWorksContent.steps.map(
              (step, index) => (
                <button
                  key={step.number}
                  type="button"
                  className={[
                    "vanta-how__step",
                    activeStep === index
                      ? "vanta-how__step--active"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onMouseEnter={() =>
                    setActiveStep(index)
                  }
                  onFocus={() =>
                    setActiveStep(index)
                  }
                  onClick={() =>
                    setActiveStep(index)
                  }
                >
                  <span className="vanta-how__step-number">
                    {step.number}
                  </span>

                  <span className="vanta-how__step-content">
                    <strong>{step.title}</strong>

                    <span>
                      {step.description}
                    </span>
                  </span>
                </button>
              )
            )}
          </div>

          <a
            href={howItWorksContent.cta.href}
            className="vanta-how__cta"
          >
            <span>{howItWorksContent.cta.label}</span>
            <span>→</span>
          </a>
        </div>

        {/* RIGHT — EXECUTION SYSTEM */}
        <div className="vanta-how__visual">
          <div className="vanta-how__visual-grid" />

          {/* TOP EVENT */}
          <div className="vanta-how__event-card">
            <div className="vanta-how__card-top">
              <div className="vanta-how__card-status">
                <span />
                {howItWorksContent.event.status}
              </div>

              <span>
                {howItWorksContent.event.time}
              </span>
            </div>

            <div className="vanta-how__event-body">
              <div className="vanta-how__app-icon vanta-how__app-icon--slack">
                <span>✣</span>
              </div>

              <div>
                <strong>
                  {howItWorksContent.event.application}
                </strong>

                <span>
                  {howItWorksContent.event.description}
                </span>
              </div>

              <span className="vanta-how__event-arrow">
                →
              </span>
            </div>
          </div>

          {/* CONNECTION 1 */}
          <div className="vanta-how__connector vanta-how__connector--one">
            <span />
          </div>

          {/* PROCESSING */}
          <div
            className={[
              "vanta-how__processing",
              activeStep === 1
                ? "vanta-how__processing--active"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className="vanta-how__card-top">
              <div className="vanta-how__card-status">
                <span />
                {howItWorksContent.processing.status}
              </div>

              <span>
                {howItWorksContent.processing.time}
              </span>
            </div>

            <div className="vanta-how__processing-body">
              <div className="vanta-how__core">
                <div className="vanta-how__core-orbit">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="vanta-how__core-center">
                  V
                </div>
              </div>

              <div className="vanta-how__core-info">
                <strong>
                  {howItWorksContent.processing.coreName}
                </strong>

                <span>
                  {howItWorksContent.processing.coreStatus}
                </span>
              </div>

              <div className="vanta-how__checks">
                {howItWorksContent.processing.checks.map(
                  (check) => {
                    const className =
                      check.status === "done"
                        ? "is-done"
                        : check.status === "active"
                          ? "is-active"
                          : "";

                    const icon =
                      check.status === "done"
                        ? "✓"
                        : check.status === "active"
                          ? "●"
                          : "○";

                    return (
                      <div
                        key={check.label}
                        className={className}
                      >
                        <span>{icon}</span>
                        {check.label}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          {/* CONNECTION 2 */}
          <div className="vanta-how__connector vanta-how__connector--two">
            <span />
          </div>

          {/* OUTPUT */}
          <div className="vanta-how__action-card">
            <div className="vanta-how__card-top">
              <div className="vanta-how__card-status">
                <span />
                {howItWorksContent.action.status}
              </div>

              <span>
                {howItWorksContent.action.time}
              </span>
            </div>

            <div className="vanta-how__action-body">
              <div className="vanta-how__app-icon vanta-how__app-icon--notion">
                N
              </div>

              <div>
                <strong>
                  {howItWorksContent.action.application}
                </strong>

                <span>
                  {howItWorksContent.action.description}
                </span>
              </div>

              <div className="vanta-how__success">
                <span>✓</span>
                {howItWorksContent.action.result}
              </div>

              <span className="vanta-how__event-arrow">
                →
              </span>
            </div>
          </div>

          {/* METRICS */}
          <div className="vanta-how__metrics">
            <div className="vanta-how__metrics-header">
              <span className="vanta-how__metrics-dot" />

              {howItWorksContent.metrics.label}
            </div>

            <div className="vanta-how__metric">
              <strong>
                {howItWorksContent.metrics.eventsPerSecond.value}
              </strong>

              <span>
                {howItWorksContent.metrics.eventsPerSecond.label}
              </span>

              <div className="vanta-how__bars">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>

            <div className="vanta-how__metric">
              <strong>
                {howItWorksContent.metrics.averageLatency.value}
              </strong>

              <span>
                {howItWorksContent.metrics.averageLatency.label}
              </span>

              <div className="vanta-how__line-chart">
                <svg
                  viewBox="0 0 220 60"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0 45 C20 42 22 51 38 42 C53 33 55 43 69 36 C84 28 87 39 101 31 C115 23 119 34 132 27 C147 20 149 30 163 21 C179 10 181 28 194 17 C205 8 211 15 220 8" />
                </svg>
              </div>
            </div>

            <div className="vanta-how__metric vanta-how__metric--last">
              <strong>
                {howItWorksContent.metrics.successRate.value}
              </strong>

              <span>
                {howItWorksContent.metrics.successRate.label}
              </span>

              <div className="vanta-how__success-bars">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>

          {/* EVENT LOG */}
          <div className="vanta-how__event-log">
            <span className="vanta-how__event-log-dot" />

            <div>
              <span>
                {howItWorksContent.executionLog.label}
              </span>

              <strong>
                {howItWorksContent.executionLog.event}
              </strong>
            </div>

            <em>
              {howItWorksContent.executionLog.status}
            </em>
          </div>
        </div>
      </div>
    </section>
  );
}