
const Support = () => {
  return (
    <div className="lg:mt-[8rem] mt-[7rem] sm:px-[10%] lg:px-[6%] md:[px-1%] px-[5%] sm:mx-[15%] lg:mx-[5%] md:mx-[1%] flex-col justify-center sm:justify-start  pb-10">
    <div className="mb-8  lg:text-center md:text-center sm:mb-12 ">
      <h1 className="text-[2rem] font-semibold md:text-[2rem] lg:text-[3rem] sm:text-[1.5rem] flex sm:flex-row sm:justify-center">
        Support <span className="hidden sm:block sm:mx-[1rem]"> Us </span>{" "}
      </h1>
      <p className="font-semibold sm:mt-1 mt-2 text-[1.15rem] lg:text-[1rem] md:text-[0.75rem] sm:text-[1rem]">We welcome your inquiries, contributions, and partnership opportunities as we strive to make <span className="sm:block md:hidden">  a meaningful difference in the lives of those we serve.</span> </p>
      <div className="flex justify-center">
      <p className="font-semibold  w-[30rem] sm:mt-1 mt-2 text-[1.15rem] lg:text-[1rem] md:text-[0.75rem] sm:text-[1rem] hidden sm:block" > a meaningful difference in the lives of those we serve.</p>
      </div>
    </div>
    <div className="flex justify-center">
    <div className="text-center w-[30rem]  sm:mx-[24%]  py-[5%] text-[1rem] bg-[#FCF9F9] ring-1 ring-[#DAE8F0] rounded-md">
      <div className="px-[5%] mb-[10%] text-[0.75rem] md:text-[0.9rem] sm:text-[1rem] lg:text-[1rem]">
        <h1 className="font-semibold mb-2">Spread the Word</h1>
        <p>Help us spread awareness by sharing our impactful stories, photos, and videos on your social media platforms.</p>
      </div>
      <div className=" mx-[20%] md:mx[0%] sm:mx-[31%] mt-[12%] px-2 sm:px-8 md:px-4 py-1.5 justify-center flex sm:bg-[#DAE8F0] bg-[#012F6B] rounded-sm sm:rounded-sm  ">
      <button className="text-center text-[0.7rem] lg:text-[1rem] md:text-[0.7rem] text-[0.9rem] rounded-md sm:text-[#012F6B] text-[#ffffff] font-semibold flex flex-row">
              Share<span className="block sm:hidden mx-1"> on </span> Link
            </button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Support;
