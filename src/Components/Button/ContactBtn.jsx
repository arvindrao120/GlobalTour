import React from "react";

function ContactBtn() {
  return (
    <>
      <button
        className="relative mt-6 w-fit px-10 py-3 text-md  text-white rounded-full cursor-pointer 
  border border-[#FA9500] transition-all duration-300 
  hover:bg-[#FA9500] hover:text-slate-900 
  shadow-[0_0_0_rgba(250,149,0,0)] hover:shadow-[0_0_15px_rgba(250,149,0,0.8)]"
      >
        Contact us 
      </button>
    </>
  );
}

export default ContactBtn;
