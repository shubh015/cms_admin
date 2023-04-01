import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiBell, HiUserCircle } from "react-icons/hi";

const Header = () => {
  return (
    <div className="header_wrp bg-white sticky left-0 top-0 p-3 flex gap-3 justify-end items-center w-full py-5">
      <div className="icon text-2xl text-gray-400">
        <HiBell />
      </div>
      <div className="icon text-2xl text-gray-400">
        <HiUserCircle />
      </div>
    </div>
  );
};

export default Header;
