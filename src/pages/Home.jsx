import { useEffect } from "react";
import DiverseSection from "../components/home/DiverseSection";
import Float from "../components/home/Float";
import Founder from "../components/home/Founder";
import Hero from "../components/home/Hero";
import SectionFive from "../components/SectionFive";
import SectionTwo from "../components/SectionTwo";
import Video from "../components/Video";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-full w-[100%] mt-20">
      <Hero />
      <SectionTwo />
      <Founder />
      <DiverseSection />
      <SectionFive />
      <Video />
    </div>
  );
};

export default Home;
