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
import SignUpModal from "../SignUpModal/SignUpModal";
import LogInModal from "../LogInModal/LogInModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

//context imports
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

//constants imports
import { location, APIKey } from "../../utils/constants";
import { getWeatherData, filterWeatherData } from "../../utils/WeatherAPI";

//api imports
import {
  getClothingItems,
  addClothingItem,
  deleteClothingItem,
  addCardLike,
  deleteCardLike,
} from "../../utils/api";

import {
  postLogIn,
  postSignUp,
  getUserInfo,
  editProfile,
} from "../../utils/auth";

function App() {
  const [weatherdata, setWeatherData] = React.useState({});
  const [activeModal, setActiveModal] = React.useState("");
  const [selectedCard, setSelectedCard] = React.useState({});
  const [clothingCards, setClothingCards] = React.useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] =
    React.useState("F");
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleSignUpModal = () => {
    setActiveModal("signUp");
  };

  const handleLogInModal = () => {
    setActiveModal("logIn");
  };

  const handleEditProfileModal = () => {
    setActiveModal("editProfile");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleLogin = (email, password) => {
    postLogIn({ email, password })
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          handleCloseModal();
          return res;
        } else {
          console.log("Error Logging In");
        }
      })
      .catch(console.error);
  };

  const handleSignUp = (email, password, name, avatar) => {
    postSignUp({ email, password, name, avatar })
      .then((res) => {
        setCurrentUser(res.data);
        handleCloseModal();
        handleLogin(email, password);
      })
      .catch(console.error);
  };

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setCurrentUser({});
    setClothingCards(clothingCards);
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

  const handleAddItem = ({ name, imageUrl, weather }) => {
    addClothingItem({ name, imageUrl, weather })
      .then((card) => {
        console.log(card.data);
        setClothingCards([card.data, ...clothingCards]);
        handleCloseModal();
      })
      .catch(console.error);
  };
  const handleDelete = () => {
    deleteClothingItem(selectedCard["_id"])
      .then((id) => {
        const newClothingList = clothingCards.filter(
          (card) => card["_id"] !== selectedCard["_id"]
        );
        setClothingCards(newClothingList);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleEditProfile = ({ name, avatar }) => {
    editProfile({ name, avatar })
      .then((userData) => {
        setCurrentUser(userData.user);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");

    !isLiked
      ? addCardLike(id, token)
          .then((updatedCard) => {
            setClothingCards((cards) =>
              cards.map((c) => (c._id === id ? updatedCard.data : c))
            );
          })
          .catch(console.error)
      : deleteCardLike(id, token)
          .then((updatedCard) => {
            setClothingCards((cards) =>
              cards.map((c) => (c._id === id ? updatedCard.data : c))
            );
          })
          .catch(console.error);
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

  React.useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      getUserInfo(token)
        .then((userData) => {
          setLoggedIn(true);
          setCurrentUser(userData.data);
        })
        .catch((error) => {
          console.error();
          setLoggedIn(false);
          setCurrentUser({});
          localStorage.removeItem("jwt");
        });
    } else {
      setLoggedIn(false);
      setCurrentUser({});
    }
  }, [loggedIn]);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            weatherData={weatherdata}
            onCreateModal={handleCreateModal}
            onSignUpModal={handleSignUpModal}
            onLogInModal={handleLogInModal}
            onToggle={handleToggleSwitchChange}
            loggedIn={loggedIn}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weatherData={weatherdata}
                cards={clothingCards}
                onSelectedCard={handleSelectedCard}
                onCloseModal={handleCloseModal}
                onCardLike={handleCardLike}
                loggedIn={loggedIn}
              />
              <Footer />
            </Route>

            <ProtectedRoute path="/profile" loggedIn={loggedIn}>
              <Profile
                cards={clothingCards}
                onSelectedCard={handleSelectedCard}
                onCloseModal={handleCloseModal}
                onCreateModal={handleCreateModal}
                onEditProfileModal={handleEditProfileModal}
                onEditProfile={handleEditProfile}
                onLogOut={handleLogOut}
                onCardLike={handleCardLike}
                loggedIn={loggedIn}
              />
            </ProtectedRoute>
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
          {activeModal === "signUp" && (
            <SignUpModal
              onCloseModal={handleCloseModal}
              isOpen={activeModal === "signUp"}
              onSignUp={handleSignUp}
              onLogIn={handleLogin}
              onLogInRedirect={handleLogInModal}
            />
          )}
          {activeModal === "logIn" && (
            <LogInModal
              onCloseModal={handleCloseModal}
              isOpen={activeModal === "logIn"}
              onLogIn={handleLogin}
              onSignUpRedirect={handleSignUpModal}
            />
          )}
          {activeModal === "editProfile" && (
            <EditProfileModal
              onCloseModal={handleCloseModal}
              isOpen={activeModal === "editProfile"}
              onEditProfile={handleEditProfile}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
