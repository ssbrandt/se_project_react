import React from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  title,
  name,
  children,
  buttonText = "Save",
  onCloseModal,
}) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__close"
          onClick={onCloseModal}
        ></button>
        <form className="modal__form form" name={`${name}-form`}>
          {children}
        </form>
        <button type="submit" className="form__submit">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
