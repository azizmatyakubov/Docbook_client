import React from "react";

const NavbarItem = ({ title }) => {
  return (
    <li className="mx-5 text-lg font-medium text-slate-500 hover:text-slate-900  cursor-pointer decoration-purple-700 ">
      {title}
    </li>
  );
};

export default NavbarItem;
