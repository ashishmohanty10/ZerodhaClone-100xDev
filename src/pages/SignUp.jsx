import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import SignupImg from "../assets/signup.png";
import Button from "../components/Button";

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
              <h3 className="text-3xl font-medium mb-5">Signup now</h3>
              <p className="text-slate-400 text-base mb-5">
                Or track your existing application.
              </p>

              <form action="">
                <div className="flex flex-col justify-start relative mb-5">
                  <label className="text-sm font-normal text-slate-500 absolute bg-white -top-3 left-3 px-2">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    placeholder
                    autocorrect="off"
                    autocapitalize="none"
                    maxlength="10"
                    autofocus="autofocus"
                    className="border border-slate-300 rounded-sm max-w-[300px] h-12 pl-16 outline-slate-400"
                  />

                  <span className="absolute top-3 left-3 text-sm font-normal">
                    +91
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-4">
                  You will receive an OTP on your number
                </p>

                <Button name={"Continue"} />

                <p className="text-xs text-primaryColor font-medium hover:text-black duration-75 mt-3">
                  <a href="">Want to open an NRI account?</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
