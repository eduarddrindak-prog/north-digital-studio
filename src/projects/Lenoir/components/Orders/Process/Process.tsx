import { processSteps } from "./Process.content";
import "./Process.css";

export default function OrderProcess(){return <section className="lenoir-order-process"><div className="lenoir-order-process__inner"><div><p>HOW IT WORKS</p><h2>A simple request, handled by us.</h2></div><div className="lenoir-order-process__steps">{processSteps.map((step,index)=><article key={step.title}><span>0{index+1}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></div></section>}
