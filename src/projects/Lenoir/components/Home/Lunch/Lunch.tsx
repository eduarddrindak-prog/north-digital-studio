import { ArrowRight } from "lucide-react";
import heroImage from "../../../assets/maison-lenoir-hero.png";
import { lunchContent } from "./Lunch.content";
import "./Lunch.css";

export default function Lunch() {
  return <section className="lenoir-lunch" aria-labelledby="lunch-title"><div className="lenoir-lunch__inner"><div className="lenoir-lunch__copy"><p className="lenoir-lunch__eyebrow">{lunchContent.eyebrow}</p><h2 id="lunch-title">{lunchContent.title}</h2><p>{lunchContent.description}</p></div><div className="lenoir-lunch__visual"><img src={heroImage} alt="A simple lunch prepared at Maison Lenoir." loading="lazy" /><span>SERVED MON–SAT</span></div><div className="lenoir-lunch__menu">{lunchContent.items.map((item) => <div key={item.name}><span>{item.name}</span><strong>{item.price}</strong></div>)}</div><div className="lenoir-lunch__formula"><span>{lunchContent.formula.label}</span><strong>{lunchContent.formula.price}</strong><small>{lunchContent.formula.description}</small></div><a href="/lenoir/products" className="lenoir-lunch__link">View the lunch menu <ArrowRight size={16} aria-hidden="true" /></a></div></section>;
}
