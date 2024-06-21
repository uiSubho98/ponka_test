import React from "react";
import FooterLogo from "../../assets/FooterLogo.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";

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
            <p className="font-poppins text-xs md:text-lg">
              5-Sesay Street, Tulun Road,
            </p>
            <p className="font-poppins text-xs md:text-lg">
              Lungi, Sierra Leone
            </p>
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
              <Link to="/services">Services</Link>
            </p>
            <p className="font-poppins text-xs md:text-lg">
              <Link to="/contact">Contact</Link>
            </p>
            <div className="flex justify-center mt-1 items-center">
              <a
                href="https://www.instagram.com/ponka.global?igsh=MWZ3NDRleWV1MzN1MQ%3D%3D&utm_source=qr"
                target="_blank"
              >
                <FaInstagram style={{ width: "40px", height: "27px" }} />
              </a>
              <a href="https://www.linkedin.com/company/ponka/" target="_blank">
                <AiOutlineLinkedin style={{ width: "40px", height: "27px" }} />
              </a>
              <a href="mailto:sales@ponka.org">
                <AiOutlineMail style={{ width: "40px", height: "27px" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-evenly items-center w-full  p-0 m-0">
          <div className="my-3 sm:hidden gap-y-1 flex flex-col items-center  w-[50%] ">
            <p className="font-poppins text-left text-xs md:text-lg">
              Address:
            </p>
            <p className="font-poppins text-xs md:text-lg">
              5-Sesay Street, Tulun Road,
            </p>
            <p className="font-poppins text-xs md:text-lg">
              Lungi, Sierra Leone
            </p>
            <Link to="mailto:sales@ponka.org">
              <p className="font-poppins text-xs md:text-lg">sales@ponka.org</p>
            </Link>
          </div>
          <div className="my-3 sm:hidden block text-center border-l border-gray-300 w-[40%]">
            <p className="font-poppins text-sm md:text-lg">
              <Link to="/about">About</Link>
            </p>
            <p className="font-poppins text-sm md:text-lg">
              <Link to="/services">Services</Link>
            </p>
            <p className="font-poppins text-sm md:text-lg">
              <Link to="/contact">Contact</Link>
            </p>
            <div className="flex justify-center mt-1 items-center">
              <a
                href="https://www.instagram.com/ponka.global?igsh=MWZ3NDRleWV1MzN1MQ%3D%3D&utm_source=qr"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/ponka/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                  />
                </svg>
              </a>
              <a href="mailto:sales@ponka.org">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
