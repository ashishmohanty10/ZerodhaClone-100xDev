import React from "react";
import { CiCirclePlus } from "react-icons/ci";

const SupportLinkList = () => {
  return (
    <div>
      <div className="grid grid-cols-2 justify-between items-start gap-5">
        {/* first column */}
        <div className="flex justify-between items-start">
          <CiCirclePlus />

          <div>
            <h3> Account Opening</h3>

            <ul>
              <a href="">Getting strated</a>
              <a href="">Online</a>
              <a href="">Offline</a>
              <a href="">Charges</a>
              <a href="">Company, Partnership and HUF</a>
              <a href="">Non Resident India (NRI)</a>
            </ul>
          </div>
        </div>

        {/* secnd column */}
        <div className="flex justify-between items-start">
          <div>
            <CiCirclePlus />
            <h3> Account Opening</h3>
          </div>

          <ul>
            <a href="">Getting strated</a>
            <a href="">Online</a>
            <a href="">Offline</a>
            <a href="">Charges</a>
            <a href="">Company, Partnership and HUF</a>
            <a href="">Non Resident India (NRI)</a>
          </ul>
        </div>

        {/* third column */}
        <div className="flex justify-between items-start">
          <CiCirclePlus />

          <div>
            <h3> Account Opening</h3>

            <ul>
              <a href="">Getting strated</a>
              <a href="">Online</a>
              <a href="">Offline</a>
              <a href="">Charges</a>
              <a href="">Company, Partnership and HUF</a>
              <a href="">Non Resident India (NRI)</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportLinkList;
