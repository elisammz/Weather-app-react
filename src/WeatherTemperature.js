import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="current-temp" id="temperature">
          {Math.round(props.celsius)}
        </span>
        <a href="/" id="celsius" className="active">
          <sup>°C</sup>
        </a>
        <span className="current-temp" id="separator">
          <sup>|</sup>
        </span>
        <a href="/" id="fahrenheit" onClick={showFahrenheit}>
          <sup>°F</sup>
        </a>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="current-temp" id="temperature">
          {Math.round(fahrenheit)}
        </span>
        <a href="/" id="celsius" onClick={showCelsius}>
          <sup>°C</sup>
        </a>
        <span className="current-temp" id="separator">
          <sup>|</sup>
        </span>
        <a href="/" id="fahrenheit">
          <sup>°F</sup>
        </a>
      </span>
    );
  }
}
