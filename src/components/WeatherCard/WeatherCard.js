import React from "react";
import "./WeatherCard.css";
import weatherImage from "../../images/day-cloudy.svg";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ temperature }) {
  const { currentTemperatureUnit } = React.useContext(
    CurrentTemperatureUnitContext
  );
  return (
    <div className="weathercard">
      <p className="weathercard__temp">
        {temperature}°{currentTemperatureUnit}
      </p>
      <img src={weatherImage} alt="sunny" className="weathercard__image" />
    </div>
  );
}

export default WeatherCard;
