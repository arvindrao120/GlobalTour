import React from "react";
import Header from "../Header";
import ShowTour from "../ShowTour";
import Meet from "../Meet";
import ShowCars from "../ShowCars";
import HeroForm from "../HeroForm";
import Footer from "../../Components/Footer/Footer";
import WhatsAppBtn from "../../Components/WhatsAppBtn.jsx/WhatsAppBtn";
function HeroPage() {
  return (
    <>
      <div className="relative w-full ">
        <Header />
        <Meet />
        <ShowTour />
        <ShowCars />
        <HeroForm />
        <Footer />
        
          <WhatsAppBtn />
        
      </div>
    </>
  );
}

export default HeroPage;
