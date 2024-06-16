import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/NavLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  let Links = [
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Support", link: "/support" },
    { name: "Contact", link: "/contact" },
  ];

  const location = useLocation();

  let [open, setOpen] = useState(false);

  useEffect(() => {
    if (location.pathname) {
      setOpen(false);
    }
  }, [location.pathname]);

  return (
    <div className="shadow-md w-full fixed top-0 h-20">
      <div className="md:flex items-center justify-between bg-white h-full px-7 md:px-16">
        <NavLink to="/">
          <div
            className="font-bold h-full text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
          >
            <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
            <span className="text-[#012F6B]">PONKA</span>
          </div>
        </NavLink>
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
              <NavLink
                to={link.link}
                className={`duration-500 ${
                  location.pathname === link.link
                    ? "text-[#012F6B] font-semibold"
                    : "text-black hover:text-gray-500"
                }`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
