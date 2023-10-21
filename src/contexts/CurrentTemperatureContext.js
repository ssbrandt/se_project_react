import React from "react";

const CurrentTemperatureContext = React.createContext({
  currentTemperatureUnit: "",
  handleToggleSwitch: () => {},
});

export { CurrentTemperatureContext };
