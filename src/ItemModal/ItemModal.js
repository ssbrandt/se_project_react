import React from "react";
import "./ItemModal.css";

function ItemModal({ card, onCloseModal }) {
  return (
    <div className={`modal`}>
      <div className="modal__contents">
        <img src={card.link} alt={card.name} className="modal__image" />
        <p className="modal__text">{card.name}</p>
        <p className="modal__text">Weather: {card.weather}</p>
        <button
          type="button"
          className="modal__close-preview"
          onClick={onCloseModal}
        ></button>
      </div>
    </div>
  );
}

export default ItemModal;
