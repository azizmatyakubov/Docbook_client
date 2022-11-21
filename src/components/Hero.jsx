import React from "react";
import SearchBox from "./SearchBox";

const Hero = () => {
  return (
    <div className="h-full mx-10">
      <div className="flex">
        <div className="flex flex-col justify-evenly ">
          <h1 className=" text-7xl font-medium">
            Find your doctor and make an appointment
          </h1>

          <p className="mt-4 text-2xl text-gray-600">
            Select preferred date and time and doctor from the list below
          </p>

          <SearchBox />
        </div>
        {/* Banner  */}
        <div className="hidden sm:inline-flex p-1 ">
          <img
            src="./images/hero-banner.jpg"
            cover
            className=" rounded-lg"
            alt="hero-banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
