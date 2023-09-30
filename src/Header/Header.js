//what do I need to import
import React from "react";

function Header(props) {
  return (
    <header className="header">
      <div className="header__info">
        <img></img>
        <p>Current Time</p>
      </div>
      <div className="header__nav">
        <ul className="nav__links">
          <li>+ Add Clothes</li>
          <li>Terrence Tegegne</li>
          <li>avatar</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
