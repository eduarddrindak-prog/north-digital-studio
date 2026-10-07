import { Link } from "@/components/North Base/ui/Link";
import "./Footer.css";

const columns = [
  {
    title: "Product",
    links: [
      {
        label: "How It Works",
        href: "#how-it-works",
      },
      {
        label: "Product",
        href: "#product",
      },
      {
        label: "Built To Run",
        href: "#built-to-run",
      },
    ],
  },
  {
    title: "Solutions",
    links: [
      {
        label: "Scale",
        href: "#scale",
      },
      {
        label: "Work In Context",
        href: "#use-cases",
      },
    ],
  },
  {
    title: "Explore",
    links: [
      {
        label: "Get Started",
        href: "#vanta-final-cta",
      },
      {
        label: "Back To Top",
        href: "#top",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="vanta-footer">
      <div className="vanta-footer__inner">
        <div className="vanta-footer__top">
          <div className="vanta-footer__brand">
            <Link
              href="#top"
              variant="default"
              size="md"
              className="vanta-footer__logo"
              aria-label="VANTA home"
            >
              VANTA
            </Link>

            <p>
              Infrastructure for work
              that runs itself.
            </p>
          </div>

          <div className="vanta-footer__columns">
            {columns.map((column) => (
              <div
                key={column.title}
                className="vanta-footer__column"
              >
                <span className="vanta-footer__column-title">
                  {column.title}
                </span>

                <nav
                  aria-label={`${column.title} navigation`}
                >
                  {column.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      variant="muted"
                      size="sm"
                      className="vanta-footer__link"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="vanta-footer__bottom">
          <div className="vanta-footer__status">
            <span
              className="vanta-footer__status-dot"
              aria-hidden="true"
            />
            <span>SYSTEM OPERATIONAL</span>
          </div>

          <span className="vanta-footer__copyright">
            © 2026 VANTA
          </span>

          <span className="vanta-footer__location">
            BUILT FOR MODERN TEAMS
          </span>
        </div>
      </div>
    </footer>
  );
}