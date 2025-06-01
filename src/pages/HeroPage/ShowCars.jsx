import React from "react";
import CarCard from "../../Components/CardCards/CarCard";
import { carsData } from "../../assets/assets";
import SeeMoreBtn from "../../Components/Button/SeeMoreBtn";

function Showcars() {
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

        <div className="w-full overflow-x-auto">
          <div className="flex flex-col w-full items-center lg:flex-row justify-center gap-10 px-10">
            {carsData.slice(0, 3).map((item) => (
              <CarCard item={item} key={item.id} />
            ))}
          </div>
        </div>

        <div className="flex  justify-center py-10">
          <SeeMoreBtn />
        </div>
      </div>

      {/* </div> */}
    </>
  );
}

export default Showcars;
