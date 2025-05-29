import React from "react";
import CarCard from "../Components/CarCard/TourCard.jsx";
import { FaArrowRight } from "react-icons/fa";
import { tourData } from "../assets/assets.js";
import TourCard from "../Components/CarCard/TourCard.jsx";

function ShowTour() {
  return (
    <>
      <div className="text-black">
        <div className="relative w-full  bg-white">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

          <div className=" container px-20 text-center pt-20  m-auto">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#4245AD]  md:pt-10  lg:py-3">
              Popular Destinations
            </h1>
          </div>
          <div className=" flex justify-center px-10 w-full">
            <p className="text-gray-500 text-center md:max-w-1/2   mb-8">
              mbark on unforgettable adventures with our exclusive tour packages
              to the world's most captivating destinations.
            </p>
          </div>
          <div className="flex justify-center w-full">
            <div
              className="grid grid-cols-1 gap-10
             max-w-4/5 w-full px-4  place-items-center xl:grid-cols-3 lg:grid-cols-3   py-10  "
            >
              {tourData.map((item, idx) => (
                <TourCard item={item} key={idx} />
              ))}
            </div>{" "}
          </div>

          <div className="flex items-center gap-3 justify-center  py-5 ">
            <button className="group flex items-center gap-2 text-white text-base md:text-lg px-6 py-3 rounded-full bg-gradient-to-r from-[#5739B0] to-[#4145AC] hover:from-[#6f4ccf] hover:to-[#4e52c6] transition duration-300 drop-shadow-[0_4px_12px_rgba(87,57,176,0.5)]">
              <span>See More</span>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowTour;
