import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Logo from "../assets/logo.svg";

const TopFooter = () => {
  const { darkTheme, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-slate-800">
        <div className="container">
          <div className="py-16">
            <div className="grid grid-cols-4">
              <div className="flex flex-col gap-4">
                <img src={Logo} alt="" className="w-[150px]" />

                <p className="text-xs">
                  © 2010 - 2024, Zerodha Broking Ltd.
                  <br /> All rights reserved.
                </p>

                <div className="flex justify-start gap-4 items-center ">
                  <BsTwitterX className="text-2xl text-slate-500 hover:text-slate-950 duration-75" />
                  <FaFacebookSquare className="text-2xl text-slate-500 hover:text-primaryColor duration-75" />
                  <IoLogoInstagram className="text-2xl text-slate-500 hover:text-primaryColor duration-75" />
                  <RiLinkedinFill className="text-2xl text-slate-500 hover:text-primaryColor duration-75" />
                  <FaTelegram className="text-2xl text-slate-500 hover:text-primaryColor duration-75" />
                  <FaYoutube className="text-2xl text-slate-500 hover:text-rose-600 duration-75" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
