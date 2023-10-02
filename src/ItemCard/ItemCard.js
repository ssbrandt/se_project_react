import React from "react";
import "./ItemCard.css";

function ItemCard({ card }) {
  return (
    <li className="card">
      <div className="card__header">
        <p className="card__title">{card.name}</p>
      </div>
      <img src={card.link} alt={card.name} className="card__image" />
    </li>
  );
}

export default ItemCard;
