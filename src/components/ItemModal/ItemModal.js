import React from "react";
import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemModal({ card, onCloseModal, onDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwner = currentUser && card.owner === currentUser._id;

  const itemDeleteButtonClassName = `item__delete-button ${
    isOwner ? "modal__close-preview_visible" : "modal__close-preview_hidden"
  }`;

  return (
    <div className={`modal`}>
      <div className="modal__contents">
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__title">
          <p className="modal__text">{card.name}</p>
          <button type="button" className="modal__delete" onClick={onDelete}>
            Delete item
          </button>
        </div>
        <p className="modal__text">Weather: {card.weather}</p>
        <button
          type="button"
          className={itemDeleteButtonClassName}
          onClick={onCloseModal}
        ></button>
      </div>
    </div>
  );
}

export default ItemModal;
