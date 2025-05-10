import React from "react";
import pissa from "../assets/icons/Vector.svg";
const Footer = () => {
  return (
    <div className="container w-[390px] pl-3 pr-3 pb-10 bg-gray-100 pt-5 mx-auto flex flex-col gap-3 ">
      <div className="flex gap-2 ">
        <img src={pissa} alt="" />
        <span className="text-[18px]">Куда пицца</span>
      </div>
      <ul>
        <li>
          <strong>Куда пицца</strong>
        </li>
        <li>О компании</li>
        <li>Пользовательское соглашение</li>
        <li>Условия гарантии</li>
      </ul>
      <ul>
        <li>
          <strong>Куда пицца</strong>
        </li>
        <li>Ресторан</li>
        <li>Контакты</li>
        <li>Поддержка</li>
        <li>Отследить заказ</li>
      </ul>
      <ul>
        <li>
          <strong>Контакты</strong>
        </li>
        <li>+7 (926) 223-10-11</li>
        <li className="flex">Москва, ул. Юных Ленинцев, д.99</li>
        <div className="flex gap-4">
          <li>Facebok</li>
          <li>Instagram</li>
        </div>
      </ul>
    </div>
  );
};

export default Footer;
