import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  const [name, setName] = React.useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [url, setURL] = React.useState("");

  const handleURLChange = (e) => {
    setURL(e.target.value);
  };

  const [weatherType, setWeatherType] = React.useState("");

  const handleWeatherTypeChange = (e) => {
    setWeatherType(e.target.value);
  };

  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened

  React.useEffect(() => {
    setName("");
    setURL("");
    setWeatherType("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ name, url, weatherType });
  }

  return (
    <ModalWithForm
      title="New Garment"
      name="add-garment"
      buttonText="Add Garment"
      onCloseModal={onCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__fieldset">
        <label className="form__label" htmlFor="garment-name">
          Name
        </label>
        <input
          className="form__input-text"
          type="text"
          id="garment-name"
          name="garment-name"
          placeholder="Name"
          required
          onChange={handleNameChange}
        ></input>
        <label className="form__label" htmlFor="image-url">
          Image URL
        </label>
        <input
          className="form__input-text"
          type="url"
          id="image-url"
          name="image-url"
          placeholder="Image URL"
          required
          onChange={handleURLChange}
        ></input>
        <div className="form__radio-buttons">
          <legend className="form__legend">Select the weather type:</legend>
          <div className="form__radio-container">
            <input
              className="form__input-radio"
              type="radio"
              id="hot"
              name="weather-type"
              value="hot"
              onChange={handleWeatherTypeChange}
            />
            <label className="form__label-radio" htmlFor="hot">
              Hot
            </label>
          </div>
          <div className="form__radio-container">
            <input
              className="form__input-radio"
              type="radio"
              id="warm"
              name="weather-type"
              value="warm"
              onChange={handleWeatherTypeChange}
            />
            <label className="form__label-radio" htmlFor="warm">
              Warm
            </label>
          </div>
          <div className="form__radio-container">
            <input
              className="form__input-radio"
              type="radio"
              id="cold"
              name="weather-type"
              value="cold"
              onChange={handleWeatherTypeChange}
            />
            <label className="form__label-radio" htmlFor="cold">
              Cold
            </label>
          </div>
        </div>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
