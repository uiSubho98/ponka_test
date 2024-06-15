import { useState } from "react";
import Logo from "../assets/Mask group.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  let Links = [
    { name: "About", link: "/" },
    { name: "Services", link: "/" },
    { name: "Support", link: "/" },
    { name: "Contact", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 h-20">
      <div className="md:flex items-center justify-between bg-white h-full px-7 md:px-16">
        <div
          className="font-bold h-full text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
          <span className="text-[#012F6B]">PONKA</span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
