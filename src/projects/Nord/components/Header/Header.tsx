import { useState } from "react";
import { Menu } from "lucide-react";

import { Link } from "@/components/North Base/ui/Link";
import { IconButton } from "@/components/North Base/ui/IconButton";
import { Drawer } from "@/components/North Base/ui/Drawer";

import "./Header.css";

const navigation = [
  { label: "Home", href: "/portfolio/nord/Home" },
  { label: "Projects", href: "/portfolio/nord/projects" },
  { label: "Studio", href: "/portfolio/nord/studio" },
  { label: "Services", href: "/portfolio/nord/services" },
  { label: "Journal", href: "/portfolio/nord/journal" },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="nord-header">
      <div className="nord-header__inner">
        <a href="/portfolio/nord" className="nord-header__brand">
          <span className="nord-header__name">NORD</span>
          <span className="nord-header__descriptor">
            Interior Studio
          </span>
        </a>

        <nav className="nord-header__nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} variant="default">
              {item.label}
            </Link>
          ))}

          <Link href="/portfolio/nord/contact" variant="accent">
            Contact
          </Link>
        </nav>

        <div className="nord-header__mobile">
          <IconButton
            icon={<Menu size={20} />}
            label="Open navigation"
            variant="ghost"
            size="md"
            onClick={() => setMobileOpen(true)}
          />
        </div>
      </div>

      <Drawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        side="right"
        title="NORD"
        description="Interior Studio"
      >
        <nav
          className="nord-header__mobile-nav"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              variant="default"
              size="lg"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/portfolio/nord/contact"
            variant="accent"
            size="lg"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </Drawer>
    </header>
  );
}

export default Header;