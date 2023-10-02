import React from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  title,
  name,
  children,
  buttonText = "Save",
  onClose,
}) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
        ></button>
        <form className="modal__form form" name={`${name}-form`} novalidate>
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
