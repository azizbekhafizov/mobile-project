import React from "react";
import locate from "../assets/icons/locate.svg";
import option from "../assets/icons/option.svg";
const Location = () => {
  return (
    <div className="w-[390px] pl-3 pr-3 bg-[#606060] h-[47px] container mx-auto justify-between flex items-center">
      <div>
        <div className="flex items-center cursor-pointer gap-1">
          <img src={locate} alt="" />
          <span className="text-white text-[14px]">Москва</span>
          <img src={option} alt="" />
        </div>
      </div>
      <span className="text-white text-[14px]">Среднее время доставки*: 00:24:19</span>
    </div>
  );
};

export default Location;
