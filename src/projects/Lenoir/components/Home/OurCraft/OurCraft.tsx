import { ArrowRight } from "lucide-react";
import heroImage from "../../../assets/home/home-hero.jpg";
import { craftContent } from "./OurCraft.content";
import "./OurCraft.css";

export default function OurCraft() {
  return <section className="lenoir-craft" aria-labelledby="craft-title"><div className="lenoir-craft__inner"><div className="lenoir-craft__image"><img src={heroImage} alt={craftContent.imageAlt} loading="lazy" /><span className="lenoir-craft__image-note">Since 2026 · Paris</span></div><div className="lenoir-craft__content"><p className="lenoir-craft__eyebrow">{craftContent.eyebrow}</p><h2 id="craft-title">{craftContent.title}</h2><p>{craftContent.text}</p><p className="lenoir-craft__note">{craftContent.note}</p><a className="lenoir-craft__link" href="/lenoir/bakery">{craftContent.cta}<ArrowRight size={16} aria-hidden="true" /></a></div></div></section>;
}

