import { Clock3, Phone, TrainFront } from "lucide-react";
import { visitDetails } from "./VisitDetails.content";
import "./VisitDetails.css";

export default function VisitDetails(){return <section className="lenoir-visit" id="visit"><div className="lenoir-visit__inner"><div className="lenoir-visit__heading"><p>PLAN YOUR VISIT</p><h2>A good place to stop by.</h2></div><div className="lenoir-visit__details"><div><Clock3 size={20} aria-hidden="true" /><span><small>Opening hours</small><strong>{visitDetails.hours.weekdays}</strong><strong>{visitDetails.hours.sunday}</strong></span></div><div><TrainFront size={20} aria-hidden="true" /><span><small>Getting here</small><strong>{visitDetails.transport}</strong></span></div><div><Phone size={20} aria-hidden="true" /><span><small>Call ahead</small><strong>{visitDetails.phone}</strong></span></div></div></div></section>}
