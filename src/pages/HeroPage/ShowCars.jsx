import React from "react";
import CarCard from "../../Components/CardCards/CarCard";
import { carsData } from "../../assets/assets";
import SeeMoreBtn from "../../Components/Button/SeeMoreBtn";
import { Link } from "react-router";
import { tr } from "framer-motion/client";

function Showcars({ data }) {
  return (
    <>
      <div className="py-10 text-black bg-[#EEECFB] w-full">
        <div className="lg:max-w-1/2 px-10 container lg:py-20 py-10 mx-auto">
          <p className="text-orange-400 text-xl">Premium Fleet</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#4245AD] w-full md:py-5 py-3">
            Extraordinary Journeys
          </h1>
          <p className="lg:max-w-2/3 text-gray-500  ">
            Experience the thrill of driving premium vehicles with our exclusive
            car rental service. Choose from our impressive fleet of luxury,
            sports, and SUV models to elevate your journey.
          </p>
        </div>

        <div className="w-2/3 mx-auto">
          <div className="grid lg:grid-cols-3 space-y-10 md:grid-cols-2 grid-cols-1  place-items-center px-10">
            {data === true
              ? carsData.map((item) => <CarCard item={item} key={item.id} />)
              : carsData
                  .slice(0, 3)
                  .map((item) => <CarCard item={item} key={item.id} />)}
          </div>
        </div>

        <div className="flex  justify-center py-10">
          {data === true ? (
            ""
          ) : (
            <Link to={"/carBooking"}>
              <SeeMoreBtn />
            </Link>
          )}
        </div>
      </div>

      {/* </div> */}
    </>
  );
}

export default Showcars;
