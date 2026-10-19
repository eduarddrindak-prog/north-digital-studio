import breakfastImage from "../../../assets/orders/orders-breakfast.jpg";
import celebrationImage from "../../../assets/orders/orders-packaging.jpg";
import eventsImage from "../../../assets/orders/orders-small-events.jpg";
import { categories } from "./Categories.content";
import "./Categories.css";

export default function OrderCategories(){const images=[breakfastImage,celebrationImage,eventsImage];return <section className="lenoir-order-categories"><div className="lenoir-order-categories__inner"><div className="lenoir-order-categories__heading"><p>WHAT WE CAN PREPARE</p><h2>Made for sharing.</h2></div><div className="lenoir-order-categories__grid">{categories.map((category,index)=><article key={category.title}><div><img src={images[index]} alt={category.imageAlt} loading="lazy" /><span>0{index+1}</span></div><h3>{category.title}</h3><p>{category.description}</p></article>)}</div></div></section>}

