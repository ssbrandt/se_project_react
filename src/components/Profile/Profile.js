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
}) {
  return (
    <div className="profile">
      <SideBar
        onEditProfile={onEditProfile}
        onEditProfileModal={onEditProfileModal}
      />
      <ClothesSection
        cards={cards}
        onSelectedCard={onSelectedCard}
        onCloseModal={onCloseModal}
        onCreateModal={onCreateModal}
      />
    </div>
  );
}

export default Profile;
