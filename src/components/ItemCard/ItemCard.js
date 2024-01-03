import React from "react";
import "./ItemCard.css";

function ItemCard({ card, onSelectedCard }) {
  return (
    <li className="card">
      <img
        src={card.imageUrl}
        alt={card.name}
        className="card__image"
        onClick={() => onSelectedCard(card)}
      />
      <h2 className="card__title">{card.name}</h2>
    </li>
  );
}

export default ItemCard;
