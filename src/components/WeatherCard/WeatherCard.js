import React from "react";
import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  return (
    <div className="weathercard">
      <p className="weathercard__temp">{weatherData}</p>
    </div>
  );
}

export default WeatherCard;
