import React from "react";
import Logo from "../assets/logo.svg";
import { NavLinks } from "./NavLinks";
const Navbar = () => {
  return (
    <div className="py-5 border-b-2 border-slate-200">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="w-[20vh]">
            <img src={Logo} alt="" />
          </div>

          <div className="flex justify-between items-center space-x-5 ">
            {NavLinks.map(({ id, name }) => (
              <li
                key={id}
                className="list-none hover:text-primaryColor duration-75"
              >
                {name}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
