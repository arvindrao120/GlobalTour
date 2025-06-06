import React, { useEffect } from "react";
import TourCard from "../../Components/TourCard/TourCard";
import { tourData } from "../../assets/assets";
import ShowTour from "../HeroPage/ShowTour";
function Service() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  });
  return (
    <>
      <div>
        <ShowTour data={"true"} />
      </div>
    </>
  );
}

export default Service;
