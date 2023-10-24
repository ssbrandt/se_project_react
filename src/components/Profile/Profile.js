import React from "react";
import "./Profile.css";

import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ cards, onSelectedCard, onCloseModal, onCreateModal }) {
  return (
    <div className="profile">
      <SideBar />
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
