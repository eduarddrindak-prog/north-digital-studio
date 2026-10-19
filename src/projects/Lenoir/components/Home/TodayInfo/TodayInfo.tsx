import { Clock3, MapPin, Phone } from "lucide-react";
import { todayInfo } from "./TodayInfo.content";
import "./TodayInfo.css";

const icons = [Clock3, MapPin, Phone];

export default function TodayInfo() {
  return <section className="lenoir-today" aria-label="Practical information"><div className="lenoir-today__inner">{todayInfo.map((item, index) => { const Icon = icons[index]; return <div className="lenoir-today__item" key={item.label}><div className="lenoir-today__icon"><Icon size={18} aria-hidden="true" /></div><span><small>{item.label}</small><strong>{item.value}</strong><em>{item.detail}</em></span></div>; })}</div></section>;
}
