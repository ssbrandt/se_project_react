import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { location, APIKey } from "../utils/constants";
import { getWeatherData, filterWeatherData } from "../utils/WeatherAPI";

function App() {
  const [weatherdata, setWeatherData] = React.useState({});
  const [activeModal, setActiveModal] = React.useState();

  React.useEffect(() => {
    if (location.latitude && location.latitude) {
      getWeatherData(location, APIKey)
        .then((data) => {
          setWeatherData(filterWeatherData(data));
        })
        .catch(console.error);
    }
  }, []);

  return (
    <div className="App">
      <Header weatherData={weatherdata} />
      <Main weatherData={weatherdata} />
      <Footer />
      <ModalWithForm title="test title" name="test">
        Children
      </ModalWithForm>
    </div>
  );
}

export default App;
