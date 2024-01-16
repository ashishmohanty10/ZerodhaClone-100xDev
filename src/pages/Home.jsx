import React from "react";
import Landing from "../assets/landing.png";
import Img2 from "../assets/largest-broker.svg";
import Button from "../components/Button";
import PressLogo from "../assets/press-logos.png";
export const Home = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col justify-center items-center py-16">
          <img src={Landing} alt="" className="w-[1000px] mb-4" />

          <h1 className="text-4xl font-medium mb-4">Invest in everything</h1>
          <p className="text-xl font-normal mb-5">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>

          <Button name={"SignUp"} />
        </div>

        <div className="grid grid-cols-2 justify-between items-center gap-40 py-16">
          <div className="flex justify-center items-center">
            <img src={Img2} alt="" />
          </div>

          <div>
            <h3 className="text-3xl font-medium mb-5">
              Largest stock broker in India
            </h3>

            <p className="text-lg font-normal mb-4">
              1.3+ Crore Zerodha clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:
            </p>

            <div className="flex justify-between items-center mb-4">
              <div>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </div>

              <div>
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
      </div>
    </>
  );
};
