
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
function SocialMedia() {
  return (
    <div className="flex justify-center items-center    gap-4">
      <div className="text-2xl bg-[#5E35B1] p-4  cursor-pointer rounded-full text-white transition-transform duration-300 shadow-lg hover:rotate-[30deg] hover:shadow-2xl">
        <FaFacebookF />
      </div>
      <div className="text-xl bg-[#5E35B1] p-4  cursor-pointer rounded-full text-white transition-transform duration-300 shadow-lg hover:rotate-[30deg] hover:shadow-2xl">
        <FaInstagram />
      </div>
      <div className="text-xl bg-[#5E35B1] p-4 cursor-pointer rounded-full text-white transition-transform duration-300 shadow-lg hover:rotate-[30deg] hover:shadow-2xl">
        <FaTwitter />
      </div>
      <div className="text-xl bg-[#5E35B1] p-4  cursor-pointer rounded-full text-white transition-transform duration-300 shadow-lg hover:rotate-[30deg] hover:shadow-2xl">
        <FaLinkedinIn />
      </div>
    </div>
  );
}

export default SocialMedia;
