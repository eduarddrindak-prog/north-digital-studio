import { useState } from "react";
import { homeContent } from "../../content/home";
import "./Hero.css";

type NodeType = "input" | "output";

type FlowNode = {
  id: string;
  name: string;
  type: NodeType;
  category: string;
  metric: string;
  value: string;
  x: number;
  y: number;
};

const inputNodes: FlowNode[] = [
  {
    id: "slack",
    name: "Slack",
    type: "input",
    category: "COMMUNICATION",
    metric: "EVENTS",
    value: "1,284",
    x: 5,
    y: 17,
  },
  {
    id: "notion",
    name: "Notion",
    type: "input",
    category: "KNOWLEDGE",
    metric: "CHANGES",
    value: "284",
    x: 5,
    y: 42,
  },
  {
    id: "salesforce",
    name: "Salesforce",
    type: "input",
    category: "CRM",
    metric: "RECORDS",
    value: "91",
    x: 5,
    y: 67,
  },
];

const outputNodes: FlowNode[] = [
  {
    id: "drive",
    name: "Google Drive",
    type: "output",
    category: "STORAGE",
    metric: "SYNCED",
    value: "384",
    x: 70,
    y: 17,
  },
  {
    id: "hubspot",
    name: "HubSpot",
    type: "output",
    category: "CRM",
    metric: "UPDATED",
    value: "126",
    x: 70,
    y: 42,
  },
  {
    id: "database",
    name: "Database",
    type: "output",
    category: "DATA",
    metric: "ROWS",
    value: "921",
    x: 70,
    y: 67,
  },
];

const allNodes = [...inputNodes, ...outputNodes];

export default function Hero() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const hero = homeContent.hero as any;

  const eyebrow = hero?.eyebrow ?? "AI INFRASTRUCTURE";
  const title =
    hero?.title ?? "Automate the work between your systems.";
  const description =
    hero?.description ??
    "VANTA connects your tools, understands your workflows and executes the work automatically.";

  const primaryCta = hero?.primaryCta ?? "Start Building";
  const secondaryCta = hero?.secondaryCta ?? "See How It Works";

  return (
    <section className="vanta-hero">
      <div className="vanta-hero__grid" />

      <div className="vanta-hero__container">
        {/* LEFT */}
        <div className="vanta-hero__content">
          <div className="vanta-hero__eyebrow">
            <span />
            {eyebrow}
          </div>

          <h1 className="vanta-hero__title">{title}</h1>

          <p className="vanta-hero__description">{description}</p>

          <div className="vanta-hero__actions">
            <a href="#product" className="vanta-button vanta-button--primary">
              {primaryCta}
              <span>→</span>
            </a>

            <a href="#how-it-works" className="vanta-button vanta-button--secondary">
              {secondaryCta}
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* RIGHT — SYSTEM VISUALIZER */}
        <div className="vanta-system">
          <div className="vanta-system__topbar">
            <div className="vanta-system__label">
              <span className="vanta-status-dot" />
              SYSTEM OPERATIONAL
            </div>

            <div className="vanta-system__uptime">
              UPTIME <strong>99.98%</strong>
            </div>
          </div>

          <div className="vanta-flow">
            {/* SVG FLOW */}
            <svg
              className="vanta-flow__svg"
              viewBox="0 0 1000 720"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="flowIn" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(91,156,255,0)" />
                  <stop offset="45%" stopColor="rgba(91,156,255,.42)" />
                  <stop offset="100%" stopColor="rgba(91,156,255,.95)" />
                </linearGradient>

                <linearGradient id="flowOut" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(91,156,255,.95)" />
                  <stop offset="55%" stopColor="rgba(91,156,255,.42)" />
                  <stop offset="100%" stopColor="rgba(91,156,255,0)" />
                </linearGradient>

                <filter id="flowGlow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* INPUT LINES */}
              <path
                className="flow-line flow-line--input"
                d="M 150 138 C 275 138, 330 220, 435 292"
              />

              <path
                className="flow-line flow-line--input"
                d="M 150 316 C 280 316, 330 346, 435 362"
              />

              <path
                className="flow-line flow-line--input"
                d="M 150 496 C 275 496, 330 431, 435 412"
              />

              {/* OUTPUT LINES */}
              <path
                className="flow-line flow-line--output"
                d="M 565 292 C 670 220, 725 138, 850 138"
              />

              <path
                className="flow-line flow-line--output"
                d="M 565 362 C 680 347, 725 316, 850 316"
              />

              <path
                className="flow-line flow-line--output"
                d="M 565 412 C 670 431, 725 496, 850 496"
              />

              {/* SOFT GLOW LAYERS */}
              <path
                className="flow-line flow-line--glow"
                d="M 150 138 C 275 138, 330 220, 435 292"
              />

              <path
                className="flow-line flow-line--glow"
                d="M 150 316 C 280 316, 330 346, 435 362"
              />

              <path
                className="flow-line flow-line--glow"
                d="M 150 496 C 275 496, 330 431, 435 412"
              />

              <path
                className="flow-line flow-line--glow"
                d="M 565 292 C 670 220, 725 138, 850 138"
              />

              <path
                className="flow-line flow-line--glow"
                d="M 565 362 C 680 347, 725 316, 850 316"
              />

              <path
                className="flow-line flow-line--glow"
                d="M 565 412 C 670 431, 725 496, 850 496"
              />

              {/* DATA PACKETS */}
              <circle className="data-packet packet-1" r="4">
                <animateMotion
                  dur="3.2s"
                  repeatCount="indefinite"
                  path="M 150 138 C 275 138, 330 220, 435 292"
                />
              </circle>

              <circle className="data-packet packet-2" r="4">
                <animateMotion
                  dur="3.8s"
                  repeatCount="indefinite"
                  path="M 150 316 C 280 316, 330 346, 435 362"
                />
              </circle>

              <circle className="data-packet packet-3" r="4">
                <animateMotion
                  dur="4.1s"
                  repeatCount="indefinite"
                  path="M 150 496 C 275 496, 330 431, 435 412"
                />
              </circle>

              <circle className="data-packet packet-4" r="4">
                <animateMotion
                  dur="3.5s"
                  repeatCount="indefinite"
                  path="M 565 292 C 670 220, 725 138, 850 138"
                />
              </circle>

              <circle className="data-packet packet-5" r="4">
                <animateMotion
                  dur="3.9s"
                  repeatCount="indefinite"
                  path="M 565 362 C 680 347, 725 316, 850 316"
                />
              </circle>

              <circle className="data-packet packet-6" r="4">
                <animateMotion
                  dur="4.2s"
                  repeatCount="indefinite"
                  path="M 565 412 C 670 431, 725 496, 850 496"
                />
              </circle>
            </svg>

            {/* INPUT NODES */}
            <div className="vanta-flow__column vanta-flow__column--inputs">
              <span className="vanta-flow__column-label">INPUTS</span>

              {inputNodes.map((node) => (
                <FlowCard
                  key={node.id}
                  node={node}
                  active={activeNode === node.id}
                  onEnter={() => setActiveNode(node.id)}
                  onLeave={() => setActiveNode(null)}
                />
              ))}
            </div>

            {/* CORE */}
            <div className="vanta-core">
              <div className="vanta-core__halo" />

              <div className="vanta-core__box">
                <div className="vanta-core__header">
                  <span className="vanta-core__pulse" />
                  LIVE
                </div>

                <div className="vanta-core__name">VANTA</div>

                <div className="vanta-core__type">AI CORE</div>

                <div className="vanta-core__divider" />

                <div className="vanta-core__metrics">
                  <div>
                    <span>PROCESSING</span>
                    <strong>1,842/s</strong>
                  </div>

                  <div>
                    <span>LATENCY</span>
                    <strong>42ms</strong>
                  </div>
                </div>

                <div className="vanta-core__activity">
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

            {/* OUTPUT NODES */}
            <div className="vanta-flow__column vanta-flow__column--outputs">
              <span className="vanta-flow__column-label">OUTPUTS</span>

              {outputNodes.map((node) => (
                <FlowCard
                  key={node.id}
                  node={node}
                  active={activeNode === node.id}
                  onEnter={() => setActiveNode(node.id)}
                  onLeave={() => setActiveNode(null)}
                />
              ))}
            </div>

            {/* LIVE EVENT */}
            <div className="vanta-event">
              <span className="vanta-event__indicator" />

              <div>
                <span>LIVE EVENT</span>
                <strong>workflow.execute</strong>
              </div>

              <em>42ms</em>
            </div>
          </div>
        </div>
      </div>

      {/* TRUST */}
      <div className="vanta-trust">
        <span className="vanta-trust__label">
          TRUSTED BY FORWARD-THINKING COMPANIES
        </span>

        <div className="vanta-trust__logos">
          <span>STRIPE</span>
          <span>SHOPIFY</span>
          <span>DROPBOX</span>
          <span>NOTION</span>
          <span>SLACK</span>
          <span>+ MORE</span>
        </div>
      </div>

      <a href="#problem" className="vanta-scroll">
        <span>SCROLL</span>
        <i>↓</i>
      </a>
    </section>
  );
}

type FlowCardProps = {
  node: FlowNode;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
};

function FlowCard({
  node,
  active,
  onEnter,
  onLeave,
}: FlowCardProps) {
  return (
    <div
      className={[
        "vanta-flow-card",
        node.type === "input"
          ? "vanta-flow-card--input"
          : "vanta-flow-card--output",
        active ? "is-active" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="vanta-flow-card__top">
        <span className="vanta-flow-card__signal" />
        <span>{node.type === "input" ? "CONNECTED" : "SYNCING"}</span>
        <small>{node.id.slice(0, 2).toUpperCase()}</small>
      </div>

      <div className="vanta-flow-card__name">
        {node.name}
      </div>

      <div className="vanta-flow-card__category">
        {node.category}
      </div>

      <div className="vanta-flow-card__visual">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="vanta-flow-card__bottom">
        <span>{node.metric}</span>
        <strong>{node.value}</strong>
      </div>
    </div>
  );
}