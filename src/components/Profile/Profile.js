import React from "react";
import "./Profile.css";

import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  cards,
  onSelectedCard,
  onCloseModal,
  onCreateModal,
  onEditProfile,
  onEditProfileModal,
  onLogOut,
  onCardLike,
  loggedIn,
}) {
  return (
    <div className="profile">
      <SideBar
        onEditProfile={onEditProfile}
        onEditProfileModal={onEditProfileModal}
        onLogOut={onLogOut}
      />
      <ClothesSection
        cards={cards}
        onSelectedCard={onSelectedCard}
        onCloseModal={onCloseModal}
        onCreateModal={onCreateModal}
        onCardLike={onCardLike}
        loggedIn={loggedIn}
      />
    </div>
  );
}

export default Profile;
