import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const About = () => {
  const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-slate-800">
        <div className="container">
          <div className="flex justify-center items-center py-16 border-b border-slate-400 dark:border-primaryColor">
            <h3 className="text-3xl font-medium dark:text-slate-100 text-center w-[60%]">
              We pioneered the discount broking model in India. Now, we are
              breaking ground with our technology.
            </h3>
          </div>

          <div className="py-16">
            <div className="grid grid-cols-2 justify-center items-start">
              <div>
                <p className="text-base dark:text-slate-300 font-normal mb-3">
                  We kick-started operations on the 15th of August, 2010 with
                  the goal of breaking all barriers that traders and investors
                  face in India in terms of cost, support, and technology. We
                  named the company Zerodha, a combination of Zero and "Rodha",
                  the Sanskrit word for barrier.
                </p>

                <p className="text-base dark:text-slate-300 font-normal mb-3">
                  Today, our disruptive pricing models and in-house technology
                  have made us the biggest stock broker in India.
                </p>

                <p className="text-base dark:text-slate-300 font-normal ">
                  Over 1+ Crore clients place millions of orders every day
                  through our powerful ecosystem of investment platforms,
                  contributing over 15% of all Indian retail trading volumes.
                </p>
              </div>

              <div>
                <p className="text-base dark:text-slate-300 font-normal mb-3">
                  In addition, we run a number of popular open online
                  educational and community initiatives to empower retail
                  traders and investors.
                </p>

                <p className="text-base dark:text-slate-300 font-normal mb-3">
                  Rainmatter, our fintech fund and incubator, has invested in
                  several fintech startups with the goal of growing the Indian
                  capital markets.
                </p>

                <p className="text-base dark:text-slate-300 font-normal ">
                  And yet, we are always up to something new every day. Catch up
                  on the latest updates on our blog or see what the media is
                  saying about us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
