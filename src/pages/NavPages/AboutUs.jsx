import React from "react";
import Meet from "../HeroPage/Meet";

function AboutUs() {
  return (
    <>
      <div className="bg-white text-black w-full ">
        <div>
          <Meet heading={"About Us"} />
        </div>
        <div className="max-w-6xl mx-auto shadow-xl p-8 space-y-8 ">
            <h1 className="text-5xl text-[#4245AD] font-bold">About Global India Tours</h1>
            <p className=" text-xl">Welcome to Global India Tours  Based in New Delhi, India, Global India Tours is a tourist vehicles transport company been in business for almost 25 years. Operations commenced operations in the year 1996, with a CAR just two dedicated personnel. now we stand at collection of almost a 100 CAR, TEMPO and BUSES with dedicated personnel at our Headquarters in New Delhi.</p>
            <p className="pb-8 text-xl">In addition, Global India Tours has representatives and local offices spread across Rajasthan, Himachal Pradesh, Uttrakhand, Utter Pradesh, Madhya Pradesh. Our team strives for growth and increased revenues, but the underlying objective and the single minded goal remains “total customer satisfaction”. We aim to provide our clients the best value for their dollar and unmatched service quality throughout the country. We upgrading of service standards is a continuous endeavor, and we continuously benchmark our services against the finest and the best known brands in our Industry.</p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
