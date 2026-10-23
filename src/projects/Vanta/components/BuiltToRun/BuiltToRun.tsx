import {
  useEffect,
  useState,
  useRef,
} from "react";

import { builtToRunContent } from "./content";

import "./BuiltToRun.css";

export default function BuiltToRun() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const {
    eyebrow,
    title,
    description,
    metrics,
    metricLabels,
    signal,
    dataLabels,
    bottom,
  } = builtToRunContent;

  const tasksAutomated = metrics.tasksAutomated.toFixed(1);
  const repetitiveSteps = metrics.repetitiveSteps;
  const hoursRemoved = metrics.hoursRemoved.toFixed(1);

  return (
    <section
      ref={sectionRef}
      className={[
        "vanta-built",
        isVisible ? "is-visible" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      id="built-to-run"
      aria-labelledby="built-to-run-title"
    >
      <div className="vanta-built__grid" />

      <div className="vanta-built__ambient" />

      <div className="vanta-built__container">
        <header className="vanta-built__header">
          <div className="vanta-built__eyebrow">
            <span className="vanta-built__eyebrow-line" />

            <span>{eyebrow.number}</span>

            <span>{eyebrow.label}</span>
          </div>

          <h2 id="built-to-run-title">
            {title.lineOne}{" "}
            <span>{title.lineTwo}</span>
          </h2>

          <p>{description}</p>

          <div className="vanta-built__side-metric vanta-built__side-metric--left">
            <div className="vanta-built__side-value">
              {repetitiveSteps}%
            </div>

            <div className="vanta-built__side-label">
              <span>{metricLabels.repetitiveSteps[0]}</span>
              <span>{metricLabels.repetitiveSteps[1]}</span>
            </div>
          </div>
        </header>

        <div className="vanta-built__main-metric">
          <div className="vanta-built__metric-value">
            {tasksAutomated}
            <span>M</span>
          </div>

          <div className="vanta-built__metric-label">
            <span>{metricLabels.tasksAutomated[0]}</span>
            <span>{metricLabels.tasksAutomated[1]}</span>
          </div>
        </div>

        <div className="vanta-built__side-metric vanta-built__side-metric--right">
          <div className="vanta-built__side-value">
            {hoursRemoved}h
          </div>

          <div className="vanta-built__side-label">
            <span>{metricLabels.hoursRemoved[0]}</span>
            <span>{metricLabels.hoursRemoved[1]}</span>
          </div>
        </div>

        <div
          className="vanta-built__signals"
          aria-hidden="true"
        >
          <div className="vanta-built__baseline" />

          <div className="vanta-built__bars">
            {signal.barHeights
              .slice(0, signal.barCount)
              .map((height, index) => (
                <span
                  key={index}
                  className="vanta-built__bar"
                  style={
                    {
                      "--bar-height": `${height}%`,
                      "--bar-index": index,
                    } as React.CSSProperties
                  }
                >
                  <i />
                </span>
              ))}
          </div>

          <div className="vanta-built__signal-glow" />
        </div>

        <div className="vanta-built__data-label vanta-built__data-label--left">
          <span />
          {dataLabels.left}
        </div>

        <div className="vanta-built__data-label vanta-built__data-label--right">
          {dataLabels.right}
          <span />
        </div>

        <div className="vanta-built__bottom">
          <span>{bottom.left}</span>

          <div className="vanta-built__bottom-line" />

          <span>{bottom.right}</span>
        </div>
      </div>
    </section>
  );
}
