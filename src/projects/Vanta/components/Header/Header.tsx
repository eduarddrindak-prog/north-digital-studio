import { useState } from "react";
import "./Header.css";

const navigation = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Product", href: "#product" },
  { label: "Scale", href: "#scale" },
  { label: "Work In Context", href: "#use-cases" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="vanta-header">
      <div className="vanta-header__inner">
        <a
          href="#top"
          className="vanta-header__logo"
          aria-label="VANTA home"
          onClick={closeMenu}
        >
          VANTA
        </a>

        <nav
          className="vanta-header__nav"
          aria-label="Main navigation"
        >
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

        <a
          href="#vanta-final-cta"
          className="vanta-header__cta"
        >
          <span>Get Started</span>
          <span aria-hidden="true">→</span>
        </a>

        <button
          type="button"
          className={`vanta-header__menu ${
            menuOpen ? "is-open" : ""
          }`}
          aria-label={
            menuOpen ? "Close menu" : "Open menu"
          }
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
              onClick={closeMenu}
            >
              <span>{item.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>

        <a
          href="#vanta-final-cta"
          className="vanta-header__mobile-cta"
          onClick={closeMenu}
        >
          <span>Get Started</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}