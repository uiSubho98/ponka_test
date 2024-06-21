import founder from "../../assets/founder.png";
import vector from "../../assets/Vector (2).png";

const Founder = () => {
  return (
    <div className="flex flex-col w-full md:justify-center gap-5 md:items-center   h-auto py-10 bg-[#FCF9F9]">
      <div className="flex   items-end gap-5 w-[100%] md:ps-0 ps-5 md:w-[60%]  ">
        <div className="">
          <img src={founder} height={150} width={150} alt="Founder" />
        </div>
        <div className="mt-5 lg:mt-24 w-fit lg:w-fit h-fit ">
          <h2 className="text-[#012F6B] font-semibold text-xl lg:text-3xl">
            Ami Dror, Founder
          </h2>
        </div>
      </div>
      <div className="w-[90%] md:w-[60%] md:ps-0 ps-20  lg:w-[50%] h-auto">
        <div className="relative w-full  pb-20">
          <p className="text-2xl lg:text-3xl">
            We totally changed Ponka from an extreme hunger society to a
            functional & professional community and we are always looking to
            connect with partners who are Leaders that believe that everything
            is possible.
          </p>
        </div>
        <div className="flex items-end justify-end">
          <div className="b absolute w-[30%] flex justify-end h-auto">
            <img
              src={vector}
              alt="Vector"
              className=" bottom-0 right-0 w-auto  h-20 m-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
