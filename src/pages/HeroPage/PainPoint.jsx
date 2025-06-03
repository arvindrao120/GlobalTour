import React from "react";

function PainPoint() {
  return (
    <>
      <div className="w-full  bg-white  space-y-6 p-5 text-black">
        <div>
          <h1 className="text-center text-4xl md:text-4xl lg:text-6xl text-[#5352C7] font-bold">
            Facing Travel Challenges?
          </h1>
        </div>
        <div className="text-center w-full  mx-auto text-xl space-y-5 flex flex-col items-center">
          <p className="shadow-xl w-full lg:max-w-2/5 rounded-xl py-4 lg:w-2/5 mx-auto">
            Unreliable cab services disrupting your plans?
          </p>
          <p className="shadow-xl w-full lg:max-w-2/5 rounded-xl py-4 lg:w-2/5 mx-auto">
            Hidden charges and last-minute surprises?
          </p>
          <p className="shadow-xl w-full lg:max-w-2/5 rounded-xl py-4 lg:w-2/5 mx-auto">
            Difficulty in finding trustworthy travel partners?
          </p>
        </div>
      </div>
    </>
  );
}

export default PainPoint;
