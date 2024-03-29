import React from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  title,
  name,
  children,
  buttonText = "Save",
  onCloseModal,
  isOpen,
  onSubmit,
}) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button type="button" className="modal__close" onClick={onCloseModal} />
        <form
          className="modal__form form"
          name={`${name}-form`}
          onSubmit={onSubmit}
        >
          {children}
          <div className="form__submit-options">
            <button type="submit" className="form__submit">
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
