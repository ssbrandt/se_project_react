import { checkResponse } from "./api";

const getWeatherData = (location, APIKey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=imperial&appid=${APIKey}`
  ).then(checkResponse);
};

const filterWeatherData = (data) => {
  if (!data) {
    return null;
  }

  const weather = {};
  weather.city = data.name;
  weather.temperature = {};
  weather.temperature.F = Math.round(data.main.temp);
  weather.temperature.C = Math.round(((data.main.temp - 32) * 5) / 9);

  return weather;
};

export { getWeatherData, filterWeatherData };
