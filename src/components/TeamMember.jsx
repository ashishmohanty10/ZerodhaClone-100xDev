import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const TeamMember = ({ data }) => {
  const [dropDownState, setDropDownState] = useState(false);

  const handleDropDown = () => {
    setDropDownState(!dropDownState);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 max-w-[250px] object-center">
        <img src={data.imgUrl} alt="" className="rounded-full" />
      </div>
      <p className="mb-2 text-lg font-normal">{data.name}</p>
      <p className="mb-2 text-base font-normal">{data.position}</p>

      <div className="flex flex-col items-start justify-center gap-2">
        <div
          className="flex items-center justify-center gap-2 font-medium"
          onClick={handleDropDown}
        >
          <p className="text-base font-normal text-slate-400">BIO</p>
          <FontAwesomeIcon
            icon={faAngleDown}
            size="xs"
            onClick={handleDropDown}
          />
        </div>
      </div>

      <div>
        {dropDownState && (
          <div className="flex items-start justify-center h-[150px]">
            <p>{data.bio.para}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
