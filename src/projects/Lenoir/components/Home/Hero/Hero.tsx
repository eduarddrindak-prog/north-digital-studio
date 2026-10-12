
import { MapPin } from "lucide-react";

import { Button } from "@/components/North Base/ui/Button";

import heroImage from "../../../assets/maison-lenoir-hero.png";

import { heroContent } from "./Hero.content";

import "./Hero.css";

export default function Hero() {
  return (
    <section className="lenoir-hero" aria-labelledby="lenoir-hero-title">
      <div className="lenoir-hero__inner">
        <div className="lenoir-hero__content">
          <p className="lenoir-hero__eyebrow">
            {heroContent.eyebrow}
          </p>

          <h1
            className="lenoir-hero__title"
            id="lenoir-hero-title"
          >
            {heroContent.title}
          </h1>

          <p className="lenoir-hero__description">
            {heroContent.description}
          </p>

          <div className="lenoir-hero__actions">
            <Button
              href={heroContent.primaryAction.href}
              variant="primary"
              size="lg"
              withArrow
              className="lenoir-hero__button lenoir-hero__button--primary"
            >
              {heroContent.primaryAction.label}
            </Button>

            <Button
              href={heroContent.secondaryAction.href}
              variant="secondary"
              size="lg"
              iconRight={<MapPin size={18} aria-hidden="true" />}
              className="lenoir-hero__button lenoir-hero__button--secondary"
            >
              {heroContent.secondaryAction.label}
            </Button>
          </div>
        </div>

        <div className="lenoir-hero__visual">
          <span className="lenoir-hero__visual-label">BAKED DAILY · PARIS 20E</span>
          <img
            className="lenoir-hero__image"
            src={heroImage}
            alt={heroContent.imageAlt}
            fetchPriority="high"
            decoding="async"
          />
          <div className="lenoir-hero__stamp" aria-hidden="true"><span>MAISON</span><strong>L</strong><span>PARIS · 2026</span></div>
        </div>
      </div>
      <div className="lenoir-hero__footnote" aria-hidden="true"><span>01</span><span>Fresh from our ovens</span><span className="lenoir-hero__line" /></div>
    </section>
  );
}
