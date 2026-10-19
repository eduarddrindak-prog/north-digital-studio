import { ArrowUpRight, MapPin } from "lucide-react";
import { findUsContent } from "./FindUsPreview.content";
import "./FindUsPreview.css";

export default function FindUsPreview() {
  return <section className="lenoir-find-preview" aria-labelledby="find-preview-title"><div className="lenoir-find-preview__inner"><div className="lenoir-find-preview__map"><MapPin size={22} aria-hidden="true" /><span>48.8566° N<br />2.3522° E</span><strong>ML</strong></div><div className="lenoir-find-preview__content"><p className="lenoir-find-preview__eyebrow">{findUsContent.eyebrow}</p><h2 id="find-preview-title">{findUsContent.title}</h2><address>{findUsContent.address}<br />{findUsContent.city}</address><p>{findUsContent.hours.weekdays}<br />{findUsContent.hours.sunday}</p><a className="lenoir-find-preview__link" href="/lenoir/find-us#map">Get directions <ArrowUpRight size={16} aria-hidden="true" /></a></div></div></section>;
}
