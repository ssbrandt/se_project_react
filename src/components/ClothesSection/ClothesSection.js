import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ cards, onSelectedCard }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <h2 className="clothes-section__text">Your Clothes</h2>
        <button
          type="text"
          className="header__button"
          //   onClick={onCreateModal}
        >
          + Add Clothes
        </button>
      </div>
      <div>
        <ul className="clothes-section__cards">
          {cards.map((item) => (
            <ItemCard
              key={item._id}
              card={item}
              onSelectedCard={onSelectedCard}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ClothesSection;
