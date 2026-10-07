import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/North Base/ui/Button";
import { IconButton } from "@/components/North Base/ui/IconButton";
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
  const [selectedNode, setSelectedNode] = useState<number | null>(0);
  const [isRunning, setIsRunning] = useState(false);
  const [runningNode, setRunningNode] = useState(-1);
  const [deployed, setDeployed] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [includeContext, setIncludeContext] = useState(true);
  const [continueOnError, setContinueOnError] = useState(false);
  const runTimeouts = useRef<number[]>([]);

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
    selectedNode === null
      ? null
      : workflow.nodes[selectedNode] ?? null;

  const clearRunTimeouts = () => {
    runTimeouts.current.forEach((timeout) =>
      window.clearTimeout(timeout),
    );
    runTimeouts.current = [];
  };

  useEffect(() => clearRunTimeouts, []);

  const runTest = () => {
    if (isRunning) return;

    clearRunTimeouts();
    setIsRunning(true);
    setRunningNode(0);

    runTimeouts.current = [
      window.setTimeout(() => setRunningNode(1), 700),
      window.setTimeout(() => setRunningNode(2), 1400),
      window.setTimeout(() => setRunningNode(3), 2100),
      window.setTimeout(() => {
        setRunningNode(-1);
        setIsRunning(false);
      }, 2800),
    ];
  };

  const selectWorkflow = (index: number) => {
    if (!typedWorkflows[index]) return;

    setActiveWorkflow(index);
    setSelectedNode(0);
    clearRunTimeouts();
    setRunningNode(-1);
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

            <Button
              className="vanta-workspace__new"
              variant="secondary"
              size="sm"
              type="button"
            >
              <span>+</span>
              {sidebar.newWorkflow}
            </Button>

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

              <div
                className="vanta-workspace__tabs"
                role="tablist"
                aria-label="Workspace views"
              >
                {application.tabs.map(
                  (tab, index) => (
                    <button
                      key={tab}
                      className={
                        index === activeTab
                          ? "is-active"
                          : ""
                      }
                      type="button"
                      role="tab"
                      aria-selected={index === activeTab}
                      onClick={() => setActiveTab(index)}
                    >
                      {tab}
                    </button>
                  )
                )}
              </div>

              <div className="vanta-workspace__actions">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="vanta-workspace__share"
                >
                  {application.actions.share}
                </Button>

                <Button
                  type="button"
                  variant={deployed ? "success" : "secondary"}
                  size="sm"
                  className={
                    deployed
                      ? "deploy-button is-deployed"
                      : "deploy-button"
                  }
                  onClick={() => setDeployed(!deployed)}
                >
                  {deployed
                    ? application.actions.deployed
                    : application.actions.deploy}
                </Button>
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
                        runningNode === index
                          ? "is-running"
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      role="button"
                      tabIndex={0}
                      aria-pressed={selectedNode === index}
                      onClick={() =>
                        setSelectedNode((current) =>
                          current === index ? null : index
                        )
                      }
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setSelectedNode((current) =>
                            current === index ? null : index
                          );
                        }
                      }}
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

                  <IconButton
                    type="button"
                    variant="ghost"
                    size="sm"
                    label="Node options"
                    icon={<span aria-hidden="true">•••</span>}
                  />
                </div>

                {node ? (
                  <>
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
                          : application.nodeDetails.defaultChannel}
                        <span>⌄</span>
                      </div>
                    </label>

                    <label>
                      {application.nodeDetails.triggerOn}
                      <div className="vanta-select">
                        {application.nodeDetails.defaultTrigger}
                        <span>⌄</span>
                      </div>
                    </label>

                    <div className="vanta-toggle-row">
                      <span>{application.nodeDetails.includeContext}</span>
                      <button
                        type="button"
                        className={`vanta-toggle ${includeContext ? "is-on" : ""}`}
                        aria-pressed={includeContext}
                        onClick={() => setIncludeContext((value) => !value)}
                      >
                        <i />
                      </button>
                    </div>

                    <div className="vanta-toggle-row">
                      <span>{application.nodeDetails.continueOnError}</span>
                      <button
                        type="button"
                        className={`vanta-toggle ${continueOnError ? "is-on" : ""}`}
                        aria-pressed={continueOnError}
                        onClick={() => setContinueOnError((value) => !value)}
                      >
                        <i />
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="vanta-node-details__empty">
                    <span>NO NODE SELECTED</span>
                    <p>Select a workflow step to inspect its configuration.</p>
                  </div>
                )}
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
                        text = node ? `${node.label} completed` : "Node completed";
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

                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    className="vanta-test__run"
                    onClick={runTest}
                    disabled={isRunning}
                  >
                    {isRunning
                      ? application.testRun
                          .running
                      : application.testRun.run}
                  </Button>
                </div>

                <div className="vanta-test-list">
                  {workflow.nodes.map(
                    (testNode, index) => (
                      <div
                        key={testNode.label}
                        className={
                          isRunning &&
                          index === runningNode
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