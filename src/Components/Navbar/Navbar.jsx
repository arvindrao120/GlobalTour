import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        className="fixed top-0 left-0 w-full z-50 bg-[#060C17] backdrop-blur-md"
        style={{
          boxShadow: "0 4px 12px 0 #1D1C39",
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <nav className="flex items-center justify-between lg:px-10 px-4 py-3">
          {/* Logo */}
          <motion.img
            className="w-36"
            src={assets.logo}
            alt="Logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          {/* Desktop Nav */}
          <ul className="hidden lg:flex text-2xl gap-10 px-5 items-center">
            {navItems}
          </ul>

          {/* Hamburger Icon */}
          <div className="lg:hidden flex items-center">
            <button
              className="text-3xl focus:outline-none"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Open Menu"
            >
              {/* Three-line hamburger icon */}
              <div className="flex flex-col justify-center items-center w-8 h-8">
                <span
                  className={`block h-1 w-8 bg-[#ffffff] rounded transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block h-1 w-8 bg-[#ffffff] rounded my-1 transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-1 w-8 bg-[#ffffff] rounded transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              className="flex flex-col gap-6 text-xl bg-[#1D1C39] text-white shadow-xl absolute right-4 top-20 rounded-xl px-8 py-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {navItems}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
      {/* Spacer for fixed navbar */}
      <div className="h-[80px]"></div>
    </>
  );
}

export default Navbar;
