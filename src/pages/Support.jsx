import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { IoIosSearch } from "react-icons/io";
import SupportLinkList from "../components/SupportLinkList";

const Support = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-slate-800">
        <div className="py-16 bg-primaryColor">
          <div className="container">
            <div className="flex  justify-between items-center">
              <h3 className="text-slate-100 font-medium text-xl">
                Support Portal
              </h3>

              <p className="text-slate-100 underline font-medium text-base">
                Track tickets
              </p>
            </div>

            <div className="grid md:grid-cols-2 justify-between items-center mt-5 gap-10">
              <div className="flex flex-col justify-start gap-y-5">
                <h3 className="text-slate-100 font-medium text-xl">
                  Search for an answer or browse help topics to create a ticket
                </h3>

                <div className="flex justify-center items-center py-4 px-4 bg-slate-100 rounded-sm gap-5 w-full">
                  <input
                    type="text"
                    placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
                    className="w-full bg-slate-100 outline-none"
                  />

                  <IoIosSearch className="text-2xl font-medium" />
                </div>

                <ul className="flex flex-col md:flex-row justify-start md:gap-x-5 flex-wrap">
                  <a
                    href=""
                    className="font-normal text-xl text-slate-100 underline mb-2 pb-1"
                  >
                    Track account opening
                  </a>
                  <a
                    href=""
                    className="font-normal text-xl text-slate-100 underline mb-2 pb-1"
                  >
                    Track segment activation
                  </a>
                  <a
                    href=""
                    className="font-normal text-xl text-slate-100 underline mb-2 pb-1"
                  >
                    Intraday margins
                  </a>
                  <a
                    href=""
                    className="font-normal text-xl text-slate-100 underline mb-2 pb-1"
                  >
                    Kite user manual
                  </a>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-slate-100 font-medium mb-5 ">
                  Featured
                </h3>

                <ol className="pl-5">
                  <li className="text-base font-medium text-slate-100 mb-4">
                    1. Latest Intraday leverages - MIS & CO
                  </li>
                  <li className="text-base font-medium text-slate-100">
                    2. Surveillance measure on scrips - February 2024
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="py-16">
            <h3 className="font-normal text-2xl text-slate-700">
              To create a ticket, select a relevant topic
            </h3>

            <div>
              <SupportLinkList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
