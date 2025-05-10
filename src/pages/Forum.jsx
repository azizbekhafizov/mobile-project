import React from "react";
import submit from "../assets/icons/submit.svg";
export const Forum = () => {
  return (
    <div className="w-[390px] flex justify-center  bg-white container mx-auto">
      <form className="w-[350px] flex flex-col items-center  h-[124px] bg-[#EFEFEF] rounded-[8px]  ">
        <h1 className="text-[20px] text-center font-semibold mb-3">
          Проверить адрес доставки
        </h1>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="адрес"
            className="max-w-[310px] h-[40px] bg-white p-2 border border-gray-300 rounded-md"
          />
          <button className="bg-black w-10 h-10 flex items-center justify-center rounded-[50%]">
            <img src={submit} alt="" />
          </button>
        </div>
      </form>
    </div>
  );
};
