import heroImage from "../../../assets/bakery/bakery-process.jpg";
import { bakeryHero } from "./Hero.content";
import "./Hero.css";

export default function BakeryHero(){return <section className="lenoir-bakery-hero" aria-labelledby="bakery-title"><div className="lenoir-bakery-hero__image"><img src={heroImage} alt={bakeryHero.imageAlt} fetchPriority="high" /></div><div className="lenoir-bakery-hero__copy"><p>{bakeryHero.eyebrow}</p><h1 id="bakery-title">{bakeryHero.title}</h1><span>{bakeryHero.description}</span></div></section>}

