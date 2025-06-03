import React from "react";
import Meet from "../HeroPage/Meet";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function AboutUs() {
  return (
    <div className="bg-white text-black w-full">
        <motion.div
        className="max-w-6xl mx-auto shadow-xl  px-8 space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Meet heading={"About Us"} />
      </motion.div>
      <motion.div
        className="max-w-6xl mx-auto shadow-2xl p-8 space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl text-[#4245AD] font-bold"
          variants={itemVariants}
        >
          About Global India Tours
        </motion.h1>

        <motion.p className="text-xl" variants={itemVariants}>
          Welcome to Global India Tours. Based in New Delhi, India, Global India Tours is a tourist vehicles transport company that has been in business for almost 25 years. Operations commenced in 1996, with just two dedicated personnel and a single car. Now, we operate a fleet of nearly 100 cars, tempos, and buses, with a dedicated team based at our headquarters in New Delhi.
        </motion.p>

        <motion.p className="pb-8 text-xl" variants={itemVariants}>
          Additionally, Global India Tours has representatives and local offices across Rajasthan, Himachal Pradesh, Uttarakhand, Uttar Pradesh, and Madhya Pradesh. Our mission remains “total customer satisfaction.” We focus on delivering exceptional value and unmatched service quality. Constant service upgrades and benchmarking against top industry standards drive our continuous improvement efforts.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default AboutUs;
