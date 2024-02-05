import { useContext } from "react";
import React from "react";
import { ThemeContext } from "../context/ThemeProvider";
import PricingImg1 from "../assets/other-trades.svg";
import PricingImg2 from "../assets/pricing-eq.svg";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {
  const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-slate-800">
        <div className="container">
          {/* first section */}
          <div className="flex flex-col items-center justify-center py-16 border-b border-slate-300 dark:border-primaryColor">
            <h1 className="text-4xl font-medium text-center dark:text-slate-100">
              Pricing
            </h1>
            <p className="mt-2 text-xl text-center">
              Free equity investments and flat ₹20 intraday and F&O trades
            </p>
          </div>

          {/* second section */}
          <div className="justify-between py-16 border-b md:flex border-slate-300">
            {/* first card */}
            <div className="flex flex-col justify-center h-[400px]">
              <div className="flex justify-center">
                <img src={PricingImg2} alt="" className="w-[250px]" />
              </div>

              <h3 className="text-3xl font-medium text-center">
                Free equity delivery
              </h3>

              <p className="mt-2 text-base text-center">
                All equity delivery investments (NSE, BSE), are absolutely free
                — ₹ 0 brokerage.
              </p>
            </div>

            {/* second card */}
            <div className="flex flex-col justify-center h-[400px]">
              <div className="flex justify-center">
                <img src={PricingImg1} alt="" className="w-[250px]" />
              </div>

              <h3 className="text-3xl font-medium text-center">
                Intraday and F&O trades
              </h3>

              <p className="mt-2 text-xl text-center">
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity, currency, and commodity trades.
                Flat ₹20 on all option trades.
              </p>
            </div>

            {/* Third card */}
            <div className="flex flex-col justify-center h-[400px]">
              <div className="flex justify-center">
                <img src={PricingImg2} alt="" className="w-[250px]" />
              </div>

              <h3 className="text-2xl font-medium text-center">
                Free direct MF
              </h3>

              <p className="mt-2 text-xl text-center">
                All direct mutual fund investments are absolutely free — ₹ 0
                commissions & DP charges.
              </p>
            </div>
          </div>

          {/* Third section */}

          <div className="flex flex-col justify-center py-16">
            <h3 className="text-4xl font-medium text-center dark:text-slate-100">
              Open a Zerodha account
            </h3>

            <p className="mt-4 text-base text-center">
              Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
              and F&O trades.
            </p>
          </div>

          <div className="flex justify-center">
            <Button name={"Sign Up Now"} />
          </div>

          <div className="flex justify-evenly items-center py-10">
            <a
              href=""
              className="text-xl text-primaryColor hover:text-blue-700 duration-75 font-normal"
            >
              <h3>Brokerage calculator</h3>
            </a>
            <a
              href=""
              className="text-xl text-primaryColor hover:text-blue-700 duration-75 font-normal"
            >
              <h3>List of charges</h3>
            </a>
          </div>

          <div className="py-10">
            <ul className="text-xs flex flex-col justify-start gap-y-2">
              <li className="flex justify-start items-center gap-2">
                <span>
                  <FontAwesomeIcon
                    icon={faCircle}
                    size="xs"
                    className="text-slate-600"
                  />
                </span>
                Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
                GST per order.
              </li>

              <li className="flex justify-start items-center gap-2">
                <span>
                  <FontAwesomeIcon
                    icon={faCircle}
                    size="xs"
                    className="text-slate-600"
                  />
                </span>
                Digital contract notes will be sent via e-mail.
              </li>

              <li className="flex justify-start items-center gap-2">
                <span>
                  <FontAwesomeIcon
                    icon={faCircle}
                    size="xs"
                    className="text-slate-600"
                  />
                </span>
                Physical copies of contract notes, if required, shall be charged
                ₹20 per contract note. Courier charges apply.
              </li>

              <li className="flex justify-start items-center gap-2">
                <span>
                  <FontAwesomeIcon
                    icon={faCircle}
                    size="xs"
                    className="text-slate-600"
                  />
                </span>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>

              <li className="flex justify-start items-center gap-2">
                <span>
                  <FontAwesomeIcon
                    icon={faCircle}
                    size="xs"
                    className="text-slate-600"
                  />
                </span>
                For NRI account (PIS), 0.5% or ₹200 per executed order for
                equity (whichever is lower).
              </li>

              <li className="flex justify-start items-center gap-2">
                <span>
                  <FontAwesomeIcon
                    icon={faCircle}
                    size="xs"
                    className="text-slate-600"
                  />
                </span>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
