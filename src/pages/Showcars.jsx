import React from "react";
import CarCard from "../Components/CarCard/CarCard.jsx";
import { GiArmoredBoomerang } from "react-icons/gi";

function Showcars() {
  return (
    <>
      <div className="text-black">
        <div className="relative w-full bg-white">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

          <div className=" container px-20 text-center m-auto">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#4245AD]  md:pt-10 lg:pt-20 lg:py-6">
              Our Fleet & Pricing
            </h1>
          </div>
          <div className="grid grid-cols-1 place-items-center	xl:grid-cols-3 lg:grid-cols-2 gap-10  py-10 md:grid-cols-2  ">
            <CarCard />
            <CarCard />
            <CarCard />
          </div>

          <div>
            <span className="flex items-center gap-3 justify-center  py-5 ">
              <button className="text-lg cursor-pointer">See More</button>
              <GiArmoredBoomerang />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Showcars;
