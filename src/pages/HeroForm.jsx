import React from "react";
import SeeMoreBtn from "../Components/Button/SeeMoreBtn";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import ContactForm from "../Components/ContactForm/ContactForm";
import SocialMedia from "../Components/SocialMedia";

function HeroForm() {
  return (
    <>
      <div className="text-black">
        <div className="relative w-full lg:py-20 py-10 ">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
          </div>

          <div className=" container lg:px-20 text-center pt-3 m-auto">
            <p className="text-orange-400 text-xl"> Get In Touch</p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#4245AD] w-full md:py-5   py-3">
              Contact Us
            </h1>
          </div>
          <div className=" flex justify-center items-center lg:px-10 p-5 w-full">
            <p className="text-gray-500 text-center md:max-w-1/2 lg:mb-8">
              Contact Us Have questions or ready to book your next adventure?
              Our team is here to assist you.
            </p>
          </div>
          {/* // left div */}

          <div className="lg:flex px-4  lg:px-10 justify-center  items-center gap-10 w-full">
            <div>
              <div>
                <div className=" rounded-lg lg:max-w-4/5 bg-white my-5">
                  <div className=" flex items-center  bg-white justify-start gap-10 border-gray-300 p-4 rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-110">
                    <div className=" bg-[#EFEAF7] p-4 rounded-md">
                      <IoLocationOutline className="text-4xl cursor-pointer text-[#5E35B1]  " />
                    </div>
                    <div className="max-w-2/3">
                      <h1 className=" text-2xl font-extrabold">locations</h1>
                      <p className=" text-gray-500">
                        B-1, near Jal Board, Sector B, Vasant Kunj, New Delhi,
                        Delhi 110070
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <a href="mailto:globalindiatours27@gmail.com">
                  <div className=" rounded-lg lg:max-w-4/5 bg-white my-5">
                    <div className=" flex items-center bg-white justify-start gap-10 border-gray-300 p-4 rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-110">
                      <div className=" bg-[#EFEAF7] p-4 rounded-md ">
                        <MdOutlineMail className="text-4xl cursor-pointer text-[#5E35B1]  " />
                      </div>
                      <div>
                        <h1 className=" text-2xl font-extrabold">Mail</h1>
                        <p className=" text-gray-500">
                          globalindiatours27@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div>
                <a href="tel: +91 7728955910">
                  <div className=" rounded-lg lg:max-w-4/5 bg-white my-5">
                    <div className=" flex items-center bg-white justify-start gap-10 border-gray-300  p-4 rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-110">
                      <div className=" bg-[#EFEAF7] p-4 rounded-md">
                        <a href="tel: +91 7728955910">
                          <LuPhone className="text-4xl cursor-pointer text-[#5E35B1]  " />
                        </a>
                      </div>
                      <div>
                        <h1 className=" text-2xl font-extrabold">Phone</h1>
                        <a href="tel: +91 7728955910">7728955910 </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className=" flex py-6 items-center justify-start ">
                <SocialMedia />
              </div>
            </div>
            <div className=" lg:hidden w-full h-[2px] bg-[#5E35B1] mb-10"></div>

            {/* //right div */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroForm;
