import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bike from "../assets/motorbike.png";
import teacher from "../assets/teacher.png";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const reloaded = sessionStorage.getItem("reloaded");

    if (reloaded) {
      // This means the page has been reloaded
      sessionStorage.removeItem("reloaded"); // Clear the flag after redirecting
      navigate("/");
    } else {
      // Set the flag for page reload detection
      sessionStorage.setItem("reloaded", "true");
    }

    // Cleanup: clear the flag when the component is unmounted
    return () => {
      sessionStorage.removeItem("reloaded");
    };
  }, [navigate]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="lg:mt-[8rem] mt-[7rem] ">
      <div className="flex justify-evenly items-start  w-full gap-0 md:gap-10">
        <div className="w-[50%]  ps-4 md:ps-4 lg:ps-0 md:w-[40%] ">
        <h1 className="text-[2rem] font-semibold md:text-[2rem] lg:text-[3rem] sm:text-[1.5rem] h-fit">
          Our Story {" "}
        </h1>
          <h3 className="text-xl md:text-3xl font-semibold mt-2 md:mt-10">
            Born in a village, thriving globally. Empowering communities through
            opportunity.
          </h3>
          <p className="mt-10 md:block hidden text-2xl">
            Ponka was founded in a village in the middle of a jungle in Sierra
            Leone in 2018 with the aim to increase the employment of the people
            in the village and help better the living standards of the people of
            one of the poorest communities in the world. Most of our employees
            grew up in Sierra Leone during the 1991 civil war and their
            employment is the most critical path for social change in the 5th
            poorest country on earth. The people here are very talented but do
            not get to showcase it because of the limited number of resources
            available.
          </p>
        </div>
        <div className="pe-4 md:p-5 w-[50%] md:w-[566px]">
          <img src={bike} alt="" className="" />
        </div>
      </div>

      <div className="w-full  h-fit mt-4 block  md:hidden px-4">
        <p className="">
          Ponka was founded in a village in the middle of a jungle in Sierra
          Leone in 2018 with the aim to increase the employment of the people in
          the village and help better the living standards of the people of one
          of the poorest communities in the world. Most of our employees grew up
          in Sierra Leone during the 1991 civil war and their employment is the
          most critical path for social change in the 5th poorest country on
          earth. The people here are very talented but do not get to showcase it
          because of the limited number of resources available.
        </p>
      </div>

      <div className="flex justify-evenly   mt-10 items-center  w-full gap-0 md:gap-10">
        <div className="w-[50%]  ps-4 md:ps-4 lg:ps-0 md:w-[40%] ">
          <img src={teacher} alt="" className="" />
        </div>
        <div className="px-2 md:p-5 w-[50%] md:w-[566px]">
        <h1 className="text-3xl md:text-[2rem] lg:text-[3rem] font-bold w-full  ">How do we work?</h1>
          <p className="mt-2 md:mt-10  w-[100%] md:w-[100%] xl:w-[90%] md:text-xl lg:text-xl xl:text-2xl text-sm">
            Most tech companies need low-cost human intelligence services.
            Normally the companies have a few in-house people and in other cases
            they are using massive outsourcing companies costing them a lot.{" "}
            <br />
            <span className="md:inline hidden">
              Ponka offers better pricing, high quality work, and more than
              anything - the ability to help one of the poorest communities on
              earth. Ponka is proud to be the first tech company in Sierra Leone
              and as a social impact enterprise, 100% of the profits accrued
              from our projects are used to support the local community and to
              the development of the village.
            </span>
          </p>
        </div>
      </div>

      <div className="w-full h-fit mt-4 block  md:hidden px-4">
      <p className="">
          Ponka offers better pricing, high quality work, and more than anything
          - the ability to help one of the poorest communities on earth. Ponka
          is proud to be the first tech company in Sierra Leone and as a social
          impact enterprise, 100% of the profits accrued from our projects are
          used to support the local community and to the development of the
          village.
        </p>
      </div>

      <div className="third mt-10  ">
        <div className="flex flex-col items-start pt-8  ">
          <div className="w-[82%] mx-auto  md:mb-5 mb-5">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Why choose Ponka?
            </h1>
          </div>

          <div>
            <div className="flex justify-center items-center  w-[82%]  mx-auto">
              <p className="text-md md:text-sm xl:text-2xl lg:text-xl">
                Get a specialized team customized to your requirements, freeing
                up your time to concentrate on core business functions. Enjoy
                the adaptability to seamlessly adjust to evolving demands, with
                round-the-clock work shifts ensuring continuous support. Boost
                productivity and efficiency in your operations while also
                contributing to meaningful social impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
