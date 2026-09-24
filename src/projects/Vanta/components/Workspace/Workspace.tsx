import { useState } from "react";
import "./Workspace.css";

type Workflow = {
  id: string;
  name: string;
  status: "Live" | "Draft";
  nodes: {
    type: string;
    label: string;
    description: string;
    app: string;
    appClass: string;
  }[];
};

const workflows: Workflow[] = [
  {
    id: "onboarding",
    name: "Customer Onboarding",
    status: "Live",
    nodes: [
      {
        type: "01 · TRIGGER",
        label: "Slack",
        description: "New message in #leads",
        app: "S",
        appClass: "slack",
      },
      {
        type: "02 · AI PROCESSING",
        label: "Analyze with AI",
        description: "Extract company information",
        app: "AI",
        appClass: "ai",
      },
      {
        type: "03 · CREATE",
        label: "Create in HubSpot",
        description: "Add as new contact",
        app: "H",
        appClass: "hubspot",
      },
      {
        type: "04 · NOTIFY",
        label: "Send welcome email",
        description: "Trigger personalized sequence",
        app: "M",
        appClass: "gmail",
      },
    ],
  },
  {
    id: "leads",
    name: "Lead Qualification",
    status: "Live",
    nodes: [
      {
        type: "01 · TRIGGER",
        label: "Website",
        description: "New lead submitted",
        app: "W",
        appClass: "web",
      },
      {
        type: "02 · AI PROCESSING",
        label: "Qualify lead",
        description: "Analyze intent and company",
        app: "AI",
        appClass: "ai",
      },
      {
        type: "03 · UPDATE",
        label: "Update Salesforce",
        description: "Set lead score",
        app: "SF",
        appClass: "salesforce",
      },
      {
        type: "04 · NOTIFY",
        label: "Notify sales",
        description: "Send qualification result",
        app: "S",
        appClass: "slack",
      },
    ],
  },
  {
    id: "invoices",
    name: "Invoice Processing",
    status: "Live",
    nodes: [
      {
        type: "01 · TRIGGER",
        label: "Gmail",
        description: "New invoice received",
        app: "M",
        appClass: "gmail",
      },
      {
        type: "02 · AI PROCESSING",
        label: "Extract invoice data",
        description: "Read amount and vendor",
        app: "AI",
        appClass: "ai",
      },
      {
        type: "03 · UPDATE",
        label: "Update database",
        description: "Store invoice record",
        app: "DB",
        appClass: "database",
      },
      {
        type: "04 · NOTIFY",
        label: "Send approval",
        description: "Request finance review",
        app: "N",
        appClass: "notion",
      },
    ],
  },
  {
    id: "support",
    name: "Support Routing",
    status: "Draft",
    nodes: [
      {
        type: "01 · TRIGGER",
        label: "Intercom",
        description: "New support request",
        app: "I",
        appClass: "intercom",
      },
      {
        type: "02 · AI PROCESSING",
        label: "Classify request",
        description: "Understand customer intent",
        app: "AI",
        appClass: "ai",
      },
      {
        type: "03 · ROUTE",
        label: "Assign team",
        description: "Route to correct queue",
        app: "R",
        appClass: "router",
      },
      {
        type: "04 · NOTIFY",
        label: "Update Slack",
        description: "Notify support team",
        app: "S",
        appClass: "slack",
      },
    ],
  },
];

const sidebarWorkflows = [
  "Customer Onboarding",
  "Lead Qualification",
  "Invoice Processing",
  "Support Routing",
  "Data Sync",
  "Recruiting Automation",
];

const integrations = [
  { name: "Slack", category: "Communication", className: "slack" },
  { name: "Notion", category: "Knowledge", className: "notion" },
  { name: "Google Drive", category: "Storage", className: "drive" },
  { name: "HubSpot", category: "CRM", className: "hubspot" },
  { name: "Salesforce", category: "CRM", className: "salesforce" },
];

export default function Workspace() {
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const [selectedNode, setSelectedNode] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [deployed, setDeployed] = useState(true);

  const workflow = workflows[activeWorkflow];
  const node = workflow.nodes[selectedNode];

  const runTest = () => {
    if (isRunning) return;

    setIsRunning(true);

    setTimeout(() => {
      setIsRunning(false);
    }, 2800);
  };

  const selectWorkflow = (index: number) => {
    setActiveWorkflow(index);
    setSelectedNode(0);
    setIsRunning(false);
  };

  return (
    <section className="vanta-workspace" id="product">
      <div className="vanta-workspace__grid" />

      <div className="vanta-workspace__container">
        {/* =========================================
            SECTION INTRO
        ========================================== */}

        <div className="vanta-workspace__intro">
          <div className="vanta-workspace__eyebrow">
            <span />
            <span>03</span>
            <span>THE WORKSPACE</span>
          </div>

          <h2>
            Your workflows,
            <br />
            running in one place.
          </h2>

          <p>
            Build, test and deploy automations that connect
            your tools, use your data and handle the work
            end-to-end.
          </p>
        </div>

        {/* =========================================
            APPLICATION
        ========================================== */}

        <div className="vanta-workspace__app">
          {/* SIDEBAR */}

          <aside className="vanta-workspace__sidebar">
            <div className="vanta-workspace__brand">
              VANTA
            </div>

            <nav className="vanta-workspace__nav">
              <button>
                <span>⌂</span>
                Home
              </button>

              <button className="is-active">
                <span>⌘</span>
                Workflows
              </button>

              <button>
                <span>◷</span>
                Runs
              </button>

              <button>
                <span>◇</span>
                Integrations
              </button>

              <button>
                <span>□</span>
                Library
              </button>
            </nav>

            <button className="vanta-workspace__new">
              <span>+</span>
              New Workflow
            </button>

            <div className="vanta-workspace__sidebar-label">
              WORKFLOWS
              <span>⌕</span>
            </div>

            <div className="vanta-workspace__workflow-list">
              {sidebarWorkflows.map((name, index) => {
                const exists = workflows[index];

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
              })}
            </div>

            <div className="vanta-workspace__account">
              <div>E</div>

              <span>
                <strong>Enterprise Team</strong>
                <small>Pro Plan</small>
              </span>

              <b>›</b>
            </div>
          </aside>

          {/* MAIN APPLICATION */}

          <div className="vanta-workspace__main">
            {/* APP HEADER */}

            <header className="vanta-workspace__header">
              <div className="vanta-workspace__workflow-name">
                <span />
                <strong>{workflow.name}</strong>

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
                <button className="is-active">
                  Editor
                </button>

                <button>Runs</button>
                <button>Analytics</button>
                <button>Settings</button>
              </div>

              <div className="vanta-workspace__actions">
                <button>↗ Share</button>

                <button
                  className={
                    deployed
                      ? "deploy-button is-deployed"
                      : "deploy-button"
                  }
                  onClick={() => setDeployed(!deployed)}
                >
                  {deployed ? "✓ Deployed" : "Deploy"}
                </button>
              </div>
            </header>

            {/* WORKSPACE CANVAS */}

            <div className="vanta-workspace__canvas">
              <div className="vanta-workspace__canvas-grid" />

              <div className="vanta-workflow">
                {workflow.nodes.map((workflowNode, index) => (
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
                          {workflowNode.description}
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
                ))}
              </div>

              {/* NODE DETAILS */}

              <aside className="vanta-node-details">
                <div className="vanta-node-details__header">
                  <span>NODE DETAILS</span>
                  <button>•••</button>
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
                  automatically handled by VANTA when
                  the workflow reaches this step.
                </p>

                <label>
                  CHANNEL

                  <div className="vanta-select">
                    {node.appClass === "slack"
                      ? "#leads"
                      : "Connected source"}

                    <span>⌄</span>
                  </div>
                </label>

                <label>
                  TRIGGER ON

                  <div className="vanta-select">
                    New event
                    <span>⌄</span>
                  </div>
                </label>

                <div className="vanta-toggle-row">
                  <span>Include context data</span>

                  <button className="vanta-toggle is-on">
                    <i />
                  </button>
                </div>

                <div className="vanta-toggle-row">
                  <span>Continue on error</span>

                  <button className="vanta-toggle">
                    <i />
                  </button>
                </div>
              </aside>

              {/* EXECUTION LOG */}

              <div className="vanta-execution">
                <div className="vanta-panel-heading">
                  <div>
                    <span className="live-dot" />
                    EXECUTION LOG
                  </div>

                  <span className="live-label">
                    ● Live
                  </span>
                </div>

                <div className="vanta-log-list">
                  <LogRow
                    time="10:42:18"
                    text="Workflow started"
                    detail={workflow.name}
                  />

                  <LogRow
                    time="10:42:19"
                    text={`${node.label} completed`}
                    detail="Processing finished"
                  />

                  <LogRow
                    time="10:42:19"
                    text="Data validated"
                    detail="VANTA Core"
                  />

                  <LogRow
                    time="10:42:20"
                    text="Action executed"
                    detail="Success"
                    success
                  />

                  <LogRow
                    time="10:42:21"
                    text="Workflow completed"
                    detail="Success"
                    success
                  />
                </div>
              </div>

              {/* TEST RUN */}

              <div className="vanta-test">
                <div className="vanta-panel-heading">
                  <div>TEST RUN</div>

                  <button
                    onClick={runTest}
                    disabled={isRunning}
                  >
                    {isRunning
                      ? "Running..."
                      : "Run test  ▶"}
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
                          {index === 0
                            ? "0.3s"
                            : index === 1
                              ? "1.1s"
                              : index === 2
                                ? "0.8s"
                                : "0.4s"}
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
  detail: string;
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
      <span className="vanta-log-arrow">›</span>

      <time>{time}</time>

      <strong>{text}</strong>

      <span className={success ? "success" : ""}>
        {detail}
      </span>
    </div>
  );
}