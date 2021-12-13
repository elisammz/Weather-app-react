import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  let [description, setDescription] = useState({ ready: false });

  function handleResponse(response) {
    setDescription({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "7b82360a89d434b6c2917003378b2c60";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;
    let url = apiUrl;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (description.ready) {
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
                    onChange={handleCityChange}
                  />{" "}
                  <div className="col">
                    <input
                      type="submit"
                      value="Search"
                      className="btn buttons"
                      id="search-button"
                      onChange={""}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="submit"
                      value="Current"
                      className="btn buttons"
                      id="current-button"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <WeatherInfo data={description} />

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
        <p className="footer">
          <a href="https://github.com/elisammz/sheCodesPlus-EM" target="blank">
            Open-source code
          </a>
          by Elisa Mendoza 👩🏽‍💻
        </p>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
