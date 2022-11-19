import React from "react";

const SearchBoxCategory = ({ active, setActive, Icon, title }) => {
  return (
    <div
      className={`flex align-middle cursor-pointer m-4 ${
        active === title
          ? "text-purple-600 border-b-[3px] border-purple-600"
          : "text-slate-600"
      }`}
      onClick={() => setActive(title)}
    >
      {Icon}
      <p className="text-xl font-medium ml-1">{title}</p>
    </div>
  );
};

export default SearchBoxCategory;
