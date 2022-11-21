import React from "react";

const StepsBox = () => {
    return (
      <div className="h-36 mx-10 mt-2 rounded-md">
        <div className="flex justify-between  w-100 h-[252px] rounded-md p-7 bg-[url(https://i.pinimg.com/736x/72/47/f3/7247f32dedcabe39c7c9c8d06a483083.jpg)] bg-cover opacity-80 ">
          <h1 className="text-4xl font-medium text-zinc-50 z-10 ">
            Easy steps to get your consultation
          </h1>
          <button className="bg-zinc-50 text-purple-700 font-medium text-xl  px-8 rounded-md h-14 hover:bg-purple-700 hover:text-zinc-50">
            Make an Appointment
          </button>
        </div>
        <div className="w-[120px] h-[52px] bg-red-500 z-12 mt-[-12px]"></div>
      </div>
    );
};

export default StepsBox;
