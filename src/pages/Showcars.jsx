import React from "react";
import CarCard from "../Components/CardCards/CarCard";

function Showcars() {
  return (
    <>
      <div className="min-h-screen bg-[#EEECFB] w-full">
        {/* <div className="max-w-1/2 container my-20 mx-auto"> */}
        <p className="text-orange-400 text-xl">Premium Fleet</p>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#4245AD] w-full md:py-5   py-3">
          Extraordinary Journeys
        </h1>

        <div className="lg:flex-row flex  flex-col  gap-20 justify-center items-center ">
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </div>

      {/* </div> */}
    </>
  );
}

export default Showcars;
