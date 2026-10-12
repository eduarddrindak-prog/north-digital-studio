import heroImage from "../../../assets/maison-lenoir-hero.png";
import { categories } from "./Categories.content";
import "./Categories.css";

export default function OrderCategories(){return <section className="lenoir-order-categories"><div className="lenoir-order-categories__inner"><div className="lenoir-order-categories__heading"><p>WHAT WE CAN PREPARE</p><h2>Made for sharing.</h2></div><div className="lenoir-order-categories__grid">{categories.map((category,index)=><article key={category.title}><div><img src={heroImage} alt={category.imageAlt} loading="lazy" /><span>0{index+1}</span></div><h3>{category.title}</h3><p>{category.description}</p></article>)}</div></div></section>}
