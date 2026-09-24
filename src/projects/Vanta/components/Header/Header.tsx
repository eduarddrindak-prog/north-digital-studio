import { useState } from "react";
import "./Header.css";

const navigation = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="vanta-header">
      <div className="vanta-header__inner">
        <a
          href="#top"
          className="vanta-header__logo"
          aria-label="VANTA home"
        >
          VANTA
        </a>

        <nav className="vanta-header__nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="vanta-header__link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="vanta-header__cta">
          <span>Get Started</span>
          <span aria-hidden="true">→</span>
        </a>

        <button
          type="button"
          className={`vanta-header__menu ${
            menuOpen ? "is-open" : ""
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        className={`vanta-header__mobile ${
          menuOpen ? "is-open" : ""
        }`}
      >
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              <span>{item.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="vanta-header__mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          Get Started
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}