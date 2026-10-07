import { useEffect, useState } from "react";

import { Button } from "@/components/North Base/ui/Button";
import { IconButton } from "@/components/North Base/ui/IconButton";
import { Link } from "@/components/North Base/ui/Link";

import "./Header.css";

const navigation = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Product", href: "#product" },
  { label: "Scale", href: "#scale" },
  { label: "Work In Context", href: "#use-cases" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        requestAnimationFrame(() => {
          document.querySelector<HTMLButtonElement>(".vanta-header__menu")?.focus();
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => {
    const wasOpen = menuOpen;
    setMenuOpen(false);

    if (wasOpen) {
      requestAnimationFrame(() => {
        document.querySelector<HTMLButtonElement>(".vanta-header__menu")?.focus();
      });
    }
  };

  return (
    <header className="vanta-header">
      <div className="vanta-header__inner">
        <Link
          href="#top"
          variant="default"
          size="sm"
          className="vanta-header__logo"
          aria-label="VANTA home"
          onClick={closeMenu}
        >
          VANTA
        </Link>

        <nav
          className="vanta-header__nav"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              variant="muted"
              size="sm"
              className="vanta-header__link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          href="#vanta-final-cta"
          variant="secondary"
          size="sm"
          withArrow
          className="vanta-header__cta"
        >
          Get Started
        </Button>

        <IconButton
          variant="ghost"
          size="sm"
          label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="vanta-mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className={`vanta-header__menu ${
            menuOpen ? "is-open" : ""
          }`}
          icon={
            <>
              <span />
              <span />
            </>
          }
        />
      </div>

      <div
        id="vanta-mobile-navigation"
        className={`vanta-header__mobile ${
          menuOpen ? "is-open" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              variant="muted"
              size="sm"
              className="vanta-header__mobile-link"
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
            >
              <span>{item.label}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>

        <Button
          href="#vanta-final-cta"
          variant="secondary"
          size="sm"
          withArrow
          className="vanta-header__mobile-cta"
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
        >
          Get Started
        </Button>
      </div>
    </header>
  );
}