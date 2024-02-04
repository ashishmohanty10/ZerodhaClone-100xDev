import React from "react";
import SmallCase from "../assets/smallcase-logo.png";
import Streak from "../assets/streak-logo.png";
import ZerodhaFundHouse from "../assets/zerodhafundhouse.png";
import Ditto from "../assets/ditto-logo.png";
import Goldenpi from "../assets/goldenpi-logo.png";
import SensiBull from "../assets/sensibull-logo.svg";

const CompanySection = () => {
  return (
    <>
      <section className="mb-4 md:mb-0 flex flex-col md:flex-row gap-5 justify-evenly items-center my-5">
        <a href="#">
          <img
            src={SmallCase}
            alt=""
            className="w-[200px] h-auto flex items-center justify-center"
          />
          <p className="mt-2 text-xs font-medium text-slate-400 text-center">
            Thematic investment platform
          </p>
        </a>

        <a href="#">
          <img
            src={Streak}
            alt=""
            className="w-[200px] h-auto flex items-center justify-center"
          />
          <p className="mt-2 text-xs font-medium text-slate-400 text-center">
            Algo & strategy platform
          </p>
        </a>

        <a href="#">
          <img
            src={SensiBull}
            alt=""
            className="w-[200px] h-auto flex items-center justify-center"
          />
          <p className="mt-2 text-xs font-medium text-slate-400 text-center ">
            Options trading platform
          </p>
        </a>
      </section>

      <section className="mb-4 md:mb-0 flex flex-col md:flex-row  gap-5 justify-evenly items-center my-5">
        <a href="#">
          <img
            src={ZerodhaFundHouse}
            alt=""
            className="w-[200px] h-auto flex items-center justify-center"
          />
          <p className="mt-2 text-xs font-medium text-slate-400 text-center ">
            Assest management
          </p>
        </a>

        <a href="#">
          <img
            src={Goldenpi}
            alt=""
            className="w-[200px] h-auto flex items-center justify-center"
          />
          <p className="mt-2 text-xs font-medium text-slate-400 text-center ">
            Bonds trading platform
          </p>
        </a>

        <a href="#">
          <img
            src={Ditto}
            alt=""
            className="w-[200px] h-auto flex items-center justify-center"
          />
          <p className="mt-2 text-xs font-medium text-slate-400 text-center ">
            Insurance
          </p>
        </a>
      </section>
    </>
  );
};

export default CompanySection;
