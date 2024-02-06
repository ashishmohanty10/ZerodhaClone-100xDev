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
import KiteLogo from "../assets/kite-logo.svg";
import ConsoleLogo from "../assets/console.svg";
import CoinLogo from "../assets/coin.svg";
import KiteConnect from "../assets/kite-connect.svg";
import TQNA from "../assets/tqna.png";
import Varsity from "../assets/varsity.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  const { darkTheme, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className={darkTheme ? "dark sticky top-0 z-50" : "sticky top-0 z-50"}>
      <div className="py-5 border-b-2 border-slate-200 sticky top-0 bg-white dark:bg-dark dark:border-primaryColor">
        <div className="container relative">
          <div className="flex justify-between items-center ">
            <div className="w-[20vh]">
              <Link to={`/`}>
                <img src={Logo} alt="" className="cursor-pointer" />
              </Link>
            </div>
            <div className="flex justify-between items-center space-x-5">
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
              </ul>
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

              {/* mobile Navbar */}
              {menu ? (
                <div className="absolute h-[500px] w-full lg:h-[400px] lg:w-[700px] bg-white top-11 right-0 shadow-md rounded-md p-2 dark:bg-slate-900">
                  <ul className="lg:hidden flex justify-between border-b border-slate-300">
                    {NavLinks.map((d, i) => (
                      <li
                        key={i}
                        className="text-base text-stone-700 font-normal mb-2 list-none hover:text-primaryColor duration-75 dark:text-slate-50 dark:hover:text-primaryColor"
                      >
                        <Link to={d.href} target="_self">
                          {d.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="lg:grid lg:grid-cols-2">
                    <div className="grid grid-cols-2  justify-start items-start my-5 ">
                      <div className="flex justify-start items-center gap-x-2">
                        <img src={KiteLogo} alt="" className="w-[30px]" />
                        <p className="text-base font-normal text-stone-700 dark:text-slate-100">
                          Kite
                        </p>
                      </div>

                      <div className="flex justify-start items-center gap-x-2">
                        <img src={ConsoleLogo} alt="" className="w-[30px]" />
                        <p className="text-base font-normal text-stone-700 dark:text-slate-100">
                          Console
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2  justify-start items-start my-5 ">
                      <div className="flex justify-start items-center gap-x-2">
                        <img src={KiteConnect} alt="" className="w-[30px]" />
                        <p className="text-base font-normal text-stone-700 dark:text-slate-100">
                          Kite Connect
                        </p>
                      </div>

                      <div className="flex justify-start items-center gap-x-2">
                        <img src={CoinLogo} alt="" className="w-[30px]" />
                        <p className="text-base font-normal text-stone-700 dark:text-slate-100">
                          Coin
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2  justify-start items-start my-5 ">
                      <div className="flex justify-start items-center gap-x-2">
                        <img src={Varsity} alt="" className="w-[30px]" />
                        <p className="text-base font-normal text-stone-700 dark:text-slate-100">
                          Varsity
                        </p>
                      </div>

                      <div className="flex justify-start items-center gap-x-2">
                        <img src={TQNA} alt="" className="w-[30px]" />
                        <p className="text-base font-normal text-stone-700 dark:text-slate-100">
                          Trading Q&A
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 justify-between items-center mt-5">
                    <div className="flex flex-col gap-y-3">
                      <h3 className="text-xl font-medium text-slate-700 dark:text-slate-100">
                        Utilities
                      </h3>

                      <ul className="flex flex-col gap-y-2 ">
                        <li className="text-slate-600 dark:text-slate-300 hover:text-primaryColor duration-75 cursor-pointer">
                          Brokerage Calculator
                        </li>
                        <li className="text-slate-600 dark:text-slate-300 hover:text-primaryColor duration-75 cursor-pointer">
                          Margin Calculator
                        </li>
                        <li className="text-slate-600 dark:text-slate-300 hover:text-primaryColor duration-75 cursor-pointer">
                          Holiday Calender
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-3">
                      <h3 className="text-xl font-medium text-slate-700 dark:text-slate-100">
                        Update
                      </h3>

                      <ul className="flex flex-col gap-y-2 text-slate-600 dark:text-slate-300">
                        <li className="text-slate-600  hover:text-primaryColor duration-75 dark:text-slate-300 dark:hover:text-primaryColor cursor-pointer">
                          Z-Connect blog
                        </li>
                        <li className="text-slate-600  hover:text-primaryColor duration-75 dark:text-slate-300 dark:hover:text-primaryColor cursor-pointer">
                          Pulse News
                        </li>
                        <li className="text-slate-600  hover:text-primaryColor duration-75 dark:text-slate-300 dark:hover:text-primaryColor cursor-pointer">
                          Circulars / bulletin
                        </li>
                        <li className="text-slate-600  hover:text-primaryColor duration-75 dark:text-slate-300 dark:hover:text-primaryColor cursor-pointer">
                          IPOs
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
