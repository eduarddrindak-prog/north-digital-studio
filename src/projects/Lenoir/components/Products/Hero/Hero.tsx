import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "../../../assets/maison-lenoir-hero.png";
import { productsHeroContent } from "./Hero.content";
import "./Hero.css";

export default function ProductsHero() {
  const [activeCategory, setActiveCategory] = useState("bread");
  useEffect(() => { const sections = ["bread", "viennoiseries", "pastries", "lunch"].map((id) => document.getElementById(id)).filter(Boolean); const observer = new IntersectionObserver((entries) => { const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (visible?.target.id) setActiveCategory(visible.target.id); }, { rootMargin: "-18% 0px -62% 0px", threshold: [0.1, 0.35, 0.7] }); sections.forEach((section) => observer.observe(section!)); return () => observer.disconnect(); }, []);
  const categories = [["bread", "01 Bread"], ["viennoiseries", "02 Viennoiseries"], ["pastries", "03 Pastries"], ["lunch", "04 Lunch"]] as const;
  return <section className="lenoir-products-hero" aria-labelledby="products-hero-title"><div className="lenoir-products-hero__top"><p className="lenoir-products-hero__eyebrow">{productsHeroContent.eyebrow}</p><span className="lenoir-products-hero__edition">Maison Lenoir · Paris</span></div><div className="lenoir-products-hero__body"><div className="lenoir-products-hero__copy"><h1 id="products-hero-title">{productsHeroContent.title}</h1><p>{productsHeroContent.description}</p><a href="#bread" className="lenoir-products-hero__scroll">Explore the counter <ArrowDown size={16} aria-hidden="true" /></a></div><div className="lenoir-products-hero__visual"><img src={heroImage} alt={productsHeroContent.imageAlt} fetchPriority="high" /></div></div><nav className="lenoir-products-hero__categories" aria-label="Product categories">{categories.map(([id, label]) => <a key={id} href={`#${id}`} className={activeCategory === id ? "is-active" : ""} aria-current={activeCategory === id ? "location" : undefined}>{label}</a>)}</nav></section>;
}
