import "./Footer.css";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Platform", href: "#product" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Integrations", href: "#solutions" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Finance", href: "#solutions" },
      { label: "Operations", href: "#solutions" },
      { label: "Sales", href: "#solutions" },
      { label: "Support", href: "#solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy", href: "#privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="vanta-footer">
      <div className="vanta-footer__inner">

        <div className="vanta-footer__top">

          <div className="vanta-footer__brand">
            <a
              href="#top"
              className="vanta-footer__logo"
            >
              VANTA
            </a>

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

                <nav>
                  {column.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>

        </div>

        <div className="vanta-footer__bottom">

          <div className="vanta-footer__status">
            <span className="vanta-footer__status-dot" />
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