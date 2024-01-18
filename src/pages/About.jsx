import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const About = () => {
  const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-slate-800">
        <div className="container">
          <div className="flex justify-center items-center py-16 border-b border-slate-400 dark:border-primaryColor">
            <h3 className="text-3xl font-medium dark:text-slate-100 text-center w-[60%]">
              We pioneered the discount broking model in India. Now, we are
              breaking ground with our technology.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
