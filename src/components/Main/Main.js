import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherData, cards, onSelectedCard, onCloseModal }) {
  const { currentTemperatureUnit } = React.useContext(
    CurrentTemperatureUnitContext
  );

  let actualTemperature = 0;
  const setTemperature = () => {
    if (weatherData.temperature) {
      actualTemperature = weatherData.temperature[currentTemperatureUnit];
    } else {
      actualTemperature = 888;
    }
  };
  setTemperature();

  const weatherTypeF = () => {
    if (actualTemperature >= 86) {
      return "hot";
    } else if (actualTemperature >= 66 && actualTemperature <= 85) {
      return "warm";
    } else if (actualTemperature <= 65) {
      return "cold";
    }
  };

  const weatherTypeC = () => {
    if (actualTemperature >= 30) {
      return "hot";
    } else if (actualTemperature >= 19 && actualTemperature <= 30) {
      return "warm";
    } else if (actualTemperature <= 18) {
      return "cold";
    }
  };

  const weatherType = () => {
    return currentTemperatureUnit === "F" ? weatherTypeF() : weatherTypeC();
  };

  return (
    <main className="main">
      <WeatherCard temperature={actualTemperature} />
      <p className="main__weather-info">
        Today is {actualTemperature}°{currentTemperatureUnit} / You may want to
        wear:{" "}
      </p>
      <div>
        <ul className="main__cards">
          {cards
            .filter((card) => card.weather === weatherType())
            .map((item) => (
              <ItemCard
                key={item._id}
                card={item}
                onSelectedCard={onSelectedCard}
              />
            ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
