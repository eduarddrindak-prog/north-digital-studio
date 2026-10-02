import { useState } from "react";

import {
  scaleAcrossCompanyContent,
} from "./content";

import "./ScaleAcrossCompany.css";

type Team = {
  id: string;
  name: string;
  count: string;
  icon: string;
  iconClass: string;
  tasks: string[];
  workflow: {
    input: string;
    steps: string[];
    output: string;
  };
};

export default function ScaleAcrossCompany() {
  const [activeTeam, setActiveTeam] =
    useState("operations");

  const {
    eyebrow,
    title,
    description,
    statement,
    teams,
    integrations,
    labels,
  } = scaleAcrossCompanyContent;

  const typedTeams = teams as Team[];

  const activeIndex = Math.max(
    0,
    typedTeams.findIndex(
      (team) => team.id === activeTeam
    )
  );

  const activeTeamData =
    typedTeams[activeIndex] ??
    typedTeams[0];

  return (
    <section
      className="vanta-scale"
      id="scale"
      aria-labelledby="scale-title"
    >
      <div
        className="vanta-scale__grid"
        aria-hidden="true"
      />

      <div className="vanta-scale__container">
        {/* LEFT CONTENT */}

        <div className="vanta-scale__intro">
          <div className="vanta-scale__eyebrow">
            <span className="vanta-scale__eyebrow-line" />

            <span>{eyebrow.number}</span>

            <span>{eyebrow.label}</span>
          </div>

          <h2 id="scale-title">
            {title.lineOne}
            <br />
            {title.lineTwo}
          </h2>

          <p>{description}</p>

          <div className="vanta-scale__statement">
            <span className="vanta-scale__statement-line" />

            <div>
              <span>{statement.label}</span>

              <p>
                {statement.lines[0]}
                <br />
                {statement.lines[1]}
                <br />
                {statement.lines[2]}
              </p>
            </div>
          </div>
        </div>

        {/* TEAM SYSTEM */}

        <div className="vanta-scale__system">
          {/* INFRASTRUCTURE LINE */}

          <div
            className="vanta-scale__spine"
            aria-hidden="true"
          >
            <span className="vanta-scale__spine-core" />

            {typedTeams.map(
              (team, index) => (
                <span
                  key={team.id}
                  className={[
                    "vanta-scale__branch",
                    `vanta-scale__branch--${
                      index + 1
                    }`,
                    activeTeam === team.id
                      ? "is-active"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
              )
            )}
          </div>

          {/* TEAM CARDS */}

          <div className="vanta-scale__cards">
            {typedTeams.map((team) => {
              const isActive =
                activeTeam === team.id;

              return (
                <article
                  key={team.id}
                  className={[
                    "vanta-scale__card",
                    isActive
                      ? "is-active"
                      : "",
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
                  aria-current={
                    isActive
                      ? "true"
                      : undefined
                  }
                >
                  <div className="vanta-scale__card-content">
                    <div className="vanta-scale__card-icon-wrap">
                      <span
                        className={[
                          "vanta-scale__card-icon",
                          team.iconClass,
                        ].join(" ")}
                        aria-hidden="true"
                      >
                        {team.icon}
                      </span>
                    </div>

                    <div className="vanta-scale__card-main">
                      <div className="vanta-scale__card-label">
                        <span>
                          {team.name}
                        </span>

                        <span
                          className="vanta-scale__active-dot"
                          aria-hidden="true"
                        >
                          ●
                        </span>
                      </div>

                      <div className="vanta-scale__count">
                        {team.count}
                      </div>

                      <span className="vanta-scale__count-label">
                        {labels.activeWorkflows}
                      </span>
                    </div>

                    <div className="vanta-scale__tasks">
                      {team.tasks.map(
                        (task) => (
                          <span key={task}>
                            <i aria-hidden="true">
                              ○
                            </i>

                            {task}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* TECHNICAL WORKFLOW */}

                  <div
                    className="vanta-scale__workflow"
                    aria-hidden="true"
                  >
                    <div className="vanta-scale__workflow-header">
                      <span>
                        {labels.workflow}
                      </span>

                      <span>
                        {String(
                          typedTeams.findIndex(
                            (item) =>
                              item.id ===
                              team.id
                          ) + 1
                        ).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="vanta-scale__workflow-flow">
                      <div className="vanta-scale__workflow-node vanta-scale__workflow-node--input">
                        <span className="vanta-scale__workflow-node-index">
                          {labels.input}
                        </span>

                        <strong>
                          {team.workflow.input}
                        </strong>
                      </div>

                      <div className="vanta-scale__workflow-connector">
                        <span />
                      </div>

                      <div className="vanta-scale__workflow-middle">
                        {team.workflow.steps.map(
                          (step, index) => (
                            <div
                              className="vanta-scale__workflow-step"
                              key={step}
                            >
                              <span>
                                0{index + 1}
                              </span>

                              <strong>
                                {step}
                              </strong>
                            </div>
                          )
                        )}
                      </div>

                      <div className="vanta-scale__workflow-connector">
                        <span />
                      </div>

                      <div className="vanta-scale__workflow-node vanta-scale__workflow-node--output">
                        <span className="vanta-scale__workflow-node-index">
                          {labels.output}
                        </span>

                        <strong>
                          {team.workflow.output}
                        </strong>
                      </div>
                    </div>

                    <div className="vanta-scale__workflow-status">
                      <span className="vanta-scale__workflow-status-dot" />

                      <span>
                        {labels.executionActive}
                      </span>
                    </div>
                  </div>

                  <div
                    className="vanta-scale__card-glow"
                    aria-hidden="true"
                  />
                </article>
              );
            })}
          </div>

          {/* CONNECTED TOOLS */}

          <div className="vanta-scale__integrations">
            <div className="vanta-scale__integrations-label">
              {labels.connectedTools.lineOne}
              <br />
              {labels.connectedTools.lineTwo}
            </div>

            <div className="vanta-scale__integrations-list">
              {integrations.map(
                (integration) => (
                  <button
                    key={integration}
                    type="button"
                    className="vanta-scale__integration"
                    aria-label={`Connected tool: ${integration}`}
                  >
                    <span>
                      {integration.charAt(0)}
                    </span>

                    <small>
                      {integration}
                    </small>
                  </button>
                )
              )}
            </div>

            <div className="vanta-scale__more">
              <span />

              <strong>AND</strong>

              <strong>50+ MORE</strong>
            </div>
          </div>

          {/* ACTIVE TEAM STATUS */}

          <div className="vanta-scale__active-status">
            <span className="vanta-scale__active-status-line" />

            <div>
              <span>
                {labels.activeSystem}
              </span>

              <strong>
                {activeTeamData?.name}
              </strong>
            </div>

            <div className="vanta-scale__active-status-meta">
              <span>{labels.workflows}</span>

              <strong>
                {activeTeamData?.count}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}