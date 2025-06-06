import React from "react";
import { FaUserFriends, FaSuitcase, FaGasPump, FaCog } from "react-icons/fa";
import PopularDestinationBtn from "../Button/PopularDestinationBtn";
import { Link } from "react-router";

const CarCard = ({ item }) => {
  return (
    <div className="w-[320px] bg-white rounded-3xl shadow-xl overflow-hidden transition duration-300 hover:shadow-2xl p-4">
      {/* Image and badge */}
      <div className="relative">
        <img
          src={item.image}
          alt="Car"
          className="w-full h-48  rounded-2xl object-cover transition-transform duration-300 hover:scale-110"
        />
        <span className="absolute top-2 left-2 bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {item.category}
        </span>
        <span className="absolute bottom-[-16px] right-4 bg-orange-400 text-white font-bold text-lg px-4 py-1 rounded-full shadow-md">
          {item.pricePerKm} /Km
        </span>
      </div>

      {/* Content */}
      <div className="mt-8 px-2 text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-4">{item.name}</h3>
        <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-600 mb-6">
          <div className="flex items-center gap-2 justify-center">
            <FaUserFriends className="text-purple-600" />
            {item.seats}
          </div>
          <div className="flex items-center gap-2 justify-center">
            <FaSuitcase className="text-purple-600" />
            {item.airbags} Bags
          </div>
          <div className="flex items-center gap-2 justify-center">
            <FaGasPump className="text-purple-600" />
            {item.fuelType}
          </div>
          <div className="flex items-center gap-2 justify-center">
            <FaCog className="text-purple-600" />
            {item.transmission}
          </div>
        </div>

        {/* Reserve Button */}
        <div>
          <Link to={"/contact"}>
            <PopularDestinationBtn text={"Reserve Now"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
