import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Home.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header-container">
      <div className="header-top">
        <div className="logo-section">
          <img src="/logo.png" alt="Pizza Logo" className="logo-img" />
          <span className="logo-text">Куда пицца</span>
        </div>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars className="menu-icon" />
        </button>
      </div>

      <div className="category-buttons">
        <button className="category-button">
          <img src="/pizza-icon.png" alt="Пицца" className="category-icon" />
          Пицца
        </button>
        <button className="category-button">
          <img src="/drink-icon.png" alt="Напитки" className="category-icon" />
          Напитки
        </button>
        <button className="category-button">
          <img src="/snack-icon.png" alt="Закуски" className="category-icon" />
          Закуски
        </button>
      </div>

      {menuOpen && (
        <div className="side-menu">
          <ul className="menu-list">
            <li>Войти в аккаунт</li>
            <li>Акции</li>
            <li>О компании</li>
            <li>Пользовательское соглашение</li>
            <li>Условия гарантии</li>
            <li>Ресторан</li>
            <li>Контакты</li>
            <li>Поддержка</li>
            <li>Отследить заказ</li>
          </ul>
          <div className="contact-info">
            <p>📞 +7 (926) 223-10-11</p>
            <p>📍 Москва, ул. Юных Ленинцев, д.99</p>
            <div className="social-icons">
              <img src="/facebook-icon.png" alt="Facebook" className="social-icon" />
              <img src="/instagram-icon.png" alt="Instagram" className="social-icon" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}