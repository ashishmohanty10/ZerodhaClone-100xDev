import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";
import { GoCreditCard } from "react-icons/go";
import { IoFilterCircleSharp } from "react-icons/io5";
import { RiCopperCoinLine } from "react-icons/ri";

const SupportLinkList = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 justify-between items-start gap-5 mt-5">
        {/* first column */}
        <div className="flex flex-col justify-between items-start">
          <div className="flex justify-start items-center gap-4 mb-4 cursor-pointer hover:text-primaryColor duration-75 dark:text-slate-100">
            <CiCirclePlus className="text-2xl" />
            <h3 className="text-xl font-normal"> Account Opening</h3>
          </div>

          <ul className="flex flex-col gap-y-2 pl-10">
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Getting strated
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Online
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Offline
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Charges
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Company, Partnership and HUF
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Non Resident India (NRI)
            </a>
          </ul>
        </div>

        {/* secnd column */}
        <div className="flex flex-col justify-between items-start">
          <div className="flex justify-start items-center gap-4 mb-4 cursor-pointer hover:text-primaryColor duration-75 dark:text-slate-100">
            <BiUser className="text-2xl" />
            <h3 className="text-xl font-normal">Your Zerodha Account</h3>
          </div>

          <ul className="flex flex-col gap-y-2 pl-10">
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Login credentials
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Your Profile
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Account modification and segment addition
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              CMR & DP ID
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Nomination
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Transfer and conversion of shares
            </a>
          </ul>
        </div>

        {/* third column */}
        <div className="flex flex-col justify-between items-start">
          <div className="flex justify-start items-center gap-4 mb-4 cursor-pointer hover:text-primaryColor duration-75 dark:text-slate-100">
            <BsGraphUpArrow className="text-2xl" />
            <h3 className="text-xl font-normal">Trading and Markets</h3>
          </div>

          <ul className="flex flex-col pl-10 gap-y-2">
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Trading FAQs
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Kite
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Margins
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Product and order types
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Corporate actions
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Kite features
            </a>
          </ul>
        </div>
      </div>

      {/* Section section */}
      <div className="grid md:grid-cols-3 justify-between items-start gap-5 mt-5">
        {/* first column */}
        <div className="flex flex-col justify-between items-start">
          <div className="flex justify-start items-center gap-4 mb-4 cursor-pointer hover:text-primaryColor duration-75 dark:text-slate-100">
            <GoCreditCard className="text-2xl" />
            <h3 className="text-xl font-normal">Funds</h3>
          </div>

          <ul className="flex flex-col gap-y-2 pl-10">
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Fund withdrawal
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Adding funds
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Adding bank accounts
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              eMandates
            </a>
          </ul>
        </div>

        {/* secnd column */}
        <div className="flex flex-col justify-between items-start">
          <div className="flex justify-start items-center gap-4 mb-4 cursor-pointer hover:text-primaryColor duration-75 dark:text-slate-100">
            <IoFilterCircleSharp className="text-2xl" />
            <h3 className="text-xl font-normal">Console</h3>
          </div>

          <ul className="flex flex-col gap-y-2 pl-10">
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              IPO
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Portfolio
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Funds statement
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Profile
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Reports
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Referral program
            </a>
          </ul>
        </div>

        {/* third column */}
        <div className="flex flex-col justify-between items-start">
          <div className="flex justify-start items-center gap-4 mb-4 cursor-pointer hover:text-primaryColor duration-75 dark:text-slate-100">
            <RiCopperCoinLine className="text-2xl" />
            <h3 className="text-xl font-normal">Coin</h3>
          </div>

          <ul className="flex flex-col pl-10 gap-y-2">
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Understanding mutual funds and Coin
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Coin app
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Coin web
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              Transactions and reports
            </a>
            <a
              href=""
              className="text-primaryColor hover:text-slate-900 dark:hover:text-slate-100 duration-75"
            >
              National Pension Scheme (NPS)
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SupportLinkList;
