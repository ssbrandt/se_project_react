import React from "react";
import "./Checkbox.css";

function Checkbox({ isOn, handleToggle }) {
  return (
    <div className="react-switch-container">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span className={`react-switch-button`} />
        <span className="react-switch-label-text">F</span>
        <span className="react-switch-label-text">C</span>
      </label>
    </div>
  );
}

export default Checkbox;
