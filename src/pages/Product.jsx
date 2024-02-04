import React from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { useContext } from "react";
import Product1 from "../assets/products-kite.png";
import GoogleBadge from "../assets/google-play-badge.svg";
import AppStore from "../assets/appstore-badge.svg";
import Console from "../assets/products-console.png";
import Coin from "../assets/products-coin.png";
import KiteConnect from "../assets/products-kiteconnect.png";
import Varsity from "../assets/varsity-products.png";
import CompanySection from "../components/CompanySection";
import CTA from "../components/CTA";

const Product = () => {
  const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-slate-800">
        <div className="container">
          {/* first section */}
          <div className="flex flex-col items-center justify-center py-16 border-b border-slate-300 dark:border-primaryColor">
            <h1 className="text-4xl font-medium text-center dark:text-slate-100">
              Technology
            </h1>
            <p className="mt-4 text-xl text-center">
              Sleek, modern, and intuitive trading platforms
            </p>

            <p className="mt-4 text-center font-base">
              Check out our{" "}
              <a href="" className="text-primaryColor">
                investment offerings →
              </a>
            </p>
          </div>

          {/* Kite */}
          <div className="py-16">
            <div className="md:grid items-center justify-between grid-cols-2 gap-5">
              <div className="flex items-center justify-center">
                <img src={Product1} alt="" />
              </div>

              <div>
                <h3 className="mb-5 text-3xl font-semibold">Kite</h3>

                <p className="mb-4 text-base">
                  Our ultra-fast flagship trading platform with streaming market
                  data, advanced charts, an elegant UI, and more. Enjoy the Kite
                  experience seamlessly on your Android and iOS devices.
                </p>

                <div className="flex items-center justify-start gap-5 mb-4 text-base font-medium text-primaryColor">
                  <CTA title={"Try demo"} />
                  <CTA title={"Learn More"} />
                </div>

                <div className="flex items-center justify-start mb-4">
                  <img src={GoogleBadge} alt="" />
                  <img src={AppStore} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Console */}
          <div className="py-16">
            <div className="md:grid items-center justify-between grid-cols-2 gap-5">
              <div className="order-1 md:order-2">
                <h3 className="mb-5 text-3xl font-semibold">Console</h3>

                <p className="mb-4 text-base">
                  The central dashboard for your Zerodha account. Gain insights
                  into your trades and investments with in-depth reports and
                  visualisations.
                </p>

                <div className="flex items-center justify-start gap-5 mb-4 text-base font-medium text-primaryColor">
                  <CTA title={"Learn More"} />
                </div>
              </div>

              <div className="flex items-center justify-center order-2 md:order-1">
                <img src={Console} alt="" />
              </div>
            </div>
          </div>

          {/* Coin */}
          <div className="py-16">
            <div className="md:grid items-center justify-between grid-cols-2 gap-5">
              <div className="flex items-center justify-center">
                <img src={Coin} alt="" />
              </div>

              <div>
                <h3 className="mb-5 text-3xl font-semibold">Coin</h3>

                <p className="mb-4 text-base">
                  Buy direct mutual funds online, commission-free, delivered
                  directly to your Demat account. Enjoy the investment
                  experience on your Android and iOS devices.
                </p>

                <div className="flex items-center justify-start gap-5 mb-4 text-base font-medium text-primaryColor">
                  <CTA title={"Coin"} />
                </div>

                <div className="flex items-center justify-start mb-4">
                  <img src={GoogleBadge} alt="" />
                  <img src={AppStore} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Kite Connect API */}
          <div className="py-16">
            <div className="md:grid items-center justify-between grid-cols-2 gap-5">
              <div>
                <h3 className="mb-5 text-3xl font-semibold">
                  Kite Connect API
                </h3>

                <p className="mb-4 text-base">
                  Build powerful trading platforms and experiences with our
                  super simple HTTP/JSON APIs. If you are a startup, build your
                  investment app and showcase it to our clientbase.
                </p>

                <div className="flex items-center justify-start gap-5 mb-4 text-base font-medium text-primaryColor">
                  <CTA title={"Kite Connect"} />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <img src={KiteConnect} alt="" />
              </div>
            </div>
          </div>

          {/* Varsity mobile */}
          <div className="py-16">
            <div className="md:grid items-center justify-between grid-cols-2 gap-5">
              <div className="flex items-center justify-center">
                <img src={Varsity} alt="" />
              </div>

              <div>
                <h3 className="mb-5 text-3xl font-semibold">Varsity mobile</h3>

                <p className="mb-4 text-base">
                  An easy to grasp, collection of stock market lessons with
                  in-depth coverage and illustrations. Content is broken down
                  into bite-size cards to help you learn on the go.
                </p>

                <div className="flex items-center justify-start mb-4">
                  <img src={GoogleBadge} alt="" />
                  <img src={AppStore} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* COMPANY */}

          <div className="flex justify-center items-center py-10 text-lg">
            <p>
              Want to know more about our technology stack? Check out the{" "}
              <a href="" className="text-primaryColor">
                Zerodha.tech
              </a>{" "}
              blog.
            </p>
          </div>

          {/* Company section */}

          <div className="py-10">
            <div className="mb-4">
              <h3 className="text-3xl font-medium mb-5 text-center">
                The Zerodha Universe
              </h3>
              <p className="text-base text-center mb-4">
                Extend your trading and investment experience even further with
                our partner platforms
              </p>
            </div>

            <div>
              <CompanySection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
