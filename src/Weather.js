import React, { useState } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function Weather() {
  let [city, setCity] = useState("Tokyo");
  const [temperature, setTemperature] = useState();
  let [description, setDescription] = useState("");
  let cityName = city;

  function showTemperature(response) {
    setTemperature(true);
    setTemperature(Math.round(response.data.main.temp));

    setDescription(
      <ul className="description">
        <li>Temperature: {Math.round(response.data.main.temp)}˚C</li>
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

  function UpdateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7b82360a89d434b6c2917003378b2c60&units=metric`;
    console.log(url);
    axios.get(url).then(showTemperature);
  }

  return (
    <div className="App ">
      <div className="card">
        <div className="row">
          <form
            id="my-input"
            autoComplete="off"
            className="mb-3"
            onSubmit={handleSubmit}
          >
            <div className="col-6">
              <div className="row">
                <input
                  type="search"
                  placeholder="Enter a city"
                  id="city"
                  className="form-control "
                  onChange={UpdateCity}
                />{" "}
                <div className="col">
                  <button id="search-button">
                    <a href="/" className="buttons" onChange={UpdateCity}>
                      Search
                    </a>
                  </button>
                </div>
                <div className="col">
                  <button className=" " id="current-button">
                    <a href="/" className="buttons">
                      Current
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <h5 className="card-title" id="title-city">
          {cityName}
        </h5>

        <div className="current-date">Today</div>
        <h6 id="current-date">Mon 29 Nov</h6>
        <br />

        <div className="row">
          <div className="col-5">
            <br />
            <i id="icon" className="far fa-sun current-icon "></i>
            <div>
              <span className="current-temp" id="temperature">
                {temperature}
              </span>
              <a href="/" id="celsius" className="active">
                <sup>°C</sup>{" "}
              </a>
              <span className="current-temp" id="separator">
                {" "}
                <sup>|</sup>{" "}
              </span>
              <a href="/" id="fahrenheit">
                <sup>°F</sup>
              </a>
            </div>
            <div className="description" id="description"></div>
          </div>

          <div className="col-6" id="forecast">
            {description}
          </div>
        </div>

        <hr />
        <div className="card card-end">
          <span className="most-searched">Learn about climate crisis</span>
          <div>
            <a
              href="https://www.bbc.com/news/science-environment-56837908"
              target="blank"
              className="card-link most-cities"
            >
              Latest news from BBC
            </a>
            <a
              href="https://edition.cnn.com/specials/world/cnn-climate"
              target="blank"
              className="card-link most-cities"
            >
              Latest news from CNN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
