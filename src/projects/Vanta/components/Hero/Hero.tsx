import { useState } from "react";

import { heroContent } from "./content";

import "./Hero.css";

type NodeType = "input" | "output";

type FlowNode = {
  id: string;
  name: string;
  type: NodeType;
  category: string;
  metric: string;
  value: string;
};

export default function Hero() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const inputNodes: FlowNode[] = heroContent.inputNodes.map((node) => ({
    ...node,
    type: "input",
  }));

  const outputNodes: FlowNode[] = heroContent.outputNodes.map((node) => ({
    ...node,
    type: "output",
  }));

  return (
    <section className="vanta-hero">
      <div className="vanta-hero__grid" />

      <div className="vanta-hero__container">
        {/* LEFT */}
        <div className="vanta-hero__content">
          <div className="vanta-hero__eyebrow">
            <span />
            {heroContent.eyebrow}
          </div>

          <h1 className="vanta-hero__title">
            {heroContent.title}
          </h1>

          <p className="vanta-hero__description">
            {heroContent.description}
          </p>

          <div className="vanta-hero__actions">
            <a
              href={heroContent.primaryAction.href}
              className="vanta-button vanta-button--primary"
            >
              {heroContent.primaryAction.label}
              <span>→</span>
            </a>

            <a
              href={heroContent.secondaryAction.href}
              className="vanta-button vanta-button--secondary"
            >
              {heroContent.secondaryAction.label}
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* RIGHT — SYSTEM VISUALIZER */}
        <div className="vanta-system">
          <div className="vanta-system__topbar">
            <div className="vanta-system__label">
              <span className="vanta-status-dot" />
              {heroContent.system.status}
            </div>

            <div className="vanta-system__uptime">
              UPTIME <strong>{heroContent.system.uptime}</strong>
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
                <linearGradient
                  id="flowIn"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="rgba(91,156,255,0)"
                  />
                  <stop
                    offset="45%"
                    stopColor="rgba(91,156,255,.42)"
                  />
                  <stop
                    offset="100%"
                    stopColor="rgba(91,156,255,.95)"
                  />
                </linearGradient>

                <linearGradient
                  id="flowOut"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="rgba(91,156,255,.95)"
                  />
                  <stop
                    offset="55%"
                    stopColor="rgba(91,156,255,.42)"
                  />
                  <stop
                    offset="100%"
                    stopColor="rgba(91,156,255,0)"
                  />
                </linearGradient>

                <filter id="flowGlow">
                  <feGaussianBlur
                    stdDeviation="3"
                    result="blur"
                  />

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
              <circle
                className="data-packet packet-1"
                r="4"
              >
                <animateMotion
                  dur="3.2s"
                  repeatCount="indefinite"
                  path="M 150 138 C 275 138, 330 220, 435 292"
                />
              </circle>

              <circle
                className="data-packet packet-2"
                r="4"
              >
                <animateMotion
                  dur="3.8s"
                  repeatCount="indefinite"
                  path="M 150 316 C 280 316, 330 346, 435 362"
                />
              </circle>

              <circle
                className="data-packet packet-3"
                r="4"
              >
                <animateMotion
                  dur="4.1s"
                  repeatCount="indefinite"
                  path="M 150 496 C 275 496, 330 431, 435 412"
                />
              </circle>

              <circle
                className="data-packet packet-4"
                r="4"
              >
                <animateMotion
                  dur="3.5s"
                  repeatCount="indefinite"
                  path="M 565 292 C 670 220, 725 138, 850 138"
                />
              </circle>

              <circle
                className="data-packet packet-5"
                r="4"
              >
                <animateMotion
                  dur="3.9s"
                  repeatCount="indefinite"
                  path="M 565 362 C 680 347, 725 316, 850 316"
                />
              </circle>

              <circle
                className="data-packet packet-6"
                r="4"
              >
                <animateMotion
                  dur="4.2s"
                  repeatCount="indefinite"
                  path="M 565 412 C 670 431, 725 496, 850 496"
                />
              </circle>
            </svg>

            {/* INPUT NODES */}
            <div className="vanta-flow__column vanta-flow__column--inputs">
              <span className="vanta-flow__column-label">
                INPUTS
              </span>

              {inputNodes.map((node) => (
                <FlowCard
                  key={node.id}
                  node={node}
                  active={activeNode === node.id}
                  onEnter={() =>
                    setActiveNode(node.id)
                  }
                  onLeave={() =>
                    setActiveNode(null)
                  }
                />
              ))}
            </div>

            {/* CORE */}
            <div className="vanta-core">
              <div className="vanta-core__halo" />

              <div className="vanta-core__box">
                <div className="vanta-core__header">
                  <span className="vanta-core__pulse" />
                  {heroContent.core.status}
                </div>

                <div className="vanta-core__name">
                  {heroContent.core.name}
                </div>

                <div className="vanta-core__type">
                  {heroContent.core.type}
                </div>

                <div className="vanta-core__divider" />

                <div className="vanta-core__metrics">
                  <div>
                    <span>PROCESSING</span>
                    <strong>
                      {heroContent.core.processing}
                    </strong>
                  </div>

                  <div>
                    <span>LATENCY</span>
                    <strong>
                      {heroContent.core.latency}
                    </strong>
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
              <span className="vanta-flow__column-label">
                OUTPUTS
              </span>

              {outputNodes.map((node) => (
                <FlowCard
                  key={node.id}
                  node={node}
                  active={activeNode === node.id}
                  onEnter={() =>
                    setActiveNode(node.id)
                  }
                  onLeave={() =>
                    setActiveNode(null)
                  }
                />
              ))}
            </div>

            {/* LIVE EVENT */}
            <div className="vanta-event">
              <span className="vanta-event__indicator" />

              <div>
                <span>
                  {heroContent.liveEvent.label}
                </span>

                <strong>
                  {heroContent.liveEvent.name}
                </strong>
              </div>

              <em>{heroContent.liveEvent.latency}</em>
            </div>
          </div>
        </div>
      </div>

      {/* TRUST */}
      <div className="vanta-trust">
        <span className="vanta-trust__label">
          {heroContent.trustLabel}
        </span>

        <div className="vanta-trust__logos">
          {heroContent.trustedCompanies.map(
            (company) => (
              <span key={company}>
                {company}
              </span>
            )
          )}

          <span>+ MORE</span>
        </div>
      </div>

      <a
        href="#how-it-works"
        className="vanta-scroll"
      >
        <span>{heroContent.scrollLabel}</span>
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

        <span>
          {node.type === "input"
            ? "CONNECTED"
            : "SYNCING"}
        </span>

        <small>
          {node.id.slice(0, 2).toUpperCase()}
        </small>
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