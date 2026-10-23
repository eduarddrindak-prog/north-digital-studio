import { useEffect, useState, type ReactNode } from "react";

import "../styles/global.css";

interface MartinLayoutProps {
  children: ReactNode;
}

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Typical jobs", href: "#typical-jobs" },
  { label: "How it works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

function MartinHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="martin-header">
      <div className="martin-header__inner">
        <a className="martin-header__brand" href="#top" onClick={() => setMenuOpen(false)}>
          <strong className="notranslate">atelier martin<span>.</span></strong>
          <small>SMALL REPAIRS · PARIS</small>
        </a>

        <nav className="martin-header__nav" aria-label="Main navigation">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <a className="martin-button martin-button--small" href="#contact" onClick={() => setMenuOpen(false)}>
          Request a visit <span aria-hidden="true">↗</span>
        </a>

        <button
          className={`martin-header__menu ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="martin-mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      <div id="martin-mobile-navigation" className={`martin-header__mobile ${menuOpen ? "is-open" : ""}`}>
        {navigation.map((item) => <a key={item.href} href={item.href} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>{item.label}<span aria-hidden="true">↗</span></a>)}
        <a className="martin-button" href="#contact" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Request a visit <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}

function MartinFooter() {
  return (
    <footer className="martin-footer">
      <div className="martin-footer__top">
        <div>
          <a className="martin-footer__brand notranslate" href="#top">atelier martin<span>.</span></a>
          <p>Small repairs, furniture assembly and home maintenance in Paris.</p>
        </div>
        <nav className="martin-footer__nav" aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#process">How it works</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="martin-footer__bottom">
        <span>© {new Date().getFullYear()} <span className="notranslate">Atelier Martin</span>. All rights reserved.</span>
        <span className="martin-footer__legal"><a href="/portfolio"><span className="notranslate">North Digital Studio</span></a><a href="/">Studio home</a></span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default function MartinLayout({
  children,
}: MartinLayoutProps) {
  useEffect(() => {
    const previousTitle = document.title;
    const previousLang = document.documentElement.lang;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;

    document.title = "Small repairs and furniture assembly in Paris | Atelier Martin";
    document.documentElement.lang = "en";
    description?.setAttribute("content", "Need a small repair or a piece of furniture assembled in Paris? Describe what you need and agree the practical details before the visit.");

    return () => {
      document.title = previousTitle;
      document.documentElement.lang = previousLang;
      if (description && previousDescription !== undefined) description.content = previousDescription;
    };
  }, []);

  return (
    <div className="martin-app" id="top">
      <MartinHeader />

      <main>{children}</main>

      <MartinFooter />
    </div>
  );
}
