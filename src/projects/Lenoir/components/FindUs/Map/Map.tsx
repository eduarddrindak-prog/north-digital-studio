import { ArrowUpRight, MapPin } from "lucide-react";
import { mapContent } from "./Map.content";
import "./Map.css";

export default function FindUsMap(){return <section className="lenoir-find-map" id="map"><div className="lenoir-find-map__inner"><div className="lenoir-find-map__visual"><div className="lenoir-find-map__rings"><MapPin size={24} aria-hidden="true" /><strong>ML</strong><span>48.8566° N<br />2.3522° E</span></div></div><div className="lenoir-find-map__copy"><p>{mapContent.eyebrow}</p><h2>{mapContent.title}</h2><span>{mapContent.description}</span><a href={mapContent.directionsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={17} aria-hidden="true" /></a></div></div></section>}
