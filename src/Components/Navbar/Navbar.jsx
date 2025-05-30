import React from "react";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";
// import ContactBtn from "../Button/ContactBtn";

function Navbar() {
  const navItems = (
    <>
      <motion.li
        className="animated-underline"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="#Header">Home</a>
      </motion.li>
      <motion.li
        className="animated-underline"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="#About">About Us</a>
      </motion.li>
      <motion.li
        className="animated-underline"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="#Projects">Services</a>
      </motion.li>
      <motion.li
        className="animated-underline"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="#Testimonials">Car Booking</a>
      </motion.li>
      <motion.li
        className="animated-underline"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="#Gallery">Gallery</a>
      </motion.li>
      <motion.li
        className="animated-underline"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="#Contact">Contact Us</a>
      </motion.li>
    </>
  );

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md"
        style={{
          boxShadow: "0 4px 12px 0 #1D1C39",
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="navbar lg:text-black lg:px-10 px-4">
          {/* Navbar Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost text-2xl text-white lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content z-[1] mt-3 w-52 p-2 text-2xl shadow-lg rounded-box"
                style={{
                  backgroundColor: "rgba(29, 28, 57, 0.95)", // dark translucent background
                  color: "white", // force white text
                }}
              >
                {navItems}
              </ul>
            </div>

            <motion.img
              className="w-36"
              src={assets.logo}
              alt="Logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden text-2xl lg:flex">
            <ul className="menu menu-horizontal text-2xl flex gap-10 px-5">
              {navItems}
            </ul>
          </div>

          {/* Optional contact button */}
          {/* <ContactBtn /> */}
        </div>
      </motion.div>

      {/* Spacer to prevent layout shift due to fixed navbar */}
      <div className="h-[80px]"></div>
    </>
  );
}

export default Navbar;
