import React from "react";
import floatImage from "../../assets/Float.png";
import { NavLink, useLocation } from "react-router-dom";
const Float = () => {
  return (
    <NavLink to="/support">
      <img
        className="fixed bottom-5 float sm:right-10 right-0 cursor-pointer bg-[#009963] text-white p-2 rounded-full w-[80px] h-[80px] shadow-lg z-50 border-4 border-[#009963]"
        src={floatImage}
        alt="Support Float Button"
      />
    </NavLink>
  );
};

export default Float;
