import React from 'react';
import floatImage from "../../assets/Float.png"
const Float = () => {
  return (
    <img 
    className="fixed bottom-5 right-10 bg-[#009963] text-white p-2 rounded-full w-[80px] h-[80px] shadow-lg z-50 border-4 border-[#009963]"
    src={floatImage}
    alt="Floating Element"
  />
  );
}

export default Float;
