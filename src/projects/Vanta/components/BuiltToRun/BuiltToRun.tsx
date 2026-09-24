import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import "./BuiltToRun.css";

const BAR_COUNT = 54;

const barHeights = [
  18, 34, 24, 47, 28, 61, 38, 72, 31,
  54, 43, 78, 35, 66, 49, 88, 41, 58,
  32, 74, 46, 63, 37, 91, 52, 68, 44,
  82, 35, 59, 48, 76, 39, 65, 29, 84,
  45, 70, 34, 57, 48, 86, 38, 61, 31,
  75, 43, 68, 36, 52, 89, 41, 64, 30,
  73, 45, 57,
];

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3);
}

export default function BuiltToRun() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

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

        if (reducedMotion) {
          setProgress(1);
          observer.disconnect();
          return;
        }

        const startTime = performance.now();
        const duration = 1100;

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const rawProgress = Math.min(
            elapsed / duration,
            1
          );

          setProgress(easeOutCubic(rawProgress));

          if (rawProgress < 1) {
            requestAnimationFrame(animate);
          } else {
            observer.disconnect();
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [reducedMotion]);

  const tasksAutomated = (3.2 * progress).toFixed(1);
  const repetitiveSteps = Math.round(87 * progress);
  const hoursRemoved = (11.4 * progress).toFixed(1);

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
        {/* =========================================
            HEADER
        ========================================== */}

        <header className="vanta-built__header">
          <div className="vanta-built__eyebrow">
            <span className="vanta-built__eyebrow-line" />

            <span>05</span>

            <span>BUILT TO RUN</span>
          </div>

          <h2 id="built-to-run-title">
            Automation that keeps{" "}
            <span>moving.</span>
          </h2>

          <p>
            Automation built to run continuously
            across every team.
          </p>
        </header>

        {/* =========================================
            MAIN METRIC
        ========================================== */}

        <div className="vanta-built__main-metric">
          <div className="vanta-built__metric-value">
            {tasksAutomated}
            <span>M</span>
          </div>

          <div className="vanta-built__metric-label">
            <span>TASKS AUTOMATED</span>
            <span>EVERY MONTH</span>
          </div>
        </div>

        {/* =========================================
            SIDE METRICS
        ========================================== */}

        <div className="vanta-built__side-metric vanta-built__side-metric--left">
          <div className="vanta-built__side-value">
            {repetitiveSteps}%
          </div>

          <div className="vanta-built__side-label">
            <span>OF REPETITIVE STEPS</span>
            <span>HANDLED AUTOMATICALLY</span>
          </div>
        </div>

        <div className="vanta-built__side-metric vanta-built__side-metric--right">
          <div className="vanta-built__side-value">
            {hoursRemoved}h
          </div>

          <div className="vanta-built__side-label">
            <span>AVERAGE MANUAL WORK</span>
            <span>REMOVED PER WEEK</span>
          </div>
        </div>

        {/* =========================================
            DATA SIGNALS
        ========================================== */}

        <div
          className="vanta-built__signals"
          aria-hidden="true"
        >
          <div className="vanta-built__baseline" />

          <div className="vanta-built__bars">
            {barHeights
              .slice(0, BAR_COUNT)
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

        {/* =========================================
            DATA LABELS
        ========================================== */}

        <div className="vanta-built__data-label vanta-built__data-label--left">
          <span />
          CONTINUOUS EXECUTION
        </div>

        <div className="vanta-built__data-label vanta-built__data-label--right">
          LIVE AUTOMATION LOAD
          <span />
        </div>

        {/* =========================================
            BOTTOM LINE
        ========================================== */}

        <div className="vanta-built__bottom">
          <span>VANTA / 05</span>

          <div className="vanta-built__bottom-line" />

          <span>RUNNING CONTINUOUSLY</span>
        </div>
      </div>
    </section>
  );
}