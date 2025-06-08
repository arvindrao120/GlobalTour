import React from "react";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";
import ContactBtn from "../../Components/Button/ContactBtn";

function Meet({heading}) {
  return (
    <>
      <div>
        <div className="w-full py-7 px-7 md:py-10 lg:py-12  bg-white text-black">
          <div>
            <div className=" container text-center m-auto">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#4245AD]    ">
                {heading}
              </h1>
              <p className="text-gray-500  text-center mb-8">
                Plan your next journey today - I'm ready to explore!
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:gap-20">
              <img
                src={assets.about_photo}
                alt=""
                className="lg:max-w-lg  md:max-w-md max-w-88 w-full sm:w-1/2 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-[_30px_30px_#5E35B1]"
              />

              <div className="flex flex-col justify-center items-center md:items-start mt-20 text-gray-600">
                <div className="grid  grid-cols-2 text-center place-items-center gap-6 md:gap-10  w-full 2xl:pr-28">
                  <div>
                    <p className="text-4xl font-bold text-gray-950">20+</p>
                    <p className="text-xl">Year of experience</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-gray-950">999+</p>
                    <p className="text-xl">Tour Completed</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-gray-950">12000+</p>
                    <p className="text-xl">Happy Clients</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-gray-950">99+</p>
                    <p className="text-xl">Collection of Cars</p>
                  </div>
                </div>
                <p className="my-10 text-black text-xl  max-w-lg">
                  I'm{" "}
                  <span className="text-2xl font-semibold text-yellow-700 ">
                    Manjeet Singh
                  </span>{" "}
                  , the founder of Global India Tour. With over 25 years in the
                  travel industry, we've been committed to delivering
                  exceptional travel experiences across India. Our expertise
                  lies in understanding your unique travel needs and providing
                  solutions that ensure comfort, safety, and satisfaction.
                </p>
                <a href="tel: +91 9873545322">
                  
                  <ContactBtn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Meet;
