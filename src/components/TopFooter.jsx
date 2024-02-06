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
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-dark">
        <div className="container">
          <div className="py-16">
            <section className="grid md:grid-cols-2 lg:grid-cols-4 justify-between items-start gap-5">
              {/* first column */}
              <div className="flex flex-col gap-y-4 mb-5 lg:mb-0">
                <img src={Logo} alt="" className="w-[150px]" />

                <p className="text-xs text-slate-600">
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

              {/* second column */}
              <div className="flex flex-col gap-y-4 mb-5 lg:mb-0">
                <h3 className="text-lg font-medium text-slate-600">Company</h3>

                <ul className="flex flex-col gap-y-2">
                  <li className="text-base font-medium text-slate-600 hover:text-primaryColor duration-75">
                    <a href="">About</a>
                  </li>
                  <li className="text-base font-medium text-slate-600 hover:text-primaryColor duration-75">
                    <a href="">Prducts</a>
                  </li>
                  <li className="text-base font-medium text-slate-600 hover:text-primaryColor duration-75">
                    <a href="">Pricing</a>
                  </li>
                  <li className="text-base font-medium text-slate-600 hover:text-primaryColor duration-75">
                    <a href="">referral programme</a>
                  </li>
                  <li className="text-base font-medium text-slate-600 hover:text-primaryColor duration-75">
                    <a href="">Careers</a>
                  </li>
                  <li className="text-base font-medium text-slate-600 hover:text-primaryColor duration-75">
                    <a href="">Zerodha.tech</a>
                  </li>
                  <li className="text-base font-medium text-slate-600 hover:text-primaryColor duration-75">
                    <a href="">Press & media</a>
                  </li>
                  <li className="text-base font-medium text-slate-600 hover:text-primaryColor duration-75">
                    <a href="">Zerodha Xares (CSR)</a>
                  </li>
                </ul>
              </div>

              {/* third column */}
              <div className="flex flex-col gap-y-4 mb-5 lg:mb-0">
                <h3 className="text-lg font-medium text-slate-600">Support</h3>

                <ul className="flex flex-col gap-y-2">
                  <li className="text-base font-medium text-slate-600 hover:text-primaryColor duration-75">
                    <a href="">Contact us</a>
                  </li>
                  <li className="text-base font-medium text-slate-600 hover:text-primaryColor duration-75">
                    <a href="">Support portal</a>
                  </li>
                  <li className="text-base font-medium text-slate-600 hover:text-primaryColor duration-75">
                    <a href="">Z-Connect blog</a>
                  </li>
                  <li className="text-base font-medium text-slate-600 hover:text-primaryColor duration-75">
                    <a href="">List of Charges</a>
                  </li>
                  <li className="text-base font-medium text-slate-600 hover:text-primaryColor duration-75">
                    <a href="">Download & resources</a>
                  </li>
                  <li className="text-base font-medium text-slate-600 hover:text-primaryColor duration-75">
                    <a href="">Videos</a>
                  </li>
                  <li className="text-base font-medium text-slate-600 hover:text-primaryColor duration-75">
                    <a href="">Market overview</a>
                  </li>
                  <li className="text-base font-medium text-slate-600 hover:text-primaryColor duration-75">
                    <a href="">How to file a complaint?</a>
                  </li>

                  <li className="text-base  font-medium text-slate-600 hover:text-primaryColor duration-75">
                    <a href="">Status of your complaints</a>
                  </li>
                </ul>
              </div>

              {/* Fourth column */}
              <div className="flex flex-col gap-y-4 mb-5 lg:mb-0">
                <h3 className="text-lg font-medium text-slate-600">Company</h3>

                <ul className="flex flex-col gap-y-2">
                  <li className="text-base font-medium text-slate-600 hover:text-primaryColor duration-75">
                    <a href="">Open an account</a>
                  </li>
                  <li className="text-base font-medium text-slate-600 hover:text-primaryColor duration-75">
                    <a href="">Fund Transfer</a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
