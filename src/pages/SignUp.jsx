import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import SignupImg from "../assets/signup.png";

const SignUp = () => {
  const { darkTheme, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div>
        <div className="container">
          <div className="grid grid-cols-2 justify-between items-center gap-40 py-16">
            <div>
              <img src={SignupImg} alt="" />
            </div>

            <div>
              <h3 className="text-3xl font-medium mb-3">Signup now</h3>
              <p className="text-slate-300 text-base mb-5">
                Or track your existing application.
              </p>

              <input type="text" className="p-2">
                +91
              </input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
