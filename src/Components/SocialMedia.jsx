import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router";
function SocialMedia() {
  return (
    <div className="flex justify-center items-center    gap-4">
      <a href="https://www.facebook.com/globalindiatravel" target="_blank">
        <div className="text-2xl bg-[#5E35B1] p-4  cursor-pointer rounded-full text-white transition-transform duration-300 shadow-lg hover:rotate-[30deg] hover:shadow-2xl">
          <FaFacebookF />
        </div>
      </a>
      <a href="https://www.instagram.com/globalindiatravel/" target="_blank">
        <div className="text-xl bg-[#5E35B1] p-4  cursor-pointer rounded-full text-white transition-transform duration-300 shadow-lg hover:rotate-[30deg] hover:shadow-2xl">
          <FaInstagram />
        </div>
      </a>
      <a href="https://x.com/globalintravel" target="_blank">
        <div className="text-xl bg-[#5E35B1] p-4 cursor-pointer rounded-full text-white transition-transform duration-300 shadow-lg hover:rotate-[30deg] hover:shadow-2xl">
          <BsTwitterX />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/company/globalindiatravel/"
        target="_blank"
      >
        <div className="text-xl bg-[#5E35B1] p-4  cursor-pointer rounded-full text-white transition-transform duration-300 shadow-lg hover:rotate-[30deg] hover:shadow-2xl">
          <FaLinkedinIn />
        </div>
      </a>
    </div>
  );
}

export default SocialMedia;
