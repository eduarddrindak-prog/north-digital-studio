import Hero from "@/pages/Home/sections/Hero";
import Problem from "@/pages/Home/sections/Problem";
import Solution from "@/pages/Home/sections/Solution";
import Process from "@/pages/Home/sections/Process";
import Portfolio from "@/pages/Home/sections/Portfolio";
import Services from "@/pages/Home/sections/Services";
import FAQ from "@/pages/Home/sections/FAQ";
import FinalCTA from "@/pages/Home/sections/FinalCTA";


export default function Home() {

  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Process />
      <Services />
      <Portfolio />
      <FAQ />
      <FinalCTA />
    </>
  );

}