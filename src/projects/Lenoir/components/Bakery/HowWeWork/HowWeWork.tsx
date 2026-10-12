import { principles } from "./HowWeWork.content";
import { ArrowRight } from "lucide-react";
import heroImage from "../../../assets/maison-lenoir-hero.png";
import "./HowWeWork.css";

export default function HowWeWork(){return <section className="lenoir-principles"><div className="lenoir-principles__inner"><div className="lenoir-principles__heading"><p>HOW WE WORK</p><h2>The things we keep simple.</h2></div><div className="lenoir-principles__list">{principles.map((principle,index)=><article key={principle.title}><span>0{index+1}</span><h3>{principle.title}</h3><p>{principle.text}</p></article>)}</div></div><div className="lenoir-principles__closing"><img src={heroImage} alt="The Maison Lenoir bakery counter." loading="lazy" /><div><p>FROM THE FIRST BAKE</p><h3>To the last customer of the day.</h3><a href="/lenoir/find-us">Find us <ArrowRight size={17} aria-hidden="true" /></a></div></div></section>}
