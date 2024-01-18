import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const About = () => {
  const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-slate-800">
        <div className="container">
          <h3>
            We pioneered the discount broking model in India. Now, we are
            breaking ground with our technology.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
