import React from "react";
import { assets } from "../../assets/assets";
import ContactBtn from "../Button/ContactBtn";

function Navbar() {
  const navItems = (
    <>
      <li className="animated-underline">
        <a href="#Header">Home</a>
      </li>
      <li className="animated-underline">
        <a href={"#About"}>About Us</a>
      </li>
      <li className="animated-underline">
        <a href="#Projects">Services</a>
      </li>
      <li className="animated-underline">
        <a href="#Testimonials">Car Booking</a>
      </li>
      <li className="animated-underline">
        <a href="#Gallery">Gallery</a>
      </li>
      <li className="animated-underline">
        <a href="#Contact">Contact Us</a>
      </li>
    </>
  );

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md"
        style={{
          boxShadow: "0 4px 12px 0 #1D1C39",
        }}
      >
        <div className="navbar lg:text-white lg:px-10 px-4">
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 text-2xl shadow"
              >
                {navItems}
              </ul>
            </div>
            <img className="w-36" src={assets.logo} alt="Logo" />
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden text-2xl lg:flex">
            <ul className="menu menu-horizontal text-2xl flex gap-10 px-5">
              {navItems}
            </ul>
          </div>
        
      {/* <ContactBtn/> */}
      </div>
      </div>

      {/* Spacer to prevent layout shift due to fixed navbar */}
      <div className="h-[80px]"></div>
    </>
  );
}

export default Navbar;
