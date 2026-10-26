import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/North Base/ui/Button";
import "./Header.css";

const links = [
  ["Home", "/lenoir"],
  ["Products", "/lenoir/products"],
  ["The Bakery", "/lenoir/bakery"],
  ["Orders", "/lenoir/orders"],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="lenoir-header">
      <div className="lenoir-container lenoir-header__inner">
        <a className="lenoir-header__brand notranslate" href="/lenoir" aria-label="Maison Lenoir home">Maison Lenoir</a>
        <nav id="lenoir-navigation" className={`lenoir-header__nav${open ? " is-open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
        <div className="lenoir-header__actions">
          <Button href="/lenoir/find-us#map" variant="primary" size="sm" className="lenoir-header__cta">Find Us</Button>
        </div>
        <button className="lenoir-header__menu" type="button" aria-expanded={open} aria-controls="lenoir-navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}<span>{open ? "Close" : "Menu"}</span>
        </button>
      </div>
    </header>
  );
}
