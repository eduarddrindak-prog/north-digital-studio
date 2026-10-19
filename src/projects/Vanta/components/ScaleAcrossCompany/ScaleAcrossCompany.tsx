import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/North Base/ui/Button";

import {
  scaleAcrossCompanyContent,
} from "./content";

import "./ScaleAcrossCompany.css";

type Team = {
  id: string;
  name: string;
  count: number;
  icon: string;
  iconClass: string;
  tasks: string[];
  workflow: {
    input: string;
    steps: string[];
    output: string;
  };
};

function useAnimatedCount(baseValue: number, offsetRange = 2) {
  const [target, setTarget] = useState(baseValue);
  const [display, setDisplay] = useState(baseValue);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(target);
      return;
    }

    let frame = 0;
    let start = performance.now();
    const startValue = display;
    const duration = 900;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(
        startValue + (target - startValue) * eased,
      );

      setDisplay(next);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
    // target intentionally drives the animation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => {
      const delta =
        Math.floor(Math.random() * (offsetRange * 2 + 1)) -
        offsetRange;

      setTarget(Math.max(1, baseValue + delta));
    }, 3200 + Math.random() * 1500);

    return () => window.clearInterval(interval);
  }, [baseValue, offsetRange]);

  return display;
}

function AnimatedCount({
  value,
  className = "",
}: {
  value: number;
  className?: string;
}) {
  const count = useAnimatedCount(value);

  return (
    <div className={className}>
      {count.toLocaleString("en-US")}
    </div>
  );
}

export default function ScaleAcrossCompany() {
  const [activeTeam, setActiveTeam] =
    useState<string | null>("operations");

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

  const activeTeamData = useMemo(
    () =>
      typedTeams.find((team) => team.id === activeTeam) ??
      typedTeams[0],
    [activeTeam, typedTeams],
  );

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
          {/* TEAM CARDS + THEIR SHARED INFRASTRUCTURE SPINE */}
          <div className="vanta-scale__cards">
            <div
              className="vanta-scale__spine"
              aria-hidden="true"
            >
              <span className="vanta-scale__spine-core" />

              {typedTeams.map((team, index) => (
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

            {typedTeams.map((team) => {
              const isActive =
                activeTeam === team.id;

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
                  onMouseLeave={() =>
                    setActiveTeam(null)
                  }
                  onFocus={() =>
                    setActiveTeam(team.id)
                  }
                  onClick={() =>
                    setActiveTeam(team.id)
                  }
                  tabIndex={0}
                  role="button"
                  aria-pressed={isActive}
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {
                      event.preventDefault();
                      setActiveTeam(team.id);
                    }
                  }}
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
                        <span>{team.name}</span>

                        <span
                          className="vanta-scale__active-dot"
                          aria-hidden="true"
                        >
                          ●
                        </span>
                      </div>

                      <AnimatedCount
                        value={team.count}
                        className="vanta-scale__count"
                      />

                      <span className="vanta-scale__count-label">
                        {labels.activeWorkflows}
                      </span>
                    </div>

                    <div className="vanta-scale__tasks">
                      {team.tasks.map((task) => (
                        <span key={task}>
                          <i aria-hidden="true">
                            ○
                          </i>
                          {task}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* TECHNICAL WORKFLOW */}
                  <div
                    className="vanta-scale__workflow"
                    aria-hidden="true"
                  >
                    <div className="vanta-scale__workflow-header">
                      <span>{labels.workflow}</span>

                      <span>
                        {String(
                          typedTeams.findIndex(
                            (item) =>
                              item.id === team.id,
                          ) + 1,
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

                              <strong>{step}</strong>
                            </div>
                          ),
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
              {integrations.map((integration) => (
                <Button
                  key={integration}
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="vanta-scale__integration"
                  aria-label={`Connected tool: ${integration}`}
                >
                  <span aria-hidden="true">
                    {integration.charAt(0)}
                  </span>

                  <small>{integration}</small>
                </Button>
              ))}
            </div>

            <div className="vanta-scale__more">
              <span />
              <strong>AND 50+ </strong>
              <strong>MORE</strong>
            </div>
          </div>

          {/* ACTIVE SYSTEM STATUS */}
          <div className="vanta-scale__active-status">
            <span className="vanta-scale__active-status-line" />

            <div>
              <span>{labels.activeSystem}</span>

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
