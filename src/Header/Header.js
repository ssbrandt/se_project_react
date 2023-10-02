import "./Header.css";
import React from "react";
import logo from "../images/logo.svg";

function Header(props) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const location = "New York";

  return (
    <header className="header">
      <div className="header__group">
        <ul className="header__items">
          <li className="header__item">
            <img alt="wtwr logo" src={logo} className="header__logo" />
          </li>
          <li className="header__item">{currentDate}</li>
          <li className="header__item">{location}</li>
        </ul>
      </div>
      <div className="header__group">
        <ul className="header__items">
          <li className="header__item">+ Add Clothes</li>
          <li className="header__item">Terrence Tegegne</li>
          <li className="header__item">avatar</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
