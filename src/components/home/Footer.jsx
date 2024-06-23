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
              <p className="font-poppins text-xs md:text-lg underline">
                sales@ponka.org
              </p>
            </Link>
          </div>
          {/* section-3 */}

          <div className="my-3 sm:block hidden text-center border-l border-gray-300">
            <p className="font-poppins text-xs md:text-lg underline">
              <Link to="/about">About Us</Link>
            </p>
            <p className="font-poppins text-xs md:text-lg underline">
              <Link to="/services">Our Services</Link>
            </p>
            <p className="font-poppins text-xs md:text-lg underline">
              <Link to="/contact">Contact Us</Link>
            </p>
            <div className="flex justify-center mt-1 gap-2 items-center">
              <a
                href="https://www.instagram.com/ponka.global?igsh=MWZ3NDRleWV1MzN1MQ%3D%3D&utm_source=qr"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
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
                  viewBox="0 0 48 48"
                  width="35"
                  height="35"
                >
                  <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 15.5 13 A 2.5 2.5 0 0 0 15.5 18 A 2.5 2.5 0 0 0 15.5 13 z M 14 20 C 13.447 20 13 20.447 13 21 L 13 34 C 13 34.553 13.447 35 14 35 L 17 35 C 17.553 35 18 34.553 18 34 L 18 21 C 18 20.447 17.553 20 17 20 L 14 20 z M 21 20 C 20.447 20 20 20.447 20 21 L 20 34 C 20 34.553 20.447 35 21 35 L 24 35 C 24.553 35 25 34.553 25 34 L 25 26.5 C 25 25.121 26.121 24 27.5 24 C 28.879 24 30 25.121 30 26.5 L 30 34 C 30 34.553 30.447 35 31 35 L 34 35 C 34.553 35 35 34.553 35 34 L 35 26 C 35 22.691 32.309 20 29 20 C 27.462 20 26.063 20.586016 25 21.541016 L 25 21 C 25 20.447 24.553 20 24 20 L 21 20 z" />
                </svg>
              </a>
              <a href="mailto:sales@ponka.org">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
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
              <p className="font-poppins text-xs md:text-lg underline">
                sales@ponka.org
              </p>
            </Link>
          </div>
          <div className="my-3 sm:hidden block text-center border-l border-gray-300 w-[40%]">
            <p className="font-poppins text-sm md:text-lg underline">
              <Link to="/about">About Us</Link>
            </p>
            <p className="font-poppins text-sm md:text-lg underline">
              <Link to="/services">Our Services</Link>
            </p>
            <p className="font-poppins text-sm md:text-lg underline">
              <Link to="/contact">Contact Us</Link>
            </p>
            <div className="flex justify-center mt-1 items-center">
              <a
                href="https://www.instagram.com/ponka.global?igsh=MWZ3NDRleWV1MzN1MQ%3D%3D&utm_source=qr"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
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
                  viewBox="0 0 48 48"
                  width="24"
                  height="24"
                >
                  <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 15.5 13 A 2.5 2.5 0 0 0 15.5 18 A 2.5 2.5 0 0 0 15.5 13 z M 14 20 C 13.447 20 13 20.447 13 21 L 13 34 C 13 34.553 13.447 35 14 35 L 17 35 C 17.553 35 18 34.553 18 34 L 18 21 C 18 20.447 17.553 20 17 20 L 14 20 z M 21 20 C 20.447 20 20 20.447 20 21 L 20 34 C 20 34.553 20.447 35 21 35 L 24 35 C 24.553 35 25 34.553 25 34 L 25 26.5 C 25 25.121 26.121 24 27.5 24 C 28.879 24 30 25.121 30 26.5 L 30 34 C 30 34.553 30.447 35 31 35 L 34 35 C 34.553 35 35 34.553 35 34 L 35 26 C 35 22.691 32.309 20 29 20 C 27.462 20 26.063 20.586016 25 21.541016 L 25 21 C 25 20.447 24.553 20 24 20 L 21 20 z" />
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
