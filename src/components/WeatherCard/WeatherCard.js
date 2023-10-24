import React from "react";
import "./WeatherCard.css";
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
    </div>
  );
}

export default WeatherCard;
