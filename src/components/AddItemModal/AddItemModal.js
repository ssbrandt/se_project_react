import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  const [name, setName] = React.useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [imageUrl, setImageUrl] = React.useState("");

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const [weather, setWeather] = React.useState("");

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  React.useEffect(() => {
    setName("");
    setImageUrl("");
    setWeather("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
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
          value={name}
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
          onChange={handleImageUrlChange}
          value={imageUrl}
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
              onChange={handleWeatherChange}
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
              onChange={handleWeatherChange}
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
              onChange={handleWeatherChange}
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
