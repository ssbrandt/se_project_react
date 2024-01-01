import "./Header.css";
import React from "react";
import logo from "../../images/logo.svg";
import avatar from "../../images/Avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({ weatherData, onCreateModal, onSignInModal, onLogInModal }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const [value, setValue] = React.useState(false);

  return (
    <header className="header">
      <div className="header__group">
        <ul className="header__items">
          <li className="header__item">
            <Link to="/">
              <img alt="wtwr logo" src={logo} className="header__logo" />
            </Link>
          </li>
          <li className="header__item">
            {currentDate}, {weatherData.city}
          </li>
        </ul>
      </div>
      <div className="header__group">
        <ul className="header__items">
          <li className="header__item">
            <ToggleSwitch isOn={value} handleToggle={() => setValue(!value)} />
          </li>
          <li className="header__item">
            <button
              type="text"
              className="header__button"
              onClick={onCreateModal}
            >
              + Add Clothes
            </button>
          </li>
          <li className="header__item">
            <button
              type="text"
              className="header__button"
              onClick={onSignInModal}
            >
              Sign Up
            </button>
          </li>
          <li className="header__item">
            <button
              type="text"
              className="header__button"
              onClick={onLogInModal}
            >
              Log In
            </button>
          </li>
          <Link to="/profile">
            <li className="header__item">Terrence Tegegne</li>
            <li className="header__item">
              <img src={avatar} alt="User Avatar" className="header__avatar" />
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
