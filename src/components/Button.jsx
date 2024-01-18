import React from "react";

const Button = ({ name }) => {
  return (
    <>
      <button className="py-2 px-14 rounded-sm bg-primaryColor text-lg text-white font-medium hover:bg-black">
        {name}
      </button>
    </>
  );
};

export default Button;
