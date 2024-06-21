import React from "react";
import pen from "../../assets/pen.png";
import magnet from "../../assets/magnet.png";
import audio from "../../assets/audio.png";
import world from "../../assets/world.png";
import people from "../../assets/people.png";

const diverseSection = () => {
  return (
    <div className="my-10">
      <h1 className="text-center  text-5xl font-bold">
        Among our Diverse Services
      </h1>
      <div className="mt-10">
        <div className="flex justify-center items-center  sm:gap-10 gap-2 sm:py-4 py-2 sm:px-10 px-2 deverse">
          <img src={pen} height={50} width={50} className="sm:ms-0 ms-2" alt="" />
          <div className="max-w-xl sm:ml-0 ml-2 sm:text-lg text-sm w-[70%]">
            <h3 className="font-semibold">
              Image Labeling, Data Annotation, and Database Management
            </h3>
            <p>
              We enhance accuracy and usability by organizing and optimizing
              various data sets.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 sm:gap-10 gap-2 sm:py-4 py-2 sm:px-10 px-2 deverseR">
          <img src={magnet} height={50} width={50} alt="" className="sm:ms-0 ms-2" />
          <div className="max-w-xl  sm:ml-0 ml-2 sm:text-lg text-sm w-[70%]">
            <h3 className="font-semibold">
              Lead Generation and Pre-sales Assistance
            </h3>
            <p>
              We engage with new prospects, nurture leads, and ensure your sales
              team stays focused on closing deals
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 sm:gap-10 gap-2 sm:py-4 py-2 sm:px-10 px-2 deverse">
          <img src={audio} height={50} width={50} alt=""  />
          <div className="max-w-xl sm:ml-0 ml-2 sm:text-lg text-sm w-[70%]">
            <h3 className="font-semibold">Audio and Video Processing </h3>
            <p>
              From remote monitoring to comprehensive analysis, we handle all
              aspects of audio and video data processing.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-10 sm:gap-10 gap-2 sm:py-4 py-2 sm:px-10 px-2 deverseR">
          <img src={world} height={50} width={50} alt=""  />
          <div className="max-w-xl sm:ml-0 ml-2 sm:text-lg text-sm w-[70%]">
            <h3 className="font-semibold">Staff Augmentation</h3>
            <p>
              Expand workforce with skilled external personnel to manage
              projects and boost organizational capacity.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 sm:gap-10 gap-2 sm:py-4 py-2 sm:px-10 px-2 deverse">
          <img src={people} height={50} width={50} alt=""  />
          <div className="max-w-xl sm:ml-0 ml-2 sm:text-lg text-sm w-[70%]">
            <h3 className="font-semibold">Offshore Solutions</h3>
            <p>
              Tailored offshore teams built to suit your specific workflow and
              operational needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default diverseSection;
