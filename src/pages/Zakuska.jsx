import React from "react";
import { products } from "../data/products";

const Zakuska = () => {
  return (
    <div className="container w-[390px] pl-3 pr-3 pb-10 bg-white pt-5 mx-auto flex flex-col gap-5  ">
      <div className="flex items-center justify-between ">
        <h1 className="text-[28px] font-semibold ">Закуски</h1>
      </div>
      <div className="flex flex-col items-center gap-5">
        {products
          .filter((value) => value.category === "Закуски")
          .map((zakuska) => (
            <div className="w-[350px]  gap-2 h-[124px] flex items-center border-[#15141446] rounded-[5px] border">
              <div className="min-w-25  h-25">
                <img
                  className="w-25 h-25 rounded-[50%]"
                  src={zakuska.image}
                  alt=""
                />
              </div>
              <div className="flex gap-2 flex-col">
                <h1 className="text-[14px] font-bold">{zakuska.name}</h1>
                <p className="text-[12px]">{zakuska.description}</p>
                <div className="w-[92px] cursor-pointer h-[28px] rounded-[26px] flex items-center justify-center text-[14px] font-bold bg-[#E5E5E5]">
                  от {zakuska.price}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Zakuska;
