import React from "react";
import { FaMapMarkerAlt, FaUserFriends, FaClock, FaStar } from "react-icons/fa";
import PopularDestinationBtn from "../Button/PopularDestinationBtn";

const TourCard = ({ item }) => {


  return (
    <>
      <div className="lg:w-[420px] md:w-[350px] min-w-[320px]  h-[600px] bg-white rounded-3xl shadow-xl overflow-hidden transition duration-300 hover:shadow-2xl flex flex-col">
        {/* Image with price tag */}
        <div className="relative">
          <img
            src={item.image}
            alt="Alpine Expedition"
            className="w-full h-80 object-cover transition-transform duration-300 hover:scale-110"
          />
          <span className="absolute top-3 right-3 bg-orange-400 text-white font-bold px-5 py-2 rounded-full text-md shadow-md">
            ₹ {item.price}
          </span>
        </div>

        {/* Card Content */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
            <p className="text-gray-500 text-base flex items-center mt-2">
              <FaMapMarkerAlt className="mr-1 text-yellow-500" />
              {item.place}
            </p>

            {/* Details */}
            <div className="flex items-center justify-between text-base text-gray-600 mt-5">
              <div className="flex items-center">
                <FaClock className="mr-1 text-purple-600" />
                {item.days} days
              </div>
              <div className="flex items-center">
                <FaUserFriends className="mr-1 text-purple-600" />
                max {item.people}
              </div>
              <div className="flex items-center">
                <FaStar className="mr-1 text-yellow-500" />
                {item.rating}/5
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[2px] bg-orange-400 mt-4" />
          </div>

          {/* Button at the bottom */}
          <div className="mt-4">
            <PopularDestinationBtn text={"Explore Now"}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourCard;
