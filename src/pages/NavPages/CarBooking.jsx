import React, { useEffect } from "react";
import Showcars from "../HeroPage/ShowCars";

function CarBooking() {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      
    });
  return (
    <>
      <Showcars data={true} />
    </>
  );
}

export default CarBooking;
