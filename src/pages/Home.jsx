import DiverseSection from "../components/home/DiverseSection";
import Float from "../components/home/Float";
import Founder from "../components/home/Founder";
import Hero from "../components/home/Hero";
import SectionTwo from "../components/SectionTwo";
import Video from "../components/Video";

const Home = () => {
  return (
    <div className="h-full w-[100%] mt-20">
      <Hero />
      <SectionTwo />
      <Founder/>
      <DiverseSection />
      <Video /> 
    </div>
  );
};

export default Home;
