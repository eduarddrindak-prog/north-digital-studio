import { ArrowRight } from "lucide-react";
import { specialOrdersContent } from "./SpecialOrdersCta.content";
import "./SpecialOrdersCta.css";

export default function SpecialOrdersCta(){return <section className="lenoir-special-orders"><div className="lenoir-special-orders__inner"><div className="lenoir-special-orders__heading"><p>{specialOrdersContent.eyebrow}</p><h2>{specialOrdersContent.title}</h2><span>{specialOrdersContent.description}</span></div><div className="lenoir-special-orders__aside"><div><small>Good for</small><strong>Breakfasts · birthdays · small events</strong></div><a href="/lenoir/orders">{specialOrdersContent.cta}<ArrowRight size={17} aria-hidden="true" /></a></div></div></section>}
