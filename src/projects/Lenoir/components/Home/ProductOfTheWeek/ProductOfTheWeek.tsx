import heroImage from "../../../assets/home/home-apple-tart.jpg";
import { weeklyContent } from "./ProductOfTheWeek.content";
import "./ProductOfTheWeek.css";

export default function ProductOfTheWeek() {
  return <section className="lenoir-weekly" aria-labelledby="weekly-title"><div className="lenoir-weekly__inner"><div className="lenoir-weekly__visual"><img src={heroImage} alt={weeklyContent.imageAlt} loading="lazy" /><span className="lenoir-weekly__number">AVAILABLE THIS WEEK</span></div><div className="lenoir-weekly__copy"><p className="lenoir-weekly__eyebrow">{weeklyContent.eyebrow}</p><h2 id="weekly-title">{weeklyContent.title}</h2><p className="lenoir-weekly__description">{weeklyContent.description}</p><div className="lenoir-weekly__details"><strong>{weeklyContent.price}</strong></div></div></div></section>;
}

