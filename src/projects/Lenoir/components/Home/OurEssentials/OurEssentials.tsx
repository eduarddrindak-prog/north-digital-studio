import { ArrowRight } from "lucide-react";
import baguetteImage from "../../../assets/home/home-baguette.jpg";
import croissantImage from "../../../assets/home/home-croissant.jpg";
import countryLoafImage from "../../../assets/home/home-country-loaf.jpg";
import eclairImage from "../../../assets/home/home-eclair.jpg";
import { essentialsContent } from "./OurEssentials.content";
import "./OurEssentials.css";

export default function OurEssentials() {
  const images = [baguetteImage, croissantImage, countryLoafImage, eclairImage];
  return <section className="lenoir-essentials" aria-labelledby="essentials-title"><div className="lenoir-essentials__inner">
    <div className="lenoir-essentials__intro"><div><p className="lenoir-essentials__eyebrow">{essentialsContent.eyebrow}</p><h2 id="essentials-title">{essentialsContent.title}</h2></div><p className="lenoir-essentials__description">{essentialsContent.description}</p></div>
    <div className="lenoir-essentials__grid">{essentialsContent.products.map((product, index) => <article className="lenoir-essential-card" key={product.name}><div className="lenoir-essential-card__image"><img src={images[index]} alt={product.name} loading="lazy" /><span>0{index + 1}</span></div><div className="lenoir-essential-card__details"><h3>{product.name}</h3><strong>{product.price}</strong></div></article>)}</div>
    <a className="lenoir-essentials__link" href="/lenoir/products">View all products <ArrowRight size={16} aria-hidden="true" /></a>
  </div></section>;
}

