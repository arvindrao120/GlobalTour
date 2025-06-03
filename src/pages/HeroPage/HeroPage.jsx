import React from "react";
import Header from "./Header";
import ShowTour from "./ShowTour";
import Meet from "./Meet";
import ShowCars from "./ShowCars";
import HeroForm from "./HeroForm";
import Footer from "../../Components/Footer/Footer";
import WhatsAppBtn from "../../Components/WhatsAppBtn/WhatsAppBtn";
import Working from "./Working";
import Faq from "./Faq";
import PainPoint from "./PainPoint";
function HeroPage() {
  return (
    <>
      <div className="relative w-full ">
        <Header />
        <Meet heading={"Our Journey & Mission"} />
        <ShowTour />
        <ShowCars />
        <Working />
        <PainPoint />
        <Faq />
        <HeroForm />
        <WhatsAppBtn />
      </div>
    </>
  );
}

export default HeroPage;
