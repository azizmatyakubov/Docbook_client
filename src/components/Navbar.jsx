import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-auto  py-5 mx-10">
      <div className="text-3xl">DocBook</div>
      <div className="hidden sm:flex flex-grow">
        <ul className="flex ml-auto">
          <NavbarItem title="Home" />
          <NavbarItem title="Doctors" />
          <NavbarItem title="About us" />
          <NavbarItem title="Contact" />
        </ul>
      </div>
      <div className="flex">
        <div className="px-5 py-2 rounded text-white text-xl bg-purple-500">
          Login
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
