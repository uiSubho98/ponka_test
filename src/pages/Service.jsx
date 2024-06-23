import { useEffect, useRef } from "react";
import Vehicle from "../assets/Vehicle.png";
import Legal from "../assets/legal.png";
import Retail from "../assets/Retail.png";
import Robotics from "../assets/Robotics.png";
import Sports from "../assets/Sports.png";
import Finance from "../assets/Finance.png";
import Agriculture from "../assets/Agriculture.png";
import contoAi from "../assets/controai.png";
import Geospatial from "../assets/Geospatial.png";
import Health from "../assets/healthcare.png";
import Edtech from "../assets/EdTech.png";
import Software from "../assets/Software.png";
import Group29 from "../assets/Group29.png";
import Group30 from "../assets/Group 30.png";
import Group31 from "../assets/Group31.png";
import Group32 from "../assets/Group32.png";
import Coral from "../assets/coral.png";
import Ann from "../assets/ann.png";
import Dairycs from "../assets/Dairycs.png";
import MyCrops from "../assets/MyCrops.png";
import Pumba from "../assets/Pumba.png";
import Knighted from "../assets/Knighted.png";
import Kemtai from "../assets/kemtai.png";
import SeeTree from "../assets/SeeTree.png";
import LeapEarner from "../assets/LeapEarner.png";
import edesia from "../assets/edesia.png";
import Fitcam from "../assets/Fitcam.png";
import BiScience from "../assets/BiScience.png";

const Service = () => {
  const carouselTrackRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      img: Vehicle,
      text: "Autonomous Vehicles",
    },
    {
      img: Legal,
      text: "Legal",
    },
    {
      img: Retail,
      text: "Retail",
    },
    {
      img: Robotics,
      text: "Robotics",
    },
    {
      img: Finance,
      text: "Finance",
    },
    {
      img: Sports,
      text: "Sports & Fitness",
    },
    {
      img: Agriculture,
      text: "Agriculture",
    },
    {
      img: Geospatial,
      text: "Geospatial",
    },
    {
      img: Health,
      text: "Healthcare",
    },
    {
      img: contoAi,
      text: "Conversational AI",
    },
    {
      img: Edtech,
      text: "Ed-Tech",
    },
    {
      img: Software,
      text: "Softwares",
    },
  ];

  const carousels = [
    {
      img: Coral,
    },
    {
      img: Ann,
    },
    {
      img: Dairycs,
    },
    {
      img: MyCrops,
    },
    {
      img: Pumba,
    },
    {
      img: Knighted,
    },
    {
      img: Kemtai,
    },
    {
      img: SeeTree,
    },
    {
      img: LeapEarner,
    },
    {
      img: edesia,
    },
    {
      img: Fitcam,
    },
    {
      img: BiScience,
    },
  ];

  useEffect(() => {
    const track = carouselTrackRef.current;
    const slideCount = carousels.length;
    track.style.setProperty("--slide-count", slideCount);
    track.style.setProperty("--slide-width", "150px");
  }, [carousels]);

  return (
    <div className="lg:mt-[8rem] mt-[7rem] lg:px-24 px-10 pb-10">
      <section className="hidden lg:block">
      <h1 className="text-[2rem]  font-semibold md:text-[2rem] lg:text-[3rem] sm:text-[1.5rem] h-fit flex sm:flex-row sm:justify-center">
          Our Services {" "}
        </h1>
        <p className="text-2xl  w-[100%] mt-4">
          Choose Ponka for exceptional service excellence and innovation-driven
          solutions. With a focus on client satisfaction and a track record of
          delivering results, Ponka is your trusted partner for all
          organizational needs.
        </p>
      </section>

      <section className="lg:hidden block">
        <h1 className="text-4xl font-bold mb-5">Our Services</h1>
        <p className="">
          Choose Ponka for exceptional service excellence and innovation-driven
          solutions. With a focus on client satisfaction and a track record of
          delivering results, Ponka is your trusted partner for all
          organizational needs.
        </p>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 lg:px-10 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="border flex flex-col items-center justify-center py-5"
          >
            <img src={service.img} alt={service.text} className="mb-2" />
            <p className="text-center">{service.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-20">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-5 lg:w-[100%] xl:lg:w-[100%] md:lg:w-[100%] w-[80%]">
          Discover How We Empower Businesses
          </h1>
          <p className="w-[100%] text-2xl">
            Our business model is based on recurring business and referral
            business from our happy customers. We go that extra mile to ensure
            complete customer satisfaction.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <img src={Group29}  style={{ transform: 'scale(0.8)' }} alt="" />
          <img src={Group30} style={{ transform: 'scale(0.8)' }} alt="" />
          <img src={Group31} style={{ transform: 'scale(0.8)' }} alt="" />
          <img src={Group32} style={{ transform: 'scale(0.8)' }} alt="" />
        </div>
      </section>

      <div className="hidden md:block">
        <section className="grid md:grid-cols-4 lg:grid-cols-6 gap-5 mt-10">
          {carousels.map((carousel, index) => (
            <div key={index}>
              <img
                src={carousel.img}
                className="w-full h-auto mb-2"
                alt={`Carousel ${index}`}
              />
            </div>
          ))}
        </section>
      </div>

      <div className="carousel-container block md:hidden overflow-hidden ">
        <div className="carousel-track" ref={carouselTrackRef}>
          {carousels.map((item, index) => (
            <div
              className="carousel-slide"
              key={index}
              style={{ margin: "0 12px" }}
            >
              <img src={item.img} width={150} height={150} alt="" />
            </div>
          ))}
          {carousels.map((item, index) => (
            <div
              className="carousel-slide"
              style={{ margin: "0 12px" }}
              key={`duplicate-${index}`}
            >
              <img src={item.img} width={150} height={150} alt="" />
            </div>
          ))}
        </div>
      </div>

      <p className="text-center">engaged with 65 more businesses</p>
    </div>
  );
};

export default Service;
