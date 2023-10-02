import React from "react";
import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  return (
    <div className="weathercard">
      <p className="weathercard__temp">
        {Math.round(weatherData.temperature)}°F
      </p>
    </div>
  );
}

export default WeatherCard;
