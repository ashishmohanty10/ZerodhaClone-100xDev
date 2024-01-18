import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CTA = ({ title }) => {
  return (
    <div>
      <div className="flex justify-start items-center gap-x-2 text-primaryColor font-medium hover:text-black duration-75">
        <a href="" className="text-base">
          {title}
        </a>
        <FontAwesomeIcon icon={faArrowRight} size="xs" />
      </div>
    </div>
  );
};

export default CTA;
