import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
//component imports
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";

//context imports
import { CurrentTemperatureContext } from "../../contexts/CurrentTemperatureContext";

//constants imports
import { location, APIKey } from "../../utils/constants";
import { getWeatherData, filterWeatherData } from "../../utils/WeatherAPI";
import { defaultClothingItems } from "../../utils/defaultClothingItems";

function App() {
  const [weatherdata, setWeatherData] = React.useState({});
  const [activeModal, setActiveModal] = React.useState("");
  const [selectedCard, setSelectedCard] = React.useState({});
  const [clothingCards, setClothingCards] = React.useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] =
    React.useState("F");

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

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleAddItem = (values) => {
    setClothingCards([values, ...clothingCards]);
    handleCloseModal();
  };

  const handleDelete = () => {
    const newClothingList = clothingCards.filter(
      (card) => card["_id"] !== selectedCard["_id"]
    );
    setClothingCards(newClothingList);
    handleCloseModal();
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
      <CurrentTemperatureContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          weatherData={weatherdata}
          onCreateModal={handleCreateModal}
          onToggle={handleToggleSwitchChange}
        />
        <Switch>
          <Route exact path="/">
            <Main
              weatherData={weatherdata}
              cards={clothingCards}
              onSelectedCard={handleSelectedCard}
              onCloseModal={handleCloseModal}
            />
            <Footer />
          </Route>

          <Route path="/profile">
            <Profile
              cards={clothingCards}
              onSelectedCard={handleSelectedCard}
              onCloseModal={handleCloseModal}
            />
          </Route>
        </Switch>

        {activeModal === "create" && (
          <AddItemModal
            onCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={handleAddItem}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            onCloseModal={handleCloseModal}
            card={selectedCard}
            onDelete={handleDelete}
          />
        )}
      </CurrentTemperatureContext.Provider>
    </div>
  );
}

export default App;
