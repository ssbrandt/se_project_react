import React from "react";
import "./ItemModal.css";

function ItemModal({ card, onCloseModal }) {
  React.useEffect(
    (evt) => {
      function handleOutsideClick(evt) {
        if (evt.key === "Escape") {
          onCloseModal();
        }
      }

      document.addEventListener("keydown", handleOutsideClick);

      return () => {
        document.removeEventListener("keydown", handleOutsideClick);
      };
    },
    [onCloseModal]
  );

  React.useEffect(
    (evt) => {
      const handleCloseOnClick = (evt) => {
        if (
          evt.target.classList.contains("modal") &&
          !evt.target.closest(".modal__container")
        ) {
          onCloseModal();
        }
      };

      window.addEventListener("click", handleCloseOnClick);

      return () => {
        window.removeEventListener("click", handleCloseOnClick);
      };
    },
    [onCloseModal]
  );

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
