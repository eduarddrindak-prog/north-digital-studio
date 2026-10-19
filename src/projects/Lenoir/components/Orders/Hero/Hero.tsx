import { ArrowDown } from "lucide-react";
import heroImage from "../../../assets/orders/orders-hero.jpg";
import { ordersHero } from "./Hero.content";
import "./Hero.css";

export default function OrdersHero(){return <section className="lenoir-orders-hero"><div className="lenoir-orders-hero__copy"><p>{ordersHero.eyebrow}</p><h1>{ordersHero.title}</h1><span>{ordersHero.description}</span><a href="#request">{ordersHero.cta}<ArrowDown size={16} aria-hidden="true" /></a></div><div className="lenoir-orders-hero__visual"><img src={heroImage} alt="Fresh pastries prepared for a Maison Lenoir order." fetchPriority="high" /><small>MADE FOR SHARING</small></div><strong>COLLECTION<br />AT THE BAKERY</strong></section>}

