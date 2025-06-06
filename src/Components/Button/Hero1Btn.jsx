import React from "react";
import { Link } from "react-router";

function Hero1Btn() {
  return (
    <>
      <a href="#ShowTour" className="w-full sm:w-auto">
        <button className="relative cursor-pointer overflow-hidden w-full sm:w-auto text-base sm:text-lg md:text-xl px-6 sm:px-12 py-3 rounded-full text-white group bg-gradient-to-r from-[#5739B0] to-[#4145AC] drop-shadow-[0_4px_12px_rgba(87,57,176,0.5)] transform transition-transform duration-300 hover:scale-95">
          <span className="relative z-10">Explore Tours</span>
          <div className="absolute inset-0 bg-[#CB8723] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
        </button>
      </a>
    </>
  );
}

export default Hero1Btn;
