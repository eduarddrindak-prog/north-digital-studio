import { ArrowDown, MapPin } from "lucide-react";
import { findUsHero } from "./Hero.content";
import "./Hero.css";

export default function FindUsHero(){return <section className="lenoir-find-hero"><div className="lenoir-find-hero__inner"><div><p>{findUsHero.eyebrow}</p><h1>{findUsHero.title}</h1><span>{findUsHero.description}</span><a href="#visit"><ArrowDown size={16} aria-hidden="true" />Plan your visit</a></div><div className="lenoir-find-hero__address"><MapPin size={20} aria-hidden="true" /><strong>{findUsHero.address}</strong><span>{findUsHero.city}</span></div></div></section>}
