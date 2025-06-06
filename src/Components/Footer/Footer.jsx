import React from "react";
import { assets } from "../../assets/assets";
import { Link, Links } from "react-router";
import SocialMedia from "../SocialMedia";
import { MdArrowForwardIos } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { useEffect } from "react";

function Footer() {
  const handleClick = () => {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };
  return (
    <>
      <div>
        <div className="w-full lg:h-[36vh] p-5 text-white bg-gradient-to-r from-[#5B37B1] to-[#3D47AB]">
          <div className=" flex lg:flex-row flex-col justify-center lg:items-center lg:px-20 px-4 lg:gap-40 gap-10 w-full lg:h-full">
            <div className="lg:max-w-88  space-y-4">
              <img className="w-40 " src={assets.logo} alt="" />
              <p className="text-white text-lg">
                Welcome to Global India Tours Based in New Delhi, India, Global
                India Tours is a tourist vehicles transport company been in
                business for almost 25 years.
              </p>
              <p className="flex text-lg items-center hover:text-[#FF8904] transition-transform duration-300 hover:scale-110">
                <Link to={"/readMore"}>Read More</Link>
              </p>
              <div className="flex items-center justify-start mt-4">
                <SocialMedia />
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-3xl font-bold ">Quik Link</h1>
                <div className=" space-y-3 text-lg py-6">
                  <div>
                    <p
                      onClick={handleClick}
                      className="flex  max-w-auto  items-center gap-2 hover:text-[#FF8904] transition-transform duration-300 hover:scale-110"
                    >
                      <MdArrowForwardIos />
                      <Link to={""}>Home</Link>
                    </p>
                  </div>
                  <div>
                    <p className="flex  max-w-auto  items-center gap-2 hover:text-[#FF8904] transition-transform duration-300 hover:scale-110">
                      <MdArrowForwardIos />
                      <Link to={"/termsService"}>Privacy & Policy</Link>
                    </p>
                  </div>

                  <div>
                    <p className="flex  max-w-auto  items-center gap-2 hover:text-[#FF8904] transition-transform duration-300 hover:scale-110">
                      <MdArrowForwardIos />
                      <Link to={"/termsService"}>Terms And Service</Link>
                    </p>
                  </div>
                  <div>
                    <Link
                      to={"/contact"}
                      className="flex items-center gap-2  cursor-pointer hover:text-[#FF8904] transition-transform duration-300 hover:scale-110"
                    >
                      <MdArrowForwardIos />
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-3xl font-bold">Contact Info</h1>
                <div>
                  <div className="flex items-center gap-4 mt-6 lg:max-w-88">
                    <IoHome className="text-5xl" />
                    <p className="text-lg">
                      Address: B-1, near Jal Board, Sector B, Vasant Kunj, New
                      Delhi, Delhi 110070
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-6 max-w-88">
                    <FaPhoneFlip className="text-2xl" />
                    <p className="  hover:text-[#FF8904] transition-transform duration-300 hover:scale-110">
                      <a href="tel:+91 7728955910" className="text-lg">
                        +91 7728955910
                      </a>
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-6 max-w-88">
                    <IoMailSharp className="text-3xl" />
                    <span>
                      <p className="text-lg  hover:text-[#FF8904] transition-transform duration-300 hover:scale-110">
                        <a href="mailto:globalindiatours27@gmail.com">
                          globalindiatours27@gmail.com
                        </a>
                      </p>
                      <p className="text-lg  hover:text-[#FF8904] transition-transform duration-300 hover:scale-110">
                        <a href="mailto:info@globalindiatravel.com">
                          info@globalindiatravel.com
                        </a>
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#3D47AB] text-white text-center py-4">
          <p className="text-sm">
            © 2024 Global India Tours. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
