import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import CEO from "../assets/nithin-kamath.jpg";
// import CFO from "../assets/Nikhil.jpg";
import { SubAbout } from "../components/SubAbout";
const About = () => {
  const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);
  // const [subAbout, setSubAbout] = useState([]);
  // useEffect(() => {
  //   Axios.get("SubAbout.json")
  //     .then((res) => setSubAbout(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-slate-800">
        <div className="container">
          <div className="flex justify-center items-center py-16 border-b border-slate-400 dark:border-primaryColor">
            <h3 className="text-4xl font-medium dark:text-slate-100 text-center w-[70%]">
              We pioneered the discount broking model in India. Now, we are
              breaking ground with our technology.
            </h3>
          </div>

          {/* second section */}
          <div className="py-16 ">
            <div className="md:grid md:grid-cols-2 justify-center items-start md:px-14 gap-x-10 text-justify">
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

          {/* Third section */}
          <div className="py-16">
            <h3 className="text-3xl font-medium dark:text-slate-100 text-center mb-5">
              People
            </h3>

            <div className="md:grid grid-cols-2 justify-center items-center gap-x-5">
              <div className="flex flex-col justify-center items-center mb-4 md:mb-0">
                <img
                  src={CEO}
                  alt=""
                  className="rounded-full md:max-h-[300px] mb-4"
                />
                <p className="text-lg font-normal mb-4">Nithin Kamath</p>
                <p className="text-sm text-slate-400">Founder, CEO</p>
              </div>

              <div className="text-base font-normal">
                <p className="mb-4">
                  Nithin bootstrapped and founded Zerodha in 2010 to overcome
                  the hurdles he faced during his decade long stint as a trader.
                  Today, Zerodha has changed the landscape of the Indian broking
                  industry.
                </p>

                <p className="mb-4">
                  He is a member of the SEBI Secondary Market Advisory Committee
                  (SMAC) and the Market Data Advisory Committee (MDAC).
                </p>

                <p className="mb-4">Playing basketball is his zen.</p>

                <p className="text-base font-normal">
                  Connect on
                  <a href="" className="text-primaryColor font-medium px-1">
                    Homepage
                  </a>{" "}
                  /{" "}
                  <a href="" className="text-primaryColor font-medium">
                    TradingQnA
                  </a>{" "}
                  /{" "}
                  <a href="" className="text-primaryColor font-medium ">
                    Twitter
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Fourth section */}

          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center">
              <div>
                {SubAbout.map(({ id, imgUrl, name, position }) => {
                  <div key={id}>
                    <div>
                      <img src={imgUrl} alt="" />
                    </div>

                    <p>{name}</p>
                    <p>{position}</p>
                  </div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
