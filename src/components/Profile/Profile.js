import React from "react";
import "./Profile.css";

import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ cards, onSelectedCard, onCloseModal }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        cards={cards}
        onSelectedCard={onSelectedCard}
        onCloseModal={onCloseModal}
      />
    </div>
  );
}

export default Profile;
