import { useState } from "react";
import "./HowItWorks.css";

type WorkflowStep = {
  number: string;
  title: string;
  description: string;
};

const steps: WorkflowStep[] = [
  {
    number: "01",
    title: "Connect your tools",
    description:
      "Link your apps and give VANTA access to the data your workflows depend on.",
  },
  {
    number: "02",
    title: "Define your workflows",
    description:
      "Set rules, conditions, and outcomes in plain language.",
  },
  {
    number: "03",
    title: "VANTA executes",
    description:
      "It handles the work, keeps everything in sync, and adapts as your data changes.",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="vanta-how" id="how-it-works">
      <div className="vanta-how__grid" />

      <div className="vanta-how__container">
        {/* =========================================
            LEFT
        ========================================== */}

        <div className="vanta-how__content">
          <div className="vanta-how__eyebrow">
            <span className="vanta-how__eyebrow-line" />
            <span>02</span>
            <span>HOW IT WORKS</span>
          </div>

          <h2 className="vanta-how__title">
            From events
            <br />
            to execution.
          </h2>

          <p className="vanta-how__description">
            VANTA turns your disconnected tools into a single,
            intelligent system. It listens, understands, and takes
            action — so your workflows run without manual work.
          </p>

          <div className="vanta-how__steps">
            {steps.map((step, index) => (
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
                onMouseEnter={() => setActiveStep(index)}
                onFocus={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
              >
                <span className="vanta-how__step-number">
                  {step.number}
                </span>

                <span className="vanta-how__step-content">
                  <strong>{step.title}</strong>
                  <span>{step.description}</span>
                </span>
              </button>
            ))}
          </div>

          <a
            href="#product"
            className="vanta-how__cta"
          >
            <span>View workflow</span>
            <span>→</span>
          </a>
        </div>

        {/* =========================================
            RIGHT — EXECUTION SYSTEM
        ========================================== */}

        <div className="vanta-how__visual">
          <div className="vanta-how__visual-grid" />

          {/* TOP EVENT */}

          <div className="vanta-how__event-card">
            <div className="vanta-how__card-top">
              <div className="vanta-how__card-status">
                <span />
                EVENT DETECTED
              </div>

              <span>10:24:12</span>
            </div>

            <div className="vanta-how__event-body">
              <div className="vanta-how__app-icon vanta-how__app-icon--slack">
                <span>✣</span>
              </div>

              <div>
                <strong>Slack</strong>
                <span>New message in #leads</span>
              </div>

              <span className="vanta-how__event-arrow">→</span>
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
                AI PROCESSING
              </div>

              <span>10:24:12</span>
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
                <strong>VANTA CORE</strong>
                <span>PROCESSING CONTEXT...</span>
              </div>

              <div className="vanta-how__checks">
                <div className="is-done">
                  <span>✓</span>
                  Analyze content
                </div>

                <div className="is-done">
                  <span>✓</span>
                  Identify intent
                </div>

                <div className="is-active">
                  <span>●</span>
                  Find related data
                </div>

                <div>
                  <span>○</span>
                  Execute workflow
                </div>
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
                ACTION EXECUTED
              </div>

              <span>10:24:13</span>
            </div>

            <div className="vanta-how__action-body">
              <div className="vanta-how__app-icon vanta-how__app-icon--notion">
                N
              </div>

              <div>
                <strong>Notion</strong>
                <span>New page created</span>
              </div>

              <div className="vanta-how__success">
                <span>✓</span>
                Success
              </div>

              <span className="vanta-how__event-arrow">→</span>
            </div>
          </div>

          {/* METRICS */}

          <div className="vanta-how__metrics">
            <div className="vanta-how__metrics-header">
              <span className="vanta-how__metrics-dot" />
              REAL-TIME EXECUTION
            </div>

            <div className="vanta-how__metric">
              <strong>1,842</strong>
              <span>EVENTS / SEC</span>

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
              <strong>42ms</strong>
              <span>AVG LATENCY</span>

              <div className="vanta-how__line-chart">
                <svg
                  viewBox="0 0 220 60"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 45 C20 42 22 51 38 42 C53 33 55 43 69 36 C84 28 87 39 101 31 C115 23 119 34 132 27 C147 20 149 30 163 21 C179 10 181 28 194 17 C205 8 211 15 220 8"
                  />
                </svg>
              </div>
            </div>

            <div className="vanta-how__metric vanta-how__metric--last">
              <strong>99.98%</strong>
              <span>SUCCESS RATE</span>

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
              <span>EXECUTION LOG</span>
              <strong>
                workflow.execute
              </strong>
            </div>

            <em>SUCCESS</em>
          </div>
        </div>
      </div>
    </section>
  );
}