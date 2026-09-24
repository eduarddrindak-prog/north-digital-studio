import { useEffect, useRef, useState } from "react";

import { Link } from "@/components/North Base/ui/Link";

import "./FinalCTA.css";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="vanta-final-cta"
      className={`vanta-final-cta ${
        isVisible ? "vanta-final-cta--visible" : ""
      }`}
    >
      <div className="vanta-final-cta__grid" aria-hidden="true" />

      <div className="vanta-final-cta__axis" aria-hidden="true">
        <span className="vanta-final-cta__axis-point" />
      </div>

      <div className="vanta-final-cta__corner-label">
        <span className="vanta-final-cta__corner-number">07</span>
        <span className="vanta-final-cta__corner-line" />
        <span>GET STARTED</span>
      </div>

      <div className="vanta-final-cta__content">
        <p className="vanta-final-cta__brand">V A N T A</p>

        <h2 className="vanta-final-cta__title">
          <span>Your next workflow</span>
          <span className="vanta-final-cta__title-accent">
            should run itself.
          </span>
        </h2>

        <p className="vanta-final-cta__description">
          Connect the systems you already use.
          <br />
          VANTA handles the work between them.
        </p>

        <Link
          href="/contact"
          variant="accent"
          size="lg"
          withArrow
          className="vanta-final-cta__button"
        >
          Start with VANTA
        </Link>
      </div>

      <div className="vanta-final-cta__baseline" aria-hidden="true">
        <span />
        <span className="vanta-final-cta__baseline-center" />
        <span />
      </div>
    </section>
  );
}