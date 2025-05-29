import React from "react";
import { assets } from "../../assets/assets";
import { FaMapMarkerAlt, FaUserFriends, FaClock, FaStar } from "react-icons/fa";

function CarCard() {
  return (
    <>
      <div className="max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
        {/* Image with price tag */}
        <div className="relative">
          <img
            src={assets.swift_dezire}
            alt="Alpine Expedition"
            className="w-full h-56 object-cover"
          />
          <span className="absolute top-3 right-3 bg-orange-400 text-white font-bold px-4 py-1 rounded-full text-sm shadow-md">
            ₹ 10/km
          </span>
        </div>

        {/* Card Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800">Swift Dezire</h3>
          <p className="text-gray-500 text-sm flex items-center mt-1">
            <FaMapMarkerAlt className="mr-1 text-yellow-500" />
            Swiss Alps, Switzerland
          </p>

          {/* Details */}
          <div className="flex items-center justify-between text-sm text-gray-600 mt-4">
            <div className="flex items-center">
              <FaClock className="mr-1 text-purple-600" />9 Days
            </div>
            <div className="flex items-center">
              <FaUserFriends className="mr-1 text-purple-600" />4
            </div>
            <div className="flex items-center">
              <FaStar className="mr-1 text-yellow-500" />
              4.9/5
            </div>
          </div>

          {/* Button */}
          <button className="mt-6 w-full bg-gradient-to-r hover:cursor-pointer from-purple-500 to-indigo-600 text-white font-semibold py-2 rounded-full hover:opacity-90 transition">
            BOOK NOW
            {/* <div className="absolute inset-0 bg-[#CB8723] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" /> */}
          </button>
        </div>
      </div>
    </>
  );
}

export default CarCard;
