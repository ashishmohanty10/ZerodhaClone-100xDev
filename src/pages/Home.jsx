import React, { useContext } from "react";
import Landing from "../assets/landing.png";
import Img2 from "../assets/largest-broker.svg";
import Button from "../components/Button";
import PressLogo from "../assets/press-logos.png";
import Ecosystem from "../assets/ecosystem.png";
import Education from "../assets/index-education.svg";
import { ThemeContext } from "../context/ThemeProvider";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CTA from "../components/CTA";

export const Home = () => {
  const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-slate-800">
        <div className="container">
          <div className="flex flex-col justify-center items-center py-16 ">
            <img src={Landing} alt="" className="w-[1000px] mb-4" />

            <h1 className="text-4xl font-medium mb-4 dark:text-slate-100">
              Invest in everything
            </h1>
            <p className="text-xl font-normal mb-5 dark:text-slate-300">
              Online platform to invest in stocks, derivatives, mutual funds,
              and more
            </p>

            <Button name={"Sign Up Now"} />
          </div>

          {/* Second section */}
          <div className="grid grid-cols-2 justify-between items-center gap-40 py-16">
            <div className="flex justify-center items-center">
              <img src={Img2} alt="" />
            </div>

            <div>
              <h3 className="text-3xl font-medium mb-5 dark:text-slate-100">
                Largest stock broker in India
              </h3>

              <p className="text-base font-normal mb-4 dark:text-slate-300">
                1.3+ Crore Zerodha clients contribute to over 15% of all retail
                order volumes in India daily by trading and investing in:
              </p>

              <div className="flex justify-between items-center mb-4">
                <div className="text-base font-normal dark:text-slate-300">
                  <li>Futures and Options</li>
                  <li>Commodity derivatives</li>
                  <li>Currency derivatives</li>
                </div>

                <div className="text-base font-normal dark:text-slate-300">
                  <li>Stocks & IPOs</li>
                  <li>Direct mutual funds</li>
                  <li>Bonds and Govt. Securities</li>
                </div>
              </div>

              <div>
                <img src={PressLogo} alt="" />
              </div>
            </div>
          </div>
          {/* Third Section */}
          <div className="grid grid-cols-2 justify-between items-center gap-40 py-16">
            <div>
              <h3 className="text-3xl font-medium mb-5 dark:text-slate-100">
                Trust with confidence
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-medium dark:text-slate-100">
                  Customer-first always
                </h4>
                <p className="mt-2 text-base font-normal dark:text-slate-300">
                  That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
                  crores worth of equity investments.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-medium dark:text-slate-100">
                  No spam or gimmicks
                </h4>
                <p className="mt-2 text-base font-normal dark:text-slate-300">
                  No gimmicks, spam, "gamification", or annoying push
                  notifications. High quality apps that you use at your pace,
                  the way you like.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-medium dark:text-slate-100">
                  The Zerodha universe
                </h4>
                <p className="mt-2 text-base font-normal dark:text-slate-300">
                  Not just an app, but a whole ecosystem. Our investments in 30+
                  fintech startups offer you tailored services specific to your
                  needs.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-medium dark:text-slate-100">
                  Do better with money
                </h4>
                <p className="mt-2 text-base font-normal dark:text-slate-300">
                  With initiatives like Nudge and Kill Switch, we don't just
                  facilitate transactions, but actively help you do better with
                  your money.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center flex-col">
              <img src={Ecosystem} alt="" />

              <div className="flex justify-center items-center gap-10">
                <CTA title={"Explore Our Products"} />
                {/* <div className="flex justify-center items-center gap-x-2 text-primaryColor font-medium hover:text-black duration-75">
                  <a href="" className="text-base">
                    Explore Our Products
                  </a>
                  <FontAwesomeIcon icon={faArrowRight} size="xs" />
                </div> */}

                <CTA title={"Try Our Kit"} />
                {/* <div className="flex justify-center items-center gap-x-2 text-primaryColor font-medium hover:text-black duration-75">
                  <a href="" className="text-base">
                    Try Our Kit
                  </a>
                  <FontAwesomeIcon icon={faArrowRight} size="xs" />
                </div> */}
              </div>
            </div>
          </div>
          {/* Forth Section */}
          <div className="grid grid-cols-2 justify-between items-center gap-40 py-16">
            <div>
              <h3 className="text-3xl font-medium mb-5 dark:text-slate-100">
                Unbeatable pricing
              </h3>
              <p className="text-base font-normal mb-5 dark:text-slate-300">
                We pioneered the concept of discount broking and price
                transparency in India. Flat fees and no hidden charges.
              </p>

              <CTA title={"See Pricing"} />
              {/* <div className="flex justify-start items-center gap-x-2 text-primaryColor font-medium hover:text-black duration-75">
                <a href="" className="text-base">
                  See Pricing
                </a>
                <FontAwesomeIcon icon={faArrowRight} size="xs" />
              </div> */}
            </div>

            <div className="grid grid-cols-2 justify-center items-center">
              <div className="flex flex-col justify-center items-center border border-slate-300 p-7 w-[192px]">
                <p className="text-7xl font-semibold dark:text-slate-300">₹0</p>
                <p className="text-center dark:text-slate-300">
                  Free equity delivery and direct mutual funds
                </p>
              </div>

              <div className="flex flex-col justify-center items-center border border-slate-300 p-7 w-[192px]">
                <p className="text-7xl font-semibold dark:text-slate-300">
                  ₹20
                </p>
                <p className="dark:text-slate-300 text-center">
                  Intraday and F&O
                </p>
              </div>
            </div>
          </div>

          {/* Fifth Section */}
          <div className="grid grid-cols-2 justify-between items-center gap-40 py-16">
            <div>
              <img src={Education} alt="" />
            </div>

            <div>
              <h3 className="text-3xl font-medium mb-5 dark:text-slate-100">
                Free and open market education
              </h3>

              <p className="text-base font-normal mb-4 dark:text-slate-300">
                Varsity, the largest online stock market education book in the
                world covering everything from the basics to advanced trading.
              </p>

              <CTA title={"Varsity"} />
              {/* <div className="flex justify-start items-center gap-x-2 mb-4 text-primaryColor font-medium hover:text-black duration-75">
                <a href="" className="text-base">
                  Varsity
                </a>
                <FontAwesomeIcon icon={faArrowRight} size="xs" />
              </div> */}

              <p className="text-base font-normal mb-4 mt-4 dark:text-slate-300">
                TradingQ&A, the most active trading and investment community in
                India for all your market related queries.
              </p>

              <CTA title={"Trading Q&A"} />

              {/* <div className="flex justify-start items-center gap-x-2 mb-4 text-primaryColor font-medium hover:text-black duration-75">
                <a href="" className="text-base">
                  Trading Q&A
                </a>
                <FontAwesomeIcon icon={faArrowRight} size="xs" />
              </div> */}
            </div>
          </div>

          {/* Sicth Section */}

          <div className="flex justify-center items-center flex-col py-16">
            <h1 className="text-4xl font-medium mb-4 dark:text-slate-100">
              Open a Zerodha account
            </h1>
            <p className="text-xl font-normal mb-5 dark:text-slate-300">
              Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
              and F&O trades.
            </p>

            <Button name={"Sign Up Now"} />
          </div>
        </div>
      </div>
    </div>
  );
};
