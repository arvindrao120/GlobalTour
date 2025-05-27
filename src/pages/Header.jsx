import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { motion } from "framer-motion";
import Hero1Btn from "../Components/Button/Hero1Btn";
import Hero2Btn from "../Components/Button/Hero2Btn";

function Header() {
  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden" id="Header">
        {/* Background Layers */}
        <div
          className="absolute inset-0 bg-cover bg-center -z-20"
          style={{ backgroundImage: "url('hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0a0f3c] mix-blend-multiply opacity-80 -z-10" />
        <div className="absolute top-10 left-10 w-24 h-24 bg-purple-800 opacity-30 blur-2xl rounded-full -z-0" />
        <div className="absolute top-1/2 left-3/4 w-32 h-32 bg-indigo-400 opacity-20 blur-3xl rounded-full -z-0" />
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-blue-600 opacity-25 blur-2xl rounded-full -z-0" />
        <div className="absolute bottom-20 left-1/2 w-44 h-44 bg-purple-500 opacity-10 blur-3xl rounded-full -z-0" />

        <Navbar />

        <div className="px-4 sm:px-10 md:px-16 lg:px-20 flex items-center justify-center w-full min-h-screen">
          <motion.div
            className="w-full max-w-screen-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-6xl sm:text-8xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-center lg:text-left leading-tight"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              Discover The World With Us
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl font-medium text-center lg:text-left mt-4 lg:mt-6 max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
              Experience extraordinary journeys with our premium travel
              services and luxury car rentals. Your dream vacation starts here.
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl lg:text-2xl font-semibold text-center lg:text-left mt-6 max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            >
              Plan your next journey today - I'm ready to{" "}
              <span className="text-yellow-400">EXPLORE !</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <Hero1Btn/>

             <Hero2Btn/>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Header;
