import React from "react";
import { BsCarFrontFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";

function Working() {
  return (
    <>
      <div className="w-full bg-white py-10 text-black">
        <div className=" container lg:px-20 text-center pt-3 m-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#4245AD] w-full md:py-5   py-3">
            Why Choose Us?
          </h1>
        </div>
        <div className=" flex justify-center px-10 w-full">
          <p className="text-gray-500 text-center md:max-w-1/2   mb-8">
            Here are reasons you should plan trip with us
          </p>
        </div>

        <div className="grid grid-cols-1 space-y-5 gap-10 place-items-center xl:grid-cols-2 2xl:grid-cols-3 lg:grid-cols-2   py-10">
          <div className=" max-w-4/5 flex w-full items-center gap-5 border-gray-300  rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-110  p-5">
            <BsCarFrontFill className="text-7xl" />
            <div>
              <h1 className="text-2xl font-extrabold">
                Clean & Well-Maintained Vehicles
              </h1>
              <p>
                Our fleet includes sanitized, GPS-enabled vehicles that are
                regularly serviced to ensure your safety and comfort.
              </p>
            </div>
          </div>
          <div className=" max-w-4/5 flex w-full items-center gap-5 border-gray-300  rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-110  p-5">
            <BsPersonFill className="text-7xl" />

            <div>
              <h1 className="text-2xl font-extrabold">
                Experienced & Verified Drivers
              </h1>
              <p>
                Our professional drivers are trained, courteous, and
                knowledgeable about various routes and destinations
              </p>
            </div>
          </div>
          <div className=" max-w-4/5 flex w-full items-center gap-5 border-gray-300  rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-110  p-5">
            <FaRupeeSign className="text-5xl" />
            <div>
              <h1 className="text-2xl font-extrabold">Transparent Pricing </h1>
              <p>
                We believe in honest pricing with no hidden charges, ensuring
                you get the best value for your money.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Working;
