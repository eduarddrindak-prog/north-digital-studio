import { ArrowDown } from "lucide-react";
import { ordersHero } from "./Hero.content";
import "./Hero.css";

export default function OrdersHero(){return <section className="lenoir-orders-hero"><div><p>{ordersHero.eyebrow}</p><h1>{ordersHero.title}</h1><span>{ordersHero.description}</span><a href="#request">{ordersHero.cta}<ArrowDown size={16} aria-hidden="true" /></a></div><strong>COLLECTION<br />AT THE BAKERY</strong></section>}
