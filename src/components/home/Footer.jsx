import React from "react";
import FooterLogo from "../../assets/FooterLogo.png";
import { Link } from "react-router-dom";
import { FaInstagram,FaLinkedin } from "react-icons/fa";
import { AiOutlineMail,AiOutlineLinkedin  } from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-[#FCF9F9] w-full ">
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* section-1 */}
          <div className="flex flex-col items-center my-3">
            <img src={FooterLogo} alt="Footer Logo" width={80} height={80} />
          </div>
    {/* section-2 */}

          <div className="my-3 sm:block hidden text-center border-l border-gray-300 flex flex-col items-center">
            <p className="font-poppins text-xs md:text-lg">Address:</p>
            <p className="font-poppins text-xs md:text-lg">5-Sesay Street, Tulun Road,</p>
            <p className="font-poppins text-xs md:text-lg">Lungi, Sierra Leone</p>
            <Link to="mailto:sales@ponka.org">
              <p className="font-poppins text-xs md:text-lg">sales@ponka.org</p>
            </Link>
          </div>
    {/* section-3 */}

          <div className="my-3 sm:block hidden text-center border-l border-gray-300">
            <p className="font-poppins text-xs md:text-lg">
              <Link to="/about">About</Link>
            </p>
            <p className="font-poppins text-xs md:text-lg">
              <Link to="/ourservices">Services</Link>
            </p>
            <p className="font-poppins text-xs md:text-lg">
              <Link to="/contact">Contact</Link>
            </p>
            <div className="flex justify-center mt-1 items-center">
              <a href="https://www.instagram.com/ponka.global?igsh=MWZ3NDRleWV1MzN1MQ%3D%3D&utm_source=qr" target="_blank">
                
                <FaInstagram style={{ width: "40px", height: "27px" }} />
              </a>
              <a href="https://www.linkedin.com/company/ponka/" target="_blank">
              <AiOutlineLinkedin  style={{ width: "40px", height: "27px" }} />
              </a>
              <a href="mailto:sales@ponka.org">
              <AiOutlineMail style={{ width: "40px", height: "27px" }} />

              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-evenly items-center w-full  p-0 m-0">
        <div className="my-3 sm:hidden gap-y-1 flex flex-col items-center  w-[50%] ">
            <p className="font-poppins text-left text-xs md:text-lg">Address:</p>
            <p className="font-poppins text-xs md:text-lg">5-Sesay Street, Tulun Road,</p>
            <p className="font-poppins text-xs md:text-lg">Lungi, Sierra Leone</p>
            <Link to="mailto:sales@ponka.org">
              <p className="font-poppins text-xs md:text-lg">sales@ponka.org</p>
            </Link>
          </div>
          <div className="my-3 sm:hidden block text-center border-l border-gray-300 w-[40%]">
            <p className="font-poppins text-sm md:text-lg">
              <Link to="/about">About</Link>
            </p>
            <p className="font-poppins text-sm md:text-lg">
              <Link to="/ourservices">Services</Link>
            </p>
            <p className="font-poppins text-sm md:text-lg">
              <Link to="/contact">Contact</Link>
            </p>
            <div className="flex justify-center mt-1 items-center">
              <a href="https://www.instagram.com/ponka.global?igsh=MWZ3NDRleWV1MzN1MQ%3D%3D&utm_source=qr" target="_blank">
                
                <FaInstagram style={{ width: "30px", height: "27px" }} />
              </a>
              <a href="https://www.linkedin.com/company/ponka/" target="_blank">
              <AiOutlineLinkedin  style={{ width: "30px", height: "27px" }} />
              </a>
              <a href="mailto:sales@ponka.org">
              <AiOutlineMail style={{ width: "30px", height: "27px" }} />

              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
