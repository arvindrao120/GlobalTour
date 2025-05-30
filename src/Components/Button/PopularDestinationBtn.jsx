import React from "react";

function PopularDestinationBtn({text}) {
  return (
     <button className="relative cursor-pointer overflow-hidden w-full text-base md:text-lg px-6 py-3 rounded-full text-white group bg-gradient-to-r from-[#5739B0] to-[#4145AC] drop-shadow-[0_4px_12px_rgba(87,57,176,0.5)] transform transition-transform duration-300 hover:scale-95">
              <span className="relative z-10">{text}</span>
              <div className="absolute inset-0 bg-[#CB8723] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
            </button>
  );
}

export default PopularDestinationBtn;
