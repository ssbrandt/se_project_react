const weatherOptions = [
  {
    link: require("../images/day/day-sunny.svg").default,
    day: true,
    weatherType: "sunny",
  },
  {
    link: require("../images/day/day-cloudy.svg").default,
    day: true,
    weatherType: "cloudy",
  },
  {
    link: require("../images/day/day-fog.svg").default,
    day: true,
    weatherType: "fog",
  },
  {
    link: require("../images/day/day-rain.svg").default,
    day: true,
    weatherType: "rain",
  },
  {
    link: require("../images/day/day-snow.svg").default,
    day: true,
    weatherType: "snow",
  },
  {
    link: require("../images/day/day-storm.svg").default,
    day: true,
    weatherType: "storm",
  },
  {
    link: require("../images/night/night-clear.svg").default,
    day: false,
    weatherType: "clear",
  },
  {
    link: require("../images/night/night-cloudy.svg").default,
    day: false,
    weatherType: "cloudy",
  },
  {
    link: require("../images/night/night-fog.svg").default,
    day: false,
    weatherType: "fog",
  },
  {
    link: require("../images/night/night-rain.svg").default,
    day: false,
    weatherType: "rain",
  },
  {
    link: require("../images/night/night-snow.svg").default,
    day: false,
    weatherType: "snow",
  },
  {
    link: require("../images/night/night-storm.svg").default,
    day: false,
    weatherType: "storm",
  },
];

const location = { latitude: 41.825226, longitude: -71.418884 };

const APIKey = "f0d9362414d6e2bada18d7816f23464a";

export { location, APIKey, weatherOptions };
