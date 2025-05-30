import React from "react";
import { FaUserFriends, FaSuitcase, FaGasPump, FaCog } from "react-icons/fa";

const CarCard = () => {
  return (
    <div className="w-[320px] bg-white rounded-3xl shadow-2xl overflow-hidden transition duration-300 hover:shadow-2xl p-4">
      {/* Image and badge */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1601925261734-1e5b8f78596e?q=80&w=800"
          alt="Car"
          className="w-full h-48 object-cover rounded-2xl"
        />
        <span className="absolute top-2 left-2 bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          SUV
        </span>
        <span className="absolute bottom-[-16px] right-4 bg-orange-400 text-white font-bold text-sm px-4 py-1 rounded-full shadow-md">
          $159/day
        </span>
      </div>

      {/* Content */}
      <div className="mt-8 px-2 text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Range Rover Velar</h3>
        <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-600 mb-6">
          <div className="flex items-center gap-2 justify-center">
            <FaUserFriends className="text-purple-600" />
            7 Seats
          </div>
          <div className="flex items-center gap-2 justify-center">
            <FaSuitcase className="text-purple-600" />
            5 Bags
          </div>
          <div className="flex items-center gap-2 justify-center">
            <FaGasPump className="text-purple-600" />
            Diesel
          </div>
          <div className="flex items-center gap-2 justify-center">
            <FaCog className="text-purple-600" />
            Automatic
          </div>
        </div>

        {/* Reserve Button */}
        <button className="w-full text-white font-semibold py-2 rounded-full bg-gradient-to-r from-[#5739B0] to-[#4145AC] hover:scale-95 transition-transform">
          RESERVE NOW
        </button>
      </div>
    </div>
  );
};

export default CarCard;
