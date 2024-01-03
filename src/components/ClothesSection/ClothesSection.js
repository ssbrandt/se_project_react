import React, { useContext } from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ClothesSection({
  cards,
  onSelectedCard,
  onCreateModal,
  onCardLike,
  loggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  const currentUserCards = cards.filter((card) => {
    return card.owner === currentUser._id;
  });
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <h2 className="clothes-section__text">Your Clothes</h2>
        <button type="text" className="header__button" onClick={onCreateModal}>
          + Add Clothes
        </button>
      </div>
      <div>
        <ul className="clothes-section__cards">
          {currentUserCards.map((item) => (
            <ItemCard
              key={item._id}
              card={item}
              onSelectedCard={onSelectedCard}
              onCardLike={onCardLike}
              loggedIn={loggedIn}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ClothesSection;
