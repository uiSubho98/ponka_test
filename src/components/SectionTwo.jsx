const SectionTwo = () => {
    const infos = [
      {
        title: "Build your Off-shore Team",
        desc: "Reliable and scalable manpower",
      },
      {
        title: "Save on Operations Costs",
        desc: "High Quality technical operations by well trained staff",
      },
      {
        title: "Make a Social Impact",
        desc: "Helping families of one of the poorest countries",
      },
    ];
  
    return (
      <div className="flex justify-center items-center my-14 px-4 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:w-[70rem]  w-[90%] gap-5">
          {infos.map((info, index) => (
            <div
              key={index}
              className="w-full h-[100px] md:h-[10rem] bg-gray-100 shadow-md flex lg:justify-center items-center p-2 md:p-5"
            >
              <div className="">
                <h1 className="text-sm md:text-lg font-semibold">
                  {info.title}
                </h1>
                <p className="text-xs md:text-md">
                  {info.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SectionTwo;
  