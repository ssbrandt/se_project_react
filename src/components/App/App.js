import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { location, APIKey } from "../../utils/constants";
import { getWeatherData, filterWeatherData } from "../../utils/WeatherAPI";
import { defaultClothingItems } from "../../utils/defaultClothingItems";

function App() {
  const [weatherdata, setWeatherData] = React.useState({});
  const [activeModal, setActiveModal] = React.useState("");
  const [selectedCard, setSelectedCard] = React.useState({});
  const [clothingCards, setClothingCards] = React.useState([]);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  React.useEffect(() => {
    setClothingCards(defaultClothingItems);
  }, []);

  React.useEffect(() => {
    if (location.latitude && location.latitude) {
      getWeatherData(location, APIKey)
        .then((data) => {
          setWeatherData(filterWeatherData(data));
        })
        .catch(console.error);
    }
  }, []);

  React.useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  React.useEffect(() => {
    if (!activeModal) return;

    const handleCloseOnClick = (evt) => {
      if (
        evt.target.classList.contains("modal") &&
        !evt.target.closest(".modal__container")
      ) {
        handleCloseModal();
      }
    };

    window.addEventListener("click", handleCloseOnClick);

    return () => {
      window.removeEventListener("click", handleCloseOnClick);
    };
  }, [activeModal]);

  return (
    <div className="App">
      <Header weatherData={weatherdata} onCreateModal={handleCreateModal} />
      <Main
        weatherData={weatherdata}
        cards={clothingCards}
        onSelectedCard={handleSelectedCard}
        onCloseModal={handleCloseModal}
      />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          title="New Garment"
          name="add-garment"
          buttonText="Add Garment"
          onCloseModal={handleCloseModal}
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
                />
                <label className="form__label-radio" htmlFor="cold">
                  Cold
                </label>
              </div>
            </div>
          </fieldset>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal onCloseModal={handleCloseModal} card={selectedCard} />
      )}
    </div>
  );
}

export default App;