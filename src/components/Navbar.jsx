import React from "react";
import Logo from "../assets/logo.svg";
import { NavLinks } from "./NavLinks";
const Navbar = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="w-[20vh]">
            <img src={Logo} alt="" />
          </div>

          <div>
            {NavLinks.map(({ id, name }) => {
              <li key={id}>{name}</li>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
