import React from "react";
import { categories } from "../data/categories";

const Swiper = () => {
  if (!categories) return <h1>Loading</h1>;
  return (
    <div className="w-[390px] pl-3 pr-3 bg-white  container pt-5  mx-auto justify-between flex gap-5 items-center  overflow-x-auto whitespace-nowrap hide-scrollbar">
      {categories.map((meal) => (
        <button
          key={meal.name}
          className="flex cursor-pointer items-center w-full min-w-[100px]  h-[40px] border justify-center gap-2 border-[#00000044] rounded-sm "
        >
          <img className="w-[24px] h-[24px] " src={meal.image} alt="" />
          <span>{meal.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Swiper;
