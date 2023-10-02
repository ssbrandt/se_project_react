import React from "react";
import "./ItemCard.css";

function ItemCard({ card }) {
  return (
    <li className="card" key={card._id}>
      <img src={card.link} alt={card.name} className="card__image" />
      <h2 className="card__title">{card.name}</h2>
    </li>
  );
}

export default ItemCard;
