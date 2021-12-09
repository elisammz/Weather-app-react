import React, { useState } from "react";
import axios from "axios";

import "./App.css";

export default function SearchEngine() {
  const [temperature, setTemperature] = useState(null);
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function UpdateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7b82360a89d434b6c2917003378b2c60&units=metric`;
    console.log(url);
    axios.get(url).then(showTemperature);
  }

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    console.log(Math.round(response.data.main.temp));
    setMessage(
      <ul>
        <li>
          Temperature: {Math.round(response.data.main.temp)}˚C in {city}
        </li>
        <li>Description: {response.data.weather[0].main}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {response.data.wind.speed}kmh</li>
        <div>
          <img
            alt=""
            src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
          />
        </div>
      </ul>
    );
  }

  if (temperature === null) {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a city"
            onChange={UpdateCity}
          ></input>
          <input type="submit" value="Search"></input>
        </form>
        <h1>Type a city!</h1>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a city"
            onChange={UpdateCity}
          ></input>
          <input type="submit" value="Search"></input>
        </form>
        {message}
      </div>
    );
  }
}
