import "./Footer.css";

const links = [["Home", "/lenoir"], ["Products", "/lenoir/products"], ["The Bakery", "/lenoir/bakery"], ["Orders", "/lenoir/orders"], ["Find Us", "/lenoir/find-us"]] as const;

export default function Footer() {
  return <footer className="lenoir-footer"><div className="lenoir-container lenoir-footer__grid">
    <div><a className="lenoir-footer__brand" href="/lenoir">Maison Lenoir</a><p>Artisan bakery and pastry shop in Paris.</p></div>
    <div><p className="lenoir-footer__label">Explore</p><nav className="lenoir-footer__links">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav></div>
    <div><p className="lenoir-footer__label">Visit</p><p>28 Rue des Pyrénées<br />75020 Paris<br /><span>Mon–Sat · 07:00–19:30<br />Sun · 07:00–13:30</span></p></div>
  </div><div className="lenoir-container lenoir-footer__bottom"><span>© 2026 Maison Lenoir</span><span>Instagram&nbsp;&nbsp;&nbsp; Privacy</span></div></footer>;
}
