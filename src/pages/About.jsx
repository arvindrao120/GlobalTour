import React from "react";
import { motion } from "framer-motion";
import ContactBtn from "../Components/Button/ContactBtn";

function About() {
  return (
    <>
      <div className="relative w-full bg-slate-950">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center w-full h-full px-6 py-8 md:py-16">
          {/* <h1 className="text-3xl md:text-5xl pt-10 font-bold text-[#FA9500]">About Us</h1> */}
          <h2 className="py-4 text-4xl md:text-7xl text-white text-center">
            Meet Global India Travels
          </h2>
          <h3 className="pb-10">
            Explore India with Confidence: Premium Tours & Reliable Car Rentals
          </h3>

          <div className=" flex-col  items-stretch justify-center w-full max-w-6xl pr-4 ">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full  flex items-stretch"
            >
              <div
                className="bg-gradient-to-tr from-slate-800 to-slate-600 md:px-16 lg:my-4 my-10 px-4  lg:px-8
           rounded-2xl w-full text-white py-6  shadow-[25px_25px_rgba(250,149,0,0.6)] min-h-[250px] flex flex-col justify-center"
              >
                <p className="text-xl 	 md:text-2xl leading-9">
                  I'm{" "}
                  <span className="text-[#ffe1b5] text-2xl md:text-3xl font-semibold">
                    Manjeet Singh
                  </span>
                  , the founder of Global India Travels. With over 25 years in
                  the travel industry, we've been committed to delivering
                  exceptional travel experiences across India. Our expertise
                  lies in understanding your unique travel needs and providing
                  solutions that ensure comfort, safety, and satisfaction.
                </p>
                <ContactBtn />
              </div>
            </motion.div>

            {/* Right Column */}
            {/* <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 flex items-stretch"
        >
          <div className="bg-gradient-to-tr from-slate-800 to-slate-600 p-8 rounded-2xl w-full text-white text-center shadow-[25px_25px_rgba(250,149,0,0.8)] min-h-[480px] flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">How Do You Make Their Lives Better?</h2>
            <p className="text-xl md:text-2xl leading-9">
              At <span className="text-[#ffe1b5] font-semibold">Global India Travels</span>, we specialize in providing
              customized tour packages and dependable car rental services across India. Whether you're a solo traveler,
              a family on vacation, or a corporate group, we ensure a seamless and memorable travel experience tailored
              to your needs.
            </p>
          </div>
        </motion.div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
