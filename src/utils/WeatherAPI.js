const getWeatherData = (location, APIKey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=imperial&appid=${APIKey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

const filterWeatherData = (data) => {
  if (!data) {
    return null;
  }

  const weather = {};
  weather.city = data.name;
  weather.temperature = data.main.temp;
  return weather;
};

export { getWeatherData, filterWeatherData };
