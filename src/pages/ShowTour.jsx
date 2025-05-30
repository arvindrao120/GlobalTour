import React from "react";
import { tourData } from "../assets/assets.js";
import TourCard from "../Components/TourCard/TourCard.jsx";
import SeeMoreBtn from "../Components/Button/SeeMoreBtn.jsx";

function ShowTour() {
  return (
    <>
      <div className="text-black">
        <div className="relative w-full  bg-white">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

          <div className=" container lg:px-20 text-center pt-3 m-auto">
            <p className="text-orange-400 text-xl"> Popular Destinations</p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#4245AD] w-full md:py-5   py-3">
              Extraordinary Journeys
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
              {tourData.slice(0,3).map((item, idx) => (
                <TourCard item={item} key={idx} />
              ))}
            </div>{" "}
          </div>

          <div className="flex items-center gap-3 justify-center  py-10 ">
            <SeeMoreBtn/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowTour;
