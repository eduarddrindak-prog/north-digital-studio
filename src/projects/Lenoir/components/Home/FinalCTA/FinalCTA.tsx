import { Button } from "@/components/North Base/ui/Button";
import { finalCtaContent } from "./FinalCTA.content";
import "./FinalCTA.css";

export default function FinalCTA() { return <section className="lenoir-final-cta"><div className="lenoir-final-cta__ornament" aria-hidden="true">✳</div><div className="lenoir-final-cta__inner"><p>{finalCtaContent.eyebrow}</p><h2>{finalCtaContent.title}</h2><span>{finalCtaContent.description}</span><Button href="/lenoir/find-us" variant="primary" size="lg" withArrow>{finalCtaContent.cta}</Button></div></section>; }
