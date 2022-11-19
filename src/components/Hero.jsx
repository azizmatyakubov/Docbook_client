import React from "react";
import SearchBox from "./SearchBox";

const Hero = () => {
  return (
    <div className="h-full flex mx-10">
      <div className="flex flex-col ">
        <h1 className="mt-12 text-7xl font-medium">
          Find your doctor and make an appointment
        </h1>

        <p className="mt-4 text-2xl text-gray-600">
          Select preferred date and time and doctor from the list below
        </p>

        {/* Search Box */}
        <div className="relative">
          <SearchBox />
        </div>
      </div>
      {/* Banner  */}
      <div className="hidden sm:inline-flex p-1">
        <img
          src="./images/hero-banner.jpg"
          fill
          className="w-100 h-full rounded-lg"
          alt="hero-banner"
        />
      </div>
    </div>
  );
};

export default Hero;
