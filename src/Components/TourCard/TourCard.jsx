import React from "react";
import { FaMapMarkerAlt, FaUserFriends, FaClock, FaStar } from "react-icons/fa";
import PopularDestinationBtn from "../Button/PopularDestinationBtn";
import { Link } from "react-router";
// import { exploreTour } from "../../assets/assets";

const TourCard = ({ item }) => {
  return (
    <>
      <div className="lg:w-[420px] md:w-[350px] min-w-[320px]  h-[600px] bg-white rounded-3xl shadow-xl overflow-hidden  transition duration-300 hover:shadow-2xl flex flex-col">
        {/* Image with price tag */}
        <div className="relative">
          <img
            src={item.image}
            alt="Alpine Expedition"
            className="w-full h-80 object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Card Content */}
        <div className="p-6 flex-1 flex bg-white flex-col justify-center">
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
            <Link to={`/detail/${item.id}`}>
              <PopularDestinationBtn text={"Explore Now"} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourCard;
