import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Button } from "@/components/North Base/ui/Button";
import { finalCTAContent } from "./content";

import "./FinalCTA.css";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement | null>(
    null
  );

  const [isVisible, setIsVisible] =
    useState(false);
  const [isCompletionOpen, setIsCompletionOpen] =
    useState(false);

  const completionCloseRef =
    useRef<HTMLButtonElement | null>(null);

  const {
    eyebrow,
    brand,
    title,
    description,
    button,
    completion,
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

  useEffect(() => {
    if (!isCompletionOpen) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    completionCloseRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsCompletionOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isCompletionOpen]);

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

        <Button
          type="button"
          variant="primary"
          size="lg"
          withArrow
          className="vanta-final-cta__button"
          onClick={() =>
            setIsCompletionOpen(true)
          }
        >
          {button.label}
        </Button>
      </div>

      <div
        className="vanta-final-cta__baseline"
        aria-hidden="true"
      >
        <span />
        <span className="vanta-final-cta__baseline-center" />
        <span />
      </div>

      {isCompletionOpen && (
        <div
          className="vanta-final-cta__modal"
          role="presentation"
          onMouseDown={() =>
            setIsCompletionOpen(false)
          }
        >
          <div
            className="vanta-final-cta__modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="vanta-completion-title"
            aria-describedby="vanta-completion-description"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >
            <button
              ref={completionCloseRef}
              type="button"
              className="vanta-final-cta__modal-close"
              aria-label="Close"
              onClick={() =>
                setIsCompletionOpen(false)
              }
            >
              ×
            </button>

            <span className="vanta-final-cta__modal-eyebrow">
              {completion.eyebrow}
            </span>

            <h3 id="vanta-completion-title">
              {completion.title}
            </h3>

            <p id="vanta-completion-description">
              {completion.description}
            </p>

            <div className="vanta-final-cta__modal-actions">
              <a
                className="vanta-final-cta__modal-action vanta-final-cta__modal-action--primary"
                href={completion.actions.contact.href}
              >
                {completion.actions.contact.label}
                <span aria-hidden="true">→</span>
              </a>

              <a
                className="vanta-final-cta__modal-action"
                href={completion.actions.portfolio.href}
              >
                {completion.actions.portfolio.label}
              </a>

              <a
                className="vanta-final-cta__modal-action"
                href={completion.actions.home.href}
              >
                {completion.actions.home.label}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}