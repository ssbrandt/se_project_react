import React from "react";
import "./SideBar.css";
import avatar from "../../images/Avatar.png";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SideBar({ onEditProfile, onEditProfileModal, onLogOut }) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        {avatar ? (
          <img
            src={currentUser.avatar}
            alt="User Avatar"
            className="sidebar__avatar"
          />
        ) : (
          <p className="sidebar__avatar">
            {currentUser?.name[0].toUpperCase()}
          </p>
        )}
        <h2 className="sidebar__text">{currentUser?.name}</h2>
      </div>
      <div>
        <button onClick={onEditProfileModal}>Change Profile Data</button>
        <button onClick={onLogOut}>Log Out</button>
      </div>
    </div>
  );
}

export default SideBar;
