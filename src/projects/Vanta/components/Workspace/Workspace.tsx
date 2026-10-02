import { useState } from "react";

import { workspaceContent } from "./content";

import "./Workspace.css";

type WorkflowNode = {
  type: string;
  label: string;
  description: string;
  app: string;
  appClass: string;
};

type Workflow = {
  id: string;
  name: string;
  status: "Live" | "Draft";
  nodes: WorkflowNode[];
};

export default function Workspace() {
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const [selectedNode, setSelectedNode] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [deployed, setDeployed] = useState(true);

  const {
    intro,
    navigation,
    sidebar,
    workflows,
    sidebarWorkflows,
    application,
  } = workspaceContent;

  const typedWorkflows = workflows as Workflow[];

  const workflow =
    typedWorkflows[activeWorkflow] ??
    typedWorkflows[0];

  const node =
    workflow.nodes[selectedNode] ??
    workflow.nodes[0];

  const runTest = () => {
    if (isRunning) return;

    setIsRunning(true);

    setTimeout(() => {
      setIsRunning(false);
    }, 2800);
  };

  const selectWorkflow = (index: number) => {
    if (!typedWorkflows[index]) return;

    setActiveWorkflow(index);
    setSelectedNode(0);
    setIsRunning(false);
  };

  return (
    <section
      className="vanta-workspace"
      id="product"
    >
      <div className="vanta-workspace__grid" />

      <div className="vanta-workspace__container">
        {/* SECTION INTRO */}

        <div className="vanta-workspace__intro">
          <div className="vanta-workspace__eyebrow">
            <span />
            <span>{intro.eyebrow.number}</span>
            <span>{intro.eyebrow.label}</span>
          </div>

          <h2>
            {intro.title.lineOne}
            <br />
            {intro.title.lineTwo}
          </h2>

          <p>{intro.description}</p>
        </div>

        {/* APPLICATION */}

        <div className="vanta-workspace__app">
          {/* SIDEBAR */}

          <aside className="vanta-workspace__sidebar">
            <div className="vanta-workspace__brand">
              VANTA
            </div>

            <nav className="vanta-workspace__nav">
              {navigation.map((item) => (
                <button
                  key={item.label}
                  className={
                    item.active
                      ? "is-active"
                      : ""
                  }
                  type="button"
                >
                  <span>{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              className="vanta-workspace__new"
              type="button"
            >
              <span>+</span>
              {sidebar.newWorkflow}
            </button>

            <div className="vanta-workspace__sidebar-label">
              {sidebar.workflowsLabel}
              <span>{sidebar.searchIcon}</span>
            </div>

            <div className="vanta-workspace__workflow-list">
              {sidebarWorkflows.map(
                (name, index) => {
                  const exists =
                    typedWorkflows[index];

                  return (
                    <button
                      key={name}
                      className={
                        index === activeWorkflow
                          ? "is-selected"
                          : ""
                      }
                      onClick={() => {
                        if (exists) {
                          selectWorkflow(index);
                        }
                      }}
                      type="button"
                    >
                      <span className="workflow-dot" />
                      {name}
                    </button>
                  );
                }
              )}
            </div>

            <div className="vanta-workspace__account">
              <div>
                {sidebar.account.initial}
              </div>

              <span>
                <strong>
                  {sidebar.account.name}
                </strong>

                <small>
                  {sidebar.account.plan}
                </small>
              </span>

              <b>{sidebar.account.arrow}</b>
            </div>
          </aside>

          {/* MAIN APPLICATION */}

          <div className="vanta-workspace__main">
            {/* APP HEADER */}

            <header className="vanta-workspace__header">
              <div className="vanta-workspace__workflow-name">
                <span />

                <strong>
                  {workflow.name}
                </strong>

                <span
                  className={
                    workflow.status === "Live"
                      ? "status-live"
                      : "status-draft"
                  }
                >
                  ● {workflow.status}
                </span>
              </div>

              <div className="vanta-workspace__tabs">
                {application.tabs.map(
                  (tab, index) => (
                    <button
                      key={tab}
                      className={
                        index === 0
                          ? "is-active"
                          : ""
                      }
                      type="button"
                    >
                      {tab}
                    </button>
                  )
                )}
              </div>

              <div className="vanta-workspace__actions">
                <button type="button">
                  {application.actions.share}
                </button>

                <button
                  type="button"
                  className={
                    deployed
                      ? "deploy-button is-deployed"
                      : "deploy-button"
                  }
                  onClick={() =>
                    setDeployed(!deployed)
                  }
                >
                  {deployed
                    ? application.actions
                        .deployed
                    : application.actions.deploy}
                </button>
              </div>
            </header>

            {/* WORKSPACE CANVAS */}

            <div className="vanta-workspace__canvas">
              <div className="vanta-workspace__canvas-grid" />

              <div className="vanta-workflow">
                {workflow.nodes.map(
                  (workflowNode, index) => (
                    <div
                      key={`${workflow.id}-${workflowNode.label}`}
                      className={[
                        "vanta-workflow-node",
                        selectedNode === index
                          ? "is-selected"
                          : "",
                        isRunning
                          ? "is-running"
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() =>
                        setSelectedNode(index)
                      }
                    >
                      <div className="vanta-workflow-node__top">
                        <span>
                          {workflowNode.type}
                        </span>

                        <i>•••</i>
                      </div>

                      <div className="vanta-workflow-node__body">
                        <div
                          className={[
                            "vanta-workflow-node__icon",
                            workflowNode.appClass,
                          ].join(" ")}
                        >
                          {workflowNode.app}
                        </div>

                        <div>
                          <strong>
                            {workflowNode.label}
                          </strong>

                          <span>
                            {
                              workflowNode.description
                            }
                          </span>
                        </div>
                      </div>

                      <span className="node-port node-port--left" />

                      <span className="node-port node-port--right" />

                      {index <
                        workflow.nodes.length - 1 && (
                        <span className="node-connection">
                          <i />
                        </span>
                      )}
                    </div>
                  )
                )}
              </div>

              {/* NODE DETAILS */}

              <aside className="vanta-node-details">
                <div className="vanta-node-details__header">
                  <span>
                    {application.nodeDetails.title}
                  </span>

                  <button type="button">
                    {application.nodeDetails.menu}
                  </button>
                </div>

                <div className="vanta-node-details__app">
                  <div
                    className={[
                      "vanta-node-details__icon",
                      node.appClass,
                    ].join(" ")}
                  >
                    {node.app}
                  </div>

                  <div>
                    <strong>{node.label}</strong>

                    <span>{node.type}</span>
                  </div>
                </div>

                <p>
                  {node.description}. This action is
                  automatically handled by VANTA
                  when the workflow reaches this
                  step.
                </p>

                <label>
                  {application.nodeDetails.channel}

                  <div className="vanta-select">
                    {node.appClass === "slack"
                      ? "#leads"
                      : application.nodeDetails
                          .defaultChannel}

                    <span>⌄</span>
                  </div>
                </label>

                <label>
                  {application.nodeDetails.triggerOn}

                  <div className="vanta-select">
                    {
                      application.nodeDetails
                        .defaultTrigger
                    }

                    <span>⌄</span>
                  </div>
                </label>

                <div className="vanta-toggle-row">
                  <span>
                    {
                      application.nodeDetails
                        .includeContext
                    }
                  </span>

                  <button
                    type="button"
                    className="vanta-toggle is-on"
                  >
                    <i />
                  </button>
                </div>

                <div className="vanta-toggle-row">
                  <span>
                    {
                      application.nodeDetails
                        .continueOnError
                    }
                  </span>

                  <button
                    type="button"
                    className="vanta-toggle"
                  >
                    <i />
                  </button>
                </div>
              </aside>

              {/* EXECUTION LOG */}

              <div className="vanta-execution">
                <div className="vanta-panel-heading">
                  <div>
                    <span className="live-dot" />
                    {
                      application.execution.title
                    }
                  </div>

                  <span className="live-label">
                    {application.execution.live}
                  </span>
                </div>

                <div className="vanta-log-list">
                  {application.execution.rows.map(
                    (row, index) => {
                      let text = row.text ?? "";

                      if (
                        "textFrom" in row &&
                        row.textFrom === "node"
                      ) {
                        text = `${node.label} completed`;
                      }

                      if (
                        "textFrom" in row &&
                        row.textFrom === "workflow"
                      ) {
                        text = "Workflow started";
                      }

                      return (
                        <LogRow
                          key={`${row.time}-${index}`}
                          time={row.time}
                          text={text}
                          detail={row.detail}
                          success={row.success}
                        />
                      );
                    }
                  )}
                </div>
              </div>

              {/* TEST RUN */}

              <div className="vanta-test">
                <div className="vanta-panel-heading">
                  <div>
                    {application.testRun.title}
                  </div>

                  <button
                    type="button"
                    onClick={runTest}
                    disabled={isRunning}
                  >
                    {isRunning
                      ? application.testRun
                          .running
                      : application.testRun.run}
                  </button>
                </div>

                <div className="vanta-test-list">
                  {workflow.nodes.map(
                    (testNode, index) => (
                      <div
                        key={testNode.label}
                        className={
                          isRunning &&
                          index <= 2
                            ? "is-running"
                            : ""
                        }
                      >
                        <span>✓</span>

                        <strong>
                          {testNode.label}
                        </strong>

                        <small>
                          {
                            application.testRun
                              .durations[index]
                          }
                        </small>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type LogRowProps = {
  time: string;
  text: string;
  detail?: string;
  success?: boolean;
};

function LogRow({
  time,
  text,
  detail,
  success = false,
}: LogRowProps) {
  return (
    <div className="vanta-log-row">
      <span className="vanta-log-arrow">
        ›
      </span>

      <time>{time}</time>

      <strong>{text}</strong>

<span
  className={
    success ? "success" : ""
  }
>
  {detail ?? ""}
</span>
    </div>
  );
}