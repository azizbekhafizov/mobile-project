import React from "react";
import { products } from "../data/products";

const Home = () => {
  return (
    <div className="w-[390px] h-auto  container bg-white mx-auto">
      <div className="pl-3 pr-3 gap-4 flex overflow-x-auto whitespace-nowrap hide-scrollbar">
        {products
          .filter((value) => value.category === "Пицца")
          .map((pissa) => (
            <div
              style={{ backgroundImage: `url(${pissa.image})` }}
              key={pissa.id}
              className="min-w-[290px] h-[320px] flex items-end pl-5 rounded-2xl mb-10 mt-5 bg-cover bg-center shadow-xl"
            >
              <h1 className="text-[24px] pb-5 break-words max-w-[240px] font-bold">
                3 средние пиццы от
                <span className="block">999 рублей</span>
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
