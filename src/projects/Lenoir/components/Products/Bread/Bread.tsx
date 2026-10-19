import { Tabs } from "@/components/North Base/ui/Tabs";
import { Motion } from "@/components/North Base/ui/Motion";
import baguetteImage from "../../../assets/home/home-baguette.jpg";
import countryLoafImage from "../../../assets/home/home-country-loaf.jpg";
import classicBaguetteImage from "../../../assets/home/home-baguette.jpg";
import productCountryLoafImage from "../../../assets/home/home-country-loaf.jpg";
import multigrainImage from "../../../assets/home/home-baguette.jpg";
import { breadContent } from "./Bread.content";
import "./Bread.css";

export default function Bread(){const images=[baguetteImage,classicBaguetteImage,productCountryLoafImage,countryLoafImage,multigrainImage];return <section className="lenoir-bread" id="bread" aria-labelledby="bread-title"><div className="lenoir-bread__inner"><div className="lenoir-bread__heading"><span>01</span><div><p>{breadContent.eyebrow}</p><h2 id="bread-title">{breadContent.title}</h2><span>{breadContent.description}</span></div></div><Tabs className="lenoir-bread__tabs-wrapper" listClassName="lenoir-bread__tabs" tabClassName="lenoir-bread__tab" panelClassName="lenoir-bread__panel" items={breadContent.products.map((product,index)=>({id:product.name,label:<><span>0{index+1}</span>{product.name}</>,content:<Motion preset="fade-up" duration={520} className="lenoir-bread__detail-motion"><div className="lenoir-bread__detail"><div className="lenoir-bread__detail-image"><img src={images[index]} alt={product.imageAlt} loading="lazy" /><small>Made fresh every day</small></div><div className="lenoir-bread__detail-copy"><p>{product.category}</p><h3>{product.name}</h3><span>{product.description}</span><div className="lenoir-bread__detail-meta"><strong>{product.price}</strong><em>{product.note}</em></div></div></div></Motion>}))}/></div></section>}

