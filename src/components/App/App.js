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
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

//constants imports
import { location, APIKey } from "../../utils/constants";
import { getWeatherData, filterWeatherData } from "../../utils/WeatherAPI";

//api imports
import {
  getClothingItems,
  addClothingItem,
  deleteClothingItem,
} from "../../utils/api";

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

  const handleAddItem = ({ name, link, weather }) => {
    addClothingItem({ name, link, weather }).then((data) => {
      setClothingCards([
        { name, link, weather, _id: data["_id"] },
        ...clothingCards,
      ]).catch(console.error);
      handleCloseModal();
    });
  };

  const handleDelete = () => {
    deleteClothingItem(selectedCard["_id"]).then((id) => {
      const newClothingList = clothingCards
        .filter((card) => card["_id"] !== selectedCard["_id"])
        .catch(console.error);
      setClothingCards(newClothingList);
      handleCloseModal();
    });
  };

  React.useEffect(() => {
    getClothingItems()
      .then((clothingItems) => {
        setClothingCards(clothingItems);
      })
      .catch(console.error);
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
      <CurrentTemperatureUnitContext.Provider
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
              onCreateModal={handleCreateModal}
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
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
