import React, { useEffect } from "react";
import { tourData } from "../assets/assets";

function Details() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <div className="w-full py-10  ">
        <div className="w-full flex   justify-center">
          <img
            className="w-1/3 shadow-2xl rounded-2xl h-96"
            src={tourData[0].image}
            alt=""
          />
        </div>
        <div className="container space-y-6 max-w-3/4 px-20 mx-auto ">
          <h1 className="text-4xl py-5 font-bold">Same Day Delhi</h1>
          <div>
            <h3 className="text-xl ">Overview</h3>
            <p>
              Same day explore Tajmahal in one day from Delhi and return back
              .This tour package includes everything .Enjoy your luxury trip
              from Delhi in a air conditioned car and return back on same day
              .Get to experience the amazing view of Taj Mahal Tour By Car and
              other near by Historic monuments on your visit to Agra", first:
              "At 09.00AM arriving at the city of love Agra.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
