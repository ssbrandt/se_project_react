import React from "react";
import "./SideBar.css";
import avatar from "../../images/Avatar.png";

function SideBar() {
  return (
    <div className="sidebar">
      <img src={avatar} alt="User Avatar" className="sidebar__avatar" />
      <h2 className="sidebar__text">Terrence Tegegne</h2>
    </div>
  );
}

export default SideBar;
