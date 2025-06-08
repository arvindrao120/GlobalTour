import React, { useEffect } from "react";
import { exploreTour, tourData } from "../assets/assets";

function Details({ tourId = 0 }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Find the tour by id (or fallback to first)
  const tour =
    exploreTour.find((t) => t.id === Number(tourId)) || exploreTour[0];
  const image =
    tourData.find((img) => img.id === tour.id)?.image || tourData[0].image;

  return (
    <div className="w-full px-4 py-10">
      <div className="w-full flex lg:py-6 pb-6 justify-center">
        <img
          className=" xl:max-w-1/2 shadow-xl shadow-black rounded-2xl h-96 object-cover"
          src={image}
          alt={tour.title}
        />
      </div>
      <div className="container space-y-6 xl:max-w-2/3  md:px-20 mx-auto">
        <h1 className="text-4xl py-5 font-bold">{tour.title}</h1>
        <div className="px-4 lg:px-16 w-full  h-[4px] bg-orange-400 "></div>

        <div className=" space-y-8">
          <section>
            <h3 className="text-2xl font-semibold mb-2">Overview</h3>
            <p className="text-gray-700">{tour.overview}</p>
          </section>
          {/* Render all days dynamically */}
          {Object.keys(tour)
            .filter((key) =>
              key.match(
                /^(first|sec|third|fourth|fifth|sixth|seventh|eightth|last)$/
              )
            )
            .map((dayKey, idx) => (
              <div key={dayKey} className="space-y-4">
                <h3 className="text-2xl font-bold">{tour[dayKey]}</h3>
                {tour[`${dayKey}desc`] && (
                  <p className="text-black">{tour[`${dayKey}desc`]}</p>
                )}
              </div>
            ))}
          <div className="px-4 lg:px-16 w-full  h-[4px] bg-orange-400 "></div>

          <div className="flex flex-col items-start  gap-6  mt-8">
            <div className="font-semibold text-xl lg:flex-row flex-col flex gap-4 lg:gap-10 ">
              <span className="text-2xl">Departure:</span> {tour.departure}
            </div>
            <div className="px-4 lg:px-16 w-full  opacity-30 h-[1px] bg-orange-400 "></div>
            <div className="font-semibold text-xl lg:flex-row flex-col flex gap-4 lg:gap-10 ">
              <span className="text-2xl">Departure Time:</span> {tour.departureTime}
            </div>
            <div className="px-4 lg:px-16 w-full opacity-30  h-[1px] bg-orange-400 "></div>
            <div className="font-semibold text-xl lg:flex-row flex-col flex gap-4 lg:gap-10 ">
              <span className="text-2xl">Return Time:</span> {tour.returnTime}
            </div>
          </div>
                    <div className="px-4 lg:px-16 w-full  h-[4px] bg-orange-400 "></div>

          <div className="flex flex-wrap justify-between gap-10 mt-8">
            <div>
              <h4 className="font-semibold text-2xl mb-2">Included</h4>
              <ul className="list-disc text-xl ml-6 decoration-amber-500 text-green-700">
                {tour.included?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-2xl mb-2">Not Included</h4>
              <ul className="list-disc text-xl ml-6 text-red-700">
                {tour.notIncluded?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
