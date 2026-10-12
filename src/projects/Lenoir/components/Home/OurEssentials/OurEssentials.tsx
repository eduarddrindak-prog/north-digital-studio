import { ArrowRight } from "lucide-react";
import heroImage from "../../../assets/maison-lenoir-hero.png";
import { essentialsContent } from "./OurEssentials.content";
import "./OurEssentials.css";

export default function OurEssentials() {
  return <section className="lenoir-essentials" aria-labelledby="essentials-title"><div className="lenoir-essentials__inner">
    <div className="lenoir-essentials__intro"><div><p className="lenoir-essentials__eyebrow">{essentialsContent.eyebrow}</p><h2 id="essentials-title">{essentialsContent.title}</h2></div><p className="lenoir-essentials__description">{essentialsContent.description}</p></div>
    <div className="lenoir-essentials__grid">{essentialsContent.products.map((product, index) => <article className="lenoir-essential-card" key={product.name}><div className="lenoir-essential-card__image"><img src={heroImage} alt="" loading="lazy" /><span>0{index + 1}</span></div><div className="lenoir-essential-card__details"><h3>{product.name}</h3><strong>{product.price}</strong></div></article>)}</div>
    <a className="lenoir-essentials__link" href="/lenoir/products">View all products <ArrowRight size={16} aria-hidden="true" /></a>
  </div></section>;
}
