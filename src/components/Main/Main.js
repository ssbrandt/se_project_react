import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

function Main({ weatherData, cards, onSelectedCard, onCloseModal }) {
  const actualTemperature = weatherData.temperature;

  const weatherType = () => {
    if (actualTemperature >= 86) {
      return "hot";
    } else if (actualTemperature >= 66 && actualTemperature <= 85) {
      return "warm";
    } else if (actualTemperature <= 65) {
      return "cold";
    }
  };

  return (
    <>
      <div className="main">
        <WeatherCard weatherData={weatherData} />
        <p className="main__weather-info">
          Today is {Math.round(weatherData.temperature)}°F / You may want to
          wear:{" "}
        </p>
        <div>
          <ul className="main__cards">
            {cards
              .filter((card) => card.weather === weatherType())
              .map((item) => (
                <ItemCard
                  card={item}
                  onSelectedCard={onSelectedCard}
                  onCloseModal={onCloseModal}
                />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Main;
