import Hero from "../../components/Hero/Hero";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Workspace from "../../components/Workspace/Workspace";
import ScaleAcrossCompany from "../../components/ScaleAcrossCompany/ScaleAcrossCompany";
import BuiltToRun from "../../components/BuiltToRun/BuiltToRun";
import WorkInContext from "../../components/WorkInContext/WorkInContext";
import FinalCTA from "../../components/FinalCTA/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />

      <HowItWorks />

      <Workspace />

      <ScaleAcrossCompany />

      <BuiltToRun />

      <WorkInContext />

      <FinalCTA />

      {/* Future sections will be added here */}
    </>
  );
}