import { useEffect, useState } from "react";

import { Button } from "@/components/North Base/ui/Button";

import { heroContent } from "./content";

import "./Hero.css";

type NodeType = "input" | "output";

type FlowNode = {
  id: string;
  name: string;
  type: NodeType;
  category: string;
  metric: string;
  value: number;
};

export default function Hero() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const allContentNodes = [
    ...heroContent.inputNodes.map((node) => ({ ...node, type: "input" as const })),
    ...heroContent.outputNodes.map((node) => ({ ...node, type: "output" as const })),
  ];

  const [liveValues, setLiveValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(
      allContentNodes.map((node) => [node.id, node.value])
    )
  );

  const [liveCore, setLiveCore] = useState({
    processing: heroContent.core.processing,
    latency: heroContent.core.latency,
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const timers = allContentNodes.map((node, index) => {
      const interval = 1700 + index * 260;

      return window.setInterval(() => {
        setLiveValues((current) => {
          const previous = current[node.id] ?? node.value;
          const intensity = Math.max(3, Math.round(previous * 0.055));
          const delta = Math.round((Math.random() * 2 - 0.35) * intensity);
          const next = Math.max(12, previous + delta);

          return {
            ...current,
            [node.id]: next,
          };
        });
      }, interval);
    });

    const coreTimer = window.setInterval(() => {
      setLiveCore({
        processing: Math.round(1740 + Math.random() * 260),
        latency: Math.round(38 + Math.random() * 10),
      });
    }, 1900);

    return () => {
      timers.forEach((timer) => window.clearInterval(timer));
      window.clearInterval(coreTimer);
    };
  }, []);

  const inputNodes: FlowNode[] = heroContent.inputNodes.map((node) => ({
    ...node,
    type: "input",
    value: liveValues[node.id] ?? node.value,
  }));

  const outputNodes: FlowNode[] = heroContent.outputNodes.map((node) => ({
    ...node,
    type: "output",
    value: liveValues[node.id] ?? node.value,
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
            <Button
              href={heroContent.primaryAction.href}
              variant="primary"
              size="lg"
              withArrow
              className="vanta-hero__cta"
            >
              {heroContent.primaryAction.label}
            </Button>

            <Button
              href={heroContent.secondaryAction.href}
              variant="secondary"
              size="lg"
              withArrow
              className="vanta-hero__cta"
            >
              {heroContent.secondaryAction.label}
            </Button>
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
                d="M 268 170 C 300 170, 330 285, 350 285"
              />

              <path
                className="flow-line flow-line--input"
                d="M 268 386 C 300 386, 330 388, 350 388"
              />

              <path
                className="flow-line flow-line--input"
                d="M 268 600 C 300 600, 330 491, 350 491"
              />

              {/* OUTPUT LINES */}
              <path
                className="flow-line flow-line--output"
                d="M 650 285 C 670 285, 700 170, 732 170"
              />

              <path
                className="flow-line flow-line--output"
                d="M 650 388 C 680 388, 700 386, 732 386"
              />

              <path
                className="flow-line flow-line--output"
                d="M 650 491 C 670 491, 700 600, 732 600"
              />

              {/* SOFT GLOW LAYERS */}
              <path
                className="flow-line flow-line--glow"
                d="M 268 170 C 300 170, 330 285, 350 285"
              />

              <path
                className="flow-line flow-line--glow"
                d="M 268 386 C 300 386, 330 388, 350 388"
              />

              <path
                className="flow-line flow-line--glow"
                d="M 268 600 C 300 600, 330 491, 350 491"
              />

              <path
                className="flow-line flow-line--glow"
                d="M 650 285 C 670 285, 700 170, 732 170"
              />

              <path
                className="flow-line flow-line--glow"
                d="M 650 388 C 680 388, 700 386, 732 386"
              />

              <path
                className="flow-line flow-line--glow"
                d="M 650 491 C 670 491, 700 600, 732 600"
              />

              {/* DATA PACKETS */}
              <circle
                className="data-packet packet-1"
                r="4"
              >
                <animateMotion
                  dur="3.2s"
                  repeatCount="indefinite"
                  path="M 268 170 C 300 170, 330 285, 350 285"
                />
              </circle>

              <circle
                className="data-packet packet-2"
                r="4"
              >
                <animateMotion
                  dur="3.8s"
                  repeatCount="indefinite"
                  path="M 268 386 C 300 386, 330 388, 350 388"
                />
              </circle>

              <circle
                className="data-packet packet-3"
                r="4"
              >
                <animateMotion
                  dur="4.1s"
                  repeatCount="indefinite"
                  path="M 268 600 C 300 600, 330 491, 350 491"
                />
              </circle>

              <circle
                className="data-packet packet-4"
                r="4"
              >
                <animateMotion
                  dur="3.5s"
                  repeatCount="indefinite"
                  path="M 650 285 C 670 285, 700 170, 732 170"
                />
              </circle>

              <circle
                className="data-packet packet-5"
                r="4"
              >
                <animateMotion
                  dur="3.9s"
                  repeatCount="indefinite"
                  path="M 650 388 C 680 388, 700 386, 732 386"
                />
              </circle>

              <circle
                className="data-packet packet-6"
                r="4"
              >
                <animateMotion
                  dur="4.2s"
                  repeatCount="indefinite"
                  path="M 650 491 C 670 491, 700 600, 732 600"
                />
              </circle>

              <circle className="data-packet packet-7" r="3.5">
                <animateMotion dur="5.7s" begin="0.9s" repeatCount="indefinite" path="M 268 170 C 300 170, 330 285, 350 285" />
              </circle>

              <circle className="data-packet packet-8" r="3.5">
                <animateMotion dur="4.9s" begin="2.2s" repeatCount="indefinite" path="M 268 386 C 300 386, 330 388, 350 388" />
              </circle>

              <circle className="data-packet packet-9" r="3.5">
                <animateMotion dur="6.1s" begin="1.6s" repeatCount="indefinite" path="M 268 600 C 300 600, 330 491, 350 491" />
              </circle>

              <circle className="data-packet packet-10" r="3.5">
                <animateMotion dur="5.3s" begin="2.8s" repeatCount="indefinite" path="M 650 285 C 670 285, 700 170, 732 170" />
              </circle>

              <circle className="data-packet packet-11" r="3.5">
                <animateMotion dur="6.4s" begin="1.1s" repeatCount="indefinite" path="M 650 388 C 680 388, 700 386, 732 386" />
              </circle>

              <circle className="data-packet packet-12" r="3.5">
                <animateMotion dur="5.8s" begin="3.4s" repeatCount="indefinite" path="M 650 491 C 670 491, 700 600, 732 600" />
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
                      <AnimatedNumber value={liveCore.processing} suffix={heroContent.core.processingSuffix} />
                    </strong>
                  </div>

                  <div>
                    <span>LATENCY</span>
                    <strong>
                      <AnimatedNumber value={liveCore.latency} suffix={heroContent.core.latencySuffix} />
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

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(value);
      return;
    }

    const start = displayValue;
    const distance = value - start;
    const duration = 650;
    const startedAt = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(start + distance * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <>
      {new Intl.NumberFormat("en-US").format(displayValue)}
      {suffix}
    </>
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
        <strong><AnimatedNumber value={node.value} /></strong>
      </div>
    </div>
  );
}