import {
  useEffect,
  useRef,
  useState,
} from "react";

import { finalCTAContent } from "./content";

import "./FinalCTA.css";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement | null>(
    null
  );

  const [isVisible, setIsVisible] =
    useState(false);

  const {
    eyebrow,
    brand,
    title,
    description,
    button,
  } = finalCTAContent;

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
        isVisible
          ? "vanta-final-cta--visible"
          : ""
      }`}
    >
      <div
        className="vanta-final-cta__grid"
        aria-hidden="true"
      />

      <div
        className="vanta-final-cta__axis"
        aria-hidden="true"
      >
        <span className="vanta-final-cta__axis-point" />
      </div>

      <div className="vanta-final-cta__corner-label">
        <span className="vanta-final-cta__corner-number">
          {eyebrow.number}
        </span>

        <span className="vanta-final-cta__corner-line" />

        <span>{eyebrow.label}</span>
      </div>

      <div className="vanta-final-cta__content">
        <p className="vanta-final-cta__brand">
          {brand}
        </p>

        <h2 className="vanta-final-cta__title">
          <span>{title.lineOne}</span>

          <span className="vanta-final-cta__title-accent">
            {title.lineTwo}
          </span>
        </h2>

        <p className="vanta-final-cta__description">
          {description.lineOne}
          <br />
          {description.lineTwo}
        </p>

        <a
          href={button.href}
          className="vanta-final-cta__button"
        >
          {button.label}

          <span aria-hidden="true">
            {button.arrow}
          </span>
        </a>
      </div>

      <div
        className="vanta-final-cta__baseline"
        aria-hidden="true"
      >
        <span />
        <span className="vanta-final-cta__baseline-center" />
        <span />
      </div>
    </section>
  );
}