import heroImage from "../../../assets/bakery/bakery-story.jpg";
import { storyContent } from "./OurStory.content";
import "./OurStory.css";

export default function OurStory(){return <section className="lenoir-story"><div className="lenoir-story__inner"><div className="lenoir-story__copy"><p>{storyContent.eyebrow}</p><h2>{storyContent.title}</h2><div>{storyContent.paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}</div><span className="lenoir-story__owner"><strong>{storyContent.owner.name}</strong><small>{storyContent.owner.role}</small></span></div><div className="lenoir-story__image"><img src={heroImage} alt={storyContent.imageAlt} loading="lazy" /></div></div></section>}

