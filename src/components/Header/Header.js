import "./Header.css";
import React from "react";
import logo from "../../images/logo.svg";
import avatar from "../../images/Avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({
  weatherData,
  onCreateModal,
  onSignUpModal,
  onLogInModal,
  loggedIn,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const [value, setValue] = React.useState(false);

  const currentUser = React.useContext(CurrentUserContext);
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

          {loggedIn ? (
            <>
              {" "}
              <li className="header__item">
                <button
                  type="text"
                  className="header__button"
                  onClick={onCreateModal}
                >
                  + Add Clothes
                </button>
              </li>
              <Link to="/profile">
                <li className="header__item">{currentUser?.name}</li>
                <li className="header__item">
                  {avatar ? (
                    <img
                      src={currentUser.avatar}
                      alt="User Avatar"
                      className="header__avatar"
                    />
                  ) : (
                    <p className="header__avatar">
                      {currentUser?.name[0].toUpperCase()}
                    </p>
                  )}
                </li>
              </Link>
            </>
          ) : (
            <>
              <li className="header__item">
                <button
                  type="text"
                  className="header__button"
                  onClick={onSignUpModal}
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
            </>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
