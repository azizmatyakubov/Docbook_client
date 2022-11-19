import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import SearchBoxCategory from "./SearchBoxCategory";

const SearchBox = () => {
  const [active, setActive] = React.useState("General");

  const icon = <CheckBadgeIcon className="w-[23px]" />;

  return (
    <div className="w-[1100px] h-36 bg-slate-50 z-100 absolute top-8 rounded-md shadow-md py-2 px-5">
      <div className="flex items-center">
        <h1 className="text-2xl flex-grow">Book appointment now</h1>
        {/* categories  */}
        <SearchBoxCategory
          active={active}
          setActive={setActive}
          Icon={icon}
          title="General"
        />
        <SearchBoxCategory
          active={active}
          setActive={setActive}
          Icon={icon}
          title="Pediatric"
        />
        <SearchBoxCategory
          active={active}
          setActive={setActive}
          Icon={icon}
          title="Dentist"
        />
        <SearchBoxCategory
          active={active}
          setActive={setActive}
          Icon={icon}
          title="Dermatologist"
        />
      </div>

      {/* Search Input  */}
      <div className="flex items-center mt-4">
        <input
          type="text"
          placeholder="Search by doctor name, specialty, hospital, etc"
          className="w-full h-12 px-4 rounded-md border border-slate-200 focus:outline-none focus:border-purple-600"
        />
        <input
          type="text"
          placeholder="Search by doctor name, specialty, hospital, etc"
          className="w-full h-12 px-4 rounded-md border border-slate-200 focus:outline-none focus:border-purple-600"
        />
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md ml-4">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
