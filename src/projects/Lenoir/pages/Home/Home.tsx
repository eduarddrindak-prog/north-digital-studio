import Hero from "../../components/Home/Hero/Hero";
import TodayInfo from "../../components/Home/TodayInfo/TodayInfo";
import OurEssentials from "../../components/Home/OurEssentials/OurEssentials";
import OurCraft from "../../components/Home/OurCraft/OurCraft";
import ProductOfTheWeek from "../../components/Home/ProductOfTheWeek/ProductOfTheWeek";
import Lunch from "../../components/Home/Lunch/Lunch";
import FindUsPreview from "../../components/Home/FindUsPreview/FindUsPreview";
import FinalCTA from "../../components/Home/FinalCTA/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TodayInfo />
      <OurEssentials />
      <OurCraft />
      <ProductOfTheWeek />
      <Lunch />
      <FindUsPreview />
      <FinalCTA />
    </>
  );
}