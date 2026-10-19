import { Motion } from "@/components/North Base/ui/Motion";
import { Tabs } from "@/components/North Base/ui/Tabs";
import heroImage from "../../../assets/home/home-eclair.jpg";
import parisBrestImage from "../../../assets/home/home-apple-tart.jpg";
import milleFeuilleImage from "../../../assets/home/home-eclair.jpg";
import lemonTartImage from "../../../assets/home/home-apple-tart.jpg";
import fruitTartImage from "../../../assets/home/home-apple-tart.jpg";
import { pastriesContent } from "./Pastries.content";
import "./Pastries.css";

export default function Pastries(){const images=[heroImage,parisBrestImage,milleFeuilleImage,lemonTartImage,fruitTartImage];return <section className="lenoir-pastries" id="pastries" aria-labelledby="pastries-title"><div className="lenoir-pastries__inner"><div className="lenoir-pastries__heading"><span>03</span><div><p>{pastriesContent.eyebrow}</p><h2 id="pastries-title">{pastriesContent.title}</h2><span>{pastriesContent.description}</span></div></div><Tabs className="lenoir-pastries__tabs-wrapper" listClassName="lenoir-pastries__tabs" tabClassName="lenoir-pastries__tab" panelClassName="lenoir-pastries__panel" items={pastriesContent.products.map((product,index)=>({id:product.name,label:<><span>0{index+1}</span>{product.name}</>,content:<Motion preset="fade-up" duration={520} className="lenoir-pastries__detail-motion"><div className="lenoir-pastries__detail"><div className="lenoir-pastries__detail-image"><img src={images[index]} alt={product.imageAlt} loading="lazy" /><small>From the pastry counter</small></div><div className="lenoir-pastries__detail-copy"><p>{product.category}</p><h3>{product.name}</h3><span>{product.description}</span><div className="lenoir-pastries__detail-meta"><strong>{product.price}</strong><em>{product.note}</em></div></div></div></Motion>}))}/></div></section>}

