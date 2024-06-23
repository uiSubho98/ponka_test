import { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const Support = () => {
  const currentUrl = window.location.href;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleFacebookShare = () => {
    setTimeout(() => {
      navigator.clipboard.writeText(currentUrl).then(() => {
        window.open(`https://www.facebook.com`, "_blank");
      });
    }, 2000);
    toast.success("URL Copied ");
  };

  const handleTwitterShare = () => {
    setTimeout(() => {
      navigator.clipboard.writeText(currentUrl).then(() => {
        window.open(`https://twitter.com/`, "_blank");
      });
    }, 2000);
    toast.success("URL Copied ");
  };
  return (
    <div className="lg:mt-[8rem] mt-[7rem] sm:px-[10%]  lg:px-[6%] md:[px-1%] px-[10%] sm:mx-[15%] lg:mx-[5%] md:mx-[1%] flex-col justify-center sm:justify-start  pb-10">
      <div className="mb-8  lg:text-center md:text-center sm:mb-12 ">
        <h1 className="text-[2rem] font-semibold md:text-[2rem] lg:text-[3rem] sm:text-[1.5rem] flex sm:flex-row sm:justify-center">
          Get <span className="sm:mx-[1rem] ml-[0.5rem]"> Involved </span>{" "}
        </h1>
        <p className="font-semibold sm:mt-1 mt-2 text-[1.15rem] lg:text-[1rem] md:text-[0.75rem] sm:text-[1rem]">
          We welcome your inquiries, contributions, and partnership
          opportunities as we strive to make{" "}
          <span className="sm:block md:hidden">
            {" "}
            a meaningful difference in the lives of those we serve.
          </span>{" "}
        </p>
        <div className="flex justify-center">
          <p className="font-semibold  w-[30rem] sm:mt-1 mt-2 text-[1.15rem] lg:text-[1rem] md:text-[0.75rem] sm:text-[1rem] hidden sm:block">
            {" "}
            a meaningful difference in the lives of those we serve.
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <div className="text-center w-[30rem]  sm:mx-[24%]  py-[5%] text-[1rem] bg-[#FCF9F9] ring-1 ring-[#DAE8F0] rounded-md">
            <div className="px-[5%] mb-[10%] text-[0.75rem] md:text-[0.9rem] sm:text-[1rem] lg:text-[1rem]">
              <h1 className="font-semibold mb-2">Spread the Word</h1>
              <p>
                Help us spread awareness by sharing our impactful stories,
                photos, and videos on your social media platforms.
              </p>
            </div>
            <div className="w-full h-auto    flex flex-col  justify-center gap-4 items-center">
              <button
                onClick={() => handleFacebookShare()}
                className="text-center text-[0.7rem] lg:text-[1rem] md:text-[0.7rem]  rounded-md bg-[#012F6B]  md:bg-[#DAE8F0] px-8 py-2 sm:text-[#012F6B] text-white font-semibold flex flex-row"
              >
                <span className="mx-1 flex items-center justify-evenly">
                  {" "}
                  <FaFacebook className="w-6 h-5 mr-2" /> Share on Facebook
                </span>
              </button>
              <button
                onClick={() => handleTwitterShare()}
                className="text-center bg-[#012F6B]  md:bg-[#DAE8F0] px-8 py-2 text-[0.7rem] lg:text-[1rem] md:text-[0.7rem] ] rounded-md sm:text-[#012F6B] text-white font-semibold flex flex-row"
              >
                <span className="mx-1 flex items-center justify-evenly">
                  {" "}
                  <FaTwitter className="w-10 h-5 mr-2" /> Share on Twitter
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Support;
