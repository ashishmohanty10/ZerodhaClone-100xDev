import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logo.svg";
import { NavLinks } from "./NavLinks";
import {
  faBars,
  faXmark,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeProvider";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  const { darkTheme, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className={darkTheme ? "dark sticky top-0 z-50" : "sticky top-0 z-50"}>
      <div className="py-5 border-b-2 border-slate-200 sticky top-0 bg-white dark:bg-dark dark:border-primaryColor">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="w-[20vh]">
              <Link to={`/`}>
                <img src={Logo} alt="" className="cursor-pointer" />
              </Link>
            </div>

            <ul className="hidden lg:flex justify-between items-center lg:space-x-5 ">
              {NavLinks.map(({ href, name }) => (
                <li
                  key={href}
                  className="list-none hover:text-primaryColor duration-75 dark:text-slate-50 dark:hover:text-primaryColor"
                >
                  <Link to={href} target="_self">
                    {name}
                  </Link>
                </li>
              ))}

              <li
                className={darkTheme ? "list-none text-slate-50" : "list-none"}
                onClick={handleMenu}
              >
                <FontAwesomeIcon icon={menu ? faXmark : faBars} />
              </li>

              <button onClick={toggleDarkMode}>
                <FontAwesomeIcon
                  icon={darkTheme ? faSun : faMoon}
                  color={darkTheme ? "#FFA500" : "#F0C420"}
                  size="xl"
                />
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
