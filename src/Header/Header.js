import "./Header.css";
import React from "react";
import logo from "../images/logo.svg";
import avatar from "../images/Avatar.png";

function Header({ weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__group">
        <ul className="header__items">
          <li className="header__item">
            <img alt="wtwr logo" src={logo} className="header__logo" />
          </li>
          <li className="header__item">
            {currentDate}, {weatherData.city}
          </li>
        </ul>
      </div>
      <div className="header__group">
        <ul className="header__items">
          <li className="header__item">+ Add Clothes</li>
          <li className="header__item">Terrence Tegegne</li>
          <li className="header__item">
            <img src={avatar} alt="User Avatar" className="header__avatar" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
