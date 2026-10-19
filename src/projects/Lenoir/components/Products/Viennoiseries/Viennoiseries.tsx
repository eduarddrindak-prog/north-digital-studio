import { Motion } from "@/components/North Base/ui/Motion";
import { Tabs } from "@/components/North Base/ui/Tabs";
import heroImage from "../../../assets/home/home-croissant.jpg";
import morningBakeImage from "../../../assets/home/home-croissant.jpg";
import raisinSwirlImage from "../../../assets/home/home-croissant.jpg";
import appleTurnoverImage from "../../../assets/home/home-apple-tart.jpg";
import briocheImage from "../../../assets/home/home-country-loaf.jpg";
import { viennoiseriesContent } from "./Viennoiseries.content";
import "./Viennoiseries.css";

export default function Viennoiseries(){const images=[heroImage,morningBakeImage,raisinSwirlImage,appleTurnoverImage,briocheImage];return <section className="lenoir-viennoiseries" id="viennoiseries" aria-labelledby="viennoiseries-title"><div className="lenoir-viennoiseries__inner"><div className="lenoir-viennoiseries__heading"><span>02</span><div><p>{viennoiseriesContent.eyebrow}</p><h2 id="viennoiseries-title">{viennoiseriesContent.title}</h2><span>{viennoiseriesContent.description}</span></div></div><Tabs className="lenoir-viennoiseries__tabs-wrapper" listClassName="lenoir-viennoiseries__tabs" tabClassName="lenoir-viennoiseries__tab" panelClassName="lenoir-viennoiseries__panel" items={viennoiseriesContent.products.map((product,index)=>({id:product.name,label:<><span>0{index+1}</span>{product.name}</>,content:<Motion preset="fade-up" duration={520} className="lenoir-viennoiseries__detail-motion"><div className="lenoir-viennoiseries__detail"><div className="lenoir-viennoiseries__detail-image"><img src={images[index]} alt={product.imageAlt} loading="lazy" /><small>From the morning bake</small></div><div className="lenoir-viennoiseries__detail-copy"><p>{product.category}</p><h3>{product.name}</h3><span>{product.description}</span><div className="lenoir-viennoiseries__detail-meta"><strong>{product.price}</strong><em>{product.note}</em></div></div></div></Motion>}))}/></div></section>}

