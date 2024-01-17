import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logo.svg";
import { NavLinks } from "./NavLinks";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="py-5 border-b-2 border-slate-200 sticky top-0 bg-white">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="w-[20vh]">
            <img src={Logo} alt="" />
          </div>

          <ul className="flex justify-between items-center space-x-5 ">
            {NavLinks.map(({ id, name }) => (
              <li
                key={id}
                className="list-none hover:text-primaryColor duration-75"
              >
                <Link to={id} target="_self">
                  {name}
                </Link>
              </li>
            ))}

            <li className="list-none" onClick={handleMenu}>
              <FontAwesomeIcon icon={menu ? faXmark : faBars} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
