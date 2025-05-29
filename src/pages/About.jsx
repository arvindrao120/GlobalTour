import React from "react";
import { motion } from "framer-motion";
import ContactBtn from "../Components/Button/ContactBtn";

function About() {
  return (
    <>
      <div className="relative w-full pt-32 bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Meet  global india travel */}
        <div className="relative z-10 flex flex-col pt-32 items-center w-full h-full px-6 py-8 md:py-16">
          {/* <h1 className="text-3xl md:text-5xl pt-10 font-bold text-[#FA9500]">About Us</h1> */}
          <h2 className="py-4 text-2xl md:text-5xl text-white text-center">
            Meet Global India Travels
          </h2>
<<<<<<< HEAD
          <h3 className="py-3 text-center">
=======
          <h3 className="pb-10 text-center">
>>>>>>> 49ed276801a7dd298d54abc3f8ad6fdd23a1c106
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

            {/* 🚗 How Do You Make Their Lives Better? */}

            {/* <div className="relative z-10 flex flex-col items-center w-full h-full px-6 py-8 md:py-16"> */}
              {/* <h1 className="text-3xl md:text-5xl pt-10 font-bold text-[#FA9500]">About Us</h1>
              <h2 className="py-4 text-2xl md:text-5xl text-white text-center">
                🚗 How Do You Make Their Lives Better?
              </h2>
              <h3 className="py-3 text-center">
                Explore India with Confidence: Premium Tours & Reliable Car
                Rentals
              </h3>

              <div className=" flex-col  items-stretch justify-center w-full max-w-6xl pr-4 ">
                {/* Left Column */}
                {/* <motion.div
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
                      At
                      <span className="text-[#ffe1b5] text-2xl md:text-3xl font-semibold">
                        Global India Travels
                      </span>
                      , we specialize in providing customized tour packages and
                      dependable car rental services across India. Whether
                      you're a solo traveler, a family on vacation, or a
                      corporate group, we ensure a seamless and memorable travel
                      experience tailored to your needs.
                    </p>
                    <ContactBtn />
                  </div>
                </motion.div>
              </div> */} */
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
