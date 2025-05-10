import React from "react";
import menu from "../assets/icons/menu.svg";
import pissa from "../assets/icons/Vector.svg";
const Sidebar = () => {
  return (
    <div>
      <div className="w-[390px] pl-3 pr-3 bg-white h-[65px] container mx-auto justify-between flex items-center">
        <div className="flex gap-2 ">
          <img src={pissa} alt="" />
          <span className="text-[18px]">Куда пицца</span>
        </div>
        <div>
          <img className="cursor-pointer" src={menu} alt="" />
        </div>
      </div>
      <hr className="w-[390px] mx-auto container text-[#00000031]" />
    </div>
  );
};

export default Sidebar;
