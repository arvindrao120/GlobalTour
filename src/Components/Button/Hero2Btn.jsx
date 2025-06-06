import React from "react";

function Hero2Btn() {
  return (
    <>
      <a href="tel:7728955910" target="_blank">
        <button className="relative overflow-hidden cursor-pointer w-full sm:w-auto text-base sm:text-lg md:text-xl px-6 sm:px-12 py-3 rounded-full text-white group bg-gradient-to-r from-[#00B4C5] to-[#009F9A] drop-shadow-[0_4px_12px_rgba(0,180,197,0.4)] transform transition-transform duration-300 hover:scale-95">
          <span className="relative z-10">Contact Us</span>
          <div className="absolute inset-0 bg-[#CB8723] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
        </button>
      </a>
    </>
  );
}

export default Hero2Btn;
