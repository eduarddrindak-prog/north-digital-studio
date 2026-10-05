import { useState } from "react";

import "./WorkInContext.css";

type Outcome = {
  id: string;
  label: string;
  title: string;
  detail: string;
  amount: string;
  reason: string;
};

type Scenario = {
  id: string;
  number: string;
  name: string;
  description: string;
  category: string;
  steps: {
    label: string;
    description: string;
    icon: "document" | "extract" | "check" | "warning";
  }[];
  outcome: Outcome;
  alternatives: Outcome[];
};

const scenarios: Scenario[] = [
  {
    id: "invoice-review",
    number: "01",
    name: "INVOICE REVIEW",
    description: "Process and verify incoming invoices",
    category: "FINANCE / AP AUTOMATION",
    steps: [
      {
        label: "INVOICE RECEIVED",
        description: "PDF or email attachment",
        icon: "document",
      },
      {
        label: "DATA EXTRACTED",
        description: "Vendor, amount, date, line items",
        icon: "extract",
      },
      {
        label: "POLICY CHECK",
        description: "Matches company rules and spending limits",
        icon: "check",
      },
      {
        label: "EXCEPTION DETECTED",
        description: "Amount exceeds policy limit",
        icon: "warning",
      },
    ],
    outcome: {
      id: "finance",
      label: "Finance",
      title: "SENT TO FINANCE",
      detail: "REQUIRES REVIEW",
      amount: "$12,480",
      reason: "Exceeds policy limit",
    },
    alternatives: [
      {
        id: "auto-approve",
        label: "Auto-approve",
        title: "AUTO-APPROVED",
        detail: "WITHIN POLICY",
        amount: "$4,280",
        reason: "Matches spending rules",
      },
      {
        id: "flag",
        label: "Flag",
        title: "FLAGGED",
        detail: "MISSING INFORMATION",
        amount: "$7,920",
        reason: "Required fields incomplete",
      },
    ],
  },
  {
    id: "lead-routing",
    number: "02",
    name: "LEAD ROUTING",
    description: "Qualify and route new leads",
    category: "SALES / LEAD AUTOMATION",
    steps: [
      {
        label: "LEAD RECEIVED",
        description: "Form submission or inbound request",
        icon: "document",
      },
      {
        label: "DATA ENRICHED",
        description: "Company, role, size and intent",
        icon: "extract",
      },
      {
        label: "QUALIFICATION",
        description: "Matches sales criteria and territory",
        icon: "check",
      },
      {
        label: "ROUTE CREATED",
        description: "Assigned to the right sales team",
        icon: "warning",
      },
    ],
    outcome: {
      id: "sales",
      label: "Sales",
      title: "ROUTED TO SALES",
      detail: "QUALIFIED LEAD",
      amount: "Enterprise",
      reason: "Matches target account profile",
    },
    alternatives: [
      {
        id: "nurture",
        label: "Nurture",
        title: "ADDED TO NURTURE",
        detail: "NOT READY",
        amount: "SMB",
        reason: "Timing does not match criteria",
      },
      {
        id: "reject",
        label: "Reject",
        title: "NOT QUALIFIED",
        detail: "OUTSIDE ICP",
        amount: "Low fit",
        reason: "Does not match target profile",
      },
    ],
  },
  {
    id: "data-reconciliation",
    number: "03",
    name: "DATA RECONCILIATION",
    description: "Match and resolve data across systems",
    category: "OPERATIONS / DATA AUTOMATION",
    steps: [
      {
        label: "DATA RECEIVED",
        description: "Records arrive from connected systems",
        icon: "document",
      },
      {
        label: "RECORDS MATCHED",
        description: "Customer and transaction data compared",
        icon: "extract",
      },
      {
        label: "CONFLICT CHECK",
        description: "Values compared against source rules",
        icon: "check",
      },
      {
        label: "MISMATCH FOUND",
        description: "Conflicting records require attention",
        icon: "warning",
      },
    ],
    outcome: {
      id: "operations",
      label: "Operations",
      title: "SENT TO OPERATIONS",
      detail: "REQUIRES REVIEW",
      amount: "24 records",
      reason: "Source values do not match",
    },
    alternatives: [
      {
        id: "synced",
        label: "Sync",
        title: "RECORDS SYNCED",
        detail: "MATCH CONFIRMED",
        amount: "184 records",
        reason: "Sources are consistent",
      },
      {
        id: "hold",
        label: "Hold",
        title: "SYNC ON HOLD",
        detail: "SOURCE UNAVAILABLE",
        amount: "12 records",
        reason: "Waiting for source update",
      },
    ],
  },
  {
    id: "support-escalation",
    number: "04",
    name: "SUPPORT ESCALATION",
    description: "Analyze and escalate complex requests",
    category: "SUPPORT / CASE AUTOMATION",
    steps: [
      {
        label: "REQUEST RECEIVED",
        description: "Customer message enters support queue",
        icon: "document",
      },
      {
        label: "CONTEXT ANALYZED",
        description: "History, account and intent identified",
        icon: "extract",
      },
      {
        label: "PRIORITY CHECK",
        description: "Severity and routing rules evaluated",
        icon: "check",
      },
      {
        label: "ESCALATION DETECTED",
        description: "Case requires specialist attention",
        icon: "warning",
      },
    ],
    outcome: {
      id: "support",
      label: "Support",
      title: "SENT TO SPECIALIST",
      detail: "HIGH PRIORITY",
      amount: "P1",
      reason: "Customer impact detected",
    },
    alternatives: [
      {
        id: "resolved",
        label: "Resolve",
        title: "AUTO-RESOLVED",
        detail: "STANDARD REQUEST",
        amount: "P3",
        reason: "Known resolution available",
      },
      {
        id: "queue",
        label: "Queue",
        title: "ADDED TO QUEUE",
        detail: "NORMAL PRIORITY",
        amount: "P2",
        reason: "Specialist review not required",
      },
    ],
  },
];

function StepIcon({
  type,
}: {
  type: Scenario["steps"][number]["icon"];
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
  const [activeScenarioId, setActiveScenarioId] =
    useState("invoice-review");

  const [activeOutcomeId, setActiveOutcomeId] =
    useState("finance");

  const activeScenario =
    scenarios.find(
      (scenario) => scenario.id === activeScenarioId
    ) ?? scenarios[0];

  const outcomes = [
    activeScenario.outcome,
    ...activeScenario.alternatives,
  ];

  const activeOutcome =
    outcomes.find(
      (outcome) => outcome.id === activeOutcomeId
    ) ?? activeScenario.outcome;

  const selectScenario = (id: string) => {
    setActiveScenarioId(id);

    const scenario =
      scenarios.find((item) => item.id === id) ??
      scenarios[0];

    setActiveOutcomeId(scenario.outcome.id);
  };

  return (
    <section
      className="vanta-context"
      id="use-cases"
      aria-labelledby="context-title"
    >
      <div className="vanta-context__grid" />

      <div className="vanta-context__container">
        {/* =================================================
            LEFT
        ================================================= */}

        <div className="vanta-context__intro">
          <div className="vanta-context__eyebrow">
            <span className="vanta-context__eyebrow-line" />

            <span>06</span>

            <span>WORK IN CONTEXT</span>
          </div>

          <h2 id="context-title">
            Real work.
            <br />
            <span>Automatically.</span>
          </h2>

          <p className="vanta-context__description">
            VANTA handles the process from start to
            finish. Your team only sees what needs
            attention.
          </p>

          <nav
            className="vanta-context__scenarios"
            aria-label="Automation scenarios"
          >
            {scenarios.map((scenario) => {
              const isActive =
                scenario.id === activeScenario.id;

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
                    selectScenario(scenario.id)
                  }
                  aria-pressed={isActive}
                >
                  <span className="vanta-context__scenario-number">
                    {scenario.number}
                  </span>

                  <span className="vanta-context__scenario-copy">
                    <strong>{scenario.name}</strong>

                    <small>
                      {scenario.description}
                    </small>
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* =================================================
            RIGHT — SCENARIO
        ================================================= */}

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
            {/* WORKFLOW */}

            <div className="vanta-context__workflow">
              <div className="vanta-context__workflow-line" />

              {activeScenario.steps.map(
                (step, index) => (
                  <div
                    className={[
                      "vanta-context__step",
                      index ===
                      activeScenario.steps.length - 1
                        ? "is-final"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    key={step.label}
                  >
                    <div className="vanta-context__step-icon">
                      <StepIcon type={step.icon} />
                    </div>

                    <div className="vanta-context__step-copy">
                      <strong>{step.label}</strong>

                      <span>{step.description}</span>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* OUTCOME */}

            <div className="vanta-context__outcome-area">
              <div className="vanta-context__connector">
                <span />
              </div>

              <div className="vanta-context__outcome">
                <span className="vanta-context__outcome-label">
                  OUTCOME
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
                    <span>VALUE</span>
                    <strong>
                      {activeOutcome.amount}
                    </strong>
                  </div>

                  <div>
                    <span>REASON</span>
                    <strong>
                      {activeOutcome.reason}
                    </strong>
                  </div>
                </div>
              </div>

              {/* SMALL OUTCOME STATES */}

              <div
                className="vanta-context__outcome-tabs"
                role="tablist"
                aria-label="Outcome states"
              >
                {outcomes.map((outcome) => {
                  const isActive =
                    outcome.id === activeOutcome.id;

                  return (
                    <button
                      key={outcome.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={[
                        "vanta-context__outcome-tab",
                        isActive ? "is-active" : "",
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
            <span>VANTA / AUTOMATION ENGINE</span>

            <span className="vanta-context__footer-status">
              <i />
              PROCESS COMPLETE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}