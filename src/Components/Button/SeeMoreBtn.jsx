import React from "react";
import { FaArrowRight } from "react-icons/fa";

function SeeMoreBtn() {
  return (
    <>
      <button className="group flex items-center cursor-pointer gap-2 text-white text-base md:text-lg px-6 py-3 rounded-full bg-gradient-to-r from-[#5739B0] to-[#4145AC] hover:from-[#6f4ccf] hover:to-[#4e52c6] transition duration-300 drop-shadow-[0_4px_12px_rgba(87,57,176,0.5)]">
        <span>See More</span>
        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </>
  );
}

export default SeeMoreBtn;
