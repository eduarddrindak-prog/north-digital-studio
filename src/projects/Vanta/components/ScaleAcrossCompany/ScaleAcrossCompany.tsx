import { useState } from "react";
import "./ScaleAcrossCompany.css";

type Team = {
  id: string;
  name: string;
  count: string;
  icon: string;
  iconClass: string;
  tasks: string[];
  image: string;
};

const teams: Team[] = [
  {
    id: "operations",
    name: "OPERATIONS",
    count: "12",
    icon: "◈",
    iconClass: "operations",
    tasks: [
      "Process data",
      "Sync systems",
      "Automate reports",
    ],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "sales",
    name: "SALES",
    count: "18",
    icon: "◫",
    iconClass: "sales",
    tasks: [
      "Qualify leads",
      "Update CRM",
      "Trigger follow-ups",
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "finance",
    name: "FINANCE",
    count: "14",
    icon: "▤",
    iconClass: "finance",
    tasks: [
      "Review invoices",
      "Match payments",
      "Sync to ERP",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "support",
    name: "SUPPORT",
    count: "9",
    icon: "◌",
    iconClass: "support",
    tasks: [
      "Classify requests",
      "Route to team",
      "Generate replies",
    ],
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  },
];

const integrations = [
  "Slack",
  "Notion",
  "Drive",
  "HubSpot",
  "Salesforce",
  "Gmail",
];

export default function ScaleAcrossCompany() {
  const [activeTeam, setActiveTeam] = useState("operations");

  const activeIndex = teams.findIndex(
    (team) => team.id === activeTeam
  );

  return (
    <section
      className="vanta-scale"
      id="scale"
      aria-labelledby="scale-title"
    >
      <div className="vanta-scale__grid" />

      <div className="vanta-scale__container">
        {/* =========================================
            LEFT CONTENT
        ========================================== */}

        <div className="vanta-scale__intro">
          <div className="vanta-scale__eyebrow">
            <span className="vanta-scale__eyebrow-line" />
            <span>04</span>
            <span>SCALE ACROSS YOUR COMPANY</span>
          </div>

          <h2 id="scale-title">
            One system.
            <br />
            Every team.
          </h2>

          <p>
            VANTA gives every team the same automation
            infrastructure — from daily operations to
            customer support.
          </p>

          <div className="vanta-scale__statement">
            <span className="vanta-scale__statement-line" />

            <div>
              <span>COMPANY AUTOMATION</span>

              <p>
                Same infrastructure.
                <br />
                Different teams.
                <br />
                Continuous execution.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================
            TEAM SYSTEM
        ========================================== */}

        <div className="vanta-scale__system">
          {/* INFRASTRUCTURE LINE */}

          <div className="vanta-scale__spine">
            <span className="vanta-scale__spine-core" />

            {teams.map((team, index) => (
              <span
                key={team.id}
                className={[
                  "vanta-scale__branch",
                  `vanta-scale__branch--${index + 1}`,
                  activeTeam === team.id
                    ? "is-active"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
            ))}
          </div>

          {/* TEAM CARDS */}

          <div className="vanta-scale__cards">
            {teams.map((team) => {
              const isActive = activeTeam === team.id;

              return (
                <article
                  key={team.id}
                  className={[
                    "vanta-scale__card",
                    isActive ? "is-active" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onMouseEnter={() =>
                    setActiveTeam(team.id)
                  }
                  onFocus={() =>
                    setActiveTeam(team.id)
                  }
                  tabIndex={0}
                >
                  <div className="vanta-scale__card-content">
                    <div className="vanta-scale__card-icon-wrap">
                      <span
                        className={[
                          "vanta-scale__card-icon",
                          team.iconClass,
                        ].join(" ")}
                      >
                        {team.icon}
                      </span>
                    </div>

                    <div className="vanta-scale__card-main">
                      <div className="vanta-scale__card-label">
                        <span>{team.name}</span>

                        <span className="vanta-scale__active-dot">
                          ●
                        </span>
                      </div>

                      <div className="vanta-scale__count">
                        {team.count}
                      </div>

                      <span className="vanta-scale__count-label">
                        ACTIVE WORKFLOWS
                      </span>
                    </div>

                    <div className="vanta-scale__tasks">
                      {team.tasks.map((task) => (
                        <span key={task}>
                          <i>○</i>
                          {task}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="vanta-scale__card-image">
                    <img
                      src={team.image}
                      alt=""
                      loading="lazy"
                      aria-hidden="true"
                    />

                    <div className="vanta-scale__image-overlay" />

                    <span className="vanta-scale__image-label">
                      {String(
                        teams.findIndex(
                          (item) => item.id === team.id
                        ) + 1
                      ).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="vanta-scale__card-glow" />
                </article>
              );
            })}
          </div>

          {/* CONNECTED TOOLS */}

          <div className="vanta-scale__integrations">
            <div className="vanta-scale__integrations-label">
              CONNECTED
              <br />
              TOOLS
            </div>

            <div className="vanta-scale__integrations-list">
              {integrations.map((integration) => (
                <button
                  key={integration}
                  type="button"
                  className="vanta-scale__integration"
                  aria-label={`Connected tool: ${integration}`}
                >
                  <span>
                    {integration.charAt(0)}
                  </span>

                  <small>{integration}</small>
                </button>
              ))}
            </div>

            <div className="vanta-scale__more">
              <span />
              <strong>AND</strong>
              <strong>50+ MORE</strong>
            </div>
          </div>

          {/* ACTIVE INDICATOR */}

          <div
            className="vanta-scale__active-indicator"
            style={{
              "--active-index": activeIndex,
            } as React.CSSProperties}
          >
            <span />
            {teams[activeIndex]?.name}
            <b>ACTIVE</b>
          </div>
        </div>
      </div>
    </section>
  );
}