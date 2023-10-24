import React from "react";
import "./ItemModal.css";

function ItemModal({ card, onCloseModal, onDelete }) {
  return (
    <div className={`modal`}>
      <div className="modal__contents">
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__title">
          <p className="modal__text">{card.name}</p>
          <button type="button" className="modal__delete" onClick={onDelete}>
            Delete item
          </button>
        </div>
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
