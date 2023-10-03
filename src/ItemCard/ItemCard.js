import React from "react";
import "./ItemCard.css";

function ItemCard({ card, onSelectedCard, onCloseModal }) {
  return (
    <li className="card" key={card._id}>
      <img
        src={card.link}
        alt={card.name}
        className="card__image"
        onClick={() => onSelectedCard(card)}
      />
      <h2 className="card__title">{card.name}</h2>
    </li>
  );
}

export default ItemCard;
